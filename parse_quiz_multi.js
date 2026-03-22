const fs = require('fs');
const path = require('path');

const dir = __dirname;
const outputFile = path.join(dir, 'quiz_data.js');

const CATEGORY_ORDER = [
    '1_network',
    '2_storage_database',
    '3_compute_container',
    '4_operations_monitoring',
    '5_security_iam',
    '6_data_analytics',
    '7_cicd_deployment'
];

const CATEGORY_OVERRIDES = new Map([
    ['【MLレコメンドエンジンの精度向上】', '6_data_analytics'],
    ['【AIモデルの解釈性向上】', '6_data_analytics'],
    ['【コンテナの脆弱性スキャンとデプロイ検証】', '7_cicd_deployment'],
    ['【非構造化データの探索とクリーニング】', '6_data_analytics'],
    ['【監査可能なコンテナのバージョン管理】', '7_cicd_deployment'],
    ['【Kubernetes環境への動的デプロイメントとCI/CD】', '7_cicd_deployment'],
    ['【PIIデータを保存しないDataflowパイプライン】', '6_data_analytics'],
    ['【CI/CDでのテストとデプロイの連動】', '7_cicd_deployment'],
    ['【Cloud Buildを用いた継続的ビルド】', '7_cicd_deployment'],
    ['【CI/CDパイプラインのセキュリティ自動化】', '7_cicd_deployment'],
    ['【環境間でのコンテナデプロイ制限】', '7_cicd_deployment'],
    ['【災害対策のテスト手順自動化】', '4_operations_monitoring'],
    ['【リソースの物理ロケーション制限】', '5_security_iam'],
    ['【別リージョンへのVMコピー展開】', '3_compute_container'],
    ['【侵入テスト（Cloud Function）の定期実行】', '7_cicd_deployment'],
    ['【IDのドメイン制限】', '5_security_iam'],
    ['【高可用性SLAを担保するレジリエンステスト】', '4_operations_monitoring'],
    ['【モノリシックからマイクロサービスへの移行の利点説明】', '3_compute_container'],
    ['【Bigtableのパフォーマンス・負荷テスト】', '2_storage_database'],
    ['【本番デプロイのロールバック回数削減】', '7_cicd_deployment'],
    ['【VMwareからのリフト＆シフト移行計画】', '3_compute_container'],
    ['【PCI DSS準拠環境の構築プラットフォーム】', '5_security_iam'],
    ['【Datastoreの新しいインデックスデプロイ】', '7_cicd_deployment'],
    ['【人気コンテンツ配信のパフォーマンス改善（CDN）】', '1_network'],
    ['【GKEでの一貫したホスト名の維持】', '3_compute_container'],
    ['【Pub/Subパブリッシングレイテンシ改善】', '7_cicd_deployment'],
    ['【VMからBigQueryへの接続エラー解消】', '5_security_iam'],
    ['【BigQueryの顧客提供暗号鍵（CMEK）】', '5_security_iam'],
    ['【新規プロジェクトのコスト最小化（割引の活用）】', '4_operations_monitoring'],
    ['【サードパーティからの大容量データ移行】', '2_storage_database'],
    ['【信頼性の高いタスクスケジューリング】', '7_cicd_deployment'],
    ['【APIのバージョニング戦略】', '7_cicd_deployment'],
    ['【Cloud Shell環境でのユーティリティの永続化】', '7_cicd_deployment'],
    ['【フォルダ権限（Project Owner）の制限】', '5_security_iam'],
    ['【Cloud StorageのCMEKキーローテーション】', '5_security_iam'],
    ['【App EngineのDBクエリ最小化（専用Memcache）】', '3_compute_container'],
    ['【Pub/Subへの安全なアクセス認証】', '5_security_iam'],
    ['【開発環境インフラのコスト可視化と最適化】', '4_operations_monitoring'],
    ['【GKEのクラスタオートスケーリング有効化】', '3_compute_container'],
    ['【Anthos Service MeshのSLO監視とアラート】', '4_operations_monitoring'],
    ['【Cloud SQLのフェイルオーバー機能テスト】', '4_operations_monitoring'],
    ['【Hadoopジョブのクラウド移行によるコスト最小化】', '3_compute_container'],
    ['【GKEからの安全なアウトバウンド通信（NAT）】', '1_network'],
    ['【時系列センサーデータの保存】', '2_storage_database'],
    ['【グローバルなKubernetes Ingressの構成】', '1_network'],
    ['【マイクロサービス障害のシミュレーション】', '4_operations_monitoring'],
    ['【Firewall Insightsのログ欠落解決】', '4_operations_monitoring'],
    ['【大量センサーデータのメタ情報結合】', '2_storage_database'],
    ['【Cloud Storageアップロードの整合性確認】', '2_storage_database']
]);

function normalizeInlineText(text) {
    return text
        .replace(/\r\n/g, '\n')
        .replace(/[ \t]+/g, ' ')
        .replace(/\s*◦\s*$/u, '')
        .trim();
}

function normalizeQuestionText(text) {
    const normalized = text
        .replace(/\r\n/g, '\n')
        .split('\n')
        .map(line => line.trim())
        .filter(Boolean);

    if (normalized.length <= 1) {
        return normalized[0] || '';
    }

    return `${normalized[0]}\n${normalized.slice(1).join(' ')}`;
}

function extractQuestionText(block, title) {
    const reqMatch = block.match(/要件:\s*([\s\S]*?)(?=(?:[•*]\s*)?Q\d+-\d+:)/);
    const requirement = reqMatch ? reqMatch[1].replace(/\*/g, '').trim() : '';
    return requirement ? `${title}\n${requirement}` : title;
}

function extractOptions(block) {
    return block
        .split(/(?:[•*]\s*)?Q\d+-\d+:/)
        .slice(1)
        .map(optionBlock => {
            const match = optionBlock.match(/([\s\S]*?)【\s*(Yes|No)\s*】\s*(?:理由:)?\s*([\s\S]*)/i);
            if (!match) {
                return null;
            }

            return {
                text: normalizeInlineText(match[1].replace(/\*/g, '')),
                isCorrect: match[2].toLowerCase() === 'yes',
                explanation: normalizeInlineText(match[3].replace(/\*/g, '')).replace(/,。$/u, '。')
            };
        })
        .filter(Boolean);
}

function pickPreferredEntry(currentEntry, nextEntry) {
    const currentMatchesTarget = currentEntry.sourceCategory === currentEntry.targetCategory;
    const nextMatchesTarget = nextEntry.sourceCategory === nextEntry.targetCategory;

    if (nextMatchesTarget && !currentMatchesTarget) {
        return nextEntry;
    }

    if (currentMatchesTarget && !nextMatchesTarget) {
        return currentEntry;
    }

    if (nextEntry.question.length > currentEntry.question.length) {
        return nextEntry;
    }

    return currentEntry;
}

const files = fs.readdirSync(dir).filter(file => file.match(/_b\.(txt|md)$/i));
const entriesByTitle = new Map();
let questionOrder = 0;

files.forEach(file => {
    const sourceCategory = file.replace(/\s*_b\.(txt|md)$/i, '');
    const rawContent = fs.readFileSync(path.join(dir, file), 'utf-8');
    const content = rawContent.replace(/\r\n/g, '\n');
    const problemRegex = /(【問題\d+：([^\n]+?)】[\s\S]*?)(?=【問題\d+：|$)/g;

    let match;
    let parsedCount = 0;

    while ((match = problemRegex.exec(content)) !== null) {
        const block = match[1];
        const title = `【${match[2].trim()}】`;
        const question = extractQuestionText(block, title);
        const options = extractOptions(block);

        if (options.length === 0) {
            continue;
        }

        const targetCategory = CATEGORY_OVERRIDES.get(title) || sourceCategory;
        const nextEntry = {
            title,
            question,
            options,
            sourceCategory,
            targetCategory,
            order: questionOrder++
        };

        const existingEntry = entriesByTitle.get(title);
        entriesByTitle.set(title, existingEntry ? pickPreferredEntry(existingEntry, nextEntry) : nextEntry);
        parsedCount++;
    }

    console.log(`Parsed ${parsedCount} questions from ${file}`);
});

const allQuizData = Object.fromEntries(CATEGORY_ORDER.map(category => [category, []]));

for (const entry of [...entriesByTitle.values()].sort((a, b) => a.order - b.order)) {
    if (!allQuizData[entry.targetCategory]) {
        allQuizData[entry.targetCategory] = [];
    }

    allQuizData[entry.targetCategory].push({
        question: normalizeQuestionText(entry.question).replace(/ 】/g, '】'),
        options: entry.options.map(option => ({
            text: option.text,
            isCorrect: option.isCorrect,
            explanation: option.explanation
        }))
    });
}

for (const category of Object.keys(allQuizData)) {
    allQuizData[category] = allQuizData[category].map((question, index) => ({
        id: index + 1,
        ...question
    }));
}

const duplicateCount = questionOrder - entriesByTitle.size;
const recategorizedCount = [...entriesByTitle.values()].filter(
    entry => entry.sourceCategory !== entry.targetCategory
).length;

const jsContent = `const allQuizData = ${JSON.stringify(allQuizData, null, 2)};`;
fs.writeFileSync(outputFile, jsContent, 'utf-8');

console.log(`Removed ${duplicateCount} duplicate titles.`);
console.log(`Recategorized ${recategorizedCount} questions.`);
console.log('All categories parsed successfully.');
