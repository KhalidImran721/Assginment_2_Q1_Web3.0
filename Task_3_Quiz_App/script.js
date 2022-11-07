/* JavaScript Section of JavaScript Quiz App*/


const quizOpt = [
    {
        question: "What do you call a computer on a network that requests files from another computer?",
        option_a: "A client",
        option_b: "A host",
        option_c: "A router",
        option_d: "A web server",
        correct: "option_a"
    },

    {
        question: "Hardware devices that are often added later to the computer system are:",
        option_a: "Peripheral",
        option_b: "Clip art",
        option_c: "Highlight",
        option_d: "Execute",
        correct: "option_a"
    },

    {
        question: "Google is a:",
        option_a: "Number in Math",
        option_b: "Search Engine",
        option_c: "Directory of images",
        option_d: "Chat service on web",
        correct: "option_b"
    },

    {
        question: "Which one is not a computer language?",
        option_a: "JavaScript",
        option_b: "Python",
        option_c: "Window 98",
        option_d: "C#",
        correct: "option_c"
    },

    {
        question: "When the JavaScript was invented?",
        option_a: "1960",
        option_b: "1970",
        option_c: "1999",
        option_d: "1994",
        correct: "option_d"
    },

    
    {
        question: "What is CSS stands for?",
        option_a: "Compact Slide Sheet",
        option_b: "Casecading Style Sheet",
        option_c: "Comprase Style Sheet",
        option_d: "None of above",
        correct: "option_b"
    },

    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        option_a: "var",
        option_b: "let",
        option_c: "Both A and B",
        option_d: "None of above",
        correct: "option_c"
    },

    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        option_a: "document.write()",
        option_b: "console.log()",
        option_c: "window.alert()",
        option_d: "All of above",
        correct: "option_d"
    },

    {
        question: "How can a datatype be declared to be a constant type?",
        option_a: "const",
        option_b: "var",
        option_c: "let",
        option_d: "constant",
        correct: "option_a"
    },
    
    {
        question: "Which of the following is not a Javascript framework?",
        option_a: "Vue",
        option_b: "Node",
        option_c: "React",
        option_d: "Cassandra",
        correct: "option_d"
    },    
];

const quiz = document.getElementById('quiz-app');
const answerOpt = document.querySelectorAll('.answer');
const questionApp = document.getElementById('question');
const option_a = document.getElementById('option_a_text');
const option_b = document.getElementById('option_b_text');
const option_c = document.getElementById('option_c_text');
const option_d = document.getElementById('option_d_text');

const buttonSubmit = document.getElementById('submit');


let currentQuiz = 0;
let marks = 0;

launchQuiz();

function launchQuiz(){

    resetAnswer()

    const currentQuizData = quizOpt[currentQuiz];

    questionApp.innerText = currentQuizData.question;
    option_a_text.innerText = currentQuizData.option_a
    option_b_text.innerText = currentQuizData.option_b
    option_c_text.innerText = currentQuizData.option_c
    option_d_text.innerText = currentQuizData.option_d
};

function resetAnswer(){
    answerOpt.forEach(answerOpt => answerOpt.checked = false)
};

function getSelect(){
    let answer
    answerOpt.forEach(answerOpt => {
        if(answerOpt.checked){
            answer = answerOpt.id
        }
    })
    return answer;
};

buttonSubmit.addEventListener('click', () => {
    const answer = getSelect()
    if(answer){
        if(answer === quizOpt[currentQuiz].correct){
            marks++
        }

        currentQuiz++

        if(currentQuiz < quizOpt.length){
            launchQuiz()
        }else{
            quiz.innerHTML = `
            <h2> You have answered ${marks} out of ${quizOpt.length} questions correctly and your score is ${marks}.</h2>

            <button onclick = "location.reload()">Reset Quiz</button>
            `
        
        }
    }
});