var clickBtn = document.getElementById('click');
var divContainer = document.getElementById('container');

var index = 0;
// var lyrics = ['I', 'Think', 'I', 'Love', 'You'];

var questions = [
    {
        questionTitle: 'What house is Harry Potter in?',
        questionChoices: ['Slytherin','Hufflepuff','Gryffindor','Ravenclaw'],
        answer: 2
    },
    {
        questionTitle: 'What is Voldemorts real name?',
        questionChoices: ['Sam Smith', 'Hickory Rain', 'Tom Riddle', 'Aram Joke'],
        answer: 3
    },
    {
        questionTitle: 'Who anonymously sends Harry the Invisibility Cloak on Christmas',
        questionChoices: ['Severus Snape','Voldemort', 'Dumbledore', 'Ron Weasley'],
        answer: 4
    },
    {
        questionTitle: 'How many staircases does Hogwarts have',
        questionChoices: [120,155,142,180],
        answer: 142
    },
    {
        questionTitle: 'What is Rons middle name?',
        questionChoices: ['Bilius','Harry','Rinkle','William'],
        answer: 6
    }
]

function start() {
    divContainer.innerHTML = '';
    // create h1 
    var h1El = document.createElement('h1')

    // add questionTitle to the h1
    h1El.textContent = questions[index].questionTitle
        
    // hide the clickBtn
    clickBtn.classList.add('hide')
    
    // create the container for the choices buttons
    var btnContainer = document.createElement('div')
    
    // create buttons using the questions array
    for (var i = 0; i < questions[index].questionChoices.length; i++) {
        //  create button
        var btn = document.createElement('button');
        
        // add the contet to the button
        btn.textContent = questions[index].questionChoices[i]
        
        // set a custom attibute to the button to target the click
        btn.setAttribute('value', questions[index].questionChoices[i])
        
        btn.addEventListener('click', checkForAnswer)
        // append the button to the btnContainer
        btnContainer.append(btn)
    }
    
    // append h1 to divContainer
    divContainer.append(h1El, btnContainer)
}

function checkForAnswer(event){
    console.log(event.target.value);

    index++;

    if(questions.length === index){
        console.log('over');
    }else{
        start()
    }
}

clickBtn.addEventListener('click', start)