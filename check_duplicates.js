const fs = require('fs');
const path = require('path');

const dir = __dirname;
const quizFile = path.join(dir, 'quiz_data.js');

const jsContent = fs.readFileSync(quizFile, 'utf-8');
const jsonStr = jsContent.replace('const allQuizData = ', '').slice(0, -1);
const allQuizData = JSON.parse(jsonStr);

let totalDuplicates = 0;

for (const category in allQuizData) {
    const questions = allQuizData[category];
    const seen = new Set();
    let duplicates = 0;

    questions.forEach(q => {
        // Use question text as the unique identifier
        const text = q.question.trim();
        if (seen.has(text)) {
            duplicates++;
        } else {
            seen.add(text);
        }
    });

    if (duplicates > 0) {
        console.log(`[${category}] Total: ${questions.length}, Duplicates: ${duplicates}, Unique: ${seen.size}`);
        totalDuplicates += duplicates;
    } else {
        console.log(`[${category}] Total: ${questions.length}, No duplicates found.`);
    }
}

console.log(`\nTotal duplicate questions found across all categories: ${totalDuplicates}`);
