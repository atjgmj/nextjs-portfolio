import Link from 'next/link'
import Image from 'next/image'
import projectsData from '../../data/projects.json'

const getTechColor = (color: string) => {
  const colors = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    purple: 'bg-purple-100 text-purple-800',
    red: 'bg-red-100 text-red-800',
    orange: 'bg-orange-100 text-orange-800',
  }
  return colors[color as keyof typeof colors] || colors.blue
}

const getStatusBadge = (status: string) => {
  const statusConfig = {
    completed: { text: '完成', color: 'bg-green-100 text-green-800' },
    in_progress: { text: '開発中', color: 'bg-yellow-100 text-yellow-800' },
    planned: { text: '予定', color: 'bg-gray-100 text-gray-800' }
  }
  return statusConfig[status as keyof typeof statusConfig] || statusConfig.planned
}

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-bold tracking-tight">
        プロジェクト一覧
      </h1>
      <p className="mb-12 text-lg text-gray-600">
        AI × フルスタック技術を活用したWebアプリケーションの開発実績・予定プロジェクトです。
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-gray-400 text-6xl">
                  📱
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    getStatusBadge(project.status).color
                  }`}
                >
                  {getStatusBadge(project.status).text}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getTechColor(
                      tech.color
                    )}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-sm text-gray-900 mb-2">主な機能</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {project.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-3">
                <Link
                  href={`/projects/${project.id}`}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  詳細を見る
                </Link>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
        <h3 className="font-semibold text-lg mb-2 text-blue-900">
          カスタム開発のご相談
        </h3>
        <p className="text-blue-700 text-sm mb-4">
          AI × Web開発の実装をお考えでしたら、お気軽にご相談ください。要件に応じた最適なソリューションを提案いたします。
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          お問い合わせ
        </Link>
      </div>
    </section>
  )
}