import React, { useState, useCallback, useRef, useEffect } from "react";

import { createReactEditorJS } from "react-editor-js";

import { EDITOR_JS_TOOLS } from "./constants";
import DragDrop from "editorjs-drag-drop";

import { collection, addDoc, onSnapshot } from "firebase/firestore";
import db from "./firebase";
import { orderBy, limit, query } from "firebase/firestore";


const ReactEditors = () => {
  const editorCore = useRef(null);

  //   最初のインスタンスだけ取得する
  const handleInitialize = useCallback((instance) => {
    editorCore.current = instance;
  }, []);

    const handleReady = () => {
      const editor = editorCore.current._editorJS;
      new DragDrop(editor);
    };

  const ReactEditorJS = createReactEditorJS();

  // 獲得したデータの保存
  const [editorData, setEditorData] = useState([]);

  //  editorの中身が変更されるたびに保存
  const saved = useCallback(async () => {
    const savedData = await editorCore.current.save();
    // アップロード
    try {
      await addDoc(collection(db, "editor"), {
        time: savedData.time,
        blocks: savedData.blocks,
        version: savedData.version,
      });

      console.log("saved");
    } catch (error) {
      console.log(error, "error");
    }
  }, []);

  useEffect(() => {
    // editorコレクションから、timeフィールドで降順にソートし、最初の1件だけを取得するクエリを作成
    const editorLatestQuery = query(
      collection(db, "editor"),
      orderBy("time", "desc"),
      limit(1)
    );
    // クエリをリアルタイムに監視し、スナップショットを取得する
    onSnapshot(editorLatestQuery, (snapshot) => {
      // スナップショットにドキュメントが含まれているかチェック
      if (!snapshot.empty) {
        // 最新のドキュメントを取得
        const doc = snapshot.docs[0];
        // ドキュメントのデータを取得
        const data = doc.data();
        // データをeditorステートにセット
        setEditorData(data);

        // データをjson形式にしてconsole.logに表示
        console.log(JSON.stringify(editorData.time, null, 2));
        console.log(JSON.stringify(editorData.blocks, null, 2));
      }
    });
  }, [editorCore.current]);

  const handleGet = () => {
    editorCore.current.render(editorData);
  };

  return (
    <>
      <button onClick={handleGet}>同期</button>
      <ReactEditorJS
        onInitialize={handleInitialize}
        autofocus={true}
        onReady={handleReady}
        tools={EDITOR_JS_TOOLS}
        placeholder="Start writing..."
        onChange={() => {
          saved();
        }}
      />
    </>
  );
};

export default ReactEditors;
