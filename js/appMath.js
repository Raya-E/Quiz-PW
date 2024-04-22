
const questions = [
    {
        question: "Quanto é 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Quanto é 10 - 5?",
        options: ["2", "3", "4", "5"],
        answer: "5"
    },
    {
        question: "Quanto é 3 * 3?",
        options: ["6", "7", "8", "9"],
        answer: "9"
    },
    {
        question: "Quanto é 20 / 5?",
        options: ["2", "3", "4", "5"],
        answer: "4"
    },
    {
        question: "Quanto é 15 % 4?",
        options: ["1", "2", "3", "4"],
        answer: "3"
    }
];


let currentQuestion = 0;
let score = 0;


function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");

    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = '';

   
    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", function() {
            checkAnswer(option);
        });
        optionsElement.appendChild(button);
    });

    resultElement.textContent = '';
}


function checkAnswer(option) {
    const correctAnswer = questions[currentQuestion].answer;
    const resultElement = document.getElementById("result");

    if (option === correctAnswer) {
        resultElement.textContent = 'Resposta correta!';
        score++;
    } else {
        resultElement.textContent = `Resposta incorreta! A resposta correta é ${correctAnswer}.`;
    }

  
    const optionButtons = document.querySelectorAll("#options button");
    optionButtons.forEach(button => {
        button.disabled = true;
    });

   
    const nextButton = document.getElementById("nextButton");
    nextButton.style.display = 'block';

    // Se for a última pergunta, exibir botão de refazer
    if (currentQuestion === questions.length - 1) {
        const restartButton = document.getElementById("restartButton");
        restartButton.style.display = 'block';
    }
}


function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
        
        const nextButton = document.getElementById("nextButton");
        nextButton.style.display = 'none';
    } else {
        showResult();
    }
}


function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
    const restartButton = document.getElementById("restartButton");
    restartButton.style.display = 'none';
}


function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
}


document.getElementById("nextButton").addEventListener("click", nextQuestion);


document.getElementById("restartButton").addEventListener("click", restartQuiz);


displayQuestion();
