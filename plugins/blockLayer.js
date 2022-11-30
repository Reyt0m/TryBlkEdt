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

// classでなら実装は簡単だけど。。
class BlockLayer {
  static get toolbox() {
    return {
      title: "BlockLayer",
      icon: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg />',
    };
  }

  constructor({ data }) {
    this.data = data;
    this.wrapper = undefined;
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("block-layer");

    const pre = document.createElement("pre");
    const code = document.createElement("code");
    const textarea = document.createElement("textarea");
    textarea.value = this.data.code ? this.data.code : "";

    this.wrapper.appendChild(pre);
    pre.appendChild(code);
    code.appendChild(textarea);

    textarea.addEventListener("input", () => {
      const scrollHeight = textarea.scrollHeight;
      textarea.style.height = scrollHeight + "px";
    });

    return this.wrapper;
  }

  save(blockContent) {
    const textarea = blockContent.querySelector(textarea);
    const code = textarea.value;
    return {
      code,
    };
  }
}

export default BlockLayer;
