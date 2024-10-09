const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let questions = [];

// Cargar preguntas desde el archivo JSON
fetch('./data/adivinanzas.json')
    .then(response => {
        if (!response.ok) throw new Error('Error al cargar el archivo JSON');
        return response.json();
    })
    .then(data => {
        questions = data;
        showQuestion(questions[currentQuestionIndex]);
    })
    .catch(error => {
        questionContainer.innerHTML = 'Error al cargar las preguntas.';
        console.error('Error:', error);
    });

function showQuestion(question) {
    questionContainer.innerText = question.pregunta;
    answerButtons.innerHTML = '';

    question.respuestas.forEach(respuesta => {
        const button = document.createElement('button');
        button.innerText = respuesta.texto;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(respuesta.correcta));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(correct) {
    if (correct) {
        questionContainer.innerText = '¡Correcto!';
    } else {
        questionContainer.innerText = 'Incorrecto. Intenta otra vez.';
    }
    nextButton.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hide');
    } else {
        questionContainer.innerText = '¡Has terminado la trivia!';
        nextButton.classList.add('hide');
    }
});
