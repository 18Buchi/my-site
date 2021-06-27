"use strict";
(() => {
  function rand(max, min) {
    return Math.random() * (max - min) + min;
  }
  class Ball {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.x = rand(30, 250);
      this.y = 30;
      this.r = 10;
      this.vx = rand(3, 5) * (Math.random() < 0.5 ? 1 : -1);
      this.vy = rand(3, 5);
      console.log(this.vx);
      console.log(this.vy);
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x - this.r < 0 || this.x + this.r > this.canvas.width) {
        this.vx *= -1;
      }

      if (this.y - this.r < 0 || this.y + this.r > this.canvas.height) {
        this.vy *= -1;
      }
    }

    draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = "#fdfdfd";
      this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
      this.ctx.fill();
    }
  }

  class Paddle {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.w = 60;
      this.h = 16;
      this.x = this.canvas.width / 2 - this.w / 2;
      this.y = this.canvas.height - 32;
      this.mouseX = this.x;
      this.mouseY = this.y;
      this.addHandler();
    }
    addHandler() {
      document.addEventListener("mousemove", (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
      });
    }
    update() {
      const rect = this.canvas.getBoundingClientRect();
      this.x = this.mouseX - rect.left - this.w / 2;
      this.y = this.mouseY - 25;

      if (this.x < 0) {
        this.x = 0;
      }
      if (this.x + this.w > this.canvas.width) {
        this.x = this.canvas.width - this.w;
      }
      if (this.y < 0) {
        this.y = 0;
      }
      if (this.y + this.h > this.canvas.width) {
        this.y = this.canvas.width - this.h;
      }
    }

    draw() {
      this.ctx.fillStyle = "#fdfdfd";
      this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
  }

  class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.ball = new Ball(this.canvas);
      this.paddle = new Paddle(this.canvas);
      this.loop();
    }

    loop() {
      this.update();
      this.draw();
      requestAnimationFrame(() => {
        this.loop();
      });
    }
    update() {
      this.ball.update();
      this.paddle.update();
    }
    draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ball.draw();
      this.paddle.draw();
    }
  }

  const canvas = document.querySelector("canvas");
  if (typeof canvas.getContext === "undefined") {
    return;
  }

  new Game(canvas);
})();
