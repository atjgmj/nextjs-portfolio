export const baseUrl = 'https://ai-portfolio.vercel.app'

export default async function sitemap() {
  let routes = ['', '/projects', '/about', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  // プロジェクト詳細ページも追加
  const projectIds = [
    'ai-document-search',
    'ai-report-dashboard', 
    'ai-chat-saas',
    'ai-voice-assistant',
    'ai-agent-tools'
  ]
  
  let projectRoutes = projectIds.map((id) => ({
    url: `${baseUrl}/projects/${id}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...projectRoutes]
}
