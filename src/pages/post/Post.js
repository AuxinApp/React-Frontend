import "./Post.css";
import React from "react";
import PostForm from  "../../components/PostForm/PostForm"
import {H2} from 'baseui/typography'
function Post() {

  return (
    <div className="form-container">
      <H2>Post your content</H2>
      <PostForm/>
    </div>
  );
}

export default Post;
