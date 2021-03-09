import React, { Component } from "react";
import Player from "./player.jsx";
import PlayerWrapper from "./PlayerWrapper";
import FilePicker from "./file.jsx";
import { isAudio, readBlobURL, download, rename } from "./utils.jsx";
import { sliceAudioBuffer } from "./audio-helper";
import { encode } from "./worker-client";
import WebAudio from "./webaudio";
import { ButtonGroup } from "baseui/button-group";
import { Button, KIND } from "baseui/button";
import { Link } from "react-router-dom";
import MyVerticallyCenteredModal from "../ModalPage/MyVerticallyCenteredModal";
import { H2 } from "baseui/typography";

import sound_file from "../../media/courage.mp3";

import "./SnippingPage.css";
import PostForm from "./../../components/PostForm/PostForm";

class SnippingPage extends Component {
  constructor() {
    super();
    this.handler = this.handler.bind(this);
    this.state = {
      file: null,
      // FIXME: setting this to true for demo purposes only
      decoding: true,
      audioBuffer: null,
      paused: true,
      startTime: 0,
      endTime: Infinity,
      currentTime: 0,
      processing: false,
      savedClips: [],
      modalShow: false
    };

    // FIXME: for demo purposes only
    this.handlePreloadedAudioFile(sound_file);
  }

  setModal = modalState => {
    this.setState({ modalShow: modalState });
  };

  playerRefs = [];

  setRef = ref => {
    this.playerRefs.push(ref);
  };

  // FIXME: for demo purposes only
  handlePreloadedAudioFile = async file_path => {
    let sound_blob = await fetch(sound_file).then(r => r.blob());
    this.handleFileChange(sound_blob);
  };

  handleFileChange = async file => {
    if (!isAudio(file)) {
      return alert("Invalid file format.");
    }

    this.setState({
      file,
      paused: true,
      decoding: true,
      audioBuffer: null
    });

    const audioBuffer = await WebAudio.decode(file);

    window.audioBuffer = audioBuffer;

    this.setState({
      // setting this to true so no auto playback after audio is loaded
      paused: true,
      decoding: false,
      audioBuffer,
      startTime: 0,
      currentTime: 0,
      endTime: audioBuffer.duration / 2
    });
  };

  handleStartTimeChange = time => {
    this.setState({
      startTime: time
    });
  };

  handleEndTimeChange = time => {
    this.setState({
      endTime: time
    });
  };

  handleCurrentTimeChange = time => {
    this.setState({
      currentTime: time
    });
  };

  handlePlayPauseClick = id => {
    this.setState({
      paused: !this.state.paused
    });
  };

  handlePlayerPlay = () => {};

  handleReplayClick = () => {
    this.setState({
      currentTime: this.state.startTime
    });
  };

  handleSaveClip = () => {
    const { startTime, endTime } = this.state;
    const newClip = { startTime, endTime };

    this.setState(
      {
        savedClips: [...this.state.savedClips, newClip]
      },
      this.addClips
    );
  };

  handler(item) {
    this.setState({
      savedClips: this.state.savedClips.filter(clip => clip !== item)
    });
  }

  get startByte() {
    return parseInt(
      (this.audioBuffer.length * this.state.start) /
        this.widthDurationRatio /
        this.duration,
      10
    );
  }

  get endByte() {
    return parseInt(
      (this.audioBuffer.length * this.state.end) /
        this.widthDurationRatio /
        this.duration,
      10
    );
  }

  handleEncode = e => {
    const type = e.currentTarget.dataset.type;
    const { startTime, endTime, audioBuffer } = this.state;
    const { length, duration } = audioBuffer;

    const audioSliced = sliceAudioBuffer(
      audioBuffer,
      ~~((length * startTime) / duration),
      ~~((length * endTime) / duration)
    );

    this.setState({
      processing: true
    });

    encode(audioSliced, type)
      .then(readBlobURL)
      .then(url => {
        download(url, rename(this.state.file.name, type));
      })
      .catch(e => console.error(e))
      .then(() => {
        this.setState({
          processing: false
        });
      });
  };

  displaySeconds(seconds) {
    return seconds.toFixed(2) + "s";
  }

  render() {
    const { state } = this;

    return (
      <div className="studio-container">
        {this.state.audioBuffer || this.state.decoding ? (
          <div>
            <H2>Creator Studio</H2>
            {this.state.decoding ? (
              <div className="player player-landing">DECODING...</div>
            ) : (
              <Player
                audioBuffer={this.state.audioBuffer}
                paused={this.state.paused}
                startTime={this.state.startTime}
                endTime={this.state.endTime}
                currentTime={this.state.currentTime}
                onStartTimeChange={this.handleStartTimeChange}
                onEndTimeChange={this.handleEndTimeChange}
                onCurrentTimeChange={this.handleCurrentTimeChange}
                onSetPaused={() => {
                  this.handlePlayPauseClick(0);
                }}
                containerHeight={160}
                containerWidth={940}
                smallVersion={false}
                ref={this.setRef}
              />
            )}

            <div className="controllers">
              <ButtonGroup>
                <Button
                  overrides={{
                    BaseButton: {
                      style: ({ $theme }) => ({
                        boxShadow: $theme.lighting.shadow600,

                        ":hover": {
                          transform: "translate3d(0, -2px, 0)",
                          boxShadow: "0 8px 24px hsla(0, 0%, 0%, .65)",
                          filter: "brightness(95%)"
                        }
                      })
                    }
                  }}
                >
                  <FilePicker onChange={this.handleFileChange}>
                    Upload
                  </FilePicker>
                </Button>
                <Button
                  onClick={() => {
                    this.handlePlayPauseClick(0);
                  }}
                  overrides={{
                    BaseButton: {
                      style: ({ $theme }) => ({
                        boxShadow: $theme.lighting.shadow600,

                        ":hover": {
                          transform: "translate3d(0, -2px, 0)",
                          boxShadow: "0 8px 24px hsla(0, 0%, 0%, .65)",
                          filter: "brightness(95%)"
                        }
                      })
                    }
                  }}
                >
                  Play/Pause
                </Button>
                <Button
                  overrides={{
                    BaseButton: {
                      style: ({ $theme }) => ({
                        boxShadow: $theme.lighting.shadow600,

                        ":hover": {
                          transform: "translate3d(0, -2px, 0)",
                          boxShadow: "0 8px 24px hsla(0, 0%, 0%, .65)",
                          filter: "brightness(95%)"
                        }
                      })
                    }
                  }}
                  onClick={this.handleReplayClick}
                >
                  Replay
                </Button>
                <Button
                  overrides={{
                    BaseButton: {
                      style: ({ $theme }) => ({
                        boxShadow: $theme.lighting.shadow600,

                        ":hover": {
                          transform: "translate3d(0, -2px, 0)",
                          boxShadow: "0 8px 24px hsla(0, 0%, 0%, .65)",
                          filter: "brightness(95%)"
                        }
                      })
                    }
                  }}
                >
                  <div className="dropdown list-wrap">
                    Download
                    {!this.state.processing && (
                      <ul className="list">
                        <li>
                          <a onClick={this.handleEncode} data-type="wav">
                            Wav
                          </a>
                        </li>
                        <li>
                          <a onClick={this.handleEncode} data-type="mp3">
                            MP3
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                </Button>
              </ButtonGroup>

              {isFinite(this.state.endTime) && (
                <span className="seconds">
                  Select{" "}
                  <span className="seconds-range">
                    {this.displaySeconds(state.endTime - state.startTime)}
                  </span>{" "}
                  of{" "}
                  <span className="seconds-total">
                    {this.displaySeconds(state.audioBuffer.duration)}
                  </span>{" "}
                  (from{" "}
                  <span className="seconds-start">
                    {this.displaySeconds(state.startTime)}
                  </span>{" "}
                  to{" "}
                  <span className="seconds-end">
                    {this.displaySeconds(state.endTime)}
                  </span>
                  )
                </span>
              )}
            </div>
            <div className="controllers">
              <Button
                kind={KIND.secondary}
                overrides={{
                  BaseButton: {
                    style: ({ $theme }) => ({
                      boxShadow: $theme.lighting.shadow600,

                      ":hover": {
                        transform: "translate3d(0, -2px, 0)",
                        boxShadow: "0 8px 24px hsla(0, 0%, 0%, .65)",
                        filter: "brightness(95%)"
                      }
                    })
                  }
                }}
                onClick={this.handleSaveClip}
              >
                Save clip
              </Button>
              <div className="lastButton">
                <Link classNameto="/post">
                  <Button
                    kind={KIND.primary}
                    overrides={{
                      BaseButton: {
                        style: ({ $theme }) => ({
                          color: $theme.colors.contentOnColorInverse,
                          backgroundColor: "#A4FDD2",
                          boxShadow: $theme.lighting.shadow600,

                          ":hover": {
                            transform: "translate3d(0, -2px, 0)",
                            boxShadow: "0 8px 24px hsla(0, 0%, 0%, .65)",
                            backgroundColor: "#A4FDD2",
                            filter: "brightness(95%)"
                          }
                        })
                      }
                    }}
                    onClick={() => this.setModal(true)}
                  >
                    Publish
                  </Button>
                  <MyVerticallyCenteredModal
                    onClose={() => this.setModal(false)}
                    isOpen={this.state.modalShow}
                    headerText={"Post your Content"}
                    unstable_ModalBackdropScroll
                  >
                    {<PostForm />}
                  </MyVerticallyCenteredModal>
                </Link>
              </div>
            </div>
            <div className="savedContainer">
              {this.state.savedClips &&
                this.state.savedClips.map((item, index) => (
                  <PlayerWrapper
                    file={this.state.file}
                    decoding={this.state.decoding}
                    audioBuffer={this.state.audioBuffer}
                    paused={this.state.paused}
                    startTime={item.startTime}
                    endTime={item.endTime}
                    currentTime={item.startTime}
                    processing={this.state.processing}
                    ref={this.setRef}
                    onDelete={this.handler}
                    item={item}
                    index={index + 1}
                  />
                ))}
            </div>
          </div>
        ) : (
          <div className="landing">
            <h2>Create clips</h2>
            <FilePicker onChange={this.handleFileChange}>
              <div className="file-main">Select music file</div>
            </FilePicker>
          </div>
        )}
      </div>
    );
  }
}

export default SnippingPage;
