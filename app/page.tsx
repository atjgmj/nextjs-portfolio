'use client'

import Link from 'next/link'
import { useLanguage } from '../hooks/useLanguage'

export default function Page() {
  const { t } = useLanguage()

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {t('title')}
      </h1>
      <p className="mb-4">
        {t('subtitle')}
      </p>
      <p className="mb-4">
        {t('description')}
      </p>
      <div className="mb-8">
        <Link
          href="/projects"
          className="underline underline-offset-4 text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400"
        >
          {t('viewProjects')} →
        </Link>
      </div>
    </section>
  )
}
