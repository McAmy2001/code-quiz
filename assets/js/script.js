const startBtn = document.querySelector("#start-button");
var timerEl = document.getElementById("timer");
var time = 75;
var h1El = document.querySelector("h1");
var introAnswersEl = document.getElementById("intro-answers");
var upperEl = document.getElementById("upper");
var middleEl = document.getElementById("middle");
var lowerEl = document.getElementById("lower");
var option1BtnEl = document.getElementById("option1-btn");
var option2BtnEl = document.getElementById("option2-btn");
var option3BtnEl = document.getElementById("option3-btn");
var option4BtnEl = document.getElementById("option4-btn");


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


//Question & answer array
const questionArray = [
  {
    question: "Which tag links Javascript to an HTML file?",
    answers: [
      {text: "<script>", correct:true},
      {text: "<link>", correct:false},
      {text: "<javascript>", correct:false},
      {text: "<join>", correct:false}
    ]
  },
  {
    question: "Javascript statements end with which puncuation mark?",
    answers: [
      {text: "  :  ", correct:false},
      {text: "  ;  ", correct:true},
      {text: "  .  ", correct:false},
      {text: "  !  ", correct:false}
    ]
  },
  {
    question: "Javascript comments start with:",
    answers: [
      {text: "  <!  ", correct:false},
      {text: "  {  ", correct: false},
      {text: "  **  ", correct:false},
      {text: "  //  ", correct:true}
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
      {text: " {} ", correct:true},
      {text: " // ", correct:false},
      {text: " [] ", correct:false},
      {text: " () ", correct:false}
    ]
  },
  {
    question: "Which symbols enclose an array?",
    answers: [
      {text: " {} ", correct:false},
      {text: " // ", correct:false},
      {text: " [] ", correct:true},
      {text: " () ", correct:false}
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
   question: "The Javascript arithmetic operator * means:",
    answers: [
      {text: "Addition", correct:false},
      {text: "Subtraction", correct:false},
      {text: "Multiplication", correct:true},
      {text: "Division", correct:false}
    ]
  },
  {
    question: "In Javascript which symbol assigns meaning to a variable?",
    answers: [
      {text: "  =  ", correct:true},
      {text: "  ==  ", correct:false},
      {text: "  ===  ", correct:false},
      {text: "  %  ", correct:false}
    ]
  }
];

function selectedAnswer(e) {
  var answer = e.target;
  console.log(answer.correct);
  var answer = answer.correct;

  if (answer = true) {
    //nextQuestion();
    console.log("test");
    //return(true);
  }
  else if (answer = false) {
    //loseTime();
    //nextQuestion();
    console.log("loser test");
    //return(false);
  }

};


  //Remove intro heading and paragraph
  //h1El.remove();
  //introAnswersEl.remove();

  //Loop through question array

  function quizQuestions() {
    for (var i = 0; i < questionArray.length; i++) {
      nextQuestion();

    function nextQuestion() {

      h1El.textContent = questionArray[i].question;

      option1BtnEl.textContent = questionArray[i].answers[0].text;
      option1BtnEl.correct = questionArray[i].answers[0].correct;

      option2BtnEl.textContent = questionArray[i].answers[1].text;
      option2BtnEl.correct = questionArray[i].answers[1].correct;

      option3BtnEl.textContent = questionArray[i].answers[2].text;
      option3BtnEl.correct = questionArray[i].answers[2].correct;

      option4BtnEl.textContent = questionArray[i].answers[3].text;
      option4BtnEl.correct = questionArray[i].answers[3].correct;

      introAnswersEl.addEventListener("click", selectedAnswer);
      }
    }
  }; 
  


function startQuiz() {
  console.log("start");
  startBtn.classList.add("hide");
  setInterval(timerRun, 1000);
  timerRun();
  option1BtnEl.className = "answer-btns";
  option2BtnEl.className = "answer-btns";
  option3BtnEl.className = "answer-btns";
  option4BtnEl.className = "answer-btns";
  quizQuestions(questionArray);
};

startBtn.addEventListener("click", startQuiz);