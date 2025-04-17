import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-background py-3 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center text-xs sm:text-sm mb-3">
          <Link href="/privacy-policy" className="mx-2 my-0.5 hover:text-secondary">
            개인정보처리방침
          </Link>
          <span className="mx-2 hidden sm:inline">|</span>
          <Link href="/email-policy" className="mx-2 my-0.5 hover:text-secondary">
            이메일무단수집거부
          </Link>
          <span className="mx-2 hidden sm:inline">|</span>
          <Link href="/terms" className="mx-2 my-0.5 hover:text-secondary">
            이용약관
          </Link>
          <span className="mx-2 hidden sm:inline">|</span>
          <Link href="/sitemap" className="mx-2 my-0.5 hover:text-secondary">
            사이트맵
          </Link>
          <span className="mx-2 hidden sm:inline">|</span>
          <Link href="/location" className="mx-2 my-0.5 hover:text-secondary">
            찾아오시는 길
          </Link>
        </div>
        <hr className="border-secondary my-3" />
        <div className="flex flex-wrap justify-center items-center text-xs sm:text-sm">
          <p className="mx-2 my-0.5">이메일: info@yourcompany.com</p>
          <p className="mx-2 my-0.5">전화번호: 02-1234-5678</p>
          <p className="mx-2 my-0.5 hidden sm:inline">|</p>
          <p className="mx-2 my-0.5">주소: 서울특별시 강남구 테헤란로 123</p>
          <p className="mx-2 my-0.5">팩스: 02-1234-5679</p>
        </div>
      </div>
    </footer>
  )
}

