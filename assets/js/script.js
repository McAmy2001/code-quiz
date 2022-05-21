const startBtn = document.querySelector("#start-button");
var timerEl = document.getElementById("timer");
var time = 75;

setInterval(timerRun, 1000);

function stopTimer() {
  clearInterval(timerRun);
};
function timerRun() {
  if(time > 0) {

    timerEl.textContent = "Time: " + time;
    time--;
  }
  else {
    stopTimer();
    timerEl.textContent = "Time: 0";
  }
  
};
timerRun();


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
]

//setInterval(startTimer, 1000);
//let startTimer = function() {
  //timerEl.textContent = "Time:" + time;
//}

function startQuiz() {
  console.log("start");
  startBtn.classList.add("hide");
  //startTimer();
}

startBtn.addEventListener("click", startQuiz);