//selectors
const timeLeftDisplay = document.querySelector('#time-left')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex
let timeLeft = 10

// adds click function to start button and sets next question
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
//loop to randomize questions
function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    countDown()
    setNextQuestion()
}
//countdown timer
function countDown(){
    setInterval(function(){
        if(timeLeft <= 0 ){
            clearInterval(timeLeft = 0)
        }
        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -=1
    }, 1000)
}
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
//adds listeners to answers 
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button =document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct =answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
//resets games button removes nest button
function resetState(){ 
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function endGame(){
        resetState
        timerWords = 'Times Up'
}
//ends game 
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
    }else if(timeLeft<=0){
        endGame
    }
    else{
        startButton.innerText = 'game over'
        startButton.classList.remove('hide')
    }
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
//questions
const questions = [
    {
        question: 'If is the same as true, as else is the same as______?',
        answers: [
            {text: 'maybe', correct: false },
            {text: 'false', correct: true }
        ]
    },
    {
        question: 'If css is the same as the paint job on the car java is the____ of a car',
        answers: [
            {text: 'engine', correct: true },
            {text: 'windshield wipers', correct: false }
        ]
    },
    {
        question: 'Javascript _____ functions on the page.',
        answers: [
            {text: 'styles', correct: false },
            {text: 'Executes', correct: true }
        ]
    },
    {
        question: '_______is a programming language',
        answers: [
            {text: 'Javascript', correct: true },
            {text: 'Spanish', correct: false }
        ]
    }
]