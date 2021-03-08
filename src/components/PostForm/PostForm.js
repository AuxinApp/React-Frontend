import React from "react";
import { Notification } from "baseui/notification";
import { Select } from "baseui/select";
import { FormControl } from "baseui/form-control";
import { Textarea } from "baseui/textarea";
import { Checkbox } from "baseui/checkbox";
import { Button, SIZE } from "baseui/button";

function PostForm() {
  const [showNotification, setShowNotification] = React.useState(false);
  const [selectvalue, setSelectValue] = React.useState([]);
  const [textAreaValue, setTextAreaValue] = React.useState("dsadsa");
  const [checkboxes, setCheckboxes] = React.useState([
    false,
    false,
    false,
    false
  ]);

/* 
  const handleCheckboxClick = (checkboxes) => {
    console.log('helllo')

    console.log(checkboxes)
    console.log('helllo')
    setCheckboxes(checkboxes);
  } */

  return (
    <div>
      {showNotification && (
        <Notification closeable>{() => "This is a notification."}</Notification>
      )}
      <FormControl
        label={() => "Choose from your workspace"}
        overrides={{
          Label: {
            style: ({ $theme }) => ({
              fontSize: $theme.typography.LabelMedium.fontSize
            })
          },
          Caption: {
            style: ({ $theme }) => ({
              fontSize: $theme.typography.LabelSmall.fontSize,
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
              fontSize: $theme.typography.LabelMedium.fontSize
            })
          },
          Caption: {
            style: ({ $theme }) => ({
              fontSize: $theme.typography.LabelSmall.fontSize,
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
              marginTop: $theme.sizing.scale400,
              marginBottom: $theme.sizing.scale400
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
              marginTop: $theme.sizing.scale600,
              marginBottom: $theme.sizing.scale600

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
