import EditorJS from "@editorjs/editorjs";
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

const CustomEditor = ({ type }) => {
  // const Editor = createReactEditorJS({
  // 	holder: 'EditorJS',
  // });

  const TOOLS = {
    header: {
		class:Header,
		inlineToolbar: true,
	},
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
  const editor = new EditorJS({
    holder: "editorjs",
    tools: TOOLS,
	plaseceholder: "Start writing your story...",
  });


  return (
    <>
      <div id="editorjs"></div>
    </>
  );
};

// Return the CustomEditor to use by other components.

export default CustomEditor;
