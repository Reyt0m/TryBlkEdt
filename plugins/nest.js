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
    // this.class = "cdx-nest";
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
      // nest1 : 'cdx-nest-1',
      // nest2 : 'cdx-nest-2',
      // nest3 : 'cdx-nest-3',
      // nest4 : 'cdx-nest-4',
      // nest5 : 'cdx-nest-5',
      // nest6 : 'cdx-nest-6',
    };
  }
  // render 処理をするためのボタン作成
  render() {
    this.button = document.createElement("button");
    this.button.type = "button";
    this.button.textContent = "Nest";

    // this.button.innerHTML = toolIcon
    // this.button.classList.add(this.api.styles.inlineToolButton);
    return this.button;
  }

  // surround　指定された範囲内の要素に対する処理　ここにブロックの位置を移動する処理を書く
  surround(range) {
    // rangeをブロックに拡張する
    // const selectedBlock = range.commonAncestorContainer;
    // selectedBlockをelementとして取得
    // const selectedElement = selectedBlock.parentElement;

    // 回数制で右にずれた回数を使って計算するのがよいだろうか。margin調節があればそれが一番良いはず。tabとshift TABで切り替えればよい。
    // クラス呼び出しで、インスタンス生成している形式のはずだから、値を保持するインスタンスを作る必要があるかも
    const selectedElement = range.extractContents();
    const nest = document.createElement(this.tag);
    // class nameを区別するか、javascriptの中でmarginの位置を分けるか。
    // const countEl = document.createElement("span");
    // countEl.appendChild(selectedElement);
    // range.insertNode(countEl);
    // countを保存する

    let count = this.count;
    // classを変更
    let className = this.CSS.nest[count];
    console.log(className);

	// 　count up
    count++;
    this.count = count;

	
    // this.class = "cdx-nest-" + count;
    // countEl.textContent = className;

    // nest.classList.add(this.class);
    // nest.appendChild(selectedElement);
    // range.insertNode(countEL);
    // console.log(nest);
    // // leftを押してもinlinetoolしか反応しない
    // let left = nest.style.marginLeft;
    // console.log(nest.style);
    // left + 10 + "px";
    // this.api.selection.expandToTag(nest);
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
