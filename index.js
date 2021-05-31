const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");
var vewNum = 5;

// async function callApi() {
// }
// callApi();
button.addEventListener("click", async function () {
  vewNum += 5;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  for (let index = vewNum -5; index < posts.length; index++) {
    const post = posts[index];
    if (post.id <= vewNum) {
      const list = document.createElement("li");
      list.innerText = post.title;
      lists.appendChild(list);
      console.log(vewNum);
    }
  }
});

window.addEventListener("load", async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  for (let index = 0; index < posts.length; index++) {
    const post = posts[index];
    if (post.id <= vewNum) {
      const list = document.createElement("li");
      list.innerText = post.title;
      lists.appendChild(list);
    }
    // button.addEventListener("click", function () {
    //   window.location.button();
    // });
  }
});

