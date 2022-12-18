import React, { memo, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import TOOLS from "./tools";
import DragDrop from "editorjs-drag-drop";
import nest from "../plugins/nest";

const CustomEditor = ({ data, onChange, holder }) => {
  //initialize editorjs
  const ref = useRef();


  useEffect(() => {
    //initialize editor if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: TOOLS,
		tunes : ['textVariant','nest'],
        autofocus: true,
        data,
        onReady: () => {
          new DragDrop(editor);
        },
        placeholder: "Start writing your story...",
        async onChange(api) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor;
    }
    //add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div id={holder}></div>
    </>
  );
};

// 状態の変更をこのFCの変更によってのみ検知する。
export default memo(CustomEditor);
