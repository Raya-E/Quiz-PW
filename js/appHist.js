// Definindo as perguntas, opções e respostas
const questions = [
    {
        question: "Em que ano foi o Final da Segunda Guerra Mundial?",
        options: ["1935", "1939", "1945", "1942"],
        answer: "1945"
    },
    {
        question: "Qual país foi o berço da civilização grega antiga?",
        options: ["Egito", "Itália", "Roma", "Grécia"],
        answer: "Grécia"
    },
    {
        question: "Qual evento marcou a Revolução Francesa?",
        options: ["Queda da Bastilha", "Coroação de Napoleão Bonaparte", "Guerra dos Sete Anos", "Congresso de Viena"],
        answer: "Queda da Bastilha"
    },
    {
        question: "Quando os portugueses chegaram ao Brasil?",
        options: ["1499", "1500", "1487", "1532"],
        answer: "1500"
    },
    {
        question: "Qual o país natal de Joana d'Arc? ",
        options: ["Brasil", "Holanda", "França", "Portugal"],
        answer: "França"
    }
];

// Definindo variáveis globais
let currentQuestion = 0;
let score = 0;

// Função para exibir a próxima pergunta
function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");

    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = '';

    // Exibir opções
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

// Função para verificar a resposta
function checkAnswer(option) {
    const correctAnswer = questions[currentQuestion].answer;
    const resultElement = document.getElementById("result");

    if (option === correctAnswer) {
        resultElement.textContent = 'Resposta correta!';
        score++;
    } else {
        resultElement.textContent = `Resposta incorreta! A resposta correta é ${correctAnswer}.`;
    }

    // Desabilitar todos os botões de opção
    const optionButtons = document.querySelectorAll("#options button");
    optionButtons.forEach(button => {
        button.disabled = true;
    });

    // Exibir botão de próxima pergunta
    const nextButton = document.getElementById("nextButton");
    nextButton.style.display = 'block';

    // Se for a última pergunta, exibir botão de refazer
    if (currentQuestion === questions.length - 1) {
        const restartButton = document.getElementById("restartButton");
        restartButton.style.display = 'block';
    }
}

// Função para avançar para a próxima pergunta
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
        // Esconder botão de próxima pergunta
        const nextButton = document.getElementById("nextButton");
        nextButton.style.display = 'none';
    } else {
        showResult();
    }
}

// Função para refazer o quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
    const restartButton = document.getElementById("restartButton");
    restartButton.style.display = 'none';
}

// Função para exibir o resultado
function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
}

// Event listener para o botão "Próxima Pergunta"
document.getElementById("nextButton").addEventListener("click", nextQuestion);

// Event listener para o botão "Refazer"
document.getElementById("restartButton").addEventListener("click", restartQuiz);

// Exibir a primeira pergunta ao carregar a página
displayQuestion();
