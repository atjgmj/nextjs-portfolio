import { baseUrl } from 'app/sitemap'
import projectsData from '../../data/projects.json'

export async function GET() {
  const itemsXml = projectsData
    .map(
      (project) =>
        `<item>
          <title>${project.title}</title>
          <link>${baseUrl}/projects/${project.id}</link>
          <description>${project.description}</description>
          <pubDate>${new Date().toUTCString()}</pubDate>
        </item>`
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>AI × フルスタックエンジニア ポートフォリオ</title>
        <link>${baseUrl}</link>
        <description>AI技術を活用したフルスタック開発プロジェクトの最新情報</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
