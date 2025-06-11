export default function MeetingAgentGamePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* 프로젝트 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">MeetingAgentGame</h1>
          <p className="text-xl text-gray-600">AI 기반 회의 시뮬레이션 게임</p>
        </div>

        {/* 프로젝트 개요 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">📋 프로젝트 개요</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              AI 에이전트들과 함께 가상 회의를 진행하며 회의 진행 스킬과 
              의사결정 능력을 향상시킬 수 있는 교육용 시뮬레이션 게임입니다.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong className="text-gray-900">개발 기간:</strong>
                <p className="text-gray-600">2024.XX ~ 2024.XX (X개월)</p>
              </div>
              <div>
                <strong className="text-gray-900">개발 형태:</strong>
                <p className="text-gray-600">개인 프로젝트</p>
              </div>
            </div>
          </div>
        </section>

        {/* 주요 기능 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">⚡ 주요 기능</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">🤖 AI 회의 참가자</h3>
              <p className="text-gray-700">다양한 성격과 역할을 가진 AI 에이전트들</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">📊 회의 진행 분석</h3>
              <p className="text-gray-700">발언 패턴과 의사결정 과정 실시간 분석</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">🎯 시나리오 기반</h3>
              <p className="text-gray-700">다양한 비즈니스 상황 시나리오 제공</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">📈 스킬 평가</h3>
              <p className="text-gray-700">회의 진행 능력과 리더십 스킬 평가</p>
            </div>
          </div>
        </section>

        {/* 기술 스택 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">🛠️ 기술 스택</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Python</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">OpenAI GPT</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">FastAPI</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">WebSocket</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Socket.io</span>
          </div>
        </section>

        {/* 프로젝트 스크린샷 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">📸 프로젝트 스크린샷</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">게임 메인 화면 이미지</span>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">회의실 시뮬레이션 이미지</span>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">AI 캐릭터 선택 이미지</span>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">성과 분석 대시보드 이미지</span>
            </div>
          </div>
        </section>

        {/* 게임 시나리오 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">🎮 게임 시나리오</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">📋 프로젝트 기획 회의</h3>
              <p className="text-gray-700">새로운 제품 출시를 위한 프로젝트 기획 회의 시뮬레이션</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">💼 예산 승인 회의</h3>
              <p className="text-gray-700">한정된 예산 배분과 우선순위 결정 회의 경험</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">🔥 위기 대응 회의</h3>
              <p className="text-gray-700">긴급 상황 발생 시 신속한 의사결정 훈련</p>
            </div>
          </div>
        </section>

        {/* 개발 과정 및 고민 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">💭 개발 과정 및 고민</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">AI 페르소나 설계</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 현실적인 회의 참가자 성격과 행동 패턴 모델링</li>
                <li>• 다양한 업계와 직급별 AI 캐릭터 개발</li>
                <li>• 자연스러운 대화 흐름과 갈등 상황 연출</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 향후 계획 */}
        <section>
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">🚀 향후 계획</h2>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>• VR/AR 환경에서의 몰입형 회의 체험</li>
              <li>• 음성 인식 및 음성 합성 기술 도입</li>
              <li>• 기업용 교육 패키지 개발</li>
              <li>• 멀티플레이어 모드 및 팀 빌딩 기능</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 