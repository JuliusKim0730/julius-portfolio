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
              {/* 회사 소개 */}
              <div className="bg-white p-4 rounded border-l-4 border-purple-600">
                <h5 className="font-semibold text-purple-800 mb-2">🏢 회사 소개</h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  위에이알은 메타버스 플랫폼 개발 회사로, 클레이랜드라는 메타버스 서비스를 운영하고 있습니다. 
                  블록체인 기반의 가상 세계에서 사용자들이 창작하고 소통할 수 있는 플랫폼을 제공하며, 
                  다양한 게임과 메타버스 서비스를 개발하고 있습니다.
                </p>
              </div>

              {/* 담당 업무 */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">💼 담당 업무</h5>
                <div className="bg-white p-4 rounded border-l-4 border-indigo-400">
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start"><span className="text-purple-500 mr-2 font-bold">•</span><strong>메타버스 플랫폼 기획:</strong> 클레이랜드 후속 모델 기획 및 백서 작성</li>
                    <li className="flex items-start"><span className="text-purple-500 mr-2 font-bold">•</span><strong>게임 프로젝트 기획:</strong> 하이퍼캐쥬얼, 수집형 캐쥬얼, 실시간 통신 게임 기획</li>
                    <li className="flex items-start"><span className="text-purple-500 mr-2 font-bold">•</span><strong>메타버스 서비스 기획:</strong> 보핀(Boppin) 서비스 전체 기획 및 개발 관리</li>
                    <li className="flex items-start"><span className="text-purple-500 mr-2 font-bold">•</span><strong>조직 관리:</strong> 24인 규모 개발팀 리드 및 프로젝트 매니지먼트</li>
                    <li className="flex items-start"><span className="text-purple-500 mr-2 font-bold">•</span><strong>데이터 분석:</strong> Firebase Event Log 기획 및 사용자 행동 데이터 분석</li>
                  </ul>
                </div>
              </div>

              {/* 프로젝트 타임라인 */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">📅 프로젝트 타임라인</h5>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                    <h6 className="font-medium text-purple-800 mb-2">메타버스 플랫폼 프로젝트 기획 (22.11 ~ 22.12)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 클레이랜드 후속 모델 기획 및 컨셉 설계</li>
                      <li>• 메타버스 플랫폼 백서 작성 및 비즈니스 모델 구축</li>
                      <li>• 블록체인 기반 경제 시스템 및 토큰 보상 구조 설계</li>
                      <li>• NFT 연동 시스템 및 디지털 자산 관리 체계 구축</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-blue-400">
                    <h6 className="font-medium text-blue-800 mb-2">게임 테스트버전 개발 (22.11 ~ 22.12)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 하이퍼캐쥬얼 게임 'Last Ark' 기획 및 개발 관리</li>
                      <li>• 게임 메커니즘 설계 및 사용자 경험 최적화</li>
                      <li>• 테스트버전 출시 및 사용자 피드백 수집</li>
                      <li>• 게임 밸런스 조정 및 개선사항 도출</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-green-400">
                    <h6 className="font-medium text-green-800 mb-2">차기작 게임 프로젝트 진행 (22.12 ~ 23.01)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 수집형 캐쥬얼 게임 컨셉 기획 및 시스템 설계</li>
                      <li>• 게임 플레이 루프 및 수집 메커니즘 구축</li>
                      <li>• 프로토타입 개발 및 내부 테스트 진행</li>
                      <li>• 수익화 모델 및 인앱결제 시스템 설계</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-orange-400">
                    <h6 className="font-medium text-orange-800 mb-2">실시간 통신 캐쥬얼 게임 프로젝트 (23.01 ~ 23.02)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 'Elemental Runner' 게임 기획 및 시스템 설계</li>
                      <li>• 실시간 멀티플레이어 시스템 구축</li>
                      <li>• 네트워크 동기화 및 서버 아키텍처 설계</li>
                      <li>• Beta Version 개발 완료 및 테스트 진행</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-red-400">
                    <h6 className="font-medium text-red-800 mb-2">메타버스 서비스 보핀(Boppin) 프로젝트 (23.02 ~ 23.06)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 본디(Bondi Beach)를 모티브로 한 메타버스 서비스 전체 기획</li>
                      <li>• 사용자 여정 설계: IA, User Flow, Wireframe, 스토리보드 기획</li>
                      <li>• 아바타 시스템, 소셜 기능, 가상 공간 설계</li>
                      <li>• 서비스 로드맵 설계 및 단계별 개발 계획 수립</li>
                      <li>• Firebase Event Log 기획 및 사용자 행동 데이터 분석 체계 구축</li>
                      <li>• Google Analytics 4 연동 및 KPI 지표 설정</li>
                      <li>• 24인 규모 개발팀 리드 및 프로젝트 매니지먼트</li>
                      <li>• 애자일 방법론 도입: 주기적 1on1, 스프린트 관리, KPT 회고 운영</li>
                      <li>• 주니어 개발자 중심 팀의 성장 관리 및 멘토링</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border-l-4 border-teal-400">
                    <h6 className="font-medium text-teal-800 mb-2">서비스 런칭 및 글로벌 확장 (23.06 ~ 23.07)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 동남아시아 3개국 (인도네시아, 말레이시아, 호주) 제한적 오픈</li>
                      <li>• 현지화 작업 및 다국어 지원 시스템 구축</li>
                      <li>• 글로벌 사용자 대상 서비스 안정성 확보</li>
                      <li>• 실시간 모니터링 시스템 구축 및 운영</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 주요 성과 및 학습 */}
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <h5 className="font-semibold text-purple-800 mb-3">🏆 주요 성과 및 학습</h5>
                <div className="space-y-3">
                  <div>
                    <h6 className="font-medium text-gray-800 mb-2">📊 정량적 성과</h6>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• <strong>사용자 지표:</strong> 출시 후 D-3 리텐션 28%, DAU 1,000명 달성</li>
                      <li>• <strong>팀 관리:</strong> 24인 규모 조직 성공적 리드 (평균 경력 1.6년 미만)</li>
                      <li>• <strong>프로젝트 성과:</strong> 9개월간 5개 프로젝트 동시 진행 및 완료</li>
                      <li>• <strong>글로벌 확장:</strong> 3개국 동시 런칭 성공</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-800 mb-2">💡 핵심 학습 및 역량</h6>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• <strong>메타버스 기획 전문성:</strong> 가상 세계 설계부터 사용자 경험까지 전체 기획 역량</li>
                      <li>• <strong>블록체인 이해:</strong> NFT, 토큰 이코노미 등 Web3 기술 기반 서비스 기획</li>
                      <li>• <strong>글로벌 서비스 경험:</strong> 다국가 동시 런칭 및 현지화 프로세스 이해</li>
                      <li>• <strong>데이터 기반 의사결정:</strong> Firebase, GA4를 활용한 사용자 행동 분석</li>
                      <li>• <strong>조직 리더십:</strong> 주니어 중심 팀의 성장 관리 및 애자일 방법론 적용</li>
                      <li>• <strong>위기 관리:</strong> 초기 서비스 반응 개선을 통한 지표 향상 경험</li>
                    </ul>
                  </div>
                </div>
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
              {/* 회사 소개 */}
              <div className="bg-white p-4 rounded border-l-4 border-red-600">
                <h5 className="font-semibold text-red-800 mb-2">🏢 회사 소개</h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  팀스노우볼은 이스포츠 및 게임 관련 서비스를 개발하는 스타트업으로, 
                  트위치 기반의 실시간 예측 퀴즈 플랫폼 'Decakill'을 주력 서비스로 운영했습니다. 
                  스트리머와 시청자 간의 상호작용을 극대화하는 혁신적인 서비스를 제공했습니다.
                </p>
              </div>

              {/* 담당 업무 */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">💼 담당 업무</h5>
                <div className="bg-white p-4 rounded border-l-4 border-orange-400">
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">•</span><strong>Product Owner:</strong> Decakill 서비스 전체 기획 및 개발 총괄</li>
                    <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">•</span><strong>팀 리더십:</strong> 12명 규모 개발팀 관리 및 프로젝트 매니지먼트</li>
                    <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">•</span><strong>시스템 기획:</strong> 실시간 예측 퀴즈 시스템 및 백오피스 설계</li>
                    <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">•</span><strong>비즈니스 개발:</strong> 스트리머 및 이스포츠 구단과의 파트너십 구축</li>
                    <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">•</span><strong>서비스 운영:</strong> 실시간 이벤트 기획 및 사용자 참여 최적화</li>
                  </ul>
                </div>
              </div>

              {/* 프로젝트 상세 */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">🎮 Decakill 프로젝트 상세</h5>
                <div className="space-y-4">
                  {/* 초기 기획 및 시스템 구축 */}
                  <div className="bg-white p-4 rounded border-l-4 border-red-400">
                    <h6 className="font-medium text-red-800 mb-2">초기 기획 및 시스템 구축 (21.11 ~ 22.01)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>서비스 컨셉 설계:</strong> 트위치 기반 실시간 예측 퀴즈 플랫폼 기획</li>
                      <li>• <strong>핵심 시스템 구축:</strong> 실시간 투표, 포인트 시스템, 리워드 구조 설계</li>
                      <li>• <strong>사용자 경험 설계:</strong> 스트리머-시청자 상호작용 최적화</li>
                      <li>• <strong>기술 아키텍처:</strong> 실시간 통신 및 대용량 트래픽 처리 시스템 설계</li>
                      <li>• <strong>팀 빌딩:</strong> 4인 소규모 팀으로 프로토타입 개발 시작</li>
                    </ul>
                  </div>

                  {/* 문제 출제 시스템 */}
                  <div className="bg-white p-4 rounded border-l-4 border-blue-400">
                    <h6 className="font-medium text-blue-800 mb-2">문제 출제 시스템 개발 (22.01 ~ 22.04)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>출제 도구 개발:</strong> 스트리머용 문제 생성 및 관리 페이지 구축</li>
                      <li>• <strong>문제 유형 다양화:</strong> 예측, 퀴즈, 설문 등 다양한 형태 지원</li>
                      <li>• <strong>실시간 연동:</strong> 트위치 스트림과 실시간 동기화 시스템</li>
                      <li>• <strong>사용성 최적화:</strong> 스트리머가 쉽게 사용할 수 있는 UI/UX 설계</li>
                    </ul>
                  </div>

                  {/* 보상 시스템 구축 */}
                  <div className="bg-white p-4 rounded border-l-4 border-green-400">
                    <h6 className="font-medium text-green-800 mb-2">보상 시스템 구축 (22.03 ~ 22.07)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>보상 사이트 기획:</strong> 사용자 포인트 관리 및 리워드 교환 플랫폼</li>
                      <li>• <strong>포인트 이코노미:</strong> 참여도 기반 포인트 적립 및 소비 구조 설계</li>
                      <li>• <strong>관리자 도구:</strong> 보상 관리 및 통계 분석 백오피스 구축</li>
                      <li>• <strong>파트너십 연동:</strong> 외부 리워드 제공업체와의 API 연동</li>
                    </ul>
                  </div>

                  {/* 서비스 런칭 및 확장 */}
                  <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                    <h6 className="font-medium text-purple-800 mb-2">서비스 런칭 및 확장 (22.05 ~ 22.09)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>정식 서비스 런칭:</strong> 12인 규모로 팀 확장 후 공식 출시</li>
                      <li>• <strong>라이벌 시스템:</strong> 스트리머 간 경쟁 요소 추가로 재미 요소 강화</li>
                      <li>• <strong>콘텐츠 다양화:</strong> 예측 외 퀴즈, 설문 등 다양한 참여 방식 도입</li>
                      <li>• <strong>웹사이트 연동:</strong> 트위치 외부에서도 접근 가능한 웹 플랫폼 구축</li>
                      <li>• <strong>UX 개선:</strong> 사용자 피드백 기반 지속적인 서비스 개선</li>
                    </ul>
                  </div>

                  {/* 비즈니스 개발 */}
                  <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                    <h6 className="font-medium text-yellow-800 mb-2">비즈니스 개발 및 파트너십 (22.03 ~ 22.10)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>농심 레드포스 협약:</strong> 이스포츠 구단과의 공식 업무 협약 체결</li>
                      <li>• <strong>스트리머 파트너십:</strong> 엠비션 등 유명 스트리머와 1개월 이벤트 진행</li>
                      <li>• <strong>크리에이터 확장:</strong> 추가 스트리머 4인과 계약 체결</li>
                      <li>• <strong>이벤트 기획:</strong> 대규모 참여형 이벤트 기획 및 운영</li>
                    </ul>
                  </div>

                  {/* 차기 프로젝트 기획 */}
                  <div className="bg-white p-4 rounded border-l-4 border-indigo-400">
                    <h6 className="font-medium text-indigo-800 mb-2">차기 프로젝트 기획 (22.09 ~ 22.10)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>서비스 확장 방안:</strong> Decakill 성공 기반 차세대 서비스 기획</li>
                      <li>• <strong>시장 분석:</strong> 이스포츠 및 스트리밍 시장 트렌드 분석</li>
                      <li>• <strong>기술 로드맵:</strong> 향후 기술 발전 방향 및 투자 계획 수립</li>
                      <li>• <strong>비즈니스 모델:</strong> 수익화 모델 다양화 및 확장 전략 제안</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 주요 성과 및 학습 */}
              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <h5 className="font-semibold text-red-800 mb-3">🏆 주요 성과 및 학습</h5>
                <div className="space-y-3">
                  <div>
                    <h6 className="font-medium text-gray-800 mb-2">📊 정량적 성과</h6>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• <strong>사용자 참여도:</strong> 특정 스트리머 기준 1,500명 중 800여명 참여 (53% 참여율)</li>
                      <li>• <strong>콘텐츠 완성도:</strong> 복수 질문 응답률 80% 이상 달성</li>
                      <li>• <strong>비즈니스 성과:</strong> 이스포츠 구단 농심과 업무 협약 체결</li>
                      <li>• <strong>파트너십:</strong> 유명 스트리머 5인과 계약 체결</li>
                      <li>• <strong>팀 성장:</strong> 4인 → 12인 규모로 조직 확장 성공</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-800 mb-2">💡 핵심 학습 및 역량</h6>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• <strong>실시간 서비스 기획:</strong> 대용량 실시간 트래픽 처리 및 사용자 경험 최적화</li>
                      <li>• <strong>이스포츠 생태계 이해:</strong> 스트리머, 시청자, 구단 간의 관계 및 비즈니스 모델</li>
                      <li>• <strong>스타트업 리더십:</strong> 소규모 팀에서 빠른 의사결정 및 실행력</li>
                      <li>• <strong>파트너십 구축:</strong> 외부 파트너와의 협상 및 계약 체결 경험</li>
                      <li>• <strong>사용자 중심 설계:</strong> 실시간 피드백 기반 서비스 개선 및 최적화</li>
                      <li>• <strong>비즈니스 개발:</strong> 0에서 1을 만드는 신규 서비스 런칭 경험</li>
                    </ul>
                  </div>
                </div>
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
            {/* 회사 소개 */}
            <div className="bg-white p-4 rounded border-l-4 border-yellow-600">
              <h5 className="font-semibold text-yellow-800 mb-2">🏢 회사 소개</h5>
              <p className="text-gray-700 text-sm leading-relaxed">
                더블유게임즈는 모바일 게임 개발 전문 회사로, SLG(Simulation Strategy Game)와 RPG 장르에 특화된 게임을 개발합니다. 
                클래시 오브 클랜 스타일의 전략 게임부터 수집형 RPG까지 다양한 장르의 게임을 성공적으로 출시한 경험이 있는 회사입니다.
              </p>
            </div>

            {/* 담당 업무 */}
            <div>
              <h5 className="font-semibold text-gray-800 mb-3">💼 담당 업무</h5>
              <div className="bg-white p-4 rounded border-l-4 border-orange-400">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start"><span className="text-yellow-500 mr-2 font-bold">•</span><strong>시스템 기획:</strong> 게임 핵심 시스템 설계 및 밸런스 조정</li>
                  <li className="flex items-start"><span className="text-yellow-500 mr-2 font-bold">•</span><strong>경제 시스템 설계:</strong> 인게임 재화 및 수익화 모델 구축</li>
                  <li className="flex items-start"><span className="text-yellow-500 mr-2 font-bold">•</span><strong>PVP/PVE 기획:</strong> 대전 시스템 및 콘텐츠 설계</li>
                  <li className="flex items-start"><span className="text-yellow-500 mr-2 font-bold">•</span><strong>데이터 분석:</strong> 지표 기반 게임 개선 및 최적화</li>
                  <li className="flex items-start"><span className="text-yellow-500 mr-2 font-bold">•</span><strong>라이브 서비스:</strong> 런칭 후 지속적인 콘텐츠 업데이트 기획</li>
                </ul>
              </div>
            </div>

            {/* 수집형 Idle RPG 시스템 기획 */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">2020.03 ~ 2021.11</span>
                <h4 className="text-lg font-bold text-yellow-900">수집형 Idle RPG 프로젝트</h4>
              </div>
              <div className="space-y-4">
                {/* 핵심 시스템 기획 */}
                <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                  <h6 className="font-medium text-yellow-800 mb-2">핵심 시스템 기획 (20.03 ~ 20.12)</h6>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>메인 게임플레이:</strong> 차량을 이용한 좀비 IDLE 전투 시스템 설계</li>
                    <li>• <strong>진행 시스템:</strong> IDLE, 빠른사냥, 월드맵, 스토리 모아보기, 캠페인 진행도 기획</li>
                    <li>• <strong>수집 시스템:</strong> 캐릭터 보관함, 슬롯 확장, 도감 시스템 구축</li>
                    <li>• <strong>성장 시스템:</strong> 캐릭터 성장, 장비 강화, 장비 등급업 시스템 설계</li>
                    <li>• <strong>전략 요소:</strong> 진형 강화 시스템, 진형 관리, 덱 저장 시스템 기획</li>
                  </ul>
                </div>

                {/* PVE/PVP 콘텐츠 기획 */}
                <div className="bg-white p-4 rounded border-l-4 border-blue-400">
                  <h6 className="font-medium text-blue-800 mb-2">PVE/PVP 콘텐츠 기획 (20.12 ~ 21.06)</h6>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>PVE 시스템:</strong> TOWER 형태의 도전 콘텐츠 및 상위 종족별 특화 던전</li>
                    <li>• <strong>소규모 PVP:</strong> 5:5 실시간 대전 시스템 및 매치메이킹</li>
                    <li>• <strong>대규모 PVP:</strong> 15:15 길드전 시스템 및 전략적 팀 구성</li>
                    <li>• <strong>밸런스 조정:</strong> 캐릭터별 능력치 및 상성 관계 최적화</li>
                    <li>• <strong>보상 체계:</strong> 난이도별 차등 보상 및 시즌 리워드 설계</li>
                  </ul>
                </div>

                {/* 런칭 및 라이브 서비스 */}
                <div className="bg-white p-4 rounded border-l-4 border-green-400">
                  <h6 className="font-medium text-green-800 mb-2">런칭 및 라이브 서비스 (21.06 ~ 21.11)</h6>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>정식 출시:</strong> 2021년 6월 글로벌 동시 런칭</li>
                    <li>• <strong>이벤트 기획:</strong> 레이싱 이벤트 등 시즌별 특별 콘텐츠</li>
                    <li>• <strong>시스템 확장:</strong> 캐릭터 관리 시스템 및 인벤토리 개선</li>
                    <li>• <strong>콘텐츠 추가:</strong> Tower PvE 레벨 확장 및 신규 던전</li>
                    <li>• <strong>성장 시스템:</strong> 확장 강화 시스템 및 아이템 성장 시스템 추가</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                  <h5 className="font-semibold text-yellow-800 mb-2">🏆 주요 성과</h5>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <strong>다운로드:</strong> 출시 1달만에 100만 다운로드 달성</li>
                    <li>• <strong>매출:</strong> 평균 월 매출 1억원 달성</li>
                    <li>• <strong>사용자 만족도:</strong> 스토어 평점 4.2/5.0 유지</li>
                    <li>• <strong>글로벌 확장:</strong> 동남아시아 5개국 동시 서비스</li>
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
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border-l-4 border-blue-400">
                  <h6 className="font-medium text-blue-800 mb-2">신규 장르 도전 프로젝트</h6>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>팀 구성:</strong> 하이퍼 캐쥬얼 전용 소규모 조직 운영 (5인 팀)</li>
                    <li>• <strong>게임 기획:</strong> 4개의 서로 다른 하이퍼캐쥬얼 게임 컨셉 기획</li>
                    <li>• <strong>프로토타입:</strong> 1개 게임의 알파버전 개발 완료</li>
                    <li>• <strong>시장 분석:</strong> 하이퍼캐쥬얼 게임 트렌드 및 수익화 모델 연구</li>
                    <li>• <strong>빠른 실행:</strong> 아이디어부터 프로토타입까지 1개월 내 완성</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 모바일 SLG 게임 */}
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">2017.04 ~ 2020.02</span>
                <h4 className="text-lg font-bold text-green-900">모바일 SLG 게임 프로젝트</h4>
              </div>
              <div className="space-y-4">
                {/* 초기 시스템 기획 */}
                <div className="bg-white p-4 rounded border-l-4 border-green-400">
                  <h6 className="font-medium text-green-800 mb-2">초기 시스템 기획 및 밸런스 (17.04 ~ 17.12)</h6>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>핵심 시스템:</strong> 클래시 오브 클랜 기반의 약탈형 PVP 시스템 설계</li>
                    <li>• <strong>매치메이킹:</strong> 실력 기반 매칭 시스템 및 봇 데이터 구축</li>
                    <li>• <strong>기지 건설:</strong> 내부 자원 생산시설 및 방어 시설 시스템</li>
                    <li>• <strong>군사 시스템:</strong> 훈련 시설 및 캐릭터 성장 메커니즘</li>
                    <li>• <strong>경제 밸런스:</strong> 초기 인게임 재화 및 전체 경제 생태계 구축</li>
                  </ul>
                </div>

                {/* 런칭 및 확장 */}
                <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                  <h6 className="font-medium text-purple-800 mb-2">런칭 및 확장 기획 (17.12 ~ 20.02)</h6>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>대규모 PVP:</strong> 다자간 영토 쟁탈전 시스템 기획</li>
                    <li>• <strong>길드 시스템:</strong> 하드코어 유저를 위한 15:15 길드전 설계</li>
                    <li>• <strong>데이터 기반 개선:</strong> 사용자 지표 분석을 통한 PVE 레벨디자인 최적화</li>
                    <li>• <strong>가이드 시스템:</strong> 신규 유저 온보딩 및 튜토리얼 개선</li>
                    <li>• <strong>재화 순환:</strong> 잉여재화 소비를 위한 컨버트 및 탐색 시스템</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <h5 className="font-semibold text-green-800 mb-2">🏆 주요 성과</h5>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <strong>빠른 성장:</strong> 출시 2달 만에 100만 다운로드 달성</li>
                    <li>• <strong>안정적 수익:</strong> 평균 월 매출 1억원 달성</li>
                    <li>• <strong>손익분기:</strong> 2019년 손익분기점 달성</li>
                    <li>• <strong>IP 확장:</strong> 성공한 IP를 활용한 차기 프로젝트 진행</li>
                    <li>• <strong>장기 서비스:</strong> 3년간 안정적인 라이브 서비스 운영</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 주요 학습 및 성과 */}
            <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
              <h5 className="font-semibold text-yellow-800 mb-3">💡 더블유게임즈에서의 핵심 학습</h5>
              <div className="space-y-3">
                <div>
                  <h6 className="font-medium text-gray-800 mb-2">🎮 게임 기획 전문성</h6>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>장르별 특화:</strong> SLG, RPG, 하이퍼캐쥬얼 등 다양한 장르 경험</li>
                    <li>• <strong>시스템 설계:</strong> 복잡한 게임 시스템의 구조화 및 밸런스 조정</li>
                    <li>• <strong>수익화 모델:</strong> 장르별 최적화된 수익화 전략 수립</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-medium text-gray-800 mb-2">📊 데이터 기반 운영</h6>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>지표 분석:</strong> 사용자 행동 데이터 기반 게임 개선</li>
                    <li>• <strong>A/B 테스트:</strong> 기능별 효과 검증 및 최적화</li>
                    <li>• <strong>라이브 운영:</strong> 실시간 모니터링 및 빠른 대응 체계</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 주식회사 테크랩스 (넥스트매치) */}
        <div className="mb-12 border-l-4 border-pink-500 pl-6">
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <div className="text-pink-600 font-bold text-lg mb-2 md:mb-0 md:mr-4">2016.06 ~ 2017.01 (8개월)</div>
            <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">서비스 기획</div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">주식회사 테크랩스 (넥스트매치)</h3>
          
          <div className="bg-pink-50 p-6 rounded-lg">
            <div className="space-y-6">
              {/* 회사 소개 */}
              <div className="bg-white p-4 rounded border-l-4 border-pink-600">
                <h5 className="font-semibold text-pink-800 mb-2">🏢 회사 소개</h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  테크랩스는 데이팅 앱 'Amanda(아만다)'를 개발 및 운영하는 회사로, 
                  소셜 네트워킹 서비스 분야에서 혁신적인 매칭 시스템을 제공합니다. 
                  사용자 간의 진정한 연결을 만들어내는 플랫폼을 지향합니다.
                </p>
              </div>

              {/* Amanda 프로젝트 */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">💕 Amanda 데이팅앱 프로젝트</h5>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-pink-400">
                    <h6 className="font-medium text-pink-800 mb-2">서비스 기획 및 개선 (16.06 ~ 17.01)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>매칭 시스템 개선:</strong> 사용자 선호도 기반 알고리즘 최적화</li>
                      <li>• <strong>사용자 경험 향상:</strong> 프로필 작성부터 매칭까지 전체 플로우 개선</li>
                      <li>• <strong>소셜 기능 강화:</strong> 채팅, 선물하기, 관심 표현 등 상호작용 기능</li>
                      <li>• <strong>안전성 강화:</strong> 신원 인증 및 부적절한 사용자 필터링 시스템</li>
                      <li>• <strong>수익화 모델:</strong> 프리미엄 기능 및 부가 서비스 기획</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-pink-500">
                    <h5 className="font-semibold text-pink-800 mb-2">🏆 주요 성과</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• <strong>매출 성장:</strong> 월 매출 5억원 → 8억원 (60% 증가)</li>
                      <li>• <strong>사용자 만족도:</strong> 앱스토어 평점 향상 및 리뷰 개선</li>
                      <li>• <strong>매칭 성공률:</strong> 알고리즘 개선을 통한 매칭 품질 향상</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 주식회사 바이닐랩 */}
        <div className="mb-12 border-l-4 border-orange-500 pl-6">
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <div className="text-orange-600 font-bold text-lg mb-2 md:mb-0 md:mr-4">2015.12 ~ 2016.06 (7개월)</div>
            <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">기획팀장</div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">주식회사 바이닐랩</h3>
          
          <div className="bg-orange-50 p-6 rounded-lg">
            <div className="space-y-6">
              {/* 회사 소개 */}
              <div className="bg-white p-4 rounded border-l-4 border-orange-600">
                <h5 className="font-semibold text-orange-800 mb-2">🏢 회사 소개</h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  바이닐랩은 모바일 소셜 네트워크 게임(SNG) 개발에 특화된 회사로, 
                  사용자 간의 소통과 경쟁을 중심으로 한 캐주얼 게임을 제작합니다.
                </p>
              </div>

              {/* 모바일 SNG 프로젝트 */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">🎮 모바일 SNG 프로젝트</h5>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-orange-400">
                    <h6 className="font-medium text-orange-800 mb-2">기획팀장 역할 (15.12 ~ 16.06)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>팀 리더십:</strong> 기획팀 관리 및 프로젝트 총괄</li>
                      <li>• <strong>SNG 시스템 기획:</strong> 소셜 요소가 강화된 게임 시스템 설계</li>
                      <li>• <strong>사용자 상호작용:</strong> 친구 시스템, 랭킹, 선물하기 등 소셜 기능</li>
                      <li>• <strong>수익화 전략:</strong> 아이템 판매 및 광고 모델 기획</li>
                      <li>• <strong>데이터 분석:</strong> 사용자 행동 패턴 분석 및 게임 밸런스 조정</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 브로모스튜디오 */}
        <div className="mb-12 border-l-4 border-teal-500 pl-6">
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <div className="text-teal-600 font-bold text-lg mb-2 md:mb-0 md:mr-4">2015.05 ~ 2015.11 (7개월)</div>
            <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">시스템 기획</div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">브로모스튜디오</h3>
          
          <div className="bg-teal-50 p-6 rounded-lg">
            <div className="space-y-6">
              {/* 회사 소개 */}
              <div className="bg-white p-4 rounded border-l-4 border-teal-600">
                <h5 className="font-semibold text-teal-800 mb-2">🏢 회사 소개</h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  브로모스튜디오는 MOBA(Multiplayer Online Battle Arena) 장르의 게임 개발에 특화된 회사로, 
                  전략적 팀 플레이와 캐릭터 기반 전투 시스템을 중심으로 한 게임을 제작합니다.
                </p>
              </div>

              {/* MOBA 게임 프로젝트 */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">⚔️ MOBA 게임 프로젝트</h5>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-teal-400">
                    <h6 className="font-medium text-teal-800 mb-2">시스템 기획 및 캐릭터 기획 (15.05 ~ 15.11)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>MOBA 시스템 설계:</strong> 5vs5 실시간 전투 시스템 기획</li>
                      <li>• <strong>캐릭터 기획:</strong> 30여종의 고유한 캐릭터 및 스킬 시스템 설계</li>
                      <li>• <strong>밸런스 조정:</strong> 캐릭터 간 상성 관계 및 능력치 밸런싱</li>
                      <li>• <strong>맵 디자인:</strong> 전략적 요소가 강화된 배틀필드 설계</li>
                      <li>• <strong>매치메이킹:</strong> 실력 기반 팀 매칭 시스템 기획</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-teal-500">
                    <h5 className="font-semibold text-teal-800 mb-2">💡 핵심 성과</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• <strong>캐릭터 다양성:</strong> 30여종의 개성 있는 캐릭터 기획 완료</li>
                      <li>• <strong>시스템 완성도:</strong> MOBA 장르의 핵심 시스템 구축</li>
                      <li>• <strong>밸런스 최적화:</strong> 지속적인 테스트를 통한 게임 밸런스 완성</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 산게임즈 */}
        <div className="mb-12 border-l-4 border-cyan-500 pl-6">
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <div className="text-cyan-600 font-bold text-lg mb-2 md:mb-0 md:mr-4">2013.03 ~ 2015.04 (2년 2개월)</div>
            <div className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">총괄 기획</div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">산게임즈주식회사</h3>
          
          <div className="bg-cyan-50 p-6 rounded-lg">
            <div className="space-y-6">
              {/* 회사 소개 */}
              <div className="bg-white p-4 rounded border-l-4 border-cyan-600">
                <h5 className="font-semibold text-cyan-800 mb-2">🏢 회사 소개</h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  산게임즈는 모바일 소셜 네트워크 게임(SNG) 개발 전문 회사로, 
                  캐주얼하면서도 중독성 있는 게임을 통해 사용자들에게 즐거움을 제공합니다.
                </p>
              </div>

              {/* 올려라선장님 프로젝트 */}
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">⚓ '올려라선장님' SNG 게임 프로젝트</h5>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-cyan-400">
                    <h6 className="font-medium text-cyan-800 mb-2">총괄 기획 (13.03 ~ 15.04)</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>게임 컨셉 기획:</strong> 해적 테마의 소셜 네트워크 게임 전체 설계</li>
                      <li>• <strong>핵심 시스템:</strong> 선박 건조, 탐험, 전투, 무역 시스템 기획</li>
                      <li>• <strong>소셜 기능:</strong> 친구 시스템, 길드, 협동 플레이 요소</li>
                      <li>• <strong>수집 요소:</strong> 다양한 선박, 선원, 아이템 수집 시스템</li>
                      <li>• <strong>이벤트 기획:</strong> 시즌별 특별 이벤트 및 한정 콘텐츠</li>
                      <li>• <strong>수익화 모델:</strong> 아이템 판매 및 프리미엄 기능 기획</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-cyan-500">
                    <h5 className="font-semibold text-cyan-800 mb-2">🏆 주요 성과</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• <strong>다운로드 성과:</strong> 100만 다운로드 달성</li>
                      <li>• <strong>사용자 만족도:</strong> 높은 사용자 리텐션 및 평점 유지</li>
                      <li>• <strong>장기 서비스:</strong> 2년 이상 안정적인 라이브 서비스 운영</li>
                      <li>• <strong>브랜드 인지도:</strong> SNG 장르에서 인지도 있는 게임으로 성장</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 초기 경력 요약 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-xl font-bold text-gray-800 mb-4">초기 경력 (2010~2013)</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border-l-4 border-indigo-400">
              <h5 className="font-bold text-indigo-800 mb-2">알트원</h5>
              <p className="text-sm text-gray-700">온라인 게임 기획 및 시스템 설계</p>
            </div>
            <div className="bg-white p-4 rounded border-l-4 border-purple-400">
              <h5 className="font-bold text-purple-800 mb-2">소프트닉스</h5>
              <p className="text-sm text-gray-700">모바일 게임 기획 및 콘텐츠 제작</p>
            </div>
            <div className="bg-white p-4 rounded border-l-4 border-green-400">
              <h5 className="font-bold text-green-800 mb-2">바른손이앤에이</h5>
              <p className="text-sm text-gray-700">게임 기획 및 프로젝트 관리</p>
            </div>
            <div className="bg-white p-4 rounded border-l-4 border-blue-400">
              <h5 className="font-bold text-blue-800 mb-2">기타 프로젝트</h5>
              <p className="text-sm text-gray-700">다양한 장르의 게임 기획 경험 축적</p>
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