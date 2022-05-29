const startBtn = document.querySelector("#start-button");
var timerEl = document.getElementById("timer");
var time = 75;

var h1El = document.querySelector("h1");
var introAnswersEl = document.getElementById("intro-answers");
var upperEl = document.getElementById("upper");
var middleEl = document.getElementById("middle");
var lowerEl = document.getElementById("lower");
var lowerLowerEl = document.getElementById("lower-lower");
var option1BtnEl = document.getElementById("option1-btn");
var option2BtnEl = document.getElementById("option2-btn");
var option3BtnEl = document.getElementById("option3-btn");
var option4BtnEl = document.getElementById("option4-btn");
var hsListDivEl = document.getElementById("hs-list");
var viewHSBtn = document.getElementById("view-hs");
var hsTitleEl = document.getElementById("hs-title");
var playAgainBtn = document.getElementById("play-again");
var submitBtnEl = document.getElementById("submit-btn");

document.createElement("p");
var lowerPEl = document.createElement("p");
lowerPEl.className = "correct-incorrect";

introAnswersEl.addEventListener("click", selectedAnswer);

var currentQuestionIndex = 0;

//Timer functions

function timeBegin() {
  const runTime = setInterval(timerRun, 1000);
  function timerRun() {
      timerEl.textContent = "Time: " + time;
      time--;
    
    if (currentQuestionIndex === questionArray.length) {
      clearInterval(runTime);
      timerEl.textContent = "Time: " + time;
      return time;
    }
    else if (time === 0) {
      clearInterval(runTime);
      timerEl.textContent = "Time: " + time;
      endQuiz();
      return time;
    }
  }
};

//Subtract 10 seconds from time for wrong answers
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
      {text: " { } ", correct:true},
      {text: " // ", correct:false},
      {text: " [ ] ", correct:false},
      {text: " ( ) ", correct:false}
    ]
  }, 
  {
    question: "Math.random(); will return a number:",
    answers: [
      {text: "between 1 & 10", correct:false},
      {text: "that is >=0 and <1", correct:true},
      {text: "between -100 and 100", correct:false},
      {text: "that is >=0 and <=1", correct:false}
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
  question: "Which symbols enclose an array?",
    answers: [
      {text: " { } ", correct:false},
      {text: " // ", correct:false},
      {text: " [ ] ", correct:true},
      {text: " ( ) ", correct:false}
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

function clearStorage() {
  localStorage.clear();
  hsListDivEl.className = "hide";
};

function highScoreCard(scores) {
  var scoreListEl = document.createElement("ol");
  hsListDivEl.appendChild(scoreListEl);
  scoreListEl.className = "hs-list";

  const storageScores = localStorage.getItem("scores");
  const scoresArray = JSON.parse(storageScores);
  
  scoresArray.forEach(function(e) {
    var hsListEl1 = document.createElement("li");
    hsListDivEl.appendChild(hsListEl1);
    hsListEl1.className = "hs-list-item";
    hsListEl1.textContent = `${e.initials} ${e.score}`;
  });
  hsTitleEl.classList.remove("hide");

  var clearScores = document.createElement("button");
  clearScores.textContent = "Clear Score List";
  hsListDivEl.appendChild(clearScores);
  clearScores.className = "btn";
  clearScores.addEventListener("click", clearStorage);
};

 function setHighScores(initials, score) {
  const storageScores = localStorage.getItem("scores");
  const item = {initials: initials, score: score};
  
  if (storageScores === null) {
    localStorage.setItem("scores", JSON.stringify([item]));
  } else {
    var scoresArray = JSON.parse(storageScores);
    console.log(scoresArray);
    scoresArray.push(item);
    scoresArray.sort(function(a,b) {
      return b.score - a.score;
    });
    scoresArray.length = (scoresArray.length < 3) ? scoresArray.length : 3;
    console.log(scoresArray);
    localStorage.setItem("scores", JSON.stringify(scoresArray));
  }
 };

function highScores(event, inputText) {
  event.preventDefault();
  var initialInput = document.querySelector("input[name='initials']").value;
  console.log(initialInput + ", " + time);
  var playerScore = time;
  lowerLowerEl.className = "hide";
  playAgainBtn.classList.remove("hide");
  playAgainBtn.className = "btn";
  setHighScores(initialInput, playerScore);
  highScoreCard();
};

function saveScore() {
  var inputFormEl = document.getElementById("lower-lower");
  inputFormEl.className = "input-form";
};

function setScore() {
  introAnswersEl.className = "hide";
  timerEl.className = "hide";
  h1El.textContent = "All done! Your final score is " + time + ".";
  saveScore();
};

function endQuiz() {
  setTimeout(setScore, 1000);
};

function eraseLowerPEl() {
  lowerPEl.textContent = "";
};

function selectedAnswer(e) {
  var answer = e.target;
  var answer = answer.correct;

  if (answer === true) {
    lowerPEl.textContent = "Correct!";
    setTimeout(eraseLowerPEl, 500);
    
  }
  else if (answer === false) {
    loseTime();
    lowerPEl.textContent = "Incorrect!";
    setTimeout(eraseLowerPEl, 500); 
  }

  currentQuestionIndex++;

  if (currentQuestionIndex === questionArray.length) {
    endQuiz();
  }
  else {
  quizQuestions(currentQuestionIndex);
  }
};

function quizQuestions(questionIndex) {
    //display question
      h1El.textContent = questionArray[questionIndex].question;
    //display answers
      option1BtnEl.textContent = questionArray[questionIndex].answers[0].text;
      option1BtnEl.correct = questionArray[questionIndex].answers[0].correct;

      option2BtnEl.textContent = questionArray[questionIndex].answers[1].text;
      option2BtnEl.correct = questionArray[questionIndex].answers[1].correct;

      option3BtnEl.textContent = questionArray[questionIndex].answers[2].text;
      option3BtnEl.correct = questionArray[questionIndex].answers[2].correct;

      option4BtnEl.textContent = questionArray[questionIndex].answers[3].text;
      option4BtnEl.correct = questionArray[questionIndex].answers[3].correct;
};
  
function startQuiz() {
  console.log("start");
  startBtn.classList.add("hide");
  lowerEl.appendChild(lowerPEl);
  timeBegin();
  option1BtnEl.className = "answer-btns";
  option2BtnEl.className = "answer-btns";
  option3BtnEl.className = "answer-btns";
  option4BtnEl.className = "answer-btns";
  quizQuestions(currentQuestionIndex);
};


startBtn.addEventListener("click", startQuiz);
submitBtnEl.addEventListener("click", highScores);
