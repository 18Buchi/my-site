"use strict";
{
  // トップボタン
  const footer = document.getElementById("footer");
  footer.style.height = "250px";
  footer.style.padding = "30px";
  footer.style.borderTop = "thin solid black";

  let div = document.createElement("div");
  let topBtn = document.createElement("a");
  topBtn.innerHTML = "Top Page";
  topBtn.setAttribute("href", "./index.html");
  footer.appendChild(div);
  div.appendChild(topBtn);
  topBtn.classList.add("btn", "btn-secondary");
  topBtn.style.fontWeight = "bold";

  // 外部サイトアイコン

  let nav = document.createElement("nav");
  let ul = document.createElement("ul");

  footer.appendChild(nav);
  nav.appendChild(ul);

  let footerIcon = [
    {
      src: "./image/icon/icon001.jpg",
      art: "twitterIcon",
      title: "1",
      link: "./OutLink/twitter.html",
    },
    {
      src: "./image/icon/icon002.jpg",
      art: "instagramIcon",
      title: "2",
      link: "./OutLink/instagram.html",
    },
    {
      src: "./image/icon/icon003.jpg",
      art: "githubIcon",
      title: "3",
      link: "./OutLink/github.html",
    },
    {
      src: "./image/icon/icon004.jpg",
      art: "suzuriIcon",
      title: "3",
      link: "https://suzuri.jp/Buchi18",
    },
  ];
  for (let i = 0; i < footerIcon.length; i++) {
    let outLink = document.createElement("a");
    let li = document.createElement("li");
    let icon = document.createElement("img");

    ul.appendChild(li);
    li.appendChild(outLink);
    outLink.setAttribute("href", footerIcon[i].link);
    outLink.appendChild(icon);
    icon.setAttribute("src", footerIcon[i].src);
    icon.setAttribute("art", footerIcon[i].art);

    icon.style.width = "30px";
    icon.style.marginTop = "2vh";
    icon.style.marginRight = "2vw";
    icon.style.borderRadius = "7px";
    icon.style.float = "left";
    li.style.listStyle = "none";
  }
  ul.style.margin = "0px";
  ul.style.padding = "0px";
  ul.style.display = "block";

  // フォーム
  let ulForm = document.createElement("ul");

  footer.appendChild(ulForm);

  let form = [
    {
      title: "お問合せ",
      link: "./Form/form.html",
    },
    {
      title: "免責事項",
      link: "./Form/privacy.html",
    },
    {
      title: "©︎ 2021 Buchi Inc. All Rights Reserved.",
      link: "#",
    },
  ];

  for (let i = 0; i < form.length; i++) {
    let liForm = document.createElement("li");
    let linkForm = document.createElement("a");
    linkForm.innerHTML = form[i].title;
    linkForm.setAttribute("href", form[i].link);

    ulForm.appendChild(liForm);
    liForm.appendChild(linkForm);
    liForm.style.float = "left";
    liForm.style.paddingLeft = "2vw";
    liForm.style.listStyle = "none";
    linkForm.style.textDecoration = "none";
    linkForm.style.color = "black";
  }
  ulForm.style.padding = "0px";
  ulForm.style.float = "right";
  ulForm.style.marginTop = "80px";
  ulForm.style.marginRight = "2vw";
}
