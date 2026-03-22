// LocalStorage用のキー
const STORAGE_KEY = 'udemy_gcp_quiz_stats_v2';

// カテゴリ名の日本語マッピング
const CATEGORY_NAMES = {
    "1_network": "ネットワーク",
    "2_storage_database": "ストレージとデータベース",
    "3_compute_container": "コンピューティングとコンテナ",
    "4_operations_monitoring": "運用と監視",
    "5_security_iam": "セキュリティとIAM",
    "6_data_analytics": "データ分析",
    "7_cicd_deployment": "CI/CDとデプロイメント"
};

// アプリケーションの状態
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

// DOM要素
const appEl = document.getElementById('app');

// 初期化
function init() {
    loadStats();
    if (typeof allQuizData === 'undefined') {
        alert("クイズデータが読み込めませんでした。");
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

// レンダリング - カテゴリ選択
function renderCategorySelect() {
    state.mode = 'category';
    state.currentCategory = null;

    let html = `
        <div class="card">
            <h1 style="text-align: center;">GCP 認定試験対策クイズ</h1>
            <p style="text-align: center; color: var(--text-muted); margin-bottom: 30px;">学習するカテゴリを選択してください</p>
            <div class="category-list">
    `;

    for (const catKey in allQuizData) {
        const questionCount = allQuizData[catKey].length;
        const displayName = CATEGORY_NAMES[catKey] || catKey;

        // 統計データの計算
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
                    問題数: ${questionCount}問<br>
                    学習済: ${attempted}問 (正答率 ${rate}%)
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

// レンダリング - メニュー
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
            <button class="btn btn-secondary" style="padding: 5px 10px; font-size: 14px; margin-bottom: 20px;" onclick="renderCategorySelect()">← カテゴリ選択に戻る</button>
            
            <h2 style="margin-bottom: 5px;">${displayName}</h2>
            <p style="color: var(--text-muted); margin-bottom: 25px;">
                総問題数: ${totalQuestions}問 | 学習済み: ${attempted}問 | 全体正答率: ${avgCorrectRate}%
            </p>
            
            <div class="menu-controls">
                <h3>学習モードを選択</h3>
                <button class="btn" style="padding: 15px;" onclick="startSuddenDeath()">
                    全問通しモード<br>
                    <span style="font-size: 13px; font-weight: normal;">(不正解がなくなるまで継続)</span>
                </button>
                
                <div style="background: var(--bg-color); padding: 15px; border-radius: 8px; margin-top: 15px; border: 1px solid var(--border-color);">
                    <h4 style="margin-top: 0; color: var(--text-main);">弱点克服モード</h4>
                    <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 10px;">過去の正答率に基づいて苦手な問題のみを抽出します。未回答の問題も含みます。</p>
                    <label style="font-weight: bold; font-size: 14px;">
                        正答率が <input type="number" id="threshold" value="50" style="width: 60px; padding: 5px; text-align: right; border-radius: 4px; border: 1px solid #ccc;"> % 以下の問題を出題
                    </label>
                    <button class="btn btn-secondary" style="margin-top: 15px; display: block; width: 100%" onclick="startWeaknessMode()">弱点克服モード開始</button>
                </div>
            </div>
            
            <div style="margin-top: 40px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
                <button class="btn btn-secondary" onclick="resetStats()" style="font-size: 12px; color: var(--error-color); border-color: var(--error-color); padding: 5px 10px;">このカテゴリの学習記録をリセット</button>
            </div>
        </div>
    `;
}

// モード開始
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
        if (!s) return true; // 未回答は弱点扱い
        const rate = (s.correct / (s.correct + s.wrong)) * 100;
        return rate <= threshold;
    });

    if (weakQuestions.length === 0) {
        alert("設定した条件に当てはまる問題がありません。（全員正解できています！）");
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

// レンダリング - クイズ
function renderQuiz() {
    if (state.queue.length === 0) {
        renderResult();
        return;
    }

    const currentQ = state.queue[0];
    const catName = CATEGORY_NAMES[state.currentCategory] || state.currentCategory;
    const correctCount = currentQ.options.filter(opt => opt.isCorrect).length;
    const selectionHint = correctCount > 1
        ? `この問題は複数選択です。正しい選択肢を ${correctCount} 個選んでください。`
        : '正しい選択肢を 1 つ選んでください。';

    let html = `
        <div class="card">
            <div class="status-bar">
                <span>[${catName}] 残り: ${state.queue.length} 問</span>
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
                    <strong>${opt.isCorrect ? '✅ 理由:' : '❌ 理由:'}</strong>
                    ${escapeHtml(opt.explanation)}
                </div>
            </div>
        `;
    });

    html += `
            </div>

            <div class="action-container" id="action-container">
                <button class="btn" id="submit-answer-btn" onclick="submitAnswer()" disabled>回答する</button>
            </div>

            <div class="next-container" id="next-container" style="display: none;">
                <button class="btn" onclick="nextQuestion()">次へ</button>
            </div>
        </div>
    `;

    appEl.innerHTML = html;
}

window.selectOption = function (selectedIndex) {
    if (state.hasSubmittedAnswer) {
        return;
    }

    const selectedPos = state.selectedOptions.indexOf(selectedIndex);
    if (selectedPos >= 0) {
        state.selectedOptions.splice(selectedPos, 1);
    } else {
        state.selectedOptions.push(selectedIndex);
    }

    const button = document.getElementById(`opt-${selectedIndex}`);
    button.classList.toggle('selected-pending', selectedPos < 0);

    document.getElementById('submit-answer-btn').disabled = state.selectedOptions.length === 0;
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
    document.getElementById('submit-answer-btn').disabled = true;

    if (isCorrect) {
        selectedIndexes.forEach(idx => {
            document.getElementById(`opt-${idx}`).classList.remove('selected-pending');
            document.getElementById(`opt-${idx}`).classList.add('selected-correct');
        });
        qResult.textContent = "正解";
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
        qResult.textContent = "不正解";
        qResult.style.color = "var(--error-color)";
        updateStat(state.currentCategory, currentQ.id, false);

        if (state.isSuddenDeath) {
            const q = state.queue.shift();
            state.queue.push(q);
        } else {
            state.queue.shift();
        }
    }

    document.getElementById('action-container').style.display = "none";
    document.getElementById('next-container').style.display = "flex";
}

window.nextQuestion = function () {
    state.selectedOptions = [];
    state.hasSubmittedAnswer = false;
    renderQuiz();
}

window.resetStats = function () {
    if (confirm("このカテゴリの学習記録を本当にリセットしますか？")) {
        if (state.stats[state.currentCategory]) {
            delete state.stats[state.currentCategory];
        }
        saveStats();
        renderMenu();
    }
}

// レンダリング - 結果
function renderResult() {
    state.mode = 'result';
    const s = state.sessionStats;
    const totalAns = s.correct + s.wrong;
    const rate = totalAns > 0 ? Math.round((s.correct / totalAns) * 100) : 0;
    const catName = CATEGORY_NAMES[state.currentCategory] || state.currentCategory;

    appEl.innerHTML = `
        <div class="card" style="text-align: center;">
            <p style="color: var(--text-muted); font-size: 14px;">[${catName}]</p>
            <h2 style="margin-top: 5px;">完了！お疲れ様でした！</h2>
            <div class="stats">
                <div class="stat-box">
                    <h3>正解数</h3>
                    <p style="font-size: 28px; color: var(--success-color); font-weight: bold; margin: 10px 0;">${s.correct}</p>
                </div>
                <div class="stat-box">
                    <h3>不正解数</h3>
                    <p style="font-size: 28px; color: var(--error-color); font-weight: bold; margin: 10px 0;">${s.wrong}</p>
                </div>
            </div>
            <p style="font-size: 20px; margin-top: 30px;">今回セッションの正答率<br><strong style="font-size: 32px; color: var(--primary-color);">${rate}%</strong></p>
            
            <div style="margin-top: 40px; display: flex; gap: 15px; justify-content: center;">
                <button class="btn btn-secondary" onclick="renderCategorySelect()">カテゴリ選択へ</button>
                <button class="btn" onclick="renderMenu()">メニューに戻る</button>
            </div>
        </div>
    `;
}

// Helper
function escapeHtml(unsafe) {
    if (!unsafe) return "";
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// 起動
init();
