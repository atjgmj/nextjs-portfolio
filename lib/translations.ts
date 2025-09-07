export const translations = {
  ja: {
    // Navigation
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    
    // Home page
    title: 'AIを業務に組み込むフルスタックエンジニア',
    subtitle: 'Next.js × FastAPI × AI を活用したWebアプリケーション開発を専門としています。',
    description: 'RAG、チャットボット、自動化ツールなど、実務に直結するAIサービスの構築経験があります。',
    viewProjects: 'プロジェクト一覧',
    
    // Projects
    projectsTitle: 'プロジェクト一覧',
    projectsSubtitle: 'AI × フルスタック技術を活用したWebアプリケーションの開発実績・予定プロジェクトです。',
    viewDetails: '詳細を見る',
    status: {
      completed: '完成',
      in_progress: '開発中',
      planned: '予定'
    },
    
    // About
    aboutTitle: 'About Me',
    aboutDescription: 'AI技術とモダンWeb開発を組み合わせたフルスタック開発を専門としています。特にNext.js × FastAPI × OpenAI APIの組み合わせによる実用的なAIアプリケーションの構築を得意としています。',
    skills: 'スキルマップ',
    experience: '経歴',
    
    // Contact
    contactTitle: 'お問い合わせ',
    contactSubtitle: 'AI × Web開発に関するご相談、プロジェクトのご依頼など、お気軽にお問い合わせください。24時間以内に返信いたします。',
    
    // Footer
    footerTitle: 'AI × フルスタックエンジニア',
    footerDescription: 'Next.js × FastAPI × AI を活用したWebアプリケーション開発を専門としています。',
    links: 'リンク',
    copyright: 'AI × フルスタックエンジニア ポートフォリオ. All rights reserved.'
  },
  en: {
    // Navigation  
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    
    // Home page
    title: 'AI × Full-stack Engineer',
    subtitle: 'Specializing in web application development using Next.js × FastAPI × AI.',
    description: 'Experienced in building practical AI services such as RAG, chatbots, and automation tools for business use.',
    viewProjects: 'View Projects',
    
    // Projects
    projectsTitle: 'Projects',
    projectsSubtitle: 'Development portfolio and planned projects using AI × Full-stack technologies.',
    viewDetails: 'View Details', 
    status: {
      completed: 'Completed',
      in_progress: 'In Progress',
      planned: 'Planned'
    },
    
    // About
    aboutTitle: 'About Me',
    aboutDescription: 'I specialize in full-stack development combining AI technology with modern web development. Particularly skilled in building practical AI applications using Next.js × FastAPI × OpenAI API.',
    skills: 'Skills',
    experience: 'Experience',
    
    // Contact
    contactTitle: 'Contact',
    contactSubtitle: 'Feel free to reach out for AI × Web development consultation or project inquiries. I\'ll respond within 24 hours.',
    
    // Footer
    footerTitle: 'AI × Full-stack Engineer',
    footerDescription: 'Specializing in web application development using Next.js × FastAPI × AI.',
    links: 'Links',
    copyright: 'AI × Full-stack Engineer Portfolio. All rights reserved.'
  }
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.ja