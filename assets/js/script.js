const startBtn = document.querySelector("#start-button");
var timerEl = document.getElementById("timer");
var time = 75;
var h1El = document.querySelector("h1");
var introTextEl = document.getElementById("intro-text");

//Timer functions
function stopTimer() {
  clearInterval(timerRun);
};

function timerRun() {
  if(time > 0) {

    timerEl.textContent = "Time: " + time;
    time--;
  }
  //else if all questions are answered, stop timer keep current time displayed
  else {
    stopTimer();
    timerEl.textContent = "Time: 0";
  }
};
function loseTime () {
  time -= 10;
};


const questionArray = [
  {
    question: "Which tag links Javascript to an HTML file?",
    answers: [
      {text: "<script>", correct:true},
      {text: "<link>", correct:false},
      {text: "<javascript>", correct:false},
      {text: "<a>", correct:false}
    ]
  },
  {
    question: "Javascript statements end with which puncuation mark?",
    answers: [
      {text: ":", correct:false},
      {text: ";", correct:true},
      {text: ".", correct:false},
      {text: "!", correct:false}
    ]
  },
  {
    question: "Javascript comments start with:",
    answers: [
      {text: "<!", correct:false},
      {text: "{", correct: false},
      {text: "/*", correct:false},
      {text: "//", correct:true}
    ]
  },
  {
    question: "Which does not declare a Javascript variable?",
    answers: [
      {text: "var", correct:false},
      {text: "let", correct:false},
      {text: "make", correct:true},
      {text: "const", correct:false}
    ]
  },
  {
    question: "Which symbols enclose an object?",
    answers: [
      {text: "{}", correct:true},
      {text: "//", correct:false},
      {text: "[]", correct:false},
      {text: "()", correct:false}
    ]
  },
  {
    question: "Which symbols enclose an array?",
    answers: [
      {text: "{}", correct:false},
      {text: "//", correct:false},
      {text: "[]", correct:true},
      {text: "()", correct:false}
    ]
  },
  {
    question: "Math.random(); will return a number:",
    answers: [
      {text: "between 1 & 10", correct:false},
      {text: "that is >=0 and <1", correct:true},
      {text: "between -100 and 100", correct:false},
      {text: "that is >=0 and <=1"}
    ]
  },
  {
    question: "Arrays in Javascript can be used to store:",
    answers: [
      {text: "Numbers and strings", correct:false},
      {text: "Other arrays", correct:false},
      {text: "Booleans", correct:false},
      {text: "All of the above", correct:true}
    ]
  },
  {
    question: "The Javascript arithmetic operator '*' means:",
    answer: [
      {text: "Addition", correct:false},
      {text: "Subtraction", correct:false},
      {text: "Multiplication", correct:true},
      {text: "Division", correct:false}
    ]
  },
  {
    question: "In Javascript which symbol assigns meaning to a variable?",
    answer: [
      {text: "=", correct:true},
      {text: "==", correct:false},
      {text: "===", correct:false},
      {text: "%", correct:false}
    ]
  }
];

function quizQuestions() {
  h1El.classList.add("hide");
  introTextEl.classList.add("hide");
};

function startQuiz() {
  console.log("start");
  startBtn.classList.add("hide");
  setInterval(timerRun, 1000);
  timerRun();
  //quizQuestions();
};

startBtn.addEventListener("click", startQuiz);