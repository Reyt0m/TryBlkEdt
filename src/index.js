import ReactDOM from "react-dom";
import React, { Component, useRef, useCallback } from "react";

import { createReactEditorJS } from "react-editor-js";

import { EDITOR_JS_TOOLS } from "./constants";
import DragDrop from "editorjs-drag-drop";
import ReactEditors from "./Editorjs";

import App from "./App";
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
