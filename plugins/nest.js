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
  constructor({ api, data, config, block }) {
    this.state = false;
    this.api = api;
    this.data = data;
    this.config = config;
    this.block = block;
    this.count = 0;
    this.padding = "0rem";
    this.base = 10;
    this.distance = 0;
    this.count = 1;
  }

  // render 処理をするためのボタン作成
  render() {
    const wrapper = Dom.make("div");
    const button = document.createElement("button");
    button.classList.add(this.api.styles.settingsButton);
    button.innerHTML = "nest";
    button.type = "button";
    wrapper.appendChild(button);

    this.api.listeners.on(button, "click", (event) => {
      //   this.tuneWrap(event);
      this.data = this.count;
      this.count += 1;
      this.wrap(event);
      console.log(this.data);
    });
    // addEventListener("click", () => {
    //     this.distance = this.distance + this.base;
    //   this.padding = this.distance + "rem";
    //   button.classList.toggle(this.api.styles.settingsButtonActive);
    // });
    button.classList.toggle(this.api.styles.settingsButtonActive);
    return wrapper;
  }
  /**  blockを調整する
   *  blockcontent取得
   *  blockのpaddingを取得
   *  直前のpaddingより小さい場合 10大きいところまで動ける
   * 	cssが適用されない。
   * 	renderで押されたボタンのeventを取得して再レンダリングしたい
   *  paddingは非負
   *  paddingが直前のブロックより小さいとき、直前のブロックの子要素になる。
   */
  wrap(blockContent) {
	const wrapper = Dom.make("div");
    // this.wrapper = Dom.make("div");
    // this.wrapper.classList.toggle(this.CSS.nest[this.data]);
	wrapper.append(blockContent);
    if (this.count === 2) {
      wrapper.style.paddingLeft = "10rem";
    }
    if (this.count === 3) {
      wrapper.style.paddingLeft = "20rem";
    }
    // this.wrapper.style.padding = "0rem 0rem 0rem 10rem"

    // this.api.listeners.on(this.button, "click", () => {
    //   this.distance = this.distance + this.base;
    //   this.padding = this.distance + "rem";
    //   this.button.classList.toggle(this.api.styles.settingsButtonActive);
    //   console.log(this.padding)
    // },false);
    // this.wrapper.style.paddingLeft = this.data + "rem";
    // console.log(this.wrapper.style.paddingLeft);
	console.log(blockContent)
	console.log(wrapper.append(blockContent))

    return wrapper;
  }


  save() {
    return this.data;
  }
}
