'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // ここでFormspreeやResendなどのサービスにデータを送信
    // 現在はダミー処理
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section>
      <div className="mb-12">
        <h1 className="mb-6 text-3xl font-bold tracking-tight">
          お問い合わせ
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          AI × Web開発に関するご相談、プロジェクトのご依頼など、<br />
          お気軽にお問い合わせください。24時間以内に返信いたします。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* お問い合わせフォーム */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h2 className="font-semibold text-xl mb-6">
              メッセージを送る
            </h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800">
                  メッセージを送信しました。ありがとうございます！
                </p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">
                  送信中にエラーが発生しました。もう一度お試しください。
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="山田太郎"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  件名 *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">選択してください</option>
                  <option value="プロジェクト依頼">プロジェクト開発依頼</option>
                  <option value="AI導入相談">AI導入・技術相談</option>
                  <option value="技術質問">技術的な質問</option>
                  <option value="求人・採用">求人・採用について</option>
                  <option value="その他">その他</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  メッセージ *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="プロジェクトの詳細、ご質問内容などをご記入ください..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? '送信中...' : 'メッセージを送信'}
              </button>
            </form>
          </div>
        </div>

        {/* 連絡先情報・SNS */}
        <div className="space-y-8">
          {/* 直接連絡 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-4">
              直接連絡
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600">📧</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">メール</p>
                  <p className="text-gray-600 text-sm">contact@example.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600">💬</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">チャット</p>
                  <p className="text-gray-600 text-sm">平日 9:00-18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* SNS */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-4">
              SNS・コミュニティ
            </h3>
            <div className="space-y-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">📱</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">GitHub</p>
                  <p className="text-gray-600 text-xs">プロジェクトコード公開</p>
                </div>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">💼</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">LinkedIn</p>
                  <p className="text-gray-600 text-xs">ビジネス専用アカウント</p>
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🐦</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">X (Twitter)</p>
                  <p className="text-gray-600 text-xs">技術情報・最新動向</p>
                </div>
              </a>
            </div>
          </div>

          {/* よくある質問 */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-4 text-blue-900">
              よくある質問
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-blue-900 mb-1">
                  開発期間はどの程度かかりますか？
                </p>
                <p className="text-blue-700">
                  プロジェクトの規模により1週間〜3ヶ月程度です。
                </p>
              </div>
              <div>
                <p className="font-medium text-blue-900 mb-1">
                  AI機能の実装は可能ですか？
                </p>
                <p className="text-blue-700">
                  はい。RAG、チャットボット、自動化など対応可能です。
                </p>
              </div>
              <div>
                <p className="font-medium text-blue-900 mb-1">
                  保守・運用サポートはありますか？
                </p>
                <p className="text-blue-700">
                  はい。継続的なサポートプランもご用意しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}