"use strict";

{
  const question = document.getElementById("question");
  const choices = document.getElementById("choices");
  const btn = document.getElementById("btn");
  const Commentary = document.getElementById("Commentary");
  const text= document.getElementById
  ("textCard");
  const result = document.getElementById("result");
  const scoreLabel = document.querySelector("#result > p");

  const quizSet = shuffle([
    { q: "世界で一番大きな湖は？", c: ["カスピ海", "カリブ海", "琵琶湖"] },
    { q: "2の8乗は？", c: ["256", "64", "1024"] },
    {
      q: "存在しないのはどれ？",
      c: ["東京特許許可局", "東京航空局", "東京環境局"],
    },
    {
      q: "一般的に市販されているサイコロの一番出やすい目の数は？",
      c: ["5", "3", "1"],
    },
    {
      q: "次のうち、最初にリリースされた言語は？",
      c: ["Python", "JavaScript", "HTML"],
    },
  ]);
  let currentNum = 0;
  let isAnswered;
  let score = 0;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;

    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add("correct");
      score++;
    } else {
      li.classList.add("wrong");
    }

    btn.classList.remove("disabled");
    Commentary.classList.remove("styleNone");
  }

  Commentary.addEventListener("click", function (e) {
    // alert("aaa");
    let p = document.createElement("div");
    p.innerHTML = "aaa";
    text.appendChild(p);
    p.classList.add("card", "commentary");

    //   let div = document.createElement("div");
    // let topBtn = document.createElement("a");
    // topBtn.innerHTML = "Top Button";
    // topBtn.setAttribute("href", "../index.html");
    // footer.appendChild(div);
    // div.appendChild(topBtn);
    // topBtn.classList.add("btn", "btn-secondary");
    // topBtn.style.fontWeight = "bold";
  });

  function setQuiz() {
    isAnswered = false;

    question.textContent = quizSet[currentNum].q;

    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });

    if (currentNum === quizSet.length - 1) {
      btn.textContent = "Show Score";
    }
  }

  setQuiz();

  btn.addEventListener("click", () => {
    if (btn.classList.contains("disabled")) {
      return;
    }
    btn.classList.add("disabled");

    if (currentNum === quizSet.length - 1) {
      scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
      scoreLabel.style.color = "black";
      scoreLabel.style.fontSize = "20px";
      result.classList.remove("hidden");
    } else {
      currentNum++;
      setQuiz();
    }
  });
}
