import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
// import align from 'editorjs-text-alignment-blocktune'
import align from "./align.js";
import paragraph from "@editorjs/paragraph";
import nest from "./nest";

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  // header: Header,
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
  align: {
    class: align,
    config: {
      default: "left",
      blocks: {
        header: "center"
        // list: "right"
      }
    }
  },
  // nest: {
  //   class: nest
  // },
  header: {
    class: Header,
    tunes: ["align"]
  },
  paragraph: {
    class: paragraph,
    tunes: ["align", "nest"]
  }
};
