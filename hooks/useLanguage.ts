'use client'

import { useState, useEffect } from 'react'
import { Language, translations, TranslationKey } from '../lib/translations'

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('ja')

  useEffect(() => {
    const saved = localStorage.getItem('language')
    if (saved && (saved === 'ja' || saved === 'en')) {
      setLanguage(saved as Language)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: TranslationKey): string => {
    return translations[language][key] as string
  }

  const getNestedTranslation = (path: string): string => {
    const keys = path.split('.')
    let value: any = translations[language]
    
    for (const key of keys) {
      value = value?.[key]
    }
    
    return value || path
  }

  return {
    language,
    changeLanguage,
    t,
    getNestedTranslation
  }
}