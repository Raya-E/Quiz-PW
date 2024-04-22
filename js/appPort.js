
const questions = [
    {
        question: "Qual é o antônimo da palavra 'feliz'?",
        options: ["Triste", "Grande", "Rápido", "Bonito"],
        answer: "Triste"
    },
    {
        question: "O que é um sinônimo para a palavra 'rápido'?",
        options: ["Devagar", "Lento", "Ágil", "Tardio"],
        answer: "Ágil"
    },
    {
        question: "Qual é o plural da palavra 'cachorro'",
        options: ["Cachorra", "Cachorros", "Cadela", "Cachorrão"],
        answer: "cachorros"
    },
    {
        question: "Identifique o Verbo?",
        options: ["Espelho", "Caneta", "Cabelo", "Ir"],
        answer: "Ir"
    },
    {
        question: "Identifique o Adjetivo ",
        options: ["Correr", "Livro", "Pequeno", "Caderno"],
        answer: "Pequeno"
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
