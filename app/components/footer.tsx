function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <div className="border-t border-gray-200 pt-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">AI × フルスタックエンジニア</h3>
            <p className="text-gray-600 text-sm">
              Next.js × FastAPI × AI を活用したWebアプリケーション開発を専門としています。
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">リンク</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">
                  プロジェクト一覧
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">SNS</h4>
            <ul className="font-sm flex flex-col space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>
                <a
                  className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com"
                >
                  <ArrowIcon />
                  <p className="ml-2 h-7">GitHub</p>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://linkedin.com"
                >
                  <ArrowIcon />
                  <p className="ml-2 h-7">LinkedIn</p>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com"
                >
                  <ArrowIcon />
                  <p className="ml-2 h-7">X (Twitter)</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 mt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} AI × フルスタックエンジニア ポートフォリオ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
