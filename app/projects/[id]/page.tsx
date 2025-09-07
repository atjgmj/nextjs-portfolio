import Link from 'next/link'
import { notFound } from 'next/navigation'
import projectsData from '../../../data/projects.json'

const getTechColor = (color: string) => {
  const colors = {
    blue: 'bg-blue-100 text-blue-800 border-blue-200',
    green: 'bg-green-100 text-green-800 border-green-200',
    yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    purple: 'bg-purple-100 text-purple-800 border-purple-200',
    red: 'bg-red-100 text-red-800 border-red-200',
    orange: 'bg-orange-100 text-orange-800 border-orange-200',
  }
  return colors[color as keyof typeof colors] || colors.blue
}

const getStatusBadge = (status: string) => {
  const statusConfig = {
    completed: { text: '完成', color: 'bg-green-100 text-green-800 border-green-200' },
    in_progress: { text: '開発中', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
    planned: { text: '予定', color: 'bg-gray-100 text-gray-800 border-gray-200' }
  }
  return statusConfig[status as keyof typeof statusConfig] || statusConfig.planned
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const project = projectsData.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <article>
      <div className="mb-8">
        <Link
          href="/projects"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center mb-6"
        >
          ← プロジェクト一覧に戻る
        </Link>
        
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">
              {project.title}
            </h1>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${
                getStatusBadge(project.status).color
              }`}
            >
              {getStatusBadge(project.status).text}
            </span>
          </div>
        </div>
      </div>

      {/* プロジェクト画像 */}
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-400 text-8xl">
            📱
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* プロジェクト概要 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              プロジェクト概要
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* 主な機能 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              主な機能
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* アーキテクチャ */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              アーキテクチャ
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 text-sm mb-4">
                アーキテクチャ図は開発時に追加予定です。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">フロントエンド</h4>
                  <ul className="text-gray-600 space-y-1">
                    {project.technologies
                      .filter(tech => ['Next.js', 'React', 'TailwindCSS', 'TypeScript'].includes(tech.name))
                      .map(tech => (
                        <li key={tech.name}>• {tech.name}</li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">バックエンド・AI</h4>
                  <ul className="text-gray-600 space-y-1">
                    {project.technologies
                      .filter(tech => !['Next.js', 'React', 'TailwindCSS', 'TypeScript'].includes(tech.name))
                      .map(tech => (
                        <li key={tech.name}>• {tech.name}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-1">
          {/* 技術スタック */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-lg mb-4">技術スタック</h3>
            <div className="space-y-3">
              {project.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className={`px-3 py-2 rounded-lg border text-sm font-medium ${getTechColor(
                    tech.color
                  )}`}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          {/* リンク */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-4">リンク</h3>
            <div className="space-y-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 bg-gray-900 text-white text-center font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                  GitHub で見る
                </a>
              ) : (
                <div className="px-4 py-3 bg-gray-100 text-gray-500 text-center font-medium rounded-lg">
                  GitHub（開発予定）
                </div>
              )}
              
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 bg-blue-600 text-white text-center font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  ライブデモ
                </a>
              ) : (
                <div className="px-4 py-3 bg-gray-100 text-gray-500 text-center font-medium rounded-lg">
                  デモ（開発予定）
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 関連プロジェクト */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-6 text-gray-900">
          その他のプロジェクト
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData
            .filter((p) => p.id !== project.id)
            .slice(0, 3)
            .map((relatedProject) => (
              <Link
                key={relatedProject.id}
                href={`/projects/${relatedProject.id}`}
                className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium text-gray-900 mb-2 text-sm">
                  {relatedProject.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {relatedProject.description.slice(0, 80)}...
                </p>
              </Link>
            ))}
        </div>
      </section>
    </article>
  )
}