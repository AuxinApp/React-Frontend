import "./Post.css";
import React from "react";
import PostForm from  "../../components/PostForm/PostForm"
import {H2} from 'baseui/typography'
function Post() {
  const [showNotification, setShowNotification] = React.useState(false);
  const [selectvalue, setSelectValue] = React.useState([]);
  const [textAreaValue, setTextAreaValue] = React.useState("dsadsa");
  const [checkboxes, setCheckboxes] = React.useState([
    false,
    false,
    false,
    false
  ]);

  return (
    <div className="form-container">
      <H2>Post your content</H2>
      <PostForm/>
    </div>
  );
}

export default Post;
