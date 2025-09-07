import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <div className="mb-12">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">
          AIを業務に組み込む<br />
          <span className="text-blue-600">フルスタックエンジニア</span>
        </h1>
        <p className="mb-6 text-lg text-gray-600 leading-relaxed">
          Next.js × FastAPI × AI を活用したWebアプリケーション開発を得意としています。<br />
          RAG、チャットボット、自動化ツールなど、実務に直結するAIサービスの構築経験があります。
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Next.js
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            FastAPI
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
            OpenAI API
          </span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            LangChain
          </span>
          <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
            PostgreSQL
          </span>
        </div>
        <div className="flex gap-4">
          <Link 
            href="/projects" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            プロジェクト一覧
          </Link>
          <Link 
            href="/about" 
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            About
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
          <h3 className="font-semibold text-lg mb-3 text-blue-900">AI検索・RAG</h3>
          <p className="text-blue-700 text-sm">
            ドキュメント検索、PDF要約、ナレッジベース構築
          </p>
        </div>
        <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
          <h3 className="font-semibold text-lg mb-3 text-green-900">AIダッシュボード</h3>
          <p className="text-green-700 text-sm">
            データ可視化、レポート自動生成、BI連携
          </p>
        </div>
        <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-100">
          <h3 className="font-semibold text-lg mb-3 text-purple-900">チャットボット</h3>
          <p className="text-purple-700 text-sm">
            カスタマーサポート、社内FAQ、マルチテナント対応
          </p>
        </div>
      </div>
    </section>
  )
}
