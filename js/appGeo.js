
const questions = [
    {
        question: "Qual o maior continente do mundo em área terrestre?",
        options: ["África", "Ásia", "America do Sul", "Europa"],
        answer: "Ásia"
    },
    {
        question: "Qual país banhado por três oceanos: Atlântico, Pacífico e Índico?",
        options: ["Senegal", "Brasil", "Austrália", "Japão"],
        answer: "Austrália"
    },
    {
        question: "Qual o rio mais longo do mundo?",
        options: ["Amazonas", "Nilo", "Tigre", "Eufrates"],
        answer: "Amazonas"
    },
    {
        question: " Qual o país com maior população do mundo?",
        options: ["Indonésia", "EUA", "China", "Índia"],
        answer: "Índia"
    },
    {
        question: "Qual o pico mais alto do mundo?",
        options: ["Monte Fuji", "Monte Everest", "Monte Elbrus", "Monte Roraima"],
        answer: "Monte Everest"
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
