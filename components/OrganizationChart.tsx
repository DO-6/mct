export default function OrganizationChart() {
  return (
    <div className="w-full">
      <div className="w-full p-4">
        {/* 대표이사 */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[180px] h-12 bg-blue-100 border border-blue-300 rounded flex items-center justify-center mb-4">
            대표이사
          </div>

          {/* 수직 선 */}
          <div className="w-px h-4 bg-gray-400"></div>

          {/* 부서들을 포함하는 컨테이너 */}
          <div className="relative w-full">
            {/* 수평 선 */}
            <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gray-400"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-2">
              {/* 영업본부 섹션 */}
              <div className="flex flex-col items-center">
                <div className="w-px h-4 bg-gray-400"></div>
                <div className="w-full max-w-[160px] h-12 bg-blue-100 border border-blue-300 rounded flex items-center justify-center mb-4">
                  영업본부
                </div>
                <div className="w-px h-4 bg-gray-400"></div>
                <div className="w-full max-w-[160px] h-12 bg-yellow-100 border border-yellow-300 rounded flex items-center justify-center mb-4">
                  기술영업 팀
                </div>
                <div className="w-px h-4 bg-gray-400"></div>
                <div className="w-full max-w-[160px] h-12 bg-yellow-100 border border-yellow-300 rounded flex items-center justify-center">
                  Solution 영업 팀
                </div>
              </div>

              {/* HVAC Service 섹션 */}
              <div className="flex flex-col items-center">
                <div className="w-px h-4 bg-gray-400"></div>
                <div className="w-full max-w-[160px] h-12 bg-blue-100 border border-blue-300 rounded flex items-center justify-center mb-4">
                  HVAC Service
                </div>
                <div className="w-px h-4 bg-gray-400"></div>
                <div className="w-full max-w-[160px] h-12 bg-yellow-100 border border-yellow-300 rounded flex items-center justify-center mb-4">
                  Chiller Service 팀
                </div>
                <div className="w-px h-4 bg-gray-400"></div>
                <div className="w-full max-w-[160px] h-12 bg-yellow-100 border border-yellow-300 rounded flex items-center justify-center text-sm">
                  IR Service 팀
                </div>
              </div>

              {/* 지원본부 섹션 */}
              <div className="flex flex-col items-center">
                <div className="w-px h-4 bg-gray-400"></div>
                <div className="w-full max-w-[160px] h-12 bg-blue-100 border border-blue-300 rounded flex items-center justify-center mb-4">
                  지원본부
                </div>
                <div className="w-px h-4 bg-gray-400"></div>
                <div className="w-full max-w-[160px] h-12 bg-yellow-100 border border-yellow-300 rounded flex items-center justify-center mb-4">
                  경영지원 팀
                </div>
                <div className="w-px h-4 bg-gray-400"></div>
                <div className="w-full max-w-[160px] h-12 bg-yellow-100 border border-yellow-300 rounded flex items-center justify-center">
                  구매자재 팀
                </div>
              </div>

              {/* 기획팀 섹션 */}
              <div className="flex flex-col items-center">
                <div className="w-px h-4 bg-gray-400"></div>
                <div className="w-full max-w-[160px] h-12 bg-blue-100 border border-blue-300 rounded flex items-center justify-center mb-4">
                  기획 팀
                </div>
                <div className="w-px h-4 bg-gray-400"></div>
                <div className="w-full max-w-[160px] h-12 bg-yellow-100 border border-yellow-300 rounded flex items-center justify-center mb-4">
                  개발 팀
                </div>
                <div className="w-px h-4 bg-gray-400"></div>
                <div className="w-full max-w-[160px] h-12 bg-yellow-100 border border-yellow-300 rounded flex items-center justify-center">
                  홍보자재 팀
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

