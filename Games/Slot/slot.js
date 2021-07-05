"use strict";
{
  class Panel {
    constructor() {
      const section = document.createElement("section");
      section.classList.add("panel");

      this.img = document.createElement("img");
      this.img.src = "../../image/GAME/SLOT/001.jpg";
      this.stop = document.createElement("div");
      this.stop.textContent = "STOP";
      this.stop.classList.add("stop");
    }
  }
}
