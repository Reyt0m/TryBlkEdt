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

  //   最初のインスタンスだけ取得する
  const handleInitialize = useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  const ReactEditorJS = createReactEditorJS();

  // 獲得したデータの保存
  const [editorData, setEditorData] = useState([]);
  // データの反映を制御するステートを追加
  const [isUpdating, setIsUpdating] = useState(true);

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
	  console.log("saved")
    } catch (error) {
      console.log(error, "error");
    }
  }, []);

//   読み込みに時間制限を設ける
  setTimeout(() => {
    setIsUpdating(true);
	console.log("isUpdatingTime", isUpdating)
  }, 10000);

  useEffect(() => {
    // editor初期化チェック
    if (editorCore.current) {
      // editorコレクションから、timeフィールドで降順にソートし、最初の1件だけを取得するクエリを作成
      const editorLatestQuery = query(
        collection(db, "editor"),
        orderBy("time", "desc"),
        limit(2)
      );
    //   if (isUpdating) {
        // クエリをリアルタイムに監視し、スナップショットを取得する
        const unsubscribe = onSnapshot(editorLatestQuery, (snapshot) => {
          // スナップショットにドキュメントが含まれているかチェック
          if (!snapshot.empty) {
            // 最新のドキュメントを取得
            const doc = snapshot.docs[1];
            // ドキュメントのデータを取得
            const data = doc.data();
			console.log(data.time,editorData.time)
            setEditorData(data);
            editorCore.current.render(editorData);
            // データをjson形式にしてconsole.logに表示
            console.log(JSON.stringify(editorData.blocks, null, 2));
          }
        });
		setIsUpdating(!isUpdating);
		console.log("isUpdatingChange", isUpdating)
        // コンポーネントがアンマウントされるときに、監視を解除する
        return () => {
          unsubscribe();
        // };
      }
    }
  }, [editorCore.current]);

  return (
    <>
      <ReactEditorJS
        onInitialize={handleInitialize}
        autofocus={true}
        // onReady={handleReady}
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
