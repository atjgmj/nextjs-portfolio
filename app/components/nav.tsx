'use client'

import Link from 'next/link'
import { useLanguage } from '../../hooks/useLanguage'

export function Navbar() {
  const { language, changeLanguage, t } = useLanguage()

  const navItems = [
    { path: '/', key: 'home' },
    { path: '/projects', key: 'projects' },
    { path: '/about', key: 'about' },
    { path: '/contact', key: 'contact' },
  ]

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {navItems.map(({ path, key }) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {t(key as any)}
                </Link>
              )
            })}
          </div>
          <div className="flex items-center">
            <button
              onClick={() => changeLanguage(language === 'ja' ? 'en' : 'ja')}
              className="text-xs px-2 py-1 border border-neutral-300 rounded hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
            >
              {language === 'ja' ? 'EN' : 'JP'}
            </button>
          </div>
        </nav>
      </div>
    </aside>
  )
}
