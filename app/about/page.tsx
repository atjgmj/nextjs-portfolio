export default function AboutPage() {
  const skills = {
    frontend: [
      { name: 'Next.js', level: 90 },
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'JavaScript', level: 85 }
    ],
    backend: [
      { name: 'FastAPI', level: 85 },
      { name: 'NestJS', level: 75 },
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 80 }
    ],
    ai: [
      { name: 'OpenAI API', level: 90 },
      { name: 'LangChain', level: 85 },
      { name: 'RAG', level: 80 },
      { name: 'Vector DB', level: 75 },
      { name: 'Whisper API', level: 70 }
    ],
    infrastructure: [
      { name: 'Vercel', level: 85 },
      { name: 'Railway', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'GitHub Actions', level: 70 },
      { name: 'AWS', level: 65 }
    ]
  }

  const getSkillColor = (level: number) => {
    if (level >= 85) return 'bg-green-500'
    if (level >= 75) return 'bg-blue-500'
    if (level >= 65) return 'bg-yellow-500'
    return 'bg-gray-400'
  }

  return (
    <section>
      <div className="mb-12">
        <h1 className="mb-6 text-3xl font-bold tracking-tight">
          About Me
        </h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            AI技術とモダンWeb開発を組み合わせたフルスタック開発を専門としています。<br />
            特にNext.js × FastAPI × OpenAI APIの組み合わせによる実用的なAIアプリケーションの構築を得意としています。
          </p>
          <p className="text-gray-600 leading-relaxed">
            大学では情報系を専攻し、卒業後は独学でWeb開発とAI技術を習得。<br />
            現在はフリーランスとして、企業のAI導入支援やWebアプリケーション開発を行っています。
          </p>
        </div>
      </div>

      {/* スキルマップ */}
      <div className="mb-12">
        <h2 className="mb-8 text-2xl font-semibold">
          スキルマップ
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4 capitalize">
                {category === 'frontend' && 'フロントエンド'}
                {category === 'backend' && 'バックエンド'}
                {category === 'ai' && 'AI・機械学習'}
                {category === 'infrastructure' && 'インフラ・DevOps'}
              </h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-900">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${getSkillColor(
                          skill.level
                        )}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 経歴 */}
      <div className="mb-12">
        <h2 className="mb-8 text-2xl font-semibold">
          経歴
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-lg">フリーランスエンジニア</h3>
                <p className="text-gray-600">AI × Web開発</p>
              </div>
              <span className="text-sm text-gray-500">2024年 - 現在</span>
            </div>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• AIチャットボット開発（LangChain + OpenAI API）</li>
              <li>• RAGシステム構築（pgvector + FastAPI）</li>
              <li>• Next.jsを使用したWebアプリケーション開発</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-lg">独学・スキル習得期間</h3>
                <p className="text-gray-600">Web開発 × AI技術</p>
              </div>
              <span className="text-sm text-gray-500">2023年 - 2024年</span>
            </div>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Next.js、React、TypeScriptの習得</li>
              <li>• FastAPI、Python、PostgreSQLの習得</li>
              <li>• OpenAI API、LangChainによるAI開発</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-lg">大学</h3>
                <p className="text-gray-600">情報系学部</p>
              </div>
              <span className="text-sm text-gray-500">2020年 - 2024年</span>
            </div>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• コンピューターサイエンス基礎</li>
              <li>• データ構造・アルゴリズム</li>
              <li>• 機械学習・データサイエンス</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 連絡先・SNS */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
        <h2 className="font-semibold text-lg mb-4 text-blue-900">
          連絡先・SNS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <span className="font-medium">GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span className="font-medium">LinkedIn</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <span className="font-medium">X (Twitter)</span>
          </a>
        </div>
      </div>
    </section>
  )
}