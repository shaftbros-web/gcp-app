// LocalStorage逕ｨ縺ｮ繧ｭ繝ｼ
const STORAGE_KEY = 'udemy_gcp_quiz_stats_v2';

// 繧ｫ繝・ざ繝ｪ蜷阪・譌･譛ｬ隱槭・繝・ヴ繝ｳ繧ｰ
const CATEGORY_NAMES = {
    "1_network": "ネットワーク",
    "2_storage_database": "ストレージとデータベース",
    "3_compute_container": "コンピュートとコンテナ",
    "4_operations_monitoring": "運用と監視",
    "5_security_iam": "セキュリティとIAM",
    "6_data_analytics": "データ分析",
    "7_cicd_deployment": "CI/CDとデプロイ"
};

// 繧｢繝励Μ繧ｱ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ迥ｶ諷・
const state = {
    mode: 'category', // category, menu, quiz, result
    currentCategory: null,
    queue: [],
    currentIndex: 0,
    isSuddenDeath: false,
    selectedOptions: [],
    hasSubmittedAnswer: false,
    stats: {}, // { "categoryKey": { questionId: { correct: 0, wrong: 0 } } }
    sessionStats: { correct: 0, wrong: 0, total: 0 }
};

// DOM隕∫ｴ
const appEl = document.getElementById('app');

// 蛻晄悄蛹・
function init() {
    loadStats();
    if (typeof allQuizData === 'undefined') {
        alert("クイズデータの読み込みに失敗しました。");
        return;
    }
    renderCategorySelect();
}

function loadStats() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        state.stats = JSON.parse(saved);
    }
}

function saveStats() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.stats));
}

function updateStat(cat, id, isCorrect) {
    if (!state.stats[cat]) {
        state.stats[cat] = {};
    }
    if (!state.stats[cat][id]) {
        state.stats[cat][id] = { correct: 0, wrong: 0 };
    }

    if (isCorrect) {
        state.stats[cat][id].correct++;
        state.sessionStats.correct++;
    } else {
        state.stats[cat][id].wrong++;
        state.sessionStats.wrong++;
    }
    saveStats();
}

function shuffleArray(items) {
    const shuffled = [...items];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

function cloneQuestionWithShuffledOptions(question) {
    return {
        ...question,
        options: shuffleArray(question.options)
    };
}

// 繝ｬ繝ｳ繝繝ｪ繝ｳ繧ｰ - 繧ｫ繝・ざ繝ｪ驕ｸ謚・
function renderCategorySelect() {
    state.mode = 'category';
    state.currentCategory = null;

    let html = `
        <div class="card">
            <h1 style="text-align: center;">GCP 隱榊ｮ夊ｩｦ鬨灘ｯｾ遲悶け繧､繧ｺ</h1>
            <p style="text-align: center; color: var(--text-muted); margin-bottom: 30px;">蟄ｦ鄙偵☆繧九き繝・ざ繝ｪ繧帝∈謚槭＠縺ｦ縺上□縺輔＞</p>
            <div class="category-list">
    `;

    for (const catKey in allQuizData) {
        const questionCount = allQuizData[catKey].length;
        const displayName = CATEGORY_NAMES[catKey] || catKey;

        let catStats = state.stats[catKey] || {};
        let attempted = Object.keys(catStats).length;
        let totalC = 0, totalW = 0;
        Object.values(catStats).forEach(s => {
            totalC += s.correct;
            totalW += s.wrong;
        });
        let rate = totalC + totalW > 0 ? Math.round((totalC / (totalC + totalW)) * 100) : 0;

        hasDataClass = questionCount > 0 ? "" : "disabled";
        btnText = questionCount > 0 ? "選択" : "データなし";

        html += `
            <div class="category-card" onclick="${questionCount > 0 ? `selectCategory('${catKey}')` : ''}" style="${questionCount === 0 ? 'opacity: 0.5; cursor: not-allowed;' : ''}">
                <div class="category-title">${displayName}</div>
                <div class="category-info">
                    蝠城｡梧焚: ${questionCount}蝠・br>
                    蟄ｦ鄙呈ｸ・ ${attempted}蝠・(豁｣遲皮紫 ${rate}%)
                </div>
            </div>
        `;
    }

    html += `
            </div>
        </div>
    `;
    appEl.innerHTML = html;
}

window.selectCategory = function (catKey) {
    state.currentCategory = catKey;
    renderMenu();
}

// 繝ｬ繝ｳ繝繝ｪ繝ｳ繧ｰ - 繝｡繝九Η繝ｼ
function renderMenu() {
    state.mode = 'menu';
    const catKey = state.currentCategory;
    const questions = allQuizData[catKey];
    const catStats = state.stats[catKey] || {};
    const displayName = CATEGORY_NAMES[catKey] || catKey;

    let totalQuestions = questions.length;
    let attempted = Object.keys(catStats).length;
    let avgCorrectRate = 0;

    let totalC = 0, totalW = 0;
    Object.values(catStats).forEach(s => {
        totalC += s.correct;
        totalW += s.wrong;
    });
    if (totalC + totalW > 0) {
        avgCorrectRate = Math.round((totalC / (totalC + totalW)) * 100);
    }

    appEl.innerHTML = `
        <div class="card">
            <button class="btn btn-secondary" style="padding: 5px 10px; font-size: 14px; margin-bottom: 20px;" onclick="renderCategorySelect()">竊・繧ｫ繝・ざ繝ｪ驕ｸ謚槭↓謌ｻ繧・/button>
            
            <h2 style="margin-bottom: 5px;">${displayName}</h2>
            <p style="color: var(--text-muted); margin-bottom: 25px;">
                邱丞撫鬘梧焚: ${totalQuestions}蝠・| 蟄ｦ鄙呈ｸ医∩: ${attempted}蝠・| 蜈ｨ菴捺ｭ｣遲皮紫: ${avgCorrectRate}%
            </p>
            
            <div class="menu-controls">
                <h3>蟄ｦ鄙偵Δ繝ｼ繝峨ｒ驕ｸ謚・/h3>
                <button class="btn" style="padding: 15px;" onclick="startSuddenDeath()">
                    蜈ｨ蝠城壹＠繝｢繝ｼ繝・br>
                    <span style="font-size: 13px; font-weight: normal;">(荳肴ｭ｣隗｣縺後↑縺上↑繧九∪縺ｧ邯咏ｶ・</span>
                </button>
                
                <div style="background: var(--bg-color); padding: 15px; border-radius: 8px; margin-top: 15px; border: 1px solid var(--border-color);">
                    <h4 style="margin-top: 0; color: var(--text-main);">蠑ｱ轤ｹ蜈区恪繝｢繝ｼ繝・/h4>
                    <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 10px;">驕主悉縺ｮ豁｣遲皮紫縺ｫ蝓ｺ縺･縺・※闍ｦ謇九↑蝠城｡後・縺ｿ繧呈歓蜃ｺ縺励∪縺吶よ悴蝗樒ｭ斐・蝠城｡後ｂ蜷ｫ縺ｿ縺ｾ縺吶・/p>
                    <label style="font-weight: bold; font-size: 14px;">
                        豁｣遲皮紫縺・<input type="number" id="threshold" value="50" style="width: 60px; padding: 5px; text-align: right; border-radius: 4px; border: 1px solid #ccc;"> % 莉･荳九・蝠城｡後ｒ蜃ｺ鬘・
                    </label>
                    <button class="btn btn-secondary" style="margin-top: 15px; display: block; width: 100%" onclick="startWeaknessMode()">蠑ｱ轤ｹ蜈区恪繝｢繝ｼ繝蛾幕蟋・/button>
                </div>
            </div>
            
            <div style="margin-top: 40px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
                <button class="btn btn-secondary" onclick="resetStats()" style="font-size: 12px; color: var(--error-color); border-color: var(--error-color); padding: 5px 10px;">縺薙・繧ｫ繝・ざ繝ｪ縺ｮ蟄ｦ鄙定ｨ倬鹸繧偵Μ繧ｻ繝・ヨ</button>
            </div>
        </div>
    `;
}

window.startSuddenDeath = function () {
    state.queue = shuffleArray(allQuizData[state.currentCategory]).map(cloneQuestionWithShuffledOptions);
    state.isSuddenDeath = true;
    startQuiz();
}

window.startWeaknessMode = function () {
    const threshold = parseInt(document.getElementById('threshold').value, 10);
    const catStats = state.stats[state.currentCategory] || {};

    const weakQuestions = allQuizData[state.currentCategory].filter(q => {
        const s = catStats[q.id];
        if (!s) return true;
        const rate = (s.correct / (s.correct + s.wrong)) * 100;
        return rate <= threshold;
    });

    if (weakQuestions.length === 0) {
        alert("設定した条件に合う問題がありません。");
        return;
    }

    state.queue = shuffleArray(weakQuestions).map(cloneQuestionWithShuffledOptions);
    state.isSuddenDeath = false;
    startQuiz();
}

function startQuiz() {
    state.mode = 'quiz';
    state.currentIndex = 0;
    state.selectedOptions = [];
    state.hasSubmittedAnswer = false;
    state.sessionStats = { correct: 0, wrong: 0, total: state.queue.length };
    renderQuiz();
}

function renderQuiz() {
    if (state.queue.length === 0) {
        renderResult();
        return;
    }

    const currentQ = state.queue[0];
    const catName = CATEGORY_NAMES[state.currentCategory] || state.currentCategory;
    const correctCount = currentQ.options.filter(opt => opt.isCorrect).length;
    const selectionHint = correctCount > 1
        ? `縺薙・蝠城｡後・隍・焚驕ｸ謚槭〒縺吶よｭ｣縺励＞驕ｸ謚櫁い繧・${correctCount} 蛟矩∈繧薙〒縺上□縺輔＞縲Ａ`
        : '豁｣縺励＞驕ｸ謚櫁い繧・1 縺､驕ｸ繧薙〒縺上□縺輔＞縲・';

    let html = `
        <div class="card">
            <div class="status-bar">
                <span>[${catName}] 谿九ｊ: ${state.queue.length} 蝠・/span>
                <span id="q-result" style="font-weight: bold;"></span>
            </div>
            
            <div class="question-text">${escapeHtml(currentQ.question)}</div>
            <div class="selection-hint">${escapeHtml(selectionHint)}</div>

            <div class="options-list" id="options-container">
    `;

    currentQ.options.forEach((opt, idx) => {
        html += `
            <div class="option-wrapper">
                <button class="option-btn" id="opt-${idx}" onclick="selectOption(${idx})">
                    ${escapeHtml(opt.text)}
                </button>
                <div class="option-explanation" id="expl-${idx}" style="display: none;">
                    <strong>${opt.isCorrect ? '笨・逅・罰:' : '笶・逅・罰:'}</strong>
                    ${escapeHtml(opt.explanation)}
                </div>
            </div>
        `;
    });

    html += `
            </div>

            <div class="next-container" id="next-container" style="display: none;">
                <button class="btn" onclick="nextQuestion()">谺｡縺ｸ</button>
            </div>
        </div>
    `;

    appEl.innerHTML = html;
}

window.selectOption = function (selectedIndex) {
    if (state.hasSubmittedAnswer) {
        return;
    }

    const currentQ = state.queue[0];
    const requiredSelections = currentQ.options.filter(option => option.isCorrect).length;
    const selectedPos = state.selectedOptions.indexOf(selectedIndex);

    if (selectedPos >= 0) {
        state.selectedOptions.splice(selectedPos, 1);
    } else if (state.selectedOptions.length < requiredSelections) {
        state.selectedOptions.push(selectedIndex);
    }

    const button = document.getElementById(`opt-${selectedIndex}`);
    button.classList.toggle('selected-pending', selectedPos < 0 && state.selectedOptions.includes(selectedIndex));

    if (state.selectedOptions.length === requiredSelections) {
        window.submitAnswer();
    }
}

window.submitAnswer = function () {
    const currentQ = state.queue[0];
    const selectedIndexes = [...state.selectedOptions].sort((a, b) => a - b);
    const correctIndexes = currentQ.options
        .map((option, idx) => option.isCorrect ? idx : -1)
        .filter(idx => idx >= 0);
    const isCorrect = selectedIndexes.length === correctIndexes.length
        && selectedIndexes.every((idx, pos) => idx === correctIndexes[pos]);
    state.hasSubmittedAnswer = true;

    const container = document.getElementById('options-container');
    const buttons = container.querySelectorAll('.option-btn');

    buttons.forEach((btn, idx) => {
        btn.disabled = true;

        if (currentQ.options[idx].isCorrect) {
            btn.classList.add('show-correct');
        }

        const explDiv = document.getElementById(`expl-${idx}`);
        explDiv.style.display = "block";
        if (currentQ.options[idx].isCorrect) {
            explDiv.classList.add('correct');
        } else {
            explDiv.classList.add('wrong');
        }
    });

    const qResult = document.getElementById('q-result');

    if (isCorrect) {
        selectedIndexes.forEach(idx => {
            document.getElementById(`opt-${idx}`).classList.remove('selected-pending');
            document.getElementById(`opt-${idx}`).classList.add('selected-correct');
        });
        qResult.textContent = "豁｣隗｣";
        qResult.style.color = "var(--success-color)";
        updateStat(state.currentCategory, currentQ.id, true);
        state.queue.shift();
    } else {
        selectedIndexes.forEach(idx => {
            document.getElementById(`opt-${idx}`).classList.remove('selected-pending');
            document.getElementById(`opt-${idx}`).classList.add(
                currentQ.options[idx].isCorrect ? 'selected-correct' : 'selected-wrong'
            );
        });
        qResult.textContent = "荳肴ｭ｣隗｣";
        qResult.style.color = "var(--error-color)";
        updateStat(state.currentCategory, currentQ.id, false);

        if (state.isSuddenDeath) {
            const q = state.queue.shift();
            state.queue.push(q);
        } else {
            state.queue.shift();
        }
    }

    document.getElementById('next-container').style.display = "flex";
}

window.nextQuestion = function () {
    state.selectedOptions = [];
    state.hasSubmittedAnswer = false;
    renderQuiz();
}

window.resetStats = function () {
    if (confirm("このカテゴリの学習記録をリセットしますか？")) {
        if (state.stats[state.currentCategory]) {
            delete state.stats[state.currentCategory];
        }
        saveStats();
        renderMenu();
    }
}

function renderResult() {
    state.mode = 'result';
    const s = state.sessionStats;
    const totalAns = s.correct + s.wrong;
    const rate = totalAns > 0 ? Math.round((s.correct / totalAns) * 100) : 0;
    const catName = CATEGORY_NAMES[state.currentCategory] || state.currentCategory;

    appEl.innerHTML = `
        <div class="card" style="text-align: center;">
            <p style="color: var(--text-muted); font-size: 14px;">[${catName}]</p>
            <h2 style="margin-top: 5px;">螳御ｺ・ｼ√♀逍ｲ繧梧ｧ倥〒縺励◆・・/h2>
            <div class="stats">
                <div class="stat-box">
                    <h3>豁｣隗｣謨ｰ</h3>
                    <p style="font-size: 28px; color: var(--success-color); font-weight: bold; margin: 10px 0;">${s.correct}</p>
                </div>
                <div class="stat-box">
                    <h3>荳肴ｭ｣隗｣謨ｰ</h3>
                    <p style="font-size: 28px; color: var(--error-color); font-weight: bold; margin: 10px 0;">${s.wrong}</p>
                </div>
            </div>
            <p style="font-size: 20px; margin-top: 30px;">莉雁屓繧ｻ繝・す繝ｧ繝ｳ縺ｮ豁｣遲皮紫<br><strong style="font-size: 32px; color: var(--primary-color);">${rate}%</strong></p>
            
            <div style="margin-top: 40px; display: flex; gap: 15px; justify-content: center;">
                <button class="btn btn-secondary" onclick="renderCategorySelect()">繧ｫ繝・ざ繝ｪ驕ｸ謚槭∈</button>
                <button class="btn" onclick="renderMenu()">繝｡繝九Η繝ｼ縺ｫ謌ｻ繧・/button>
            </div>
        </div>
    `;
}

function escapeHtml(unsafe) {
    if (!unsafe) return "";
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

init();
