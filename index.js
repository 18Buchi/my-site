const lists = document.getElementById("lists");
const close = document.getElementById("close");
const popUpTitle = document.getElementById("popup-title");
const popUpText = document.getElementById("popup-text");
const popCard = document.getElementById("c-card");
const container = document.getElementById("c-container");
const image = document.getElementById("article-image");

// ロード時の処理
window.addEventListener("load", async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  for (let index = 0; index < 50; index++) {
    const post = posts[index];
    const list = document.createElement("li");
    list.innerText = post.title;
    list.setAttribute("class", "list-wrapper");
    list.setAttribute("id", post.id);
    lists.appendChild(list);
    const listId = document.getElementById(post.id);

    // 記事クリック時の処理
    listId.addEventListener("click", async function (e) {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await res.json();
      const res2 = await fetch(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      const photos = await res2.json();
      let getId = e.target.id;
      const post = posts[getId - 1];
      const photo = photos[getId - 1];
      popCard.classList.add("c-show-card");
      container.classList.add("c-conNone");
      popUpTitle.innerText = post.title;
      popUpText.innerText = post.body;
      image.setAttribute("src", photo.url);
    });
  }
});

// 記事を閉じる時の処理
close.addEventListener("click", function () {
  popCard.classList.remove("c-show-card");
  container.classList.remove("c-conNone");
});
