const askquestions = [{
    questions: "Which of the following keywords is used to define a variable in Javascript?",
    a: "var",
    b: "Let",
    c: "BOTH A & B",
    d: "None of the above",
    correct: "c"
},
{
    questions: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
    a: "Boolean",
    b: "undefined",
    c: "Object",
    d: "Integer",
    correct: "c"
},
{
    questions: "Which function is used to serialize an object into a JSON string in Javascript?",
    a: "parse()",
    b: "stringify()",
    c: "convert()",
    d: "None of the above",
    correct: "b"
},
{
    questions: "Which of the following are closures in Javascript?",
    a: "variables",
    b: "functions",
    c: "object",
    d: "All of the above",
    correct: "d"
},
{
    questions: "Which of the following is not a Javascript framework??",
    a: "cassandra",
    b: "Vue",
    c: "react",
    d: "Node",
    correct: "a"
}

];
let quetionId = document.getElementById("quetionId");
let aText = document.getElementById("aText");
let bText = document.getElementById("bText");
let cText = document.getElementById("cText");
let dText = document.getElementById("dText");
let submitId = document.getElementById("submitId");
let options = document.querySelectorAll(".options");
let card = document.getElementById("card");
let currentPage = 0;
let score = 0;

function deselected() {
options.forEach((ans) => {
    ans.checked = false;
});
}

function loadquiz() {
deselected();
let currentPageData = askquestions[currentPage];
quetionId.innerHTML = currentPageData.questions;
aText.innerHTML = currentPageData.a;
bText.textContent = currentPageData.b;
cText.textContent = currentPageData.c;
dText.textContent = currentPageData.d;
}
loadquiz();

function optionsItem() {
let answer = undefined;
options.forEach((ans) => {
    if (ans.checked) {
        return answer = ans.id;
    }
});
return answer;
}


submitId.addEventListener("click", () => {
let answer = optionsItem();
if (answer) {
    if (answer === askquestions[currentPage].correct) {
        score++;
    }
    currentPage++;
    if (currentPage < askquestions.length) {
        loadquiz();
    } else {
        card.innerHTML = `<h2 class="question" id="quetionId"> You Answered Correctly at ${score}/${askquestions.length} questions. </h2> <button onclick="location.reload()" class="button">Reload</button> `;
        card.classList.add("cardsecond");
    }
} else {
    alert("Select The Options");
}
});