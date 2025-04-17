import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Wrench, ShoppingCart, HeartPulse, Clock, Award, Phone, Settings, Factory, FileCheck } from "lucide-react"

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* 헤더 섹션 */}
        <div className="bg-primary text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">서비스</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              최고의 공조 냉동기계 판매 및 유지보수 서비스를 제공합니다. 50년 이상의 경험과 전문 기술로 고객의 요구에
              맞는 최적의 솔루션을 제공합니다.
            </p>
          </div>
        </div>

        {/* 서비스 개요 섹션 */}
        <section className="py-12 bg-neutral">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">최고의 냉동 시스템 솔루션</h2>
                <p className="text-lg mb-6">
                  당사는 산업용 및 상업용 냉동 시스템의 판매, 설치, 유지보수 및 수리 서비스를 제공합니다. 고객의 니즈에
                  맞는 맞춤형 솔루션으로 에너지 효율성과 신뢰성을 보장합니다.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span> 최신 기술의 냉동 시스템 판매
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span> 전문적인 설치 및 시운전
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span> 정기적인 유지보수 및 점검
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span> 24시간 긴급 수리 서비스
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span> 에너지 효율 최적화 컨설팅
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-center">서비스 문의</h3>
                <p className="mb-4 text-center">전문 상담원이 고객님의 문의사항에 신속하게 답변해 드립니다.</p>
                <div className="flex justify-center">
                  <a
                    href="#contact"
                    className="bg-action hover:bg-action/90 text-white px-6 py-3 rounded-md transition-colors duration-300 inline-flex items-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    문의하기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 주요 서비스 섹션 */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">주요 서비스</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 판매 서비스 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <ShoppingCart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">냉동기계 판매</h3>
                <p className="text-gray-600 mb-4">
                  부성, YORK, Frick, Sabroe, Hitachi 등 세계적인 브랜드의 고품질 냉동기계를 판매합니다. 고객의 요구사항과
                  환경에 맞는 최적의 제품을 추천해 드립니다.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 터보 냉동기, 스크류 냉동기</li>
                  <li>• 공냉식/수냉식 칠러</li>
                  <li>• 유닛 쿨러 및 콘덴싱 유닛</li>
                  <li>• 각종 냉동 부품 및 액세서리</li>
                </ul>
              </div>

              {/* 유지보수 서비스 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">유지보수 서비스</h3>
                <p className="text-gray-600 mb-4">
                  정기적인 점검과 유지보수를 통해 냉동 시스템의 수명을 연장하고 최적의 성능을 유지할 수 있도록
                  도와드립니다.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 정기 점검 및 성능 테스트</li>
                  <li>• 부품 교체 및 업그레이드</li>
                  <li>• 냉매 충전 및 누설 점검</li>
                  <li>• 시스템 최적화 및 효율 개선</li>
                  <li>• 예방적 유지보수 프로그램</li>
                </ul>
              </div>

              {/* 긴급 수리 서비스 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <HeartPulse className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">긴급 수리 서비스</h3>
                <p className="text-gray-600 mb-4">
                  냉동 시스템 고장 시 신속하게 대응하여 비즈니스 중단을 최소화합니다. 24시간 긴급 출동 서비스를
                  제공합니다.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 24/7 긴급 출동 서비스</li>
                  <li>• 신속한 고장 진단 및 수리</li>
                  <li>• 주요 부품 재고 확보</li>
                  <li>• 수리 후 성능 테스트</li>
                  <li>• 고장 원인 분석 및 재발 방지 대책</li>
                </ul>
              </div>

              {/* 설치 및 시운전 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">설치 및 시운전</h3>
                <p className="text-gray-600 mb-4">
                  전문 기술진이 산업용 냉동기의 설치부터 시운전까지 완벽하게 수행합니다.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 터빈냉동기 설치 및 명명작업</li>
                  <li>• 압축식(산업용) 스크류냉동기 설치</li>
                  <li>• 시운전 및 성능 최적화</li>
                  <li>• 현장 맞춤형 설치 솔루션 제공</li>
                </ul>
              </div>

              {/* 제조 및 생산 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Factory className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">제조 및 생산</h3>
                <p className="text-gray-600 mb-4">고객의 요구에 맞는 맞춤형 산업용 냉동 및 냉방 장비를 제조합니다.</p>
                <ul className="space-y-2 text-sm">
                  <li>• 지온용 스크류냉동기 제조</li>
                  <li>• 맞춤형 냉동 장비 설계 및 생산</li>
                  <li>• 품질 관리 및 성능 테스트</li>
                  <li>• 지속적인 기술 혁신 및 개발</li>
                </ul>
              </div>

              {/* 인허가 및 기술 지원 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FileCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">인허가 및 기술 지원</h3>
                <p className="text-gray-600 mb-4">
                  냉각탑, 냉동설비 관련 인허가 절차를 지원하고, 기술 검사를 대행합니다.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 터빈냉동기 수인허가 및 기술검사 대행</li>
                  <li>• 압축식 스크류냉동기 신규/재조 인허가</li>
                  <li>• 법규 준수 및 안전 기준 충족 지원</li>
                  <li>• 기술 문서 작성 및 제출 지원</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 파트너십 및 추가 서비스 섹션 */}
        <section className="py-12 bg-neutral">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">파트너십 및 추가 서비스</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Johnson Controls kr 파트너십</h3>
                <ul className="space-y-2">
                  <li>• HVAC 장비 판매 및 솔루션 제공: YORK</li>
                  <li>• 산업용 냉동기 판매 및 Parts 공급: Frick, SABROE, HITACHI</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">소방시설 및 소화설비 기기류 자재 판매</h3>
                <p>
                  냉동 시스템과 연계된 소방시설 및 소화설비 판매 서비스를 제공합니다. 안전과 효율성을 모두 고려한 통합
                  솔루션을 제안합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 서비스 특징 섹션 */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">서비스 특징</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">신속한 대응</h3>
                <p>
                  고객의 요청에 신속하게 대응하여 시스템 다운타임을 최소화합니다. 24시간 긴급 출동 서비스를 제공합니다.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">전문 기술력</h3>
                <p>
                  50년 이상의 경험과 지속적인 교육을 통해 최고 수준의 기술력을 보유한 전문 엔지니어가 서비스를
                  제공합니다.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <ShoppingCart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">정품 부품</h3>
                <p>모든 수리 및 유지보수에 정품 부품만을 사용하여 시스템의 안정성과 수명을 보장합니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 문의 섹션 */}
        <section id="contact" className="py-12 bg-neutral">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">서비스 문의</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              냉동 시스템 판매, 설치, 유지보수에 관한 문의사항이 있으시면 언제든지 연락주세요. 전문 상담원이 친절하게
              답변해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:02-1234-5678"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-colors duration-300 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                전화 문의: 02-1234-5678
              </a>
              <button
                onClick={() => (window.location.href = "/")}
                className="bg-action hover:bg-action/90 text-white px-6 py-3 rounded-md transition-colors duration-300 inline-flex items-center justify-center"
              >
                <Wrench className="w-5 h-5 mr-2" />
                견적 요청하기
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

