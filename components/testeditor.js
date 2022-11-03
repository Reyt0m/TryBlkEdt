import EditorJS from "react-editor-js";
// import EditorJS from '@editorjs/editorjs';
import Header from "@editorjs/header";
import CheckList from "@editorjs/checklist";
import code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
// import Image from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";

// import API from '../api/image' // Your server url

const CustomEditor = ({}) => {
  const tools = {
    header: Header,
    checklist: CheckList,
    code: code,
    delimiter: Delimiter,
    embed: Embed,
    inlineCode: InlineCode,
    linkTool: LinkTool,
    list: List,
    quote: Quote,
    simpleImage: SimpleImage,
    // image: {
    //   class: Image,
    //   config: {
    //       uploader: {
    //           uploadByFile(file) {
    //               let formData = new FormData();
    //               formData.append("images", file);
    //               // send image to server
    //               return API.imageUpload(formData).then((res) => {
    //                   // get the uploaded image path, pushing image path to image array
    //                   imageArray.push(res.data.data)
    //                   return {
    //                       success: 1,
    //                       file: {
    //                           url: res.data.data
    //                       }
    //                   }
    //               })
    //           }
    //   }
  };
  // Editor.js This will show block editor in component
  // pass EDITOR_JS_TOOLS in tools props to configure tools with editor.js
  return (
    <>
      <EditorJS
        // instanceRef={(instance) => handleInstance(instance)}
        tools={tools}
        // data={data}
        placeholder={`Write from here...`}
      />
    </>
  );
};

// Return the CustomEditor to use by other components.

export default CustomEditor;
