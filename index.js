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

// NEW TOPIC
var topic = [
  {
    title: "Title-one",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi esse aliquid assumenda facere minima accusamus, autem ipsum eum repudiandae iste rerum fugiat nemo sit recusandae nostrum! Aliquid itaque hic perspiciatis?",
    src: "./image/topic/topic001.jpg",
    alt: "image01",
    id: "1",
  },
  {
    title: "Title-two",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit porro asperiores sit iure omnis minima, commodi quia neque voluptas. Recusandae iusto voluptatum quo culpa nostrum fugit dolor similique, animi dolores.",
    src: "./image/topic/topic002.jpg",
    alt: "image01",
    id: "2",
  },
  {
    title: "Title-three",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, assumenda repellat fugiat dolor culpa fugit! Ducimus eligendi in tempore quisquam necessitatibus. Ut neque tempore saepe autem veritatis molestiae perferendis dolor.",
    src: "./image/topic/topic003.jpg",
    alt: "image01",
    id: "3",
  },
  {
    title: "Title-four",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolor corporis quam quasi commodi doloribus sequi consequuntur nemo deleniti voluptatem. Necessitatibus quam rerum alias, eius rem sit numquam quas. Harum?",
    src: "./image/topic/topic004.jpg",
    alt: "image01",
    id: "4",
  },
];

for (var i = 0; i < topic.length; i++) {
  const topicList = document.getElementById("topicList");
  var div = document.createElement("div");
  var title = document.createElement("div");
  var div2 = document.createElement("div");
  var li = document.createElement("li");
  var img = document.createElement("img");
  li.textContent = topic[i].text;
  title.textContent = topic[i].title;
  topicList.appendChild(div);
  div.appendChild(title);
  div.appendChild(div2);
  div2.appendChild(img);
  div2.appendChild(li);
  img.setAttribute("src", topic[i].src);
  div.classList.add("card", "mt-5");
  title.classList.add("fs-5", "fw-bold", "px-4", "m-3");
  div2.classList.add("px-5", "pb-5");
  li.classList.add("d-inline", "p-2", "mt-3");

  img.style.width = "30%";
  img.style.minWidth = "130px";

  if (topic[i].id % 2 === 0) {
    img.classList.add("float-end");
    img.style.marginLeft = "25px";
  } else {
    img.classList.add("float-start");
    img.style.marginRight = "25px";
  }
}
// NEW TOPIC

// 記事を閉じる時の処理
close.addEventListener("click", function () {
  popCard.classList.remove("c-show-card");
  container.classList.remove("c-conNone");
});
