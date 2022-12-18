/* 開発方法についてのコメント
 階層構造をもつブロックを作る。全ブロックが階層構造を持つようにする。
階層は、ブロックの親子関係を作るpluginで対応する。

block tune plugin として実装
左と右に移動するボタンを作る
移動するときは直前のクラスよりもプラス・マイナス1のみ移動可能にする
プラスに移動する時、可能なら、直前のブロックの中に内包されるようにする。

*/
import "../styles/plugins.module.scss";
import * as Dom from '../utils/dom';

export default class Nest {
  static get isTune() {
    return true;
  }
  get shortcut() {
    return "TAB";
  }
  get CSS() {
    return {
      nest: [
        "cdx-nest-1",
        "cdx-nest-2",
        "cdx-nest-3",
        "cdx-nest-4",
        "cdx-nest-5",
        "cdx-nest-6",
      ],
    };
  }
  // constructor
  constructor({ api,data,config,block }) {
    this.button = null;
    this.state = false;
    this.api = api;
	this.data = data;
	this.config = config;
	this.block = block;
    this.tag = "Nest";
    this.count = 0;
	this.wrapper = undefined;
  }
  // render 処理をするためのボタン作成
//   階層を増やすボタン
  render() {
console.log(this.data);
const tuneWrapper = Dom.make('div','')

  }

  // surround　指定された範囲内の要素に対する処理　ここにブロックの位置を移動する処理を書く
  surround(range) {
    // rangeをブロックに拡張する
    const selectedElement = range.extractContents();
    const nest = document.createElement(this.tag);

    // class切り替え
    let count = this.count;
    let className = this.CSS.nest[count];
    // let className = Nest.CSS.nest[count];
    console.log(className);

    // class追加
    nest.classList.add(className);
    nest.appendChild(selectedElement);
    range.insertNode(nest);
    console.log(nest);

    // 　count up and save
    if (this.count < this.CSS.nest.length - 1) {
      count++;
    }
    this.count = count;
    console.log(count);

    this.api.selection.expandToTag(nest);

    // tabキー読み込み
    // selectedElement.addEventListener("keydown", (event) => {
    //   if (event.key === "Tab") {
    // let style = window.getComputedStyle(selectedElement);
    // let left = parseInt(style.left);
    // selectedElement.style.left = left + 10 + "px";
    //   }
    // });
    // // 移動した状態のブロックを新しく挿入
    // range.insertNode(selectedElement);
  }
  // checkState
  checkState(selection) {
    // const block = selection.anchorNode;
    // if (!block) {
    //   return;
    // }
    // // アンカーエレメントに代入する要素の取得
    // const anchorElement =
    //   block instanceof Element ? block : block.parentElement;
    // this.state = !!anchorElement.closest("div");
  }
}
