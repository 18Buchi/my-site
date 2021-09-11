"use strict";
{
  // トップボタン
  const footer = document.getElementById("footer");
  // footer.style.color = "white";
  footer.style.height = "250px";
  footer.style.padding = "30px";
  footer.style.borderTop = "thin solid black";

  let div = document.createElement("div");
  let topBtn = document.createElement("a");
  topBtn.innerHTML = "Top Button";
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
      title: "1",
      link: "#",
    },
    {
      src: "./image/icon/icon002.jpg",
      title: "2",
      link: "#",
    },
    {
      src: "./image/icon/icon003.jpg",
      title: "2",
      link: "#",
    },
    {
      src: "./image/icon/icon004.jpg",
      title: "2",
      link: "#",
    },
  ];
  for (let i = 0; i < footerIcon.length; i++) {
    let li = document.createElement("li");
    let icon = document.createElement("img");
    icon.src = footerIcon[i].src;
    ul.appendChild(li);
    li.appendChild(icon);
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
      src: "#",
      title: "お問合せ",
      link: "./",
    },
    {
      src: "#",
      title: "免責事項",
      link: "#",
    },
    {
      src: "#",
      title: "©︎ 2020 Buchi Inc. All Rights Reserved.",
      link: "#",
    },
  ];

  for (let i = 0; i < form.length; i++) {
    let liForm = document.createElement("li");
    let linkForm = document.createElement("a");
    linkForm.setAttribute("href", form[i].link);
    linkForm.innerHTML = form[i].title;

    ulForm.appendChild(liForm);
    liForm.appendChild(linkForm);
    liForm.style.float = "left";
    liForm.style.paddingLeft = "2vw";
    liForm.style.listStyle = "none";
    linkForm.style.textDecoration = "none";
    linkForm.style.color = "black";
  }
  ulForm.style.padding = "0px";
  // ulForm.style.position = "relative";
  ulForm.style.float = "right";
  ulForm.style.marginTop = "80px";
  ulForm.style.marginRight = "2vw";
  // ulForm.style.marginLeft = "60vw";
}
