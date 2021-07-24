"use strict";
{
  class Panel {
    constructor() {
      const section = document.createElement("section");
      section.classList.add("panel");

      this.timeoutId = undefined;

      this.img = document.createElement("img");
      this.img.src = "../../image/GAME/SLOT/001.jpg";
      this.stop = document.createElement("div");
      this.stop.textContent = "STOP";
      this.stop.classList.add("stop","inactive");
      this.stop.addEventListener("click", () => {
        if (this.stop.classList.contains("inactive")) {
          return;
        }
        this.stop.classList.add("inactive");
        clearTimeout(this.timeoutId);
        panelsLeft--;
        if (panelsLeft === 0) {
          spin.classList.remove("inactive");
          panelsLeft = 3;
          checkResult();
        }
      });

      section.appendChild(this.img);
      section.appendChild(this.stop);

      const main = document.querySelector("main");
      main.appendChild(section);
    }
    getRandomImage() {
      const images = 
      [
        "../../image/GAME/SLOT/001.jpg",
        "../../image/GAME/SLOT/002.jpg",
        "../../image/GAME/SLOT/004.jpg",
        "../../image/GAME/SLOT/005.jpg",
        "../../image/GAME/SLOT/006.jpg",
        "../../image/GAME/SLOT/007.jpg",
        "../../image/GAME/SLOT/008.jpg",
      ];
      return images[Math.floor(Math.random() * images.length)];
    }

    spin() {
      this.img.src = this.getRandomImage();
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 50);
    }

    isUnmatched(p1, p2) {
      return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
    }
    unmatched() {
      this.img.classList.add("unmatched");
    }
    activate() {
      this.img.classList.remove("unmatched");
      this.stop.classList.remove("inactive");
    }
  }

  function checkResult() {
    if (panels[0].isUnmatched(panels[1], panels[2])) {
      panels[0].unmatched();
    }
    if (panels[1].isUnmatched(panels[0], panels[2])) {
      panels[1].unmatched();
    }
    if (panels[2].isUnmatched(panels[0], panels[1])) {
      panels[2].unmatched();
    }
  }

  const panels = [new Panel(), new Panel(), new Panel()];

  let panelsLeft = 3;

  const spin = document.getElementById("spin");
  spin.addEventListener("click", () => {
    if (spin.classList.contains("inactive")) {
      return;
    }
    spin.classList.add("inactive");
    panels.forEach((panel) => {
      panel.activate();
      panel.spin();
    });
  });
}
