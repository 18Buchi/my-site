"use strict";

{
  const question = document.getElementById("question");
  const choices = document.getElementById("choices");
  const btn = document.getElementById("btn");
  const Commentary = document.getElementById("Commentary");
  const textCard = document.getElementById("textCard");
  const result = document.getElementById("result");
  const scoreLabel = document.querySelector("#result > p");

  const quizSet = shuffle([
    { q: "世界で一番大きな湖は？", c: ["カスピ海", "ビクトリア湖", "琵琶湖"], a:"カスピ海：371,000km²　　ビクトリア湖：68,870km²　　琵琶湖：669km²" },
    { q: "2の8乗は？", c: ["256", "64", "1024"] ,a:"解説、、、必要ですか？"},
    {
      q: "存在しないのはどれ？",
      c: ["東京特許許可局", "東京航空局", "東京環境局"],a:"東京特許許可局 - 日本語の早口言葉のひとつ。なお、実際に特許に関する行政を行うのは特許庁であり、過去にこのような役所が存在したことは一度も無い。架空の官庁であり、現在でもこのような名称の役所は存在しない。"
    },
    {
      q: "一般的に市販されているサイコロの一番出やすい目の数は？",
      c: ["5", "3", "1"],a:"市販のサイコロは、重心の偏りを避ける工夫が甘く、1の面の目だけが大きく他は同じ大きさといった程度である。この場合、最も上になりやすいのは5の面である。"
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
    Commentary.classList.remove("disabled");
  }

  Commentary.addEventListener("click", function (e) {
    let div = document.createElement("div");
    let h5 = document.createElement("h5");
    let p = document.createElement("p");
    let a = document.createElement("a");
    h5.innerHTML = "【解説】";
    textCard.appendChild(div);
    div.appendChild(h5);
    div.classList.add("card", "commentary", "hidden");
    p.innerHTML = quizSet[currentNum].a;
    div.appendChild(p);
    a.innerHTML = "return";
    div.appendChild(a);
    a.setAttribute("href", "javascript:void(0)");
    a.addEventListener("click", function (e) {
      div.style.display = "none"
    });
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
    Commentary.classList.add("disabled");

    if (currentNum === quizSet.length - 1) {
      scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
      scoreLabel.style.color = "black";
      scoreLabel.style.fontSize = "16px";
      result.classList.remove("hidden");
    } else {
      currentNum++;
      setQuiz();
    }
  });
}
