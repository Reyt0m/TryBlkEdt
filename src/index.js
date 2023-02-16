import ReactDOM from "react-dom";
import React from "react";
import ReactEditors from "./Editorjs";

// import App from "./App";
import NewPost from "./NewPost";
import AllPosts from "./AllPosts";


ReactDOM.render(
  <div>
    <p> text</p>
    <ReactEditors />
    <NewPost />
    <AllPosts />
  </div>,
  document.getElementById("app")
);
