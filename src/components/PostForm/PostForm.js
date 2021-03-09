import React from "react";
import { Notification } from "baseui/notification";
import { Select } from "baseui/select";
import { FormControl } from "baseui/form-control";
import { Textarea } from "baseui/textarea";
import { Checkbox } from "baseui/checkbox";
import { Button } from "baseui/button";

function PostForm() {
  const [showNotification, setShowNotification] = React.useState(false);
  const [selectvalue, setSelectValue] = React.useState([]);
  const [textAreaValue, setTextAreaValue] = React.useState("Post Caption");
  const [checkboxes, setCheckboxes] = React.useState([
    false,
    false,
    false,
    false
  ]);

  return (
    <div>
      {showNotification && (
        <Notification onClose={() => setShowNotification(false)} closeable>
          {() => "You successfully posted your content."}
        </Notification>
      )}
      <FormControl
        label={() => "Choose from your workspace"}
        overrides={{
          Label: {
            style: ({ $theme }) => ({
              fontSize: $theme.typography.LabelMedium.fontSize,
              marginTop: $theme.sizing.scale1000
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
          placeholder="Select clip"
          onChange={params => setSelectValue(params.value)}
        />
      </FormControl>
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
              marginTop: $theme.sizing.scale500
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
              marginTop: $theme.sizing.scale500
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
              marginTop: $theme.sizing.scale500,
              marginBottom: $theme.sizing.scale800
            })
          }
        }}
      >
        Linkedin{" "}
      </Checkbox>
      <Button
        onClick={() => setShowNotification(true)}
        overrides={{
          BaseButton: {
            style: ({ $theme }) => ({
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
        Post Content
      </Button>
    </div>
  );
}

export default PostForm;
