import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function Sitemap() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">사이트맵</h1>
        <ul className="space-y-4">
          <li>
            <Link href="/" className="text-blue-600 hover:underline">
              홈
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-600 hover:underline">
              회사소개
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-blue-600 hover:underline">
              제품
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-blue-600 hover:underline">
              서비스
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-blue-600 hover:underline">
              문의하기
            </Link>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}

