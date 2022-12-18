/* 開発方法についてのコメント
 階層構造をもつブロックを作る。全ブロックが階層構造を持つようにする。
階層は、ブロックの親子関係を作るpluginで対応する。
親子関係はどう作ればいい？

親の性質は引き継ぐ
位置が少し右にずれる。

まずは、一つのブロックを通常より右にずらした位置に配置する方法を考える。
階層を動かすは、ブロックへの影響であるから、block APIを使う。

階層化については、appendchildで対応出来る。しかし、それを視覚的にわかりやすくするためには別の方法が必要になる。
pluginではあくまでブロック生成ができるがここで行いたいのは、他のブロックに対してネストを要求するようなものであるはず。
inlinebarで実装
*/
import "../styles/pluguins.module.scss";

export default class Nest {
  static get isInline() {
    return true;
  }
  get shortcut() {
    return "TAB";
  }
  // constructor
  constructor({ api }) {
    this.button = null;
    this.state = false;
    this.api = api;
    this.tag = "Nest";
    this.count = 0;
  }
  //   css ?これが必要かどうかは不明
  // ここでスコープの中にいれて、cssの調整を色々やるべき。nested listを見れば良い。
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
  // render 処理をするためのボタン作成
  render() {
    this.button = document.createElement("button");
    this.button.type = "button";
    this.button.textContent = "Nest";

    // TODO: icon追加
    return this.button;
  }

  // surround　指定された範囲内の要素に対する処理　ここにブロックの位置を移動する処理を書く
  surround(range) {
    // rangeをブロックに拡張する
    const selectedElement = range.extractContents();
    const nest = document.createElement(this.tag);

    // class切り替え
    let count = this.count;
    let className = this.CSS.nest[count];

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
