import React, { useState, useCallback, useRef, useEffect } from "react";

import { createReactEditorJS } from "react-editor-js";

import { EDITOR_JS_TOOLS } from "./constants";
import DragDrop from "editorjs-drag-drop";

import { collection, addDoc, onSnapshot } from "firebase/firestore";
import db from "./firebase";
import { orderBy, limit, query } from "firebase/firestore";

// import data from "./data.json";

const ReactEditors = () => {
  const editorCore = useRef(null);

  const handleInitialize = useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  const [editorReady, setEditorReady] = useState(false);

  const handleReady = () => {
    const editor = editorCore.current._editorJS;
    new DragDrop(editor);
  };

  const ReactEditorJS = createReactEditorJS();



  // データの獲得
  const [editorData, setEditorData] = useState([]);

  useEffect(() => {
    // editor初期化チェック
    if (editorCore.current) {
      setEditorReady(true);
      // editorコレクションから、timeフィールドで降順にソートし、最初の1件だけを取得するクエリを作成
      const editorLatestQuery = query(
        collection(db, "editor"),
        orderBy("time", "desc"),
        limit(2)
      );

      // クエリをリアルタイムに監視し、スナップショットを取得する
      const unsubscribe = onSnapshot(editorLatestQuery, (snapshot) => {
        // スナップショットにドキュメントが含まれているかチェック
        if (!snapshot.empty) {
          // 最新のドキュメントを取得
          const doc = snapshot.docs[1];
          // ドキュメントのデータを取得
          const data = doc.data();
          // データをeditorステートにセット
          setEditorData(data);
          // データをjson形式にしてconsole.logに表示
          console.log(JSON.stringify(editorData.time, null, 2));
          console.log(JSON.stringify(editorData.blocks, null, 2));
        }
      });

      // コンポーネントがアンマウントされるときに、監視を解除する
      return () => {
        unsubscribe();
      };
    }
  }, [editorCore.current]);

  //   data save
  const saved = useCallback(async () => {
    const savedData = await editorCore.current.save();
    // アップロード
    try {
      await addDoc(collection(db, "editor"), {
        time: savedData.time,
        blocks: savedData.blocks,
        version: savedData.version,
      });
    } catch (error) {
      console.log(error, "error");
    }
  }, [editorCore.current]);

  return (
    <>
      {/* <button onClick={onSubmit}>保存 </button> */}
      <ReactEditorJS
        onInitialize={handleInitialize}
        autofocus={true}
        onReady={handleReady}
        tools={EDITOR_JS_TOOLS}
        placeholder="Start writing..."
        onChange={() => {
          saved();
        }}
        defaultValue={{
          time: editorData.time,
          blocks: editorData.blocks,
        }}
      />
    </>
  );
};

export default ReactEditors;
