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
import BlockLayer from "../plugins/blockLayer";
import { Paragraph } from "@editorjs/paragraph";
// import API from '../api/image'

const TOOLS = {
	header: {
    class: Header,
	inlineToolbar: true,
    shortcut: "CONTROL+SHIFT+2",
    config: {
      placeholder: "ヘッダー",
      levels: [1, 2, 3, 4],
      defaultLevel: 2,
    },
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
  code: BlockLayer,
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

export default TOOLS;
