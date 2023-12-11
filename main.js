// -_-

// Question array
let questions = [
    {
      question:
        "The Milky Way is a galaxy that contains our solar system. (True/False)",
      answers: [
        { text: "True", correct: true },
        { text: "False", correct: false },
      ],
      typeOfQuestion: "trueOrFalse",
    },
    {
      question: "The largest planet in our solar system is:",
      answers: [
        { text: "Earth", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Saturn", correct: false },
      ],
      typeOfQuestion: "radio",
     }
    ,
    {
      question: "Which of the following are gas giants? (Select all that apply)",
      answers: [
        { text: "Mercury", correct: false },
        { text: "Venus", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Saturn", correct: true },
        { text: "Mars", correct: false },
      ],
      typeOfQuestion: "checkbox",
     },
     {
      question: "The closest galaxy to the Milky Way is:",
      answers: [
        { text: "Andromeda Galaxy", correct: true },
        { text: "Triangulum Galaxy", correct: false },
        { text: "Whirlpool Galaxy", correct: false },
      ],
      typeOfQuestion: "radio",
    },
    {
      question: "A light-year is a unit of time. (True/False)",
      answers: [
        { text: "True", correct: false },
        { text: "False", correct: true },
      ],
      typeOfQuestion: "trueOrFalse",
    },
    {
      question: 'Which planet is known as the "Red Planet"?',
      answers: [
        { text: "Mars", correct: true },
        { text: "Venus", correct: false },
        { text: "Jupiter", correct: false },
      ],
      typeOfQuestion: "radio",
    },
    {
      question:
        "The asteroid belt is located between which two planets? (Select all that apply)",
      answers: [
        { text: "Earth and Mars", correct: false },
        { text: "Mars and Jupiter", correct: true },
        { text: "Jupiter and Saturn", correct: false },
      ],
      typeOfQuestion: "radio",
    }
    ,
    {
      question:
        "The Hubble Space Telescope is named after the famous scientist Edwin Hubble. (True/False)",
      answers: [
        { text: "True", correct: true },
        { text: "False", correct: false },
      ],
      typeOfQuestion: "trueOrFalse",
    },
    {
      question:
        "Which moon is known for its geysers of water vapor? (Select all that apply)",
      answers: [
        { text: "Europa", correct: false },
        { text: "Ganymede", correct: false },
        { text: "Enceladus", correct: true },
        { text: "Io", correct: false },
      ],
      typeOfQuestion: "radio",
    },
    {
      question: "The Great Red Spot is a storm on which planet?",
      answers: [
        { text: "Jupiter", correct: true },
        { text: "Saturn", correct: false },
        { text: "Neptune", correct: false },
      ],
      typeOfQuestion: "radio",
    },
    {
      question: "A comet is primarily composed of:",
      answers: [
        { text: "Rock and Metal", correct: false },
        { text: "Ice and Dust", correct: true },
        { text: "Gas and Plasma", correct: false },
      ],
      typeOfQuestion: "radio",
    },
    {
      question: "Pluto is classified as a dwarf planet. (True/False)",
      answers: [
        { text: "True", correct: true },
        { text: "False", correct: false },
      ],
      typeOfQuestion: "trueOrFalse",
    },
    {
      question: "Which planet is known for its beautiful ring system?",
      answers: [
        { text: "Saturn", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Uranus", correct: false },
        { text: "Pluto", correct: false },
      ],
      typeOfQuestion: "radio",
    },
    {
      question: "The Oort Cloud is a region of space that contains primarily:",
      answers: [
        { text: "Comets", correct: true },
        { text: "Asteroids", correct: false },
        { text: "Dwarf Planets", correct: false },
      ],
      typeOfQuestion: "radio",
    },
    {
      question: "The sun is a: (Select all that apply)",
      answers: [
        { text: "Planet", correct: false },
        { text: "Moon", correct: false },
        { text: "Star", correct: true },
        { text: "Asteroid", correct: false },
      ],
      typeOfQuestion: "radio",
    },
    {
      question: "The first human to walk on the moon was:",
      answers: [
        { text: "Buzz Aldrin", correct: false },
        { text: "Neil Armstrong", correct: true },
        { text: "Yuri Gagarin", correct: false },
      ],
      typeOfQuestion: "radio",
    },
    {
      question: "Black holes emit light. (True/False)",
      answers: [
        { text: "True", correct: false },
        { text: "False", correct: true },
      ],
      typeOfQuestion: "trueOrFalse",
    },
    {
      question:
        'Which of the following are considered "rocky" or "terrestrial" planets? (Select all that apply)',
      answers: [
        { text: "Earth", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Pluto", correct: false },
        { text: "Venus", correct: true },
      ],
      typeOfQuestion: "checkbox",
    },
    {
      question:
        "The International Space Station (ISS) orbits the moon. (True/False)",
      answers: [
        { text: "True", correct: false },
        { text: "False", correct: true },
      ],
      typeOfQuestion: "trueOrFalse",
    }
  ];
  // -_-
  
  //   Global declaration of the begin buttons
  let startQuizBtn = document.getElementById("startQuiz");
  let nextBtn = document.getElementById("nextBtn");
  // -_-
  
  // Global declaration of elments from the DOM
  let answerBox = document.getElementById("answerChoices");
  let questionShow = document.getElementById("theQuestion");
  
  // Global declaration of questionIndex and scoreCounter and checkboxes and Lists
  let questionIndex = 0;
  let scoreCounter = 0;
  
//   Declaring a array for the checking of correct checkbox answears
  let checkedCheckboxes = []
  // -_-

    //   Declaring an array for storing the answers and printing when quiz finish
  let answerResult = [];
  // -_-

  // Creatijng the ul list which will be used for showing the reuslts.
  let newUl = document.createElement('ul');
  newUl.classList.add('resultList');
  // -_-
  
  // Changing from begin slide to the "instructions slide"
  startQuizBtn.addEventListener("click", () => {
    // Targeting the welcome slide and setting a timer on its vanishing
    let helloThere = document.querySelector(".helloThere");
    helloThere.style.scale = "0";
    setTimeout(function () {
      helloThere.style.display = "none";
    }, 200);
  
    //targeting the main quiz window and displaying the "rules"
    let quizApp = document.querySelector(".quizApp");
    quizApp.style.display = "block";
    setTimeout(function () {
      quizApp.style.scale = "1";
    }, 500);
  });
  // -_-
  
  // Setting initial values before quiz start
  function startQuiz() {
    questionIndex = 0;
    scoreCounter = 0;
    nextBtn.innerHTML = "Next";
    newUl.innerHTML = '';
    showQuestions();
  }
  // -_-
  
  // Funktion för att visa frågorna.
  function showQuestions() {
    resetQuestionBox();
    // Declaring the question and number.
    let currentQuestion = questions[questionIndex];
    let currentQuestionNum = questionIndex + 1;
    // -_-
    
    //Pushing the current question to an new array for checking and printing answers later in showScore
    answerResult.push({currentQuestionNum, currentQuestion});
    // -_-

    // setting the value of the h 2 to the question and number
    questionShow.innerHTML = currentQuestionNum + ". " + currentQuestion.question;
    // -_-

    // Checking what type of question and calling the respective function.
    if (currentQuestion.typeOfQuestion === "trueOrFalse") {
      drawTrueFalse(currentQuestion.answers);
    } else if (currentQuestion.typeOfQuestion === "radio") {
      drawRadio(currentQuestion.answers);
    }  else {
      drawCheckbox(currentQuestion.answers);
    }
  }
  // -_-
  
  //Function removeing old stuff and btn
  function resetQuestionBox() {
    nextBtn.style.display = "none";
    while (answerBox.firstChild) {
      answerBox.removeChild(answerBox.firstChild);
    }
  }
  // -_-
  
  // Print True or Fasle QuestionS
  function drawTrueFalse(question) {
    // looping and appending the answers to the answer box
    question.forEach((answer) => {
      let button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      button.classList.add("btnAnswers");
      answerBox.appendChild(button);
  
      // Check if right answer is choosen and adding a data-set to the button
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      // -_-
    });
    // -_-
  }
  // -_-
  
  // Print radio questions
  function drawRadio(question) {
   
    question.forEach((answer) => {
   
      let radioBtn = document.createElement("input");
      radioBtn.type = "radio";
      radioBtn.name = "radioGroup";
      radioBtn.value = answer.text;
      let radioLabel = document.createElement("label");
  
      radioLabel.appendChild(radioBtn);
      radioLabel.appendChild(document.createTextNode(answer.text));
  
      answerBox.appendChild(radioLabel);
  
      // Check if right answer ios choosen and adding a data set to the radio btn.
      if (answer.correct) {
        radioBtn.dataset.correct = answer.correct;
      }
      radioBtn.addEventListener("click", selectAnswer);
      // -_-
    });
  }
  // -_-
  
  // Print Checkbox questions
  function drawCheckbox(question) {
    // Looping and creating the checkbox answer choices.
    question.forEach((answer) => {
      let checkBtn = document.createElement("input");
      checkBtn.type = "checkbox";
      checkBtn.name = "checkGroup";
      checkBtn.value = answer.text;
      let checkLabel = document.createElement("label");
      checkLabel.appendChild(checkBtn);
      checkLabel.appendChild(document.createTextNode(answer.text));
      answerBox.appendChild(checkLabel);

      // Check if right answer ios choosen and adding the correct data set to the checkbox
      if (answer.correct) {
        checkBtn.dataset.correct = answer.correct;
      }
      // -_-

      checkBtn.addEventListener("click", selectAnswer);
      // -_-
    });
  }
  // -_-
  
  // Check Answer and show next button
  function selectAnswer(e) {
    let selected = e.target;
    let correctAnswer = selected.dataset.correct === "true";
    selected.classList.toggle("choosen");
    console.log(answerResult);
    // Checking what kind of question was answerd and pushing the value to the answerResult array and adding score to scoreCounter
    if (
      correctAnswer &&
      !answerChoices.firstChild.innerHTML.includes("checkbox")
    ) {
      scoreCounter++;
      answerResult[questionIndex].correctAnswer = true;
    } else if (answerChoices.firstChild.innerHTML.includes("checkbox")) {

        // Finding all the cheked checkboxes
        checkedCheckboxes = Array.from(document.querySelectorAll('input[name=checkGroup]:checked'));
        // -_-
        
    // -_-

    }
    // Add disable classes for buttons that is not checkbox
    if (!answerChoices.firstChild.innerHTML.includes("checkbox")) {
      Array.from(answerChoices.children).forEach((child) => {
        child.classList.add("disabled");
      });
    }
    // -_-

    //Dispaly Next button
    nextBtn.style.display = "block";
  // -_-

  }
  //-_-
  
  // Handel on click of next Btn
  
  nextBtn.addEventListener("click", () => {
    if (questionIndex < questions.length) {
      nextQuestion();
      if(checkedCheckboxes.length > 0){
        givePointsForCheckbox(checkedCheckboxes);
        checkedCheckboxes = [];
        }
    } else { 
      startQuiz();
      questionShow.removeAttribute('style');
    }
  });
  
  // -_-
  
  // Start the new question
  function nextQuestion() {
    questionIndex++;
    if (questionIndex < questions.length) {
      showQuestions();
      
      
    } else {
      showScore();
    }
  }
  // -_-
  
  // Reveal Score at the end
  function showScore() {
    resetQuestionBox();
    questionShow.innerHTML = `You scored a ${scoreCounter} out of ${questions.length} possible!`;
    if(scoreCounter >= (questions.length)*.9){
        questionShow.style.background = 'green';
    }else if(scoreCounter <= (questions.length)*.75 && scoreCounter >= (questions.length)*.5){
        questionShow.style.background = 'orange';
    }else {
        questionShow.style.background = 'red';
    }
    // console.log(answerResult);

    answerResult.forEach((x) => {
        let newLi = document.createElement('li');
        let liP = document.createElement('p');
        let pText = document.createTextNode(x.currentQuestionNum +'. ' +  x.currentQuestion.question + "The right answer is: ");
       x.currentQuestion.answers.forEach((answer) => {
        if(answer.correct){
            let correctNess = answer.text;
            console.log(correctNess);
            pText.textContent += correctNess + " ";
        }
       });
        // console.log(x.currentQuestion.answers);
        liP.appendChild(pText);
        newLi.append(liP);
        newUl.appendChild(newLi);
        if(x.correctAnswer){
            newLi.style.background = 'green';
        }else {
            newLi.style.background = 'red';
        }
    });
    // console.log(answerResult);
    answerBox.appendChild(newUl);
   
    nextBtn.innerHTML = "Play Again?";
    nextBtn.style.display = "block";
    answerResult = [];
    
    
  }
  // -_-


  // Funciton for giving points on checkboxes
  function givePointsForCheckbox(checkbox){
    let whatEver = [];
   
    checkbox.forEach((box) => {
            whatEver.push(box.attributes[3].value);
    })

    let checker = (element) => element === "true";
    let realPointorNot = whatEver.every(checker);

    if(realPointorNot && whatEver.length > 1){
        answerResult[questionIndex-1].correctAnswer = true; /* Fattar inte riktigt detta själv... */
        scoreCounter++;
        console.log(answerResult);
    }

  };

  // -_-

  // Handelr of darkMode
  let darkMode = document.querySelector('#darkMode');
  let quizBg = document.querySelector('.quizBg');

  darkMode.addEventListener('click', () => {
    document.body.classList.toggle('darkMode');
    quizBg.classList.toggle('quizBgDarkMode');
    if(darkMode.innerHTML.includes('sun')){
    darkMode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
}else {
    darkMode.innerHTML = `<i class="fa-solid fa-sun"></i>`;
}
  });
  // -_-
  
  startQuiz();