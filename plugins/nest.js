/* 開発方法についてのコメント
 階層構造をもつブロックを作る。全ブロックが階層構造を持つようにする。
階層は、ブロックの親子関係を作るpluginで対応する。

block tune plugin として実装
左と右に移動するボタンを作る
移動するときは直前のクラスよりもプラス・マイナス1のみ移動可能にする
プラスに移動する時、可能なら、直前のブロックの中に内包されるようにする。

*/
import "../styles/plugins.module.scss";
import * as Dom from "../utils/dom";

export default class Nest {
  static get isTune() {
    return true;
  }
  get shortcut() {
    return "TAB";
  }

  //   get CSS() {
  //     return {
  //       nest: [
  //         "cdx-nest-1",
  //         "cdx-nest-2",
  //         "cdx-nest-3",
  //         "cdx-nest-4",
  //         "cdx-nest-5",
  //         "cdx-nest-6",
  //       ],
  //     };
  //   }

  // constructor
  constructor({ api, data, config, block }) {
    this.state = false;
    this.api = api;
    this.data = data;
    this.config = config;
    this.block = block;
    this.count = 0;
    this.paddingLeft = "0rem";
    this.distance = 0;
  }

  /**  blockを調整する
   *  blockcontent取得
   *  blockのpaddingを取得
   *  直前のpaddingより小さい場合 10大きいところまで動ける
   *  paddingは非負
   *  paddingが直前のブロックより小さいとき、直前のブロックの子要素になる。
   */
  wrap(blockContent) {
    this.wrapper = Dom.make("div");
    this.wrapper.append(blockContent);
    // this.wrapper.style.paddingLeft = "10rem";
    // this.wrapper.style.padding = "0rem 0rem 0rem 10rem"
    this.wrapper.style.paddingLeft = this.padding;
    console.log(this.wrapper.style.paddingLeft);
    return this.wrapper;
  }

  // render 処理をするためのボタン作成
  render() {
    const wrapper = Dom.make("div");
    const button = document.createElement("button");
    button.classList.add(this.api.styles.settingsButton);
    button.innerHTML = "nest";
    button.type = "button";
    wrapper.appendChild(button);
    addEventListener("click", (el) => {
      this.distance += this.distance;
      this.padding = this.distance + "rem";
	  button.classList.toggle(this.api.styles.settingsButtonActive);
    });
	button.classList.toggle(this.api.styles.settingsButtonActive);
    return wrapper;
  }

  // surround　指定された範囲内の要素に対する処理　ここにブロックの位置を移動する処理を書く
  /**
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
   */

  save() {
    return this.data;
  }
}
