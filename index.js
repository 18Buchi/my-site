const lists = document.getElementById("lists");
const close = document.getElementById("close");
const popUpTitle = document.getElementById("popup-title");
const popUpText = document.getElementById("popup-text");
const popCard = document.getElementById("c-card");
const container = document.getElementById("c-container");

window.addEventListener("load", async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  for (let index = 0; index < posts.length; index++) {
    const post = posts[index];
    const list = document.createElement("li");
    list.innerText = post.title;
    list.setAttribute("class", "list-wrapper");
    list.setAttribute("id", post.id);
    lists.appendChild(list);
    const listId = document.getElementById(post.id);
    listId.addEventListener("click", async function (e) {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await res.json();
      let getId = e.target.id;
      const post = posts[getId - 1];
      popCard.classList.add("c-show-card");
      container.classList.add("c-conNone");
      popUpTitle.innerText = post.title;
      popUpText.innerText = post.body;
    });
  }
});
close.addEventListener("click", function () {
  popCard.classList.remove("c-show-card");
  container.classList.remove("c-conNone");
});
