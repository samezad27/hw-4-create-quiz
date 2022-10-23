var clickBtn = document.getElementById('click');
var divContainer = document.getElementById('container');
var timeContainerEl = document.querySelector('.time-left')
var timeEl = document.querySelector(".time");

var currentQuestionIndex = 0;
// var lyrics = ['I', 'Think', 'I', 'Love', 'You'];

var questions = [
    {
        questionTitle: 'What house is Harry Potter in?',
        questionChoices: ['Slytherin', 'Hufflepuff', 'Gryffindor', 'Ravenclaw'],
        answer: 2
    },
    {
        questionTitle: 'What is Voldemorts real name?',
        questionChoices: ['Sam Smith', 'Hickory Rain', 'Tom Riddle', 'Aram Joke'],
        answer: 2
    },
    {
        questionTitle: 'Who anonymously sends Harry the Invisibility Cloak on Christmas',
        questionChoices: ['Severus Snape', 'Voldemort', 'Dumbledore', 'Ron Weasley'],
        answer: 2
    },
    {
        questionTitle: 'How many staircases does Hogwarts have',
        questionChoices: [120, 155, 142, 180],
        answer: 2
    },
    {
        questionTitle: 'What is Rons middle name?',
        questionChoices: ['Bilius', 'Harry', 'Rinkle', 'William'],
        answer: 0
    }
];



var secondsLeft = 60;
var timerInterval;


var el = function(tag = 'div'){
    return document.createElement(tag)
}

function startTimer() {
    // Sets interval in variable
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            //call gameover logic
            gameOver()
        }

    }, 1000);
}

function appendQuestion() {
    divContainer.innerHTML = '';
    // create h1 
    var h1El = el('h1')

    var currentQuestion = questions[currentQuestionIndex];
    // add questionTitle to the h1
    h1El.textContent = currentQuestion.questionTitle

    // hide the clickBtn
    clickBtn.classList.add('hide')

    // create the container for the choices buttons
    var btnContainer = el()
    // create buttons using the questions array
    for (var i = 0; i < currentQuestion.questionChoices.length; i++) {
        //  create button
        var btn = el('button')

        // add the contet to the button
        btn.textContent = currentQuestion.questionChoices[i]

        // set a custom attibute to the button to target the click
        btn.setAttribute('value', currentQuestion.questionChoices[i])
        btn.setAttribute('data-correct', i === currentQuestion.answer)
        btn.addEventListener('click', checkForAnswer)
        // append the button to the btnContainer
        btnContainer.append(btn);

        // styling the button
        btn.classList.add("btn")
    }

    // append h1 to divContainer
    divContainer.append(h1El, btnContainer)
}

function checkForAnswer(event) {
    if (event.target.dataset.correct === "true") {
        // do correct here
        console.log("correct!")
    } else {
        // do incorrect ehre
        console.log("WRONG, deducting 10 seconds!");
        secondsLeft -= 10;
    }

    currentQuestionIndex++;
    if (questions.length === currentQuestionIndex) {
        gameOver()
    } else {
        appendQuestion()
    }
}

function start() {
    startTimer();
    appendQuestion();
}

function gameOver(){
    clearInterval(timerInterval);

    //hide the other shit
    timeContainerEl.classList.add('hide');

    // clear the div element
    divContainer.innerHTML = '';

    //create title elemetn
    var titleEl = el('h1')
    titleEl.textContent = 'Game Over! Your Score ----- ' + secondsLeft;
    divContainer.appendChild(titleEl);

//create input El
    var inputEl = el('input');
    inputEl.setAttribute("placeholder", "Please enter your email");
    inputEl.setAttribute("type", "email");
    divContainer.appendChild(inputEl)
    
    
    //create btn el
    var btnEl = el('button');
    btnEl.classList.add('btn');
    btnEl.textContent = "Submit";
    divContainer.appendChild(btnEl)

    btnEl.addEventListener('click', function(){
        //grab the value in the input el.
        console.log("YOUR INPUT --- ", inputEl.value)
        //save in localStorage
    })
    // propmt user for their email, make input el on page,
    //save to localStorage...
}


clickBtn.addEventListener('click', start)