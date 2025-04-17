"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

// 공사실적 타입 정의
interface Project {
  id: number
  date: string
  name: string
  location: string
  item: string
}

// 샘플 공사실적 데이터 (역순으로 변경)
const projects: Project[] = [
  {
    id: 18,
    date: "2024.11",
    name: "㈜ 부성 Product (CDU,Unit Cooler etc.) 특판대리점 계약 추진 ",
    location: "-",
    item: "-",
  },
  {
    id: 17,
    date: "2024.11",
    name: "삼성전자 온양캠퍼스 YORK 터보냉동기 정비 (안전변 · 냉동유교체)",
    location: "삼성전자",
    item: "Chiller",
  },
  {
    id: 16,
    date: "2024.10",
    name: "현대자동차 중국연태연구소 FRICK Screw Comp. Overhaul (x 2Set)",
    location: "HMC 중국 연태",
    item: "Screw Comp.",
  },
  {
    id: 15,
    date: "2024.09",
    name: "순천향병원 터보냉동기 (4대) Set Up 작업 및 인허가 대행",
    location: "순천향 병원",
    item: "Chiller",
  },
  {
    id: 14,
    date: "2024.08",
    name: "인천항동물류센터 냉동시스템 회전설비 정비 (S/C Motor , S/C Seal)",
    location: "쿠팡물류센터",
    item: "Screw Comp.",
  },
  {
    id: 13,
    date: "2024.07",
    name: "인천항동물류센터 냉동시스템 유지보수",
    location: "쿠팡물류센터",
    item: "Screw Comp.",
  },
  {
    id: 12,
    date: "2024.06",
    name: "존슨콘트롤즈인터내셔널 공급업체 파트너십 계약 체결",
    location: "존슨콘트롤즈",
    item: "구매, 시공",
  },
  {
    id: 11,
    date: "2024.05",
    name: "현대자동차 남양연구소 FRICK 이코노마이저 배관 수정 및 용접 작업",
    location: "현대자동차",
    item: "Screw Comp.",
  },
  {
    id: 10,
    date: "2024.04",
    name: "삼성전자 화성사업장 YORK 터보냉동기 냉매주입작업",
    location: "삼성전자",
    item: "Chiller",
  },
  {
    id: 9,
    date: "2024.04",
    name: "  하나손해보험 스크류 터보냉동기 세관 및 리크검사 공사",
    location: "하나손해보험",
    item: "Chiller",
  },
  {
    id: 8,
    date: "2024.04",
    name: " 국가정보원 YORK 터보냉동기 응축기  화학,기계 세관작업",
    location: "국가정보원",
    item: "Chiller",
  },
  {
    id: 7,
    date: "2024.03",
    name: "삼성전자 기흥사업장 YORK 터보냉동기 냉매회수 작업",
    location: "삼성전자 K1",
    item: "Chiller",
  },
  {
    id: 6,
    date: "2024.03",
    name: "환인제약(향남) YORK 터보냉동기 응축기 기계세관작업",
    location: "환인제약",
    item: "Chiller",
  },
  { id: 5, date: "2024.02", name: "삼성 슈퍼컴퓨팅센터 YORK 터보냉동기 응축기 기계세관작업", location: "삼성전자", item: "Chiller" },
  {
    id: 4,
    date: "2024.02",
    name: "시화병원 YZ YORK 터보냉동기 응축기 기계세관작업",
    location: "시화병원",
    item: "Chiller",
  },
  {
    id: 3,
    date: "2024.02",
    name: "고령축산물공판장 암모니아 Frick Screw Comp. 오일인젝션 배관개보수공사",
    location: "고령축산물공판장",
    item: "Screw Comp.",
  },
  { id: 2, date: "2024.02", name: "한국은행 본점 YORK 터보냉동기 응축기 기계세관작업", location: "한국은행", item: "Chiller" },
  { id: 1, date: "2024.02", name: "아미코젠 YVAA 시운전 준비 공사", location: "아미코젠", item: "Chiller" },
]

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [itemsPerPage] = useState(10)

  // 검색 필터링된 프로젝트
  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // 현재 페이지의 프로젝트
  const indexOfLastProject = currentPage * itemsPerPage
  const indexOfFirstProject = indexOfLastProject - itemsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)

  // 총 페이지 수 계산
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)

  // 페이지 번호 배열 생성
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">공사실적</h1>

        {/* 검색 컨트롤 */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-600">
            Total : {filteredProjects.length} / {currentPage} Page
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="공사명 또는 현장명 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-md pl-3 pr-10 py-2 text-sm w-[300px]"
            />
            <Button size="icon" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2">
              <Search className="h-4 w-4" />
              <span className="sr-only">검색</span>
            </Button>
          </div>
        </div>

        {/* 공사실적 목록 테이블 */}
        <div className="overflow-x-auto">
          <table className="w-full border-t border-b border-gray-200">
            <thead>
              <tr className="bg-primary/5">
                <th className="px-4 py-3 text-center w-24 border-b border-gray-200">일시</th>
                <th className="px-4 py-3 text-left border-b border-gray-200">공사명 (공정명)</th>
                <th className="px-4 py-3 text-left border-b border-gray-200 w-48">현장명(고객사)</th>
                <th className="px-4 py-3 text-center border-b border-gray-200 w-32">Item</th>
              </tr>
            </thead>
            <tbody>
              {currentProjects.map((project, index) => (
                <tr
                  key={project.id}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-blue-50"} hover:bg-gray-50 transition-colors`}
                >
                  <td className="px-4 py-3 text-center border-b border-gray-200">{project.date}</td>
                  <td className="px-4 py-3 border-b border-gray-200">{project.name}</td>
                  <td className="px-4 py-3 border-b border-gray-200">{project.location}</td>
                  <td className="px-4 py-3 text-center border-b border-gray-200">{project.item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 페이지네이션 */}
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
      </main>
      <Footer />
    </div>
  )
}

