const fs = require('fs');
const path = require('path');

const dir = __dirname;
const outputFile = path.join(dir, 'quiz_data.js');

const files = fs.readdirSync(dir).filter(f => f.match(/_b\.(txt|md)$/i));

const allQuizData = {};

files.forEach(file => {
    let categoryKey = file.replace(/\s*_b\.(txt|md)$/i, '');
    let rawContent = fs.readFileSync(path.join(dir, file), 'utf-8');
    const content = rawContent.replace(/\r\n/g, '\n');

    // Split by 【問題...】
    const problemRegex = /【問題\d+：([\s\S]*?)】([\s\S]*?)(?=(【問題\d+：|$))/g;

    const questions = [];
    let match;
    let questionId = 1;

    // 重複チェック用のSet
    const seenQuestions = new Set();

    while ((match = problemRegex.exec(content)) !== null) {
        const title = match[1].trim();
        const body = match[2];

        // 抽出用テキスト
        let questionText = `【${title}】`;
        const reqMatch = body.match(/要件:\s*([\s\S]*?)(?=(?:•\s*)?Q)/);
        if (reqMatch) {
            questionText += `\n${reqMatch[1].trim()}`;
        }

        // 重複チェック
        if (seenQuestions.has(questionText)) {
            continue; // すでに登録されている同じ問題ならスキップ
        }

        const options = [];
        // Optional bullet symbol for Q
        const optionBlocks = body.split(/(?:•\s*)?Q\d+-\d+:/).slice(1);

        optionBlocks.forEach(block => {
            // Optional bullet symbol before 【 Yes/No 】
            const blockRegex = /([\s\S]*?)(?:◦\s*)?【\s*(Yes|No)\s*】\s*(?:理由:?\s*)?([\s\S]*)/i;
            const bMatch = block.match(blockRegex);

            if (bMatch) {
                const optText = bMatch[1].trim();
                const isCorrect = bMatch[2].toLowerCase() === 'yes';
                // fix weird commas
                const explanation = bMatch[3].trim().replace(/,。$/, '。');

                options.push({
                    text: optText,
                    isCorrect: isCorrect,
                    explanation: explanation
                });
            }
        });

        if (options.length > 0) {
            seenQuestions.add(questionText); // 登録済みにする
            questions.push({
                id: questionId++,
                question: questionText,
                options: options
            });
        }
    }

    allQuizData[categoryKey] = questions;
    console.log(`Parsed ${questions.length} questions from ${file}`);
});

const jsContent = `const allQuizData = ${JSON.stringify(allQuizData, null, 2)};`;
fs.writeFileSync(outputFile, jsContent, 'utf-8');

console.log("All categories parsed successfully.");
