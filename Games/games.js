"use strict";
{
  class Panel {
    constructor(game, Lv) {
      this.game = game;
      this.Lv = Lv;
      this.el = document.createElement("li");
      this.el.classList.add("pressed");
      console.log("foo");
      console.log(this.game.getLevel());
      // console.log(this.Lv.getFoo());

      this.el.addEventListener("click", () => {
        this.check();
        
      });
    }

    getEl() {
      return this.el;
    }
    activate(num) {
      this.el.classList.remove("pressed");
      this.el.textContent = num;
    }
    check() {
      if (this.game.getCurrentNum() === parseInt(this.el.textContent, 10)) {
        this.el.classList.add("pressed");
        this.game.addCurrentNum();
        if (this.game.getCurrentNum() === this.game.getLevel() ** 2) {
          clearTimeout(this.game.getTimeoutId());
        }
      }
    }
  }

  class Board {
    constructor(game,Lv) {
      this.game = game;
      this.Lv = Lv;

      this.panels = [];
      for (let i = 0; i < this.game.getLevel() ** 2; i++) {
        this.panels.push(new Panel(this.game));
      }
      this.setup();
    }

    setup() {
      const board = document.getElementById("board");
      this.panels.forEach((panel) => {
        board.appendChild(panel.getEl());
      });
    }
    activate() {
      const numbers = [];
      for (let i = 0; i < this.game.getLevel() ** 2; i++) {
        numbers.push(i);
      }

      this.panels.forEach((panel) => {
        const num = numbers.splice(
          Math.floor(Math.random() * numbers.length),
          1
        )[0];
        panel.activate(num);
      });
    }
  }

  class Game {
    constructor() {
      this.level = 2;
      this.board = new Board(this);
      this.currentNum = undefined;
      this.startTime = undefined;
      this.timeoutId = undefined;

      const touchButton = document.getElementById("touchPanelButton");
      touchButton.addEventListener("click", () => {
        this.start();
      });
      this.setup();
    }
    setup() {
      const container = document.getElementById("touchPanel");
      const PANEL_WIDTH = 50;
      const BOARD_PADDING = 10;
      container.style.width =
        PANEL_WIDTH * this.level + BOARD_PADDING * 2 + "px";
    }

    start() {
      if (typeof this.timeoutId !== "undefined") {
        clearTimeout(this.timeoutId);
      }
      this.currentNum = 0;
      this.board.activate();
      this.startTime = Date.now();
      this.runTimer();
    }

    runTimer() {
      const timer = document.getElementById("timer");
      timer.textContent = ((Date.now() - this.startTime) / 1000).toFixed(2);
      this.timeoutId = setTimeout(() => {
        this.runTimer();
      }, 10);
    }

    addCurrentNum() {
      this.currentNum++;
    }

    getCurrentNum() {
      return this.currentNum;
    }

    getTimeoutId() {
      return this.timeoutId;
    }

    getLevel() {
      return this.level;
    }
  }

  class Lv {
    constructor(game) {
      this.game = game;
      this.foo = undefined;
      const touchLevelButton = document.getElementById("touchLevelButton");
      touchLevelButton.addEventListener("click", () => {
        let board = document.getElementById("board");
        while (board.lastChild) {
          board.removeChild(board.lastChild);
          console.log(this.game.getLevel());
        }
        new Game(this.nextLevel);
      });
    }
    getFoo(){
      return this.foo;
    }
  }

  new Game();
}
