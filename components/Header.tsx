"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Header() {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-primary text-background shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center text-2xl font-bold">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20250304_164857528-Photoroom-xyQTiMTWBZY9NrctUp8WTNHVE8MLZI.png"
              alt="MCE 엠씨엔지니어링 로고"
              width={150}
              height={60}
              className="object-contain"
              priority
            />
          </Link>
          <nav className="hidden md:flex flex-grow justify-center">
            <ul className="flex space-x-6">
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  회사소개
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-secondary transition-colors">
                  제품
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  서비스
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-secondary transition-colors">
                  공사 실적
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-secondary transition-colors">
                  자료실
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            <div className="flex items-center space-x-4 mr-6">
              <Link href="/" className="text-sm hover:text-secondary transition-colors">
                홈
              </Link>
              <Link href="/sitemap" className="text-sm hover:text-secondary transition-colors">
                사이트맵
              </Link>
              <Link
                href="/contact"
                className="text-sm bg-action text-white px-3 py-1 rounded-md hover:bg-action/90 transition-colors"
              >
                문의하기
              </Link>
            </div>
            <div className="relative ml-6">
              <button
                onClick={toggleLanguageMenu}
                className="flex items-center text-background hover:text-secondary transition-colors"
                aria-haspopup="true"
                aria-expanded={isLanguageMenuOpen}
              >
                언어 <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-xl z-20">
                  <a href="#" className="block px-4 py-2 text-primary hover:bg-neutral transition-colors">
                    한국어
                  </a>
                  <a href="#" className="block px-4 py-2 text-primary hover:bg-neutral transition-colors">
                    English
                  </a>
                </div>
              )}
            </div>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden ml-4 text-background hover:text-secondary transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="/about" className="block py-2 hover:text-secondary transition-colors">
                  회사소개
                </Link>
              </li>
              <li>
                <Link href="/products" className="block py-2 hover:text-secondary transition-colors">
                  제품
                </Link>
              </li>
              <li>
                <Link href="/services" className="block py-2 hover:text-secondary transition-colors">
                  서비스
                </Link>
              </li>
              <li>
                <Link href="/projects" className="block py-2 hover:text-secondary transition-colors">
                  공사 실적
                </Link>
              </li>
              <li>
                <Link href="/resources" className="block py-2 hover:text-secondary transition-colors">
                  자료실
                </Link>
              </li>
              <li>
                <Link href="/" className="block py-2 hover:text-secondary transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="block py-2 hover:text-secondary transition-colors">
                  사이트맵
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

