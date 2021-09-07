"use strict";
{
  // トップボタン
  const footer = document.getElementById("footer");
  footer.style.color = "white";
  footer.style.backgroundColor = "#023178";
  footer.style.height = "250px";
  footer.style.padding = "30px";

  let topBtn = document.createElement("a");
  topBtn.innerHTML = "Top Button";
  footer.appendChild(topBtn);
  topBtn.classList.add("btn", "btn-light");
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
  ul.style.display = "inline";

  

  // フォーム
  let ulForm = document.createElement("ul");
  


  footer.appendChild(ulForm);
  

  let form = [
    {
      src: "#",
      title: "お問合せ",
      link: "#",
    },
    {
      src: "#",
      title: "免責事項",
      link: "#",
    },
    {
      src: "#",
      title: "Copy",
      link: "#",
    },
  ];

  for (let i = 0; i < form.length; i++) {
    let liForm = document.createElement("li");
    let linkForm = document.createElement("a");
    liForm.innerHTML = form[i].title;
    ulForm.appendChild(liForm);
    liForm.style.float = "left";
    liForm.style.paddingLeft = "2vw";
    liForm.style.listStyle = "none";
  }
  ulForm.style.padding = "0px";
  // ulForm.style.position = "relative";
  ulForm.style.float = "right";
  ulForm.style.marginTop = "80px";
  ulForm.style.marginRight = "2vw";
  // ulForm.style.marginLeft = "60vw";
  
}
