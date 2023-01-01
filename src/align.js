/**
 * Build styles
 */
require("./index.css").toString();
/**
 * node 作成用
 * @param tagName
 * @param classNames
 * @param attributes
 * @returns {*}
 */
function make(tagName, classNames = null, attributes = {}) {
  const el = document.createElement(tagName);

  if (Array.isArray(classNames)) {
    el.classList.add(...classNames);
  } else if (classNames) {
    el.classList.add(classNames);
  }

  for (const attrName in attributes) {
    el[attrName] = attributes[attrName];
  }
  return el;
}

class AlignmentBlockTune {
  /**
   * Default alignment
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_ALIGNMENT() {
    return "left";
  }

  static get isTune() {
    return true;
  }

  getAlignment() {
    if (
      !!this.settings?.blocks &&
      this.settings.blocks.hasOwnProperty(this.block.name)
    ) {
      return this.settings.blocks[this.block.name];
    }
    if (!!this.settings?.default) {
      return this.settings.default;
    }
    return AlignmentBlockTune.DEFAULT_ALIGNMENT;
  }
  /**
   *
   * @param api
   * @param data 既に設定されているデータ
   * @param settings tuneに設定項目
   * @param block tuneに設定されてるblock
   */
  constructor({ api, data, config, block }) {
    this.api = api;
    this.block = block;
    /**
         config:{
            default: "right",
            blocks: {
              header: 'center',
              list: 'right'
            }
          },
         */
    this.settings = config;
    this.data = data || { alignment: this.getAlignment() };
    this.nestIcons = [
      {
        name: "previous",
        icon: "previous",
      },
      {
        name: "next",
        icon: "next",
      },
    ];
    this.nestSettings = [
      {
        name: "1",
        icon: "1",
      },
      {
        name: "2",
        icon: "2",
      },
      {
        name: "3",
        icon: "3",
      },
      {
        name: "4",
        icon: "4",
      },
      {
        name: "5",
        icon: "5",
      },
      {
        name: "6",
        icon: "6",
      },
    ];
    this._CSS = {
      alignment: {
        1: "cdx-nest-1",
        2: "cdx-nest-2",
        3: "cdx-nest-3",
        4: "cdx-nest-4",
        5: "cdx-nest-5",
        6: "cdx-nest-6",
      },
    };
  }

  /**
   * block自体をwrapしてくれる
   * constructorで与えられたalignmentを代入しようとすると、holderが確定してなく
   * renderでやろうとすると、tuneを表示時に処理が走る
   * @param blockContent
   */
  wrap(blockContent) {
    this.wrapper = make("div");
    this.wrapper.classList.toggle(this._CSS.alignment[this.data.alignment]);
    this.wrapper.append(blockContent);
    return this.wrapper;
  }

  /**
   * rendering block tune
   * @returns {*}
   */
  render() {
    const wrapper = make("div");
    const target = this.api.blocks.getBlockByIndex(
      this.api.blocks.getCurrentBlockIndex() - 1
    ).holder;
    const content = this.api.blocks.getBlockByIndex(
      this.api.blocks.getCurrentBlockIndex()
    ).holder;
    const count = 1;
    this.count = 0;
    this.nestIcons
      .map((align) => {
        const button = document.createElement("button");
        button.classList.add(this.api.styles.settingsButton);
        button.innerHTML = align.icon;
        button.type = "button";
        button.classList.toggle(
          this.api.styles.settingsButtonActive,
          align.name === this.data.alignment
        );
        wrapper.appendChild(button);
        return button;
      })
      .forEach((element) => {
        element.addEventListener("click", () => {
          if (this.count > 0 && element.innerText === this.nestIcons[0].name) {
            this.count = this.count - count;
          } else if (
            this.count < 5 &&
            element.innerText === this.nestIcons[1].name
          ) {
            this.count = this.count + count;
          }
          this.data = {
            alignment: this.nestSettings[this.count].name,
          };
          const { name } = this.nestSettings[this.count];
          this.wrapper.className = "";
          this.wrapper.classList.toggle(
            this._CSS.alignment[name],
            name === this.data.alignment
          );
          target.insertAdjacentElement("beforeend", content);
          console.log(target, "\n", content);
          console.log(
            this.api.blocks.getBlockByIndex(
              this.api.blocks.getCurrentBlockIndex() - 1
            ).holder
          );
        });
      });
    return wrapper;
  }
  /**
   * save
   * @returns {*}
   */
  save() {
    return this.data;
  }
}

module.exports = AlignmentBlockTune;
