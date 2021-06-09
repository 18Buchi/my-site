"use strict";
{
  let items = [
    {
      src: "./image/sample16.png",
      title: "spoopywound",
      link: "https://suzuri.jp/Buchi18/7196192/t-shirt/s/black",
    },
    {
      src: "./image/sample6.png",
      title: "SLEEPYSHEEEP",
      link: "https://suzuri.jp/Buchi18/5866709/t-shirt/s/white",
    },
    {
      src: "./image/sample8.png",
      title: "セル・ライト",
      link: "https://suzuri.jp/Buchi18/6498604/t-shirt/s/white",
    },
    {
      src: "./image/sample9.png",
      title: "リック・メタボ",
      link: "https://suzuri.jp/Buchi18/6498581/t-shirt/s/white",
    },
    {
      src: "./image/sample10.png",
      title: "KILROY",
      link: "https://suzuri.jp/Buchi18/6280545/t-shirt/s/white ",
    },
    {
      src: "./image/sample11.png",
      title: "LIVIG DECK",
      link: "https://suzuri.jp/Buchi18/6097685/t-shirt/s/white",
    },
    {
      src: "./image/sample12.png",
      title: "GREATFUL PEACE",
      link: "https://suzuri.jp/Buchi18/6097564/t-shirt/s/black",
    },
    {
      src: "./image/sample13.png",
      title: "SLEEPYFACE",
      link: "https://suzuri.jp/Buchi18/6049600/t-shirt/s/black",
    },
    {
      src: "./image/sample14.png",
      title: "@NEWYORK@TOKYO",
      link: "https://suzuri.jp/Buchi18/6043126/t-shirt/s/black",
    },
    {
      src: "./image/sample15.png",
      title: "Buchi-T",
      link: "https://suzuri.jp/Buchi18/5866505/t-shirt/s/indigo",
    },
  ];

  $(function () {
    for (let i = 0; i < items.length; i++) {
      $("<img>")
        .attr("src", items[i].src)
        .attr("art", items[i].title)
        .addClass(
          "card-img-top shadow-sm p-3 mt-5 mb-1 bg-white rounded position-relative"
        )
        .appendTo(".c-items");
      $("<h5>")
        .addClass("d-inline-block c-card-text w-75 mt-2")
        .text(items[i].title)
        .appendTo(".c-items");
      $("<a>")
        .addClass("btn btn-secondary d-inline-block float-end btn-sm  mt-1")
        .text("詳細を見る!!")
        .attr("href", items[i].link)
        .attr("target", "_blank")
        .appendTo(".c-items");
      // $(".card-img-top, .card-title, .btn btn-primary")
      //   .wrapAll("<div>")
      //   .appendTo(".c-items");
      // console.log(cards[i]);
    }
  });
}
