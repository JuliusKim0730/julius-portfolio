export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* 개인 정보 헤더 */}
      <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-32 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">사진</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">김민균 (Kim Min Gyun)</h1>
            <p className="text-xl text-gray-600 mb-4">게임기획전문가 · AI 서비스 기획자</p>
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-8">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(휴대전화) 010-9853-6340</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>(e-mail) kia1026@naver.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 학력사항 */}
      <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">학력사항</h2>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-48 text-gray-600 font-medium mb-2 md:mb-0">2011.03 ~ 2014.08</div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">경희사이버대학교</h3>
              <p className="text-gray-600">서울 · 자산관리학과 · 학사</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-48 text-gray-600 font-medium mb-2 md:mb-0">2006.03 ~ 2007.11</div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">연세디지털대학교대학원</h3>
              <p className="text-gray-600">서울 · 게임기획학과 · 학사</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-48 text-gray-600 font-medium mb-2 md:mb-0">2003.03 ~ 2006.02</div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">부천고등학교</h3>
              <p className="text-gray-600">경기</p>
            </div>
          </div>
        </div>
      </section>

      {/* 경력사항 */}
      <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
          경력사항 <span className="text-lg text-gray-600">(총 경력: 15년 1개월)</span>
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex flex-col md:flex-row md:items-center mb-2">
              <div className="text-blue-600 font-semibold mb-1 md:mb-0 md:mr-4">2024.01 ~ 2025.03 (15개월)</div>
              <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm inline-block">AI 서비스기획</div>
            </div>
            <h3 className="text-xl font-bold mb-2">스톡폴리오 · 재무회 · PM</h3>
            <p className="text-gray-600 mb-2">급여: 7,000만원 · 퇴사사유: 쿠퍼차트고</p>
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex flex-col md:flex-row md:items-center mb-2">
              <div className="text-green-600 font-semibold mb-1 md:mb-0 md:mr-4">2023.10 ~ 2023.12 (3개월)</div>
              <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm inline-block">AI 서비스기획</div>
            </div>
            <h3 className="text-xl font-bold mb-2">팩타고라 · 시설 · PO</h3>
            <p className="text-gray-600 mb-2">급여: 7,000만원 · 퇴사사유: 페이고</p>
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <div className="flex flex-col md:flex-row md:items-center mb-2">
              <div className="text-purple-600 font-semibold mb-1 md:mb-0 md:mr-4">2022.11 ~ 2023.07 (9개월)</div>
              <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm inline-block">웹 및 앱 기획</div>
            </div>
            <h3 className="text-xl font-bold mb-2">위에이알 · 메타버스 · 조직장</h3>
            <p className="text-gray-600 mb-2">급여: 6,800만원 · 퇴사사유: 계원상무</p>
          </div>

          <div className="border-l-4 border-red-500 pl-6">
            <div className="flex flex-col md:flex-row md:items-center mb-2">
              <div className="text-red-600 font-semibold mb-1 md:mb-0 md:mr-4">2021.11 ~ 2022.10 (1년)</div>
              <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm inline-block">Product Owner</div>
            </div>
            <h3 className="text-xl font-bold mb-2">팀스노우볼 · B2C · 조직장</h3>
            <p className="text-gray-600 mb-2">급여: 6,300만원 · 퇴사사유: 구조조정</p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-6">
            <div className="flex flex-col md:flex-row md:items-center mb-2">
              <div className="text-yellow-600 font-semibold mb-1 md:mb-0 md:mr-4">2017.04 ~ 2021.11 (4년8개월)</div>
              <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm inline-block">기획자</div>
            </div>
            <h3 className="text-xl font-bold mb-2">더블유게임즈 · 기업회 · 시스템 기획</h3>
            <p className="text-gray-600 mb-2">급여: 4,950만원 · 퇴사사유: 계약만료</p>
          </div>

          <div className="border-l-4 border-indigo-500 pl-6">
            <div className="flex flex-col md:flex-row md:items-center mb-2">
              <div className="text-indigo-600 font-semibold mb-1 md:mb-0 md:mr-4">2017.01 ~ 2017.04 (4개월)</div>
              <div className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm inline-block">기획자</div>
            </div>
            <h3 className="text-xl font-bold mb-2">넥스트게임즈 · 기업회 · 전략기획 개발자·자산설계자</h3>
            <p className="text-gray-600 mb-2">급여: 3,700만원 · 퇴사사유: 계약만료</p>
          </div>
        </div>
      </section>

      {/* 자격사항 */}
      <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">자격사항</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">게임기획전문가</h3>
            <p className="text-gray-600">취득일: 2010.11</p>
            <p className="text-gray-600">발행처: 한국컨텐츠진흥원</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">컴프토토서스</h3>
            <p className="text-gray-600">취득일: 2002.06</p>
            <p className="text-gray-600">발행처: 대한상공회의소</p>
          </div>
        </div>
      </section>

      {/* 소프트웨어 스킬 */}
      <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
          작업 관련 Software 스킬 (Photoshop, Illustrator, Smoke, Nuke, After Effect, Maya...)
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="font-medium">JIRA / CONFLUENCE</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="font-medium">NOTION</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="font-medium">OFFICEWORD, EXCEL, PPT</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i < 5 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="font-medium">FIGMA</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="font-medium">Cursor AI</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="font-medium">AI 프롬프트 엔지니어링</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트별 경력 기술 공간 */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">프로젝트별 경력 기술</h2>
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <p className="text-gray-600 text-lg">이 공간은 개별 프로젝트별 상세 경력을 작성할 예정입니다.</p>
          <p className="text-gray-500 mt-2">각 프로젝트의 역할, 성과, 사용 기술 등을 추가로 기술할 예정입니다.</p>
        </div>
      </section>
    </div>
  );
} 