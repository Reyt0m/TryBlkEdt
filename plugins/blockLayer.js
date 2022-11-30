/* 開発方法についてのコメント
 階層構造をもつブロックを作る。全ブロックが階層構造を持つようにする。
階層は、ブロックの親子関係を作るpluginで対応する。
親子関係はどう作ればいい？

親の性質は引き継ぐ
位置が少し右にずれる。

まずは、一つのブロックを通常より右にずらした位置に配置する方法を考える。
階層を動かすは、ブロックへの影響であるから、block APIを使う。
 */
import React, { useState, useMemo } from "react";

const BlockLayer = () => {
  const [data, setData] = useState();
  console.log(toolbox());
//   setData.toolbox() = {
// 		title: "BlockLayer",
// 		icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
//   };

  // static getter をFCで実装するには？
  // つまり、toolboxっていうAPIの中身をまず取ってきて、中身をチェックし、そこにデータを付け加えるという関数を書くことが必要
  // static getterは、最初に関数を外のスコープから呼び出してきて、その関数の中で、static getterを呼び出すことで、static getterの中身を取得することができる。その後、static getterの中身を書き換えることができる。

  // const toolbox = useMemo(() => {
  // 	return {
  // 		icon:'<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
  // 		title: 'BlockLayer',
  // 	}
  // }, []);
  // const toolbox = () => {
  // 	return(
  // 		icon:'<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
  // 		title: 'BlockLayer',
  // 	)
  // 	}
  // 一旦データ？として定義

  // 多分これでsaveの効果はあるはず？
  const [block, setBlock] = useState(null);

  return (
    <>
      <h1>BlockLayer</h1>
      {/* <input label="test" onChange={setBlock}></input> */}
    </>
  );
};
export default BlockLayer;
