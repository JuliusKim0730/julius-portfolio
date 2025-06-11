import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* 히어로 섹션 */}
      <section className="text-center py-20">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            안녕하세요, <span className="text-blue-600">김민균</span>입니다
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            15년차 게임기획자 & IT기획자 | AI 서비스 기획 전문가
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/about" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              이력서 보기
            </Link>
            <Link 
              href="/career/stockfolio" 
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              최신 프로젝트
            </Link>
          </div>
        </div>
      </section>

      {/* 주요 경력 섹션 */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">주요 경력</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 text-sm font-semibold mb-2">[AI] 2024.01 ~ 2025.03</div>
            <h3 className="text-xl font-bold mb-2">스톡폴리오</h3>
            <p className="text-gray-600 mb-4">AI 서비스기획 | PM</p>
            <p className="text-sm text-gray-500">7,000만원 급여 | 쿠퍼차트고</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 text-sm font-semibold mb-2">[AI] 2023.10 ~ 2023.12</div>
            <h3 className="text-xl font-bold mb-2">팩타고라</h3>
            <p className="text-gray-600 mb-4">AI 서비스기획 | PO</p>
            <p className="text-sm text-gray-500">7,000만원 급여 | 페이고</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 text-sm font-semibold mb-2">[IT] 2022.11 ~ 2023.07</div>
            <h3 className="text-xl font-bold mb-2">위에이알</h3>
            <p className="text-gray-600 mb-4">웹 및 앱 기획</p>
            <p className="text-sm text-gray-500">6,800만원 급여 | 계원상무</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 text-sm font-semibold mb-2">[IT] 2022.11 ~ 2022.10</div>
            <h3 className="text-xl font-bold mb-2">팀스노우볼</h3>
            <p className="text-gray-600 mb-4">Product Owner</p>
            <p className="text-sm text-gray-500">6,300만원 급여 | 구조조정</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 text-sm font-semibold mb-2">[게임] 2017.04 ~ 2021.11</div>
            <h3 className="text-xl font-bold mb-2">더블유게임즈</h3>
            <p className="text-gray-600 mb-4">기획자 | 시스템 기획</p>
            <p className="text-sm text-gray-500">4,950만원 급여 | 계약만료</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 text-sm font-semibold mb-2">[게임] 2017.01 ~ 2017.04</div>
            <h3 className="text-xl font-bold mb-2">넥스트게임즈</h3>
            <p className="text-gray-600 mb-4">기획자</p>
            <p className="text-sm text-gray-500">3,700만원 급여 | 계약만료</p>
          </div>
        </div>
      </section>

      {/* 핵심 역량 섹션 */}
      <section className="py-16 bg-white rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-12">핵심 역량</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">이끌어내는 기획자</h3>
            <p className="text-gray-600">팀원들의 잠재력을 끌어내어 최고의 성과를 만들어내는 리더십</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">ZeroToOne 기획자</h3>
            <p className="text-gray-600">0에서 1을 만들어내는 창조적 기획력과 실행력</p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">조직관리자</h3>
            <p className="text-gray-600">효율적인 팀 운영과 프로젝트 관리 전문성</p>
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">연락처</h2>
        <div className="flex justify-center space-x-8">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>010-9853-6340</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>kia1026@naver.com</span>
          </div>
        </div>
      </section>
    </div>
  );
}
