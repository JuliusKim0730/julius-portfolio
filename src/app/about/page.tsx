export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto" suppressHydrationWarning>
      {/* 개인 정보 헤더 */}
      <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-32 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">사진</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">김민균 (Kim Min Gyun)</h1>
            <p className="text-xl text-gray-600 mb-4">이끌어내는 기획자 · AI 서비스 기획 전문가</p>
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

      {/* 자기소개 */}
      <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">자기소개</h2>
        
        {/* 메인 소개 */}
        <div className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            안녕하세요, <strong className="text-blue-600">이끌어내는 기획자 김민균</strong>입니다.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            저는 15년간 다양한 도메인에서 30여 개의 프로젝트를 기획하고 성공적으로 이끌어온 기획 전문가입니다.
            게임부터 시작하여 데이팅앱, 메타버스, 이스포츠, 실시간퀴즈쇼, 지역 기반 OTT프로젝트 등에 참여했었습니다.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            최근에는 AI 서비스를 기획, 구축하는 일을 주도했으며, 비즈니스모델 설계를 진행했습니다.
            또한, 더블유게임즈 이후 모든 기업에서 조직 리드 경험을 통해 복잡한 문제를 해결하고, 제품의 가치를 극대화하는 데 주력해왔습니다.
          </p>
        </div>

        {/* AI 제품 기획 커리어 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-3">1</span>
            AI 제품 기획 커리어
          </h3>
          <div className="bg-blue-50 p-6 rounded-lg mb-4">
            <h4 className="font-bold text-lg mb-2 text-blue-900">스톡폴리오 - Pixt AI</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              최근 스톡폴리오에서 AI 영상 제작 서비스 'Pixt AI'의 PM으로 일했습니다.
              CES, NAB쇼, 월드 IT쇼 등 국제 전시회에 제품을 성공적으로 출품했습니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              이 과정에서 AI 프롬프트 설계와 워크 플로우 고도화를 통해 사용자 경험을 최적화했습니다. 
              사용자 경험의 설계를 기반으로 전시회마다 호평을 받았고, 다수의 MOU 체결과 고객사 컨택을 이끌어냈습니다.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-2 text-green-900">팩타고라 - 법률 AI 서비스</h4>
            <p className="text-gray-700 leading-relaxed">
              팩타고라에서는 법률 AI 및 지식저장소 서비스의 Product Owner로 활동하며, 
              GPT 설계와 웹사이트 IA 재구성을 통해 B2C 버전을 성공적으로 런칭했습니다.
            </p>
          </div>
        </div>

        {/* 조직 리드 경험 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-3">2</span>
            조직 리드 경험: 팀과 제품의 동반 성장
          </h3>
          <div className="space-y-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-purple-900">위에이알 - 보핀(Boppin) 서비스</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                24인 규모의 메타버스 팀을 리드하며 '보핀(Boppin)' 서비스를 동남아시아 3개국에 성공적으로 런칭했습니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                평균 경력 1.6년 미만의 주니어 개발자들로 구성된 팀을 관리하며 애자일 방법론과 KPT 회고를 도입해 팀원들의 성장을 이끌어냈습니다.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <p className="text-gray-700 font-medium">
                  <strong>성과:</strong> 한 번도 출시 경험이 없는 회사에 제품 출시 경험을 이끌어내고, 
                  초기 서비스의 아쉬운 반응을 업데이트를 통해 D-3 리텐션 28%, DAU 1천 명이라는 성과로 개선
                </p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-orange-900">팀스노우볼 - 데카킬(Decakill)</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                트위치 기반 실시간 예측 퀴즈 프로그램 '데카킬(Decakill)'의 PO로 활동하며, 
                초기 아이데이션부터 개발, 런칭, 운영까지 전 과정을 총괄했습니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                신규 구성된 팀은 주니어 조직이었기에 협업 프로세스를 수정, 모두가 성장하여 제품 출시를 경험할 수 있도록 했습니다.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <p className="text-gray-700 font-medium">
                  <strong>성과:</strong> 스트리머와 협업하여 시청자의 80% 이상이 참여하는 높은 몰입도를 이끌어내고, 
                  이스포츠 구단 농심과 업무 협약 체결
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 핵심 강점 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-3">💪</span>
            핵심 강점
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-2">🤖 AI 기반 서비스 기획 역량</h4>
              <p className="text-gray-700 text-sm">외부 AI API 활용 및 LLM 기반의 AI 세팅을 통한 서비스 기획 및 사용자 FLOW 구축</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
              <h4 className="font-bold text-green-900 mb-2">📊 데이터 기반 의사결정</h4>
              <p className="text-gray-700 text-sm">사용자 행동 분석을 통한 문제 해결 및 제품 개선</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg">
              <h4 className="font-bold text-purple-900 mb-2">👥 조직 관리 및 리더십</h4>
              <p className="text-gray-700 text-sm">다양한 규모의 팀 관리와 효율적인 업무 프로세스 구축</p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg">
              <h4 className="font-bold text-orange-900 mb-2">🎯 문제 해결 능력</h4>
              <p className="text-gray-700 text-sm">복잡한 문제를 구조화하고 실행 가능한 솔루션으로 전환</p>
            </div>
          </div>
        </div>

        {/* 비전 및 목표 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4">💡 "상상을 현실로 이끌어내는 기획"</h3>
          <p className="leading-relaxed mb-4">
            사람들 머리 속 상상을 현실로 이끌어내며, 우리가 원하는 제품을 구체적으로 이끌어냅니다.
            추상적인 아이디어를 구체적인 전략으로 설계하고, 이를 실행 가능한 결과물로 만들어내는 것이 저의 가장 큰 강점입니다.
          </p>
          <p className="leading-relaxed">
            앞으로도 귀사의 비전 실현에 기여하며, 사용자와 시장 모두에게 사랑받는 제품을 만들어가고 싶습니다.
          </p>
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
          경력사항 <span className="text-lg text-gray-600">(총 경력: 14년 4개월)</span>
        </h2>

        {/* 스톡폴리오 */}
        <div className="mb-12 border-l-4 border-blue-500 pl-6">
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <div className="text-blue-600 font-bold text-lg mb-2 md:mb-0 md:mr-4">2024.01 ~ 2025.03 (1년 3개월)</div>
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">AI 서비스기획</div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">스톡폴리오(StockfolioInc.)</h3>
          
          {/* AI UX & BM 구축 */}
          <div className="mb-6 bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">2024.11 ~ 2025.03</span>
              <h4 className="text-lg font-bold text-blue-900">AI UX & BM 구축</h4>
            </div>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">🎯 프로젝트 목표</h5>
                <p className="text-gray-700 bg-white p-3 rounded border-l-4 border-blue-400">
                  AI를 사용하는 사람들의 추상적인 생각, 니즈를 직관적 UI와 경험 설계로 풀어내야 한다.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">⚡ 이행 과정</h5>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>영상을 만들고 싶다는 막연함에 아이디어를 더해주는 "컨텐츠 기획 헬퍼" 기획 및 AI 구축</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>단순 목적으로 빠르게 뽑아내는 "빠른 제작" 기획 및 AI 구축</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>편집과 수정의 자동화를 위해 기존 구조의 디자인 개편 수행</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">💰 비즈니스 모델 구축</h5>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>사람들이 손쉽게 이용할 수 있는 "미끼상품" 기획</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>해당 경험을 토대로 "업스케일링" 할 수 있는 상품 기획</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>필요한 시점에 맞춰 추가 보상 지급과 구매 전략을 기획</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 서비스 버전 개발 */}
          <div className="mb-6 bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">2024.08 ~ 2024.11</span>
              <h4 className="text-lg font-bold text-green-900">서비스 버전 개발</h4>
            </div>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">🎯 프로젝트 목표</h5>
                <p className="text-gray-700 bg-white p-3 rounded border-l-4 border-green-400">영상 퀄리티 향상</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">🔧 주요 기능 기획</h5>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>랜딩페이지 변경 기획</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>영상 편집을 위한 Main Feature 3종 기획 및 개발 적용</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>자막 편집을 위한 Main Feature 1종, Sub Feature 4종 기획 및 개발 적용</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>AI 음성 작업을 위한 Sub Feature 2종 기획 및 개발 적용</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>영상 제작 편의성 기능 3종 기획 및 개발 적용</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">📊 데이터 분석 환경 기획</h5>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>GA4 연동</li>
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>Firebase 대시보드 구성</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PoC 버전 출시 */}
          <div className="mb-6 bg-purple-50 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">2024.05 ~ 2024.07</span>
              <h4 className="text-lg font-bold text-purple-900">PoC 버전 출시</h4>
            </div>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">🎯 프로젝트 목표</h5>
                <p className="text-gray-700 bg-white p-3 rounded border-l-4 border-purple-400">PoC 버전 출시</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">🔧 주요 기능 기획</h5>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>AI 기반 스크립트 헬퍼 확장</li>
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>3가지 AI 모델로 R&D</li>
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>핵심 AI API와 Sub API 구성 및 프롬프트 엔지니어링</li>
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span>사용자 가이드 기획</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <h5 className="font-semibold text-purple-800 mb-2">🏆 성과</h5>
                <ul className="space-y-1 text-gray-700">
                  <li>• 스마트 테크 코리아쇼 시연</li>
                  <li>• PoC를 통한 MOU 8건 체결</li>
                </ul>
              </div>
            </div>
          </div>

          {/* NAB쇼, 월드 IT쇼 버전 출시 */}
          <div className="mb-6 bg-orange-50 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">2024.03 ~ 2024.04</span>
              <h4 className="text-lg font-bold text-orange-900">NAB쇼, 월드 IT쇼 버전 출시</h4>
            </div>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">🎯 프로젝트 목표</h5>
                <p className="text-gray-700 bg-white p-3 rounded border-l-4 border-orange-400">NAB쇼, 월드 IT쇼 출품</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">⚡ 액션</h5>
                <p className="text-gray-700">스크립트 생성 AI 고도화</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <h5 className="font-semibold text-orange-800 mb-2">🏆 성과</h5>
                <ul className="space-y-1 text-gray-700">
                  <li>• 대본 완성도 향상, 사용자 경험 향상</li>
                  <li>• 협업 파트너 컨택 23건</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 제품 리빌딩, 프로세스 개편 */}
          <div className="mb-6 bg-red-50 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">2024.03 ~ 2024.04</span>
              <h4 className="text-lg font-bold text-red-900">제품 리빌딩, 프로세스 개편</h4>
            </div>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">⚠️ 문제</h5>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span>외주 개발 결과물과 내부 백엔드 결과물의 연결 부재</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">•</span>내부 프론트 개발자가 외주 결과물 분석 불가</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">🔧 대응</h5>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>재개발 일정 수립</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>향후 같은 이슈를 일으키지 않기 위해 업무프로세스 전면 개편</li>
                  <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>재개발하는 동안 AI, 백엔드 로직 개편하여 퀄리티 향상</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CES버전 출시 */}
          <div className="bg-indigo-50 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">2024.01 ~ 2024.02</span>
              <h4 className="text-lg font-bold text-indigo-900">CES버전 출시</h4>
            </div>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">⚠️ 문제</h5>
                <p className="text-gray-700 bg-white p-3 rounded border-l-4 border-red-400">CES 출시해야하지만, 제품이 돌아가지 않는 상태</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">🔧 대응</h5>
                <p className="text-gray-700">기능을 대폭 제한, 핵심 역량 검증 및 제공을 위한 FLOW만 구축</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                <h5 className="font-semibold text-indigo-800 mb-2">🏆 성과</h5>
                <p className="text-gray-700">CES 출품 및 성공적 시연</p>
              </div>
            </div>
          </div>
        </div>

        {/* 팩타고라 */}
        <div className="mb-12 border-l-4 border-green-500 pl-6">
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <div className="text-green-600 font-bold text-lg mb-2 md:mb-0 md:mr-4">2023.10 ~ 2023.12 (3개월)</div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">AI 서비스기획</div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">팩타고라</h3>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">🎯 목표</h5>
                <p className="text-gray-700 bg-white p-3 rounded border-l-4 border-green-400">USER FLOW 및 IA 재구성</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">📋 실행 계획</h5>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>기존 웹사이트 USER FLOW 및 IA 재구성</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>AI 챗봇 시스템 수정 기획</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>AI 문서 분석 시스템 기획</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>AI 지식저장소 admin 및 dashboard 기획</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>AI 지식저장소 웹사이트 기획</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">•</span>GPTs 설계</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-green-500">
                <h5 className="font-semibold text-green-800 mb-2">🏆 성과</h5>
                <ul className="space-y-1 text-gray-700">
                  <li>• Web site B2C version 11월 시범 운영</li>
                  <li>• 12월 베타 서비스 런칭</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 주식회사위에이알 */}
        <div className="mb-12 border-l-4 border-purple-500 pl-6">
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <div className="text-purple-600 font-bold text-lg mb-2 md:mb-0 md:mr-4">2022.11 ~ 2023.07 (9개월)</div>
            <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">메타버스 기획</div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">주식회사위에이알</h3>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="space-y-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">📅 프로젝트 타임라인</h5>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                    <h6 className="font-medium text-purple-800 mb-2">메타버스 플랫폼 프로젝트 기획 (22.11 ~ 22.12)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 클레이랜드 후속 모델 기획</li>
                      <li>• 백서 작성</li>
                      <li>• 경제 시스템 및 보상 구조 구성</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-blue-400">
                    <h6 className="font-medium text-blue-800 mb-2">게임 테스트버전 개발 (22.11 ~ 22.12)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 하이퍼캐쥬얼 게임 Last Ark 담당</li>
                      <li>• 테스트버전 출시</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-green-400">
                    <h6 className="font-medium text-green-800 mb-2">차기작 게임 프로젝트 진행 (22.12 ~ 23.01)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 수집형 캐쥬얼 게임 기획</li>
                      <li>• 프로토타입 구축</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-orange-400">
                    <h6 className="font-medium text-orange-800 mb-2">실시간 통신 캐쥬얼 게임 프로젝트 진행 (23.01 ~ 23.02)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Elemental Runner 기획 및 Beta Version 개발</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-red-400">
                    <h6 className="font-medium text-red-800 mb-2">메타버스 서비스 보핀 프로젝트 진행 (23.02 ~ 23.06)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 본디를 모티브로 한 메타버스 서비스 기획</li>
                      <li>• 초기 IA, User flow, Wireframe, 스토리보드 기획</li>
                      <li>• 차후 서비스 로드맵 설계</li>
                      <li>• FB Event log 기획 및 데이터 분석</li>
                      <li>• 24인 조직 인원 관리</li>
                      <li>• 주기적 1on1 및 스프린트, KPT 회고 관리</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <h5 className="font-semibold text-purple-800 mb-2">🏆 최종 성과</h5>
                <ul className="space-y-1 text-gray-700">
                  <li>• 2023년 6월 인도네시아, 말레이시아, 호주에 제한적 오픈</li>
                  <li>• 출시 후 D-3리텐션 28%, DAU 1천명 달성</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 주식회사팀스노우볼 */}
        <div className="mb-12 border-l-4 border-red-500 pl-6">
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <div className="text-red-600 font-bold text-lg mb-2 md:mb-0 md:mr-4">2021.11 ~ 2022.10 (1년)</div>
            <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Product Owner</div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">주식회사팀스노우볼</h3>
          
          <div className="bg-red-50 p-6 rounded-lg">
            <div className="space-y-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">🎮 Decakill 프로젝트</h5>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-red-400">
                    <h6 className="font-medium text-red-800 mb-2">Decakill PO(팀리더)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 서비스 및 백오피스 기획</li>
                      <li>• 12명 팀원 관리</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-blue-400">
                    <h6 className="font-medium text-blue-800 mb-2">Decakill 시스템 기획 및 런칭 (21.11 ~ 22.05)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 전체 시스템 구축</li>
                      <li>• 전체 컨텐츠 순환구조 구축</li>
                      <li>• 추후 업데이트 로드맵 구축</li>
                      <li>• 4인조직으로 내부 시연 후 12인 조직으로 확장</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-green-400">
                    <h6 className="font-medium text-green-800 mb-2">Decakill 서비스 및 개선 기획 (22.05 ~ 22.09)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 라이벌 시스템 추가</li>
                      <li>• 예측 이외에 퀴즈와 설문 추가</li>
                      <li>• 사이트 연결</li>
                      <li>• UX 개선</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                    <h6 className="font-medium text-purple-800 mb-2">추가 개발 프로젝트</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Decakill 보상 사이트 기획 및 개발 (22.03 ~ 22.07)</li>
                      <li>• Decakill 문제 출제 페이지 구축 (22.01 ~ 22.04)</li>
                      <li>• Decakill 보상 관리 페이지 구축 (22.03 ~ 22.07)</li>
                      <li>• 차기 프로젝트 제안 (22.09 ~ 22.10)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <h5 className="font-semibold text-red-800 mb-2">🏆 최종 성과</h5>
                <ul className="space-y-1 text-gray-700">
                  <li>• 이스포츠 구단 농심과 업무 협약</li>
                  <li>• 스트리머 "엠비션" 과 1달간 이벤트 진행</li>
                  <li>• 스트리머 4인 추가 계약</li>
                  <li>• 특정 스트리머 기준, 1500명 중 800여명 참여 유도</li>
                  <li>• 복수 질문 응답률 80% 이상 달성</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 주식회사 더블유게임즈 */}
        <div className="mb-12 border-l-4 border-yellow-500 pl-6">
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <div className="text-yellow-600 font-bold text-lg mb-2 md:mb-0 md:mr-4">2017.04 ~ 2021.11 (4년 8개월)</div>
            <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">시스템 기획</div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">주식회사 더블유게임즈</h3>
          
          <div className="space-y-6">
            {/* 수집형 Idle RPG 시스템 기획 */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">2020.03 ~ 2021.11</span>
                <h4 className="text-lg font-bold text-yellow-900">수집형 Idle RPG 프로젝트</h4>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                  <h6 className="font-medium text-yellow-800 mb-2">수집형 Idle RPG 시스템 기획 (20.03 ~ 21.09)</h6>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 메인 화면 구성 및 차량을 이용한 좀비 IDLE 전투 기획</li>
                    <li>• IDLE, 빠른사냥, 월드맵, 스토리 모아보기, 캠페인 진행도 등의 시스템 기획</li>
                    <li>• 캐릭터 보관함, 슬롯 확장 시스템</li>
                    <li>• 캐릭터의 성장 및 장비, 장비 강화 시스템, 장비 등급업 시스템 기획</li>
                    <li>• 진형 강화 시스템 및 진형 관리, 덱 저장 시스템, 도감 시스템</li>
                    <li>• TOWER 형태의 PVE 시스템, 상위 종족별 PVE 시스템</li>
                    <li>• 5:5 PVP 시스템, 15:15 PVP 시스템 기획</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-green-400">
                  <h6 className="font-medium text-green-800 mb-2">런칭 및 대응 기획 (21.09 ~ 21.11)</h6>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 레이싱 이벤트 기획</li>
                    <li>• 캐릭터 관리 시스템 확장 기획</li>
                    <li>• 기존 제작된 Tower PvE 레벨 확장</li>
                    <li>• 확장 강화 시스템 기획</li>
                    <li>• 아이템 성장 확장 시스템 기획</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                  <h5 className="font-semibold text-yellow-800 mb-2">🏆 주요 성과</h5>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 출시 1달만에 100만 다운로드 달성</li>
                    <li>• 평균 월 매출 1억원 달성</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 하이퍼 캐쥬얼 게임 기획 */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">2020.02 ~ 2020.03</span>
                <h4 className="text-lg font-bold text-blue-900">하이퍼 캐쥬얼 게임 기획</h4>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>하이퍼 캐쥬얼을 위한 소규모 조직 운영</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>4개의 하이퍼캐쥬얼 기획</li>
                <li className="flex items-start"><span className="text-blue-500 mr-2">•</span>1개의 알파버전 개발</li>
              </ul>
            </div>

            {/* 모바일 SLG 게임 */}
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">2017.04 ~ 2020.02</span>
                <h4 className="text-lg font-bold text-green-900">모바일 SLG 게임 프로젝트</h4>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border-l-4 border-green-400">
                  <h6 className="font-medium text-green-800 mb-2">시스템 기획 및 밸런스 (17.04 ~ 17.12)</h6>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 클래시오브클랜 기반의 약탈형 PVP 기획</li>
                    <li>• 관련 매치메이킹 시스템 및 봇 데이터 기획</li>
                    <li>• 내부 자원 생산시설 시스템 기획</li>
                    <li>• 내부 훈련 시설 시스템 및 캐릭터 성장 시스템 기획</li>
                    <li>• 초기 인게임 재화 밸런스 및 경제 밸런스 구축</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                  <h6 className="font-medium text-purple-800 mb-2">런칭 및 대응 기획 (17.12 ~ 20.02)</h6>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 다자간 영토를 중심으로 한 PVP 시스템 기획</li>
                    <li>• 하드코어유저를 위한 15:15길드전 기획</li>
                    <li>• 지표 기반 개선 기획 진행 (PVE 레벨디자인, 초기 가이드 시스템)</li>
                    <li>• 잉여재화 소비 시스템 기획 (컨버트, 탐색 시스템)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <h5 className="font-semibold text-green-800 mb-2">🏆 주요 성과</h5>
                  <ul className="space-y-1 text-gray-700">
                    <li>• 2달 만에 100만 다운로드 달성</li>
                    <li>• 평균 월 매출 1억원 달성</li>
                    <li>• 2019년 손익분기 달성</li>
                    <li>• 해당 IP로 차기 프로젝트 진행</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 간략한 나머지 경력들 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-xl font-bold text-gray-800 mb-4">기타 주요 경력</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border-l-4 border-indigo-400">
              <h5 className="font-bold text-indigo-800 mb-2">(주)에스엔게임즈 (2017.01~2017.04)</h5>
              <p className="text-sm text-gray-700">갓오브하이스쿨 전투밸런스 담당, 신규 캐릭터 9개 기획</p>
            </div>
            <div className="bg-white p-4 rounded border-l-4 border-pink-400">
              <h5 className="font-bold text-pink-800 mb-2">주식회사 테크랩스 (2016.06~2017.01)</h5>
              <p className="text-sm text-gray-700">아만다 데이팅앱 기획, 월 매출 5억→8억 성장</p>
            </div>
            <div className="bg-white p-4 rounded border-l-4 border-orange-400">
              <h5 className="font-bold text-orange-800 mb-2">주식회사바이닐랩 (2015.12~2016.06)</h5>
              <p className="text-sm text-gray-700">모바일 SNG 시스템 기획 및 기획팀장</p>
            </div>
            <div className="bg-white p-4 rounded border-l-4 border-teal-400">
              <h5 className="font-bold text-teal-800 mb-2">(주)브로모 (2015.05~2015.12)</h5>
              <p className="text-sm text-gray-700">MOBA 게임 시스템 기획, 30여종 캐릭터 기획</p>
            </div>
            <div className="bg-white p-4 rounded border-l-4 border-cyan-400">
              <h5 className="font-bold text-cyan-800 mb-2">산게임즈주식회사 (2013.03~2015.04)</h5>
              <p className="text-sm text-gray-700">올려라선장님 SNG 게임 총괄 기획, 100만 다운로드</p>
            </div>
            <div className="bg-white p-4 rounded border-l-4 border-lime-400">
              <h5 className="font-bold text-lime-800 mb-2">기타 초기 경력 (2010~2013)</h5>
              <p className="text-sm text-gray-700">알트원, 소프트닉스, 바른손이앤에이 등에서 게임 기획</p>
            </div>
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