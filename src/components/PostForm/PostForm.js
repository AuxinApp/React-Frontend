import React, { useState } from "react";
import { Notification } from "baseui/notification";
import { Select } from "baseui/select";
import { FormControl } from "baseui/form-control";
import { Textarea } from "baseui/textarea";
import { Checkbox } from "baseui/checkbox";
import { Button } from "baseui/button";
import { useStyletron } from "baseui";
import { DatePicker } from "baseui/datepicker";
import { TimePicker } from "baseui/timepicker";
import { FileUploader } from "baseui/file-uploader";
import { Skeleton } from "baseui/skeleton";
import { Card, StyledBody, StyledAction } from "baseui/card";
import podcastLogo from "../../media/nimbleIdeas.jpeg";

import "./PostForm.css";
import { Paragraph2 } from "baseui/typography";

const DATE = new Date(2021, 3, 9, 12, 0, 0);

function PostForm() {
  const [showNotification, setShowNotification] = React.useState(false);
  const [selectvalue, setSelectValue] = React.useState([]);
  const [selectImgValue, setSelectImgValue] = React.useState([]);
  const [loadingClip, setLoadingClip] = React.useState(false);
  const [loadingImg, setLoadingImg] = React.useState(false);

  const [textAreaValue, setTextAreaValue] = React.useState("Post Caption");
  const [checkboxes, setCheckboxes] = React.useState([
    false,
    false,
    false,
    false
  ]);
  const [css, theme] = useStyletron();
  const [date, setDate] = useState(DATE);

  const handleUpload = () => {
   
    if (selectvalue.length > 0 && !loadingClip) {
      setTimeout(() => {
        setLoadingClip(true);
      }, 2000);
      return (
        <Skeleton
          width="100%"
          height="100%"
          animation
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                marginTop: $theme.sizing.scale800
              })
            }
          }}
        ></Skeleton>
      );
    }

    if (selectvalue.length > 0 && loadingClip) {
      return (
        <Card
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                borderColor: "transparent",
                backgroundColor: $theme.colors.backgroundSecondary,
                boxShadow: $theme.lighting.shadow600,
                marginTop: $theme.sizing.scale800
              })
            }
          }}
        >
          <StyledBody>
            <Paragraph2>
              From Nimble Ideas EP.4
              <br />
              <br />
              {selectvalue[0].label}
              <br></br>
              Duration: 59 secs
            </Paragraph2>
          </StyledBody>
          <StyledAction>
            <Button overrides={{ BaseButton: { style: { width: "100%" } } }}>
              Play/Pause
            </Button>
          </StyledAction>
        </Card>
      );
    }

    return (
      <FileUploader
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              paddingTop: $theme.sizing.scale800
            })
          }
        }}
      />
    );
  };

  const handleImageUpload = () => {
    if (selectImgValue.length > 0 && !loadingImg) {
      setTimeout(() => {
        setLoadingImg(true);
      }, 1000);
      return (
        <Skeleton
          width="100%"
          height="100%"
          animation
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                marginTop: $theme.sizing.scale800
              })
            }
          }}
        ></Skeleton>
      );
    }

    if (selectImgValue.length > 0 && loadingImg) {
      return (
        /*  <Card
         overrides={{
          Root: {
            style: ({ $theme }) => ({
              borderColor: "transparent",
              boxShadow: $theme.lighting.shadow600,
              marginTop:$theme.sizing.scale800,
            })
          },
          Contents: {
            style: ({ $theme }) => ({
             height: '0px',
             marginBottom: '0px'
            })
          }
        }}
         headerImage={podcastLogo}>
         </Card> */
        <div className="image-wrapper">
          <img src={podcastLogo} className="image-scale"></img>
        </div>
      );
    }

    return (
      <FileUploader
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              paddingTop: $theme.sizing.scale800
            })
          }
        }}
      />
    );
  };

  return (
    <div>
      {showNotification && (
        <Notification onClose={() => setShowNotification(false)} closeable>
          {() => "You successfully posted your content."}
        </Notification>
      )}
      <div className="content-container">
        <div>
          <FormControl
            label={() => "Choose a clip"}
            overrides={{
              Label: {
                style: ({ $theme }) => ({
                  fontSize: $theme.typography.LabelMedium.fontSize,
                  marginTop: "0px"
                })
              },
              Caption: {
                style: ({ $theme }) => ({
                  fontSize: $theme.typography.LabelSmall.fontSize
                })
              }
            }}
          >
            <Select
              options={[
                { label: "Audio Clip 1", id: "Audio Clip 1" },
                { label: "Audio Clip 2", id: "Audio Clip 2" },
                { label: "Audio Clip 3", id: "Audio Clip 3" }
              ]}
              value={selectvalue}
              placeholder="Select clip from studio"
              onChange={params => setSelectValue(params.value)}
            />
          </FormControl>
        </div>
        {handleUpload()}
      </div>
      <div className="content-container">
        <div>
          <FormControl
            label={() => "Choose an image"}
            overrides={{
              Label: {
                style: ({ $theme }) => ({
                  fontSize: $theme.typography.LabelMedium.fontSize,
                  marginTop: "0px"
                })
              },
              Caption: {
                style: ({ $theme }) => ({
                  fontSize: $theme.typography.LabelSmall.fontSize
                })
              }
            }}
          >
            <Select
              options={[
                { label: "Nimble Ideas Logo", id: "Nimble Ideas Logo" }
              ]}
              value={selectImgValue}
              placeholder="Select from studio"
              onChange={params => setSelectImgValue(params.value)}
            />
          </FormControl>
        </div>
        {handleImageUpload()}
      </div>
      <FormControl
        label={() => "Your post caption"}
        caption={() => "Max 500 characters if posting to Twitter"}
        overrides={{
          Label: {
            style: ({ $theme }) => ({
              fontSize: $theme.typography.LabelMedium.fontSize,
              marginTop: $theme.sizing.scale1000
            })
          },
          Caption: {
            style: ({ $theme }) => ({
              fontSize: $theme.typography.LabelSmall.fontSize,
              marginBottom: $theme.sizing.scale1000
            })
          }
        }}
      >
        <Textarea
          value={textAreaValue}
          onChange={e => setTextAreaValue(e.target.value)}
          placeholder="Controlled Input"
          clearOnEscape
        />
      </FormControl>
      <div className="toggle-wrapper">
        <Checkbox
          checked={checkboxes[0]}
          onChange={e => {
            setCheckboxes([
              e.target.checked,
              checkboxes[1],
              checkboxes[2],
              checkboxes[3]
            ]);
          }}
          overrides={{
            Root: {
              style: ({ $theme }) => ({})
            }
          }}
        >
          Facebook
        </Checkbox>
        <Checkbox
          checked={checkboxes[1]}
          onChange={e => {
            setCheckboxes([
              checkboxes[0],
              e.target.checked,
              checkboxes[2],
              checkboxes[3]
            ]);
          }}
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                marginTop: $theme.sizing.scale400
              })
            }
          }}
        >
          Instagram{" "}
        </Checkbox>
        <Checkbox
          checked={checkboxes[2]}
          onChange={e => {
            setCheckboxes([
              checkboxes[0],
              checkboxes[1],
              e.target.checked,
              checkboxes[3]
            ]);
          }}
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                marginTop: $theme.sizing.scale400
              })
            }
          }}
        >
          Twitter{" "}
        </Checkbox>
        <Checkbox
          checked={checkboxes[3]}
          onChange={e => {
            setCheckboxes([
              checkboxes[0],
              checkboxes[1],
              checkboxes[2],
              e.target.checked
            ]);
          }}
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                marginTop: $theme.sizing.scale400
              })
            }
          }}
        >
          Linkedin{" "}
        </Checkbox>
        <div className={"date-wrapper"}>
          <div className={"date-item"}>
            <FormControl
              label="Date"
              caption="YYYY/MM/DD"
              overrides={{
                Label: {
                  style: ({ $theme }) => ({
                    fontSize: $theme.typography.LabelMedium.fontSize,
                    marginTop: "0px"
                  })
                },
                Caption: {
                  style: ({ $theme }) => ({
                    fontSize: $theme.typography.LabelSmall.fontSize
                  })
                }
              }}
            >
              <DatePicker
                value={date}
                onChange={({ date }) => setDate(date)}
                timeSelectStart
              />
            </FormControl>
          </div>

          <div>
            <FormControl
              label="Time"
              caption="HH:MM"
              overrides={{
                Label: {
                  style: ({ $theme }) => ({
                    fontSize: $theme.typography.LabelMedium.fontSize,
                    marginTop: "0px"
                  })
                },
                Caption: {
                  style: ({ $theme }) => ({
                    fontSize: $theme.typography.LabelSmall.fontSize
                  })
                }
              }}
            >
              <TimePicker value={date} onChange={setDate} creatable />
            </FormControl>
          </div>
        </div>
      </div>
      <div className='button-container'>
      <Button
        onClick={() => setShowNotification(true)}
        overrides={{
          BaseButton: {
            style: ({ $theme }) => ({
              marginTop: $theme.sizing.scale800,
              marginBottom: $theme.sizing.scale600,
              backgroundColor: "#85d6af",
              boxShadow: $theme.lighting.shadow600,
              ":hover": {
                transform: "translate3d(0, -2px, 0)",
                boxShadow: "0 8px 24px hsla(0, 0%, 0%, .65)",
                backgroundColor: "#85d6af",
                filter: "brightness(95%)"
              }
            })
          }
        }}
      >
        Schedule Post
      </Button>
      <Button
        onClick={() => setShowNotification(true)}
        overrides={{
          BaseButton: {
            style: ({ $theme }) => ({
              marginTop: $theme.sizing.scale800,
              marginBottom: $theme.sizing.scale600,
              marginLeft: $theme.sizing.scale300,
              backgroundColor: "#85d6af",
              boxShadow: $theme.lighting.shadow600,
              ":hover": {
                transform: "translate3d(0, -2px, 0)",
                boxShadow: "0 8px 24px hsla(0, 0%, 0%, .65)",
                backgroundColor: "#85d6af",
                filter: "brightness(95%)"
              }
            })
          }
        }}
      >
        Post Now
      </Button>
    </div>
    </div>
  );
}

export default PostForm;
