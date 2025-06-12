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