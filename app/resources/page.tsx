"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// 게시글 타입 정의
interface Post {
  id: number
  title: string
  date: string
}

// 샘플 게시글 데이터 (순서 변경)
const posts: Post[] = [
  { id: 1, title: "부성-인증서 pdf", date: "2024.12.12" },
  { id: 2, title: "사업자등록", date: "2025.03.06" },
]

export default function Resources() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [itemsPerPage] = useState(10)
  const [sortOption, setSortOption] = useState("전체")

  // 검색 필터링된 게시글
  const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))

  // 현재 페이지의 게시글
  const indexOfLastPost = currentPage * itemsPerPage
  const indexOfFirstPost = indexOfLastPost - itemsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  // 총 페이지 수 계산
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage)

  // 페이지 번호 배열 생성
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">자료실</h1>

        {/* 검색 및 필터 컨트롤 */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <div className="text-sm text-gray-600">
            Total : {filteredPosts.length} / {currentPage} Page
          </div>
          <div className="flex gap-2">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            >
              <option value="전체">전체</option>
              <option value="제목">제목</option>
              <option value="내용">내용</option>
            </select>
            <div className="relative">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded-md pl-3 pr-10 py-2 text-sm w-[200px]"
              />
              <Button size="icon" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2">
                <Search className="h-4 w-4" />
                <span className="sr-only">검색</span>
              </Button>
            </div>
          </div>
        </div>

        {/* 게시글 목록 테이블 */}
        <div className="overflow-x-auto">
          <table className="w-full border-t-2 border-primary">
            <thead>
              <tr className="bg-neutral">
                <th className="px-4 py-3 text-center w-20">번호</th>
                <th className="px-4 py-3 text-center">제목</th>
                <th className="px-4 py-3 text-center w-32">날짜</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((post, index) => (
                <tr key={post.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-center">{filteredPosts.length - (indexOfFirstPost + index)}</td>
                  <td className="px-4 py-3">
                    <Link href={`/resources/${post.id}`} className="text-left hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-600">{post.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 페이지네이션 (현재는 필요 없지만 향후 확장성을 위해 유지) */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-6">
            <Button variant="outline" size="icon" onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
              <span className="sr-only">첫 페이지</span>
              <span>{"<<"}</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <span className="sr-only">이전 페이지</span>
              <span>{"<"}</span>
            </Button>
            {pageNumbers.map((number) => (
              <Button
                key={number}
                variant={currentPage === number ? "default" : "outline"}
                size="icon"
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <span className="sr-only">다음 페이지</span>
              <span>{">"}</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <span className="sr-only">마지막 페이지</span>
              <span>{">>"}</span>
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

