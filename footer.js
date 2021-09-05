"use strict";
{
  const footer = document.getElementById("footer");
  // footer.innerText = "sssss";
  footer.style.color = "white";
  footer.style.backgroundColor = "#023178";
  footer.style.height = "200px";
  footer.style.padding = "30px";

  let topBtn = document.createElement("a");
  topBtn.innerHTML = "Top Button";
  footer.appendChild(topBtn);
  topBtn.classList.add("btn", "btn-light");

  let nav = document.createElement("nav");
  let ul = document.createElement("ul");
  let li = document.createElement("li");

  li.innerHTML = "1";
  footer.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(li);
}

// "btn btn-secondary d-inline-block float-end btn-sm  mt-1"
// const photos = await res2.json();
//       let getId = e.target.id;
//       const post = posts[getId - 1];
//       const photo = photos[getId - 1];
//       popCard.classList.add("c-show-card");
//       container.classList.add("c-conNone");
//       popUpTitle.innerText = post.title;
//       popUpText.innerText = post.body;
//       image.setAttribute("src", photo.url);
