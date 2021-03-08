import React, { Component } from "react";
import Player from "./player.jsx";
import { isAudio, readBlobURL, download, rename } from "./utils.jsx";
import { sliceAudioBuffer } from "./audio-helper";
import { encode } from "./worker-client";
import WebAudio from "./webaudio";
import PropTypes from "prop-types";
import { Button } from "baseui/button";
import { Card, StyledBody, StyledAction } from "baseui/card";

import "./SnippingPage.css";

class PlayerWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: this.props.file,
      decoding: this.props.decoding,
      audioBuffer: this.props.audioBuffer,
      paused: this.props.paused,
      startTime: this.props.startTime,
      endTime: this.props.endTime,
      currentTime: this.props.currentTime,
      processing: this.props.processing,
      item: this.props.item
    };
  }
  static propTypes = {
    file: PropTypes.any,
    decoding: PropTypes.any,
    audioBuffer: PropTypes.instanceOf(AudioBuffer),
    paused: PropTypes.bool,
    startTime: PropTypes.number,
    endTme: PropTypes.number,
    CurrentTime: PropTypes.number,
    processing: PropTypes.bool,
    item: PropTypes.any
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
      paused: false,
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

  handlePlayPauseClick = () => {
    this.setState({
      paused: !this.state.paused
    });
  };

  handleReplayClick = () => {
    this.setState({
      currentTime: this.state.startTime
    });
  };

  deleteSavedClip = item => {
    this.setState({
      savedClips: this.state.savedClips.filter(clip => clip !== item)
    });
  };

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
      <Card
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              backgroundColor: $theme.colors.backgroundSecondary,
              marginBottom: "32px"
            })
          }
        }}
        title={"Audio Clip " + this.props.index}
      >
        <StyledBody>
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
            containerHeight={80}
            containerWidth={308}
            smallVersion={true}
            ref={this.setRef}
          />

          <p>
            {"Start Time: " +
              Math.round(this.state.startTime * 100) / 100 +
              " seconds"}
            <br />
            {"End Time: " +
              Math.round(this.state.endTime * 100) / 100 +
              " seconds"}
          </p>
        </StyledBody>
        <StyledAction>
          <Button
            overrides={{
              BaseButton: { style: { width: "100%", marginBottom: "16px  " } }
            }}
            onClick={() => {
              this.handlePlayPauseClick(0);
            }}
          >
            Play/Pause
          </Button>
          <Button
            overrides={{
              BaseButton: { style: { width: "100%" } }
            }}
            onClick={() => {
              this.props.onDelete(this.state.item);
            }}
          >
            Delete
          </Button>
        </StyledAction>
      </Card>
    );
  }
}

export default PlayerWrapper;
