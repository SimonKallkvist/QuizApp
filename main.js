// -_-

// Question array
let questions = [
    {
      question: 'The largest planet in our solar system is:',
      answers: ['Earth', 'Jupiter', 'Mars'],
      rightAnswer: ['Jupiter'],
      typeOfQuestion: 'radio'
    },
    {
      question: 'The Milky Way is a galaxy that contains our solar system. (True/False)',
      answers: ['True', 'False'],
      rightAnswer: ['True'],
      typeOfQuestion: 'trueOrFalse'
    },
    {
      question: 'Which of the following are gas giants? (Select all that apply)',
      answers: ['Mercury', 'Venus', 'Jupiter', 'Saturn', 'Mars'],
      rightAnswer: ['Jupiter', 'Saturn'],
      typeOfQuestion: 'checkbox'
    },
    {
      question: 'The closest galaxy to the Milky Way is:',
      answers: ['Andromeda Galaxy', 'Triangulum Galaxy', 'Whirlpool Galaxy'],
      rightAnswer: ['Andromeda Galaxy'],
      typeOfQuestion: 'radio'
    },
    {
      question: 'A light-year is a unit of time. (True/False)',
      answers: ['True', 'False'],
      rightAnswer: ['False'],
      typeOfQuestion: 'trueOrFalse'
    },
    {
      question: 'Which planet is known as the "Red Planet"?',
      answers: ['Mars', 'Venus', 'Jupiter'],
      rightAnswer: ['Mars'],
      typeOfQuestion: 'radio'
    },
    {
      question: 'The asteroid belt is located between which two planets? (Select all that apply)',
      answers: ['Earth and Mars', 'Mars and Jupiter', 'Jupiter and Saturn'],
      rightAnswer: ['Mars and Jupiter'],
      typeOfQuestion: 'radio'
    },
    {
      question: 'The Hubble Space Telescope is named after the famous scientist Edwin Hubble. (True/False)',
      answers: ['True', 'False'],
      rightAnswer: ['True'],
      typeOfQuestion: 'trueOrFalse'
    },
    {
      question: 'Which moon is known for its geysers of water vapor? (Select all that apply)',
      answers: ['Europa', 'Ganymede', 'Enceladus', 'Io'],
      rightAnswer: ['Enceladus'],
      typeOfQuestion: 'radio'
    },
    {
      question: 'The Great Red Spot is a storm on which planet?',
      answers: ['Jupiter', 'Saturn', 'Neptune'],
      rightAnswer: ['Jupiter'],
      typeOfQuestion: 'radio'
    },
    {
      question: 'A comet is primarily composed of:',
      answers: ['Rock and Metal', 'Ice and Dust', 'Gas and Plasma'],
      rightAnswer: ['Ice and Dust'],
      typeOfQuestion: 'radio'
    },
    {
      question: 'Pluto is classified as a dwarf planet. (True/False)',
      answers: ['True', 'False'],
      rightAnswer: ['True'],
      typeOfQuestion: 'trueOrFalse'
    },
    {
      question: 'Which planet is known for its beautiful ring system?',
      answers: ['Saturn', 'Jupiter', 'Uranus', 'Pluto'],
      rightAnswer: ['Saturn'],
      typeOfQuestion: 'radio'
    },
    {
      question: 'The Oort Cloud is a region of space that contains primarily:',
      answers: ['Comets', 'Asteroids', 'Dwarf Planets'],
      rightAnswer: ['Comets'],
      typeOfQuestion: 'radio'
    },
    {
      question: 'The sun is a: (Select all that apply)',
      answers: ['Star', 'Planet', 'Moon', 'Asteroid'],
      rightAnswer: ['Star'],
      typeOfQuestion: 'radio'
    },
    {
      question: 'The first human to walk on the moon was:',
      answers: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin'],
      rightAnswer: ['Neil Armstrong'],
      typeOfQuestion: 'radio'
    },
    {
      question: 'Black holes emit light. (True/False)',
      answers: ['True', 'False'],
      rightAnswer: ['False'],
      typeOfQuestion: 'trueOrFalse'
    },
    {
      question: 'Which of the following are considered "rocky" or "terrestrial" planets? (Select all that apply)',
      answers: ['Earth', 'Jupiter', 'Mars', 'Venus'],
      rightAnswer: ['Earth', 'Mars', 'Venus'],
      typeOfQuestion: 'checkbox'
    },
    {
      question: 'The International Space Station (ISS) orbits the moon. (True/False)',
      answers: ['True', 'False'],
      rightAnswer: ['False'],
      typeOfQuestion: 'trueOrFalse'
    }
  ];
// -_-

//   Global declaration of the begin buttons
let startQuizBtn = document.getElementById('startQuiz');
let nextBtn = document.getElementById('nextBtn');
// -_-

// Global declaration of elments from the DOM
let answerBox = document.getElementById('answerChoices');
let questionShow = document.getElementById('theQuestion');

 // Global declaration of questionIndex and scoreCounter.
 let questionIndex = 0;
 let scoreCounter = 0;
// -_-


// Changing from begin slide to the "instructions slide"
startQuizBtn.addEventListener('click', () => {
    // Targeting the welcome slide and setting a timer on its vanishing
    let helloThere = document.querySelector('.helloThere');
    helloThere.style.scale = '0';
    setTimeout(function(){
        helloThere.style.display = 'none'
   },200); 
   
   //targeting the main quiz window and displaying the "rules"
    let quizApp = document.querySelector('.quizApp'); 
    quizApp.style.display = 'block';
    setTimeout(function(){
        quizApp.style.scale = '1';     
   },500); 
   
});
// -_-

// Setting initial values before quiz start
function startQuiz() {
    questionIndex = 0;
    scoreCounter = 0;
    nextBtn.innerHTML = 'Next';
    showQuestions();
}
// -_-

// Listening to the next button
nextBtn.addEventListener('click', () => {
    if (questionIndex < questions.length){
        alert('Hej')
    }else{
        alert('nåt gick fel')
    }
});
// -_-

// Funktion för att visa frågorna.
function showQuestions(){
    resetQuestionBox();

    // Declaring the question and number.
    let currentQuestion = questions[questionIndex];
    let currentQuestionNum = currentQuestion + 1;
    // -_-

    // setting the value of the h2 to the question and number
    questionShow.innerHTML = currentQuestionNum + '. ' + currentQuestion.question;

    // looping and appending the answers to the answer box
    currentQuestion.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerHTML = answer;
        button.classList.add('btn');
        button.classList.add('btnAnswers');
        answerBox.appendChild(button);
    });
}
// -_-

//Funktion för att ta bort next knapp innan svar är givet!
function resetQuestionBox(){
    nextBtn.style.display = 'none';
    while(answerBox.firstChild){
        answerBox.removeChild(answerBox.firstChild);
    }
}
// -_-

startQuiz();