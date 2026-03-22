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

const SUBCATEGORY_RULES = {
    "1_network": [
        { key: "hybrid", name: "ハイブリッド接続", pattern: /(オンプレ|VPN|Interconnect|専用線|ハイブリッド|レプリケーション|IPアドレス競合|NAT)/ },
        { key: "lb_ingress", name: "LB / Ingress / CDN", pattern: /(ロードバランサ|Ingress|ルーティング|Cloud CDN|CDN|WebSocket|グローバル配信|APIのパスベース)/ },
        { key: "gke_serverless", name: "GKE / サーバーレス通信", pattern: /(GKE|サーバーレス|Cloud Run|App Engine|外部API|外部露出)/ },
        { key: "network_security", name: "ネットワーク制御と保護", pattern: /(VPC|Egress|外部IP|データアクセス境界|BigQueryアクセス保護|ファイル取得)/ }
    ],
    "2_storage_database": [
        { key: "sql", name: "Cloud SQL / RDB", pattern: /(Cloud SQL|MySQL|SQL Server|データベース|フェイルオーバー|バックアップ|リカバリ|レプリカ)/ },
        { key: "storage", name: "Cloud Storage / ストレージ", pattern: /(Cloud Storage|バケット|Filestore|永続ディスク|PD|CSEK|CMEK|ライフサイクル|アップロード|静的ファイル)/ },
        { key: "bigtable", name: "Bigtable / 高スループット", pattern: /(Bigtable|時系列|センサー|ストリーミング|ホットスポット|高速検索|負荷テスト)/ },
        { key: "migration", name: "移行 / データレイク / 分析基盤", pattern: /(移行|Transfer Appliance|BigQuery|データウェアハウス|非構造化|データレイク|トークン化)/ }
    ],
    "3_compute_container": [
        { key: "gke", name: "GKE / Kubernetes", pattern: /(GKE|K8s|Kubernetes|クラスタ|サービスディスカバリ)/ },
        { key: "app_serverless", name: "App Engine / Cloud Run", pattern: /(App Engine|Cloud Run|A\/Bテスト|カナリア)/ },
        { key: "mig_vm", name: "MIG / VM 運用", pattern: /(MIG|VM|OSパッチ|ホスト名|テスト環境|単一テナンシー|リージョン障害)/ },
        { key: "migration_batch", name: "移行 / バッチ / Hadoop", pattern: /(Hadoop|VMware|リフト＆シフト|バッチ処理|ホスティング|運用オーバーヘッド)/ }
    ],
    "4_operations_monitoring": [
        { key: "logging_audit", name: "ログ / 監査", pattern: /(ログ|監査|BigQueryのクエリ数|IAMポリシー変更|Cloud VPNログ|ログ集約|ログ分析)/ },
        { key: "monitoring", name: "監視 / ダッシュボード", pattern: /(監視|レイテンシ|ダッシュボード|SLO|アラート|Cloud Monitoring|インサイト)/ },
        { key: "incident", name: "障害調査 / 事後検証", pattern: /(障害調査|原因|事後検証|ボトルネック|再起動|遅延特定|問題の特定)/ },
        { key: "resilience_cost", name: "可用性テスト / コスト最適化", pattern: /(災害対策|レジリエンス|SLA|テスト手順|コスト|ゾンビマシン|割引)/ }
    ],
    "5_security_iam": [
        { key: "iam", name: "IAM / ID 管理", pattern: /(IAM|Active Directory|Google ID|権限|ドメイン制限|Project Owner|監査人)/ },
        { key: "data_protection", name: "データ保護 / PII", pattern: /(PII|クレジットカード|HIPAA|PCI DSS|秘匿化|CMEK|BigQuery|Cloud Storage)/ },
        { key: "service_auth", name: "サービス認証 / API アクセス", pattern: /(Cloud Functions|Pub\/Sub|BigQueryへの接続|Google API|Firestore|シークレット)/ },
        { key: "org_policy", name: "組織制御 / ロケーション", pattern: /(物理ロケーション|外部IPアドレス|改ざん防止|コンプライアンス|スコープ最小化)/ }
    ],
    "6_data_analytics": [
        { key: "ml", name: "ML / AI", pattern: /(ML|AI|モデル|レコメンド|解釈性)/ },
        { key: "pipeline", name: "Dataflow / データ処理", pattern: /(Dataflow|PII|クリーニング|非構造化)/ }
    ],
    "7_cicd_deployment": [
        { key: "ci_cd", name: "CI/CD パイプライン", pattern: /(CI\/CD|Cloud Build|ビルド|デプロイ|ロールバック)/ },
        { key: "security", name: "デプロイセキュリティ", pattern: /(脆弱性|検証|セキュリティ|侵入テスト|環境間)/ },
        { key: "ops", name: "運用自動化 / API", pattern: /(Pub\/Sub|タスクスケジューリング|API|Cloud Shell|Datastore)/ }
    ]
};

// アプリケーションの状態
const state = {
    mode: 'category', // category, menu, quiz, result
    currentCategory: null,
    currentSubcategory: null,
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

function getQuestionTitle(question) {
    return (question.question || '').split('\n')[0];
}

function getSubcategoryDefinitions(catKey) {
    return SUBCATEGORY_RULES[catKey] || [];
}

function getSubcategoryKey(catKey, question) {
    const title = getQuestionTitle(question);
    const defs = getSubcategoryDefinitions(catKey);

    for (const def of defs) {
        if (def.pattern.test(title)) {
            return def.key;
        }
    }

    return 'other';
}

function getSubcategoryName(catKey, subcategoryKey) {
    if (!subcategoryKey) {
        return 'カテゴリ全体';
    }

    const defs = getSubcategoryDefinitions(catKey);
    const match = defs.find(def => def.key === subcategoryKey);
    return match ? match.name : 'その他';
}

function getSubcategoryGroups(catKey) {
    const defs = getSubcategoryDefinitions(catKey);
    const groups = defs.map(def => ({
        key: def.key,
        name: def.name,
        questions: []
    }));
    const otherGroup = { key: 'other', name: 'その他', questions: [] };

    for (const question of allQuizData[catKey]) {
        const key = getSubcategoryKey(catKey, question);
        const group = groups.find(item => item.key === key) || otherGroup;
        group.questions.push(question);
    }

    return [...groups, otherGroup].filter(group => group.questions.length > 0);
}

function getSelectedQuestionPool() {
    const questions = allQuizData[state.currentCategory] || [];
    if (!state.currentSubcategory) {
        return questions;
    }

    return questions.filter(question => getSubcategoryKey(state.currentCategory, question) === state.currentSubcategory);
}

function getCurrentScopeLabel() {
    const catName = CATEGORY_NAMES[state.currentCategory] || state.currentCategory;
    if (!state.currentSubcategory) {
        return catName;
    }

    return `${catName} / ${getSubcategoryName(state.currentCategory, state.currentSubcategory)}`;
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

        let catStats = state.stats[catKey] || {};
        let attempted = Object.keys(catStats).length;
        let totalC = 0, totalW = 0;
        Object.values(catStats).forEach(s => {
            totalC += s.correct;
            totalW += s.wrong;
        });
        let rate = totalC + totalW > 0 ? Math.round((totalC / (totalC + totalW)) * 100) : 0;

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
    state.currentSubcategory = null;
    renderMenu();
}

window.selectSubcategory = function (subcategoryKey) {
    state.currentSubcategory = subcategoryKey || null;
    renderMenu();
}

// レンダリング - メニュー
function renderMenu() {
    state.mode = 'menu';
    const catKey = state.currentCategory;
    const questions = allQuizData[catKey];
    const catStats = state.stats[catKey] || {};
    const displayName = CATEGORY_NAMES[catKey] || catKey;
    const groups = getSubcategoryGroups(catKey);
    const selectedPool = getSelectedQuestionPool();
    const activeSubcategoryName = getSubcategoryName(catKey, state.currentSubcategory);

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

            <div style="margin-bottom: 24px;">
                <h3 style="margin-bottom: 12px;">サブカテゴリ</h3>
                <div class="category-list">
                    <div class="category-card" onclick="selectSubcategory('')" style="${state.currentSubcategory === null ? 'border-color: var(--primary-color); box-shadow: 0 0 0 1px var(--primary-color) inset;' : ''}">
                        <div class="category-title">カテゴリ全体</div>
                        <div class="category-info">
                            問題数: ${questions.length}問<br>
                            現在の対象: ${selectedPool.length}問
                        </div>
                    </div>
                    ${groups.map(group => `
                        <div class="category-card" onclick="selectSubcategory('${group.key}')" style="${state.currentSubcategory === group.key ? 'border-color: var(--primary-color); box-shadow: 0 0 0 1px var(--primary-color) inset;' : ''}">
                            <div class="category-title">${group.name}</div>
                            <div class="category-info">
                                問題数: ${group.questions.length}問
                            </div>
                        </div>
                    `).join('')}
                </div>
                <p style="font-size: 14px; color: var(--text-muted); margin: 12px 0 0;">現在の出題対象: ${activeSubcategoryName} (${selectedPool.length}問)</p>
            </div>
            
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
    state.queue = shuffleArray(getSelectedQuestionPool()).map(cloneQuestionWithShuffledOptions);
    state.isSuddenDeath = true;
    startQuiz();
}

window.startWeaknessMode = function () {
    const threshold = parseInt(document.getElementById('threshold').value, 10);
    const catStats = state.stats[state.currentCategory] || {};

    const weakQuestions = getSelectedQuestionPool().filter(q => {
        const s = catStats[q.id];
        if (!s) return true; // 未回答は弱点扱い
        const rate = (s.correct / (s.correct + s.wrong)) * 100;
        return rate <= threshold;
    });

    if (weakQuestions.length === 0) {
        alert("設定した条件に当てはまる問題がありません。");
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
    const catName = getCurrentScopeLabel();
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
    const catName = getCurrentScopeLabel();

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
