"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import OrganizationChart from "@/components/OrganizationChart"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Copy, Check } from "lucide-react"

type SectionType = "info" | "history" | "ceo" | "location"

export default function About() {
  const [activeSection, setActiveSection] = useState<SectionType>("info")
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  const renderContent = () => {
    switch (activeSection) {
      case "info":
        return (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">회사 정보</h3>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <dt className="font-semibold text-gray-700">상호</dt>
                  <dd>주식회사 엠씨엔지니어링</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700">대표이사</dt>
                  <dd>송 숙 희</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700">설립일자</dt>
                  <dd>2024년 02월 16일</dd>
                </div>
                <div className="md:col-span-2">
                  <dt className="font-semibold text-gray-700">사업장 소재지</dt>
                  <dd>
                    본사
                    <br />
                    경기도 화성시 동탄영천로 150, B동 3층 301호
                    <br />
                    (영천동, 현대실리콘앨리)
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700">업태</dt>
                  <dd>제조업</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-700">종목</dt>
                  <dd>산업용 냉장 및 냉동장비 제조업</dd>
                </div>
              </dl>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">주요 사업 영역</h3>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  <strong>존슨콘트롤즈인터내셔널 공공영역 파트너십 체결</strong>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>HVAC 장비 판매 및 솔루션 제공: YORK</li>
                    <li>산업용 냉동기 판매 및 Parts 공급: Frick, SABROE, HITACHI</li>
                  </ul>
                </li>
                <li>
                  <strong>산업용 냉동기 설치 및 시운전</strong>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>상온용 터보냉동기 설치 및 방열작업, 시운전작업 일체</li>
                    <li>중온용 스크롤냉동기 설치 및 시운전</li>
                    <li>저온용(산업용) 스크류냉동기 설치 및 시운전</li>
                  </ul>
                </li>
                <li>
                  <strong>산업용 냉동기 유지보수</strong>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>상온용 터보냉동기 세관, O/H</li>
                    <li>중온용 스크롤냉동기 점검 및 보수, O/H</li>
                    <li>저온용 스크류냉동 냉동 시스템 솔루션 제공</li>
                  </ul>
                </li>
                <li>
                  <strong>4)산업용 냉장 및 냉동 장비 제조</strong>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>저온용 스크류냉동기 냉동 장비 제조</li>
                  </ul>
                </li>
                <li>
                  <strong>냉각장치, 냉동설비 인허가</strong>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>터보냉동기, 수인허가, 기술검토서 접수 대행 및 인허가 대행</li>
                    <li>냉동시스템(고압가스제조) 신규, 제조 인허가 대행</li>
                  </ul>
                </li>
                <li>
                  <strong>소방시설, 소화설비 판매</strong>
                </li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">조직도</h3>
              <OrganizationChart />
            </div>
          </div>
        )
      case "history":
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">연혁</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-semibold text-primary w-24 flex-shrink-0">2024년 02월</span>
                <span>주식회사 엠씨엔지니어링 설립</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-primary w-24 flex-shrink-0">2024년 06월</span>
                <span>존슨콘트롤즈인터내셔널코리아㈜ 공급업체 파트너십 계약 체결</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-primary w-24 flex-shrink-0">2024년 07월</span>
                <span>냉매회수업 등록</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-primary w-24 flex-shrink-0">2024년 12월</span>
                <span>㈜ 부성 특판대리점 인증</span>
              </li>
            </ul>
          </div>
        )
      case "ceo":
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">CEO 인사말</h3>
            <p className="mb-4">
              ㈜엠씨엔지니어링은 2024년 2월 16일에 설립한 패기있는 기업으로 산업용 냉장, 냉동 장비의 유지보수 및 시스템
              개선 솔루션을 제공함으로써 발주자에게는 만족과 신뢰를, 기업에게는 이익과 보람을 추구하며 건강한 Service
              문화를 이룩함에 그 목적을 두고 있습니다.
            </p>
            <p className="mb-4">
              급진적인 산업발전과 글로벌화 되어가는 경제 질서 속에서 개인은 자기발전을, 기업은 끊임없는 기술경영혁신으로
              변화되는 시대에 대비하고 노력하는 자세로 국가 산업 발전에 기여하고 나아가, Mechanical Care Engineering
              이라고 하는 사명(社名)을 사명(使命)으로 고객의 니즈에 부합하는 Engineering을 제공하고자 합니다.
            </p>
            <p className="mb-4">
              또한 구성원의 실용적인 기술력과 합리적인 경영전략으로 창조적인 기업 문화를 이루어가고 있으며, 풍부한 현장
              경험과 탄탄한 기술력으로 고객만족과 더불어 최선의 품질을 제공할 것입니다.
            </p>
            <p className="mb-4">
              ㈜ 엠씨엔지니어링은 고객만족을 향해 노력하고 도전하는 기업으로 성장하고자 합니다. 감사합니다.
            </p>
            <p className="text-right font-semibold">대표이사 송 숙 희</p>
          </div>
        )
      case "location":
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">회사 위치</h3>
            <div className="flex items-start mb-4">
              <strong className="mr-2">주소:</strong>
              <p className="flex-grow">
                경기도 화성시 동탄영천로 150, B동 3층 301호 (영천동, 현대실리콘앨리)
                <button
                  onClick={() =>
                    copyToClipboard("경기도 화성시 동탄영천로 150, B동 3층 301호 (영천동, 현대실리콘앨리)")
                  }
                  className="ml-2 text-primary hover:text-primary/80 inline-flex items-center"
                  title="주소 복사"
                >
                  {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span className="sr-only">주소 복사</span>
                </button>
              </p>
            </div>
            <div className="aspect-w-16 aspect-h-56 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.8664032519946!2d127.09794731531561!3d37.29181197985099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5403f1fabcb9%3A0x5f7f4b1d3a2b2b2a!2z7ZiE64yA7Iuc66as7L2U7JWE66as!5e0!3m2!1sko!2skr!4v1625641234567!5m2!1sko!2skr"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="flex justify-center">
              <a
                href="https://maps.google.com/?q=경기도 화성시 동탄영천로 150, B동 3층 301호"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                <Navigation className="w-6 h-6" />
                <span className="sr-only">길찾기</span>
              </a>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">회사 소개</h1>

        <div className="flex flex-wrap gap-4 mb-8">
          <Button onClick={() => setActiveSection("info")} variant={activeSection === "info" ? "default" : "outline"}>
            회사 정보
          </Button>
          <Button
            onClick={() => setActiveSection("history")}
            variant={activeSection === "history" ? "default" : "outline"}
          >
            연혁
          </Button>
          <Button onClick={() => setActiveSection("ceo")} variant={activeSection === "ceo" ? "default" : "outline"}>
            CEO 인사말
          </Button>
          <Button
            onClick={() => setActiveSection("location")}
            variant={activeSection === "location" ? "default" : "outline"}
          >
            <MapPin className="w-4 h-4 mr-2" />
            회사 위치
          </Button>
        </div>

        {renderContent()}
      </main>
      <Footer />
    </div>
  )
}

