// 1. Create the array to store results at the top
const resultsArray = [];

function getGrade(score) {
    if (score >= 70) {
        return "A";
    } else if (score >= 60) {
        return "B";
    } else if (score >= 50) {
        return "C";
    } else {
        return "F";
    }
}

const checkBtn = document.getElementById("checkBtn");
const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");
const resultArea = document.getElementById("resultArea");
const resultList = document.getElementById("resultList");

checkBtn.addEventListener("click", function() {
    const name = nameInput.value;
    const score = Number(scoreInput.value);


    if (scoreInput.value === "" || score > 100) {
        resultArea.style.color = "red";
        resultArea.textContent = "Error: Please enter a valid score between 0 and 100.";
        return; 
    }

    resultArea.style.color = "black";

    const grade = getGrade(score);

    resultArea.textContent = `${name} scored ${score}: ${grade}`;

    const entry = {
        name: name,
        score: score,
        grade: grade
    };

    resultsArray.push(entry);

    displayResults();
});

function displayResults() {
    resultList.innerHTML = "";

    for (let i = 0; i < resultsArray.length; i++) {
        const item = resultsArray[i];

        const li = document.createElement("li");

        li.textContent = `${item.name} scored ${item.score}: ${item.grade}`;
        
        resultList.appendChild(li);
    }
}