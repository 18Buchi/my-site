const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");
var vewNum = 5;


window.addEventListener("load", async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  for (let index = 0; index < posts.length; index++) {
    const post = posts[index];
    if (post.id <= vewNum) {
      const list = document.createElement("li");
      list.innerText = post.title;
      list.classList.add("list-wrapper");
      lists.appendChild(list);
    }
  }
});

button.addEventListener("click", async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  vewNum += 5;
  for (let index = vewNum - 5; index < posts.length; index++) {
    const post = posts[index];
    if (post.id <= vewNum) {
      const list = document.createElement("li");
      list.innerText = post.title;
      list.classList.add("list-wrapper");
      lists.appendChild(list);
      console.log(posts);
    }
  }
});
