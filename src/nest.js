import "./index.css";
import * as Dom from "./dom";

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
        "cdx-nest-6"
      ]
    };
  }

  // constructor
  constructor({ api, data, config, block }) {
    this.state = false;
    this.api = api;
    this.data = data;
    this.config = config;
    this.block = block;
    this.count = 1;
  }

  wrap(blockContent) {
    this.wrapper = Dom.make("div");
    this.wrapper.classList.toggle(this.CSS.nest[this.data]);
    // if (this.count >= 2) {
    //   this.wrapper.style.paddingLeft = "10rem";
    // }
    this.wrapper.append(blockContent);
    console.log(this.CSS.nest[this.data]);
    return this.wrapper;
  }
  render() {
    const wrapper = Dom.make("div");
    const button = document.createElement("button");
    button.classList.toggle(this.api.styles.settingsButton);
    button.innerHTML = "nest";
    button.type = "button";
    wrapper.appendChild(button);

    this.api.listeners.on(button, "click", (event) => {
      //   this.tuneWrap(event);
      this.data = this.count;
      this.count += 1;
      // this.wrap(event);
      // console.log(this.data);
    });

    button.classList.toggle(this.api.styles.settingsButtonActive);
    return wrapper;
  }
  save() {
    return this.data;
  }
}
