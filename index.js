// const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

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
  }
});
