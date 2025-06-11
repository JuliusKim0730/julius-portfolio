export default function StockfolioPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* 기업 헤더 */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">스톡폴리오 (Stockfolio)</h1>
          <p className="text-xl text-gray-600">AI 기반 투자 포트폴리오 관리 서비스</p>
        </div>

        {/* 기업 개요 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">🏢 기업 소개</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              스톡폴리오는 AI 기술을 활용하여 개인 투자자들에게 맞춤형 포트폴리오 관리 서비스를 제공하는 핀테크 기업입니다. 
              복잡한 금융 데이터를 분석하여 사용자의 투자 성향과 목표에 맞는 최적의 투자 전략을 제안합니다.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <strong className="text-gray-900">업계:</strong>
                <p className="text-gray-600">핀테크 / AI</p>
              </div>
              <div>
                <strong className="text-gray-900">규모:</strong>
                <p className="text-gray-600">중소기업 (50-100명)</p>
              </div>
              <div>
                <strong className="text-gray-900">설립:</strong>
                <p className="text-gray-600">2022년</p>
              </div>
            </div>
          </div>
        </section>

        {/* 담당 조직 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">🎯 담당 조직</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">AI 서비스 기획팀 - PM (Product Manager)</h3>
            <p className="text-gray-700 mb-4">
              AI 기반 투자 추천 엔진과 사용자 경험을 담당하는 핵심 조직으로, 
              데이터 사이언스팀, 개발팀, 디자인팀과 협업하여 제품의 전체적인 방향성을 결정하고 실행합니다.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong className="text-gray-900">팀 구성:</strong>
                <p className="text-gray-600">PM 2명, 기획자 3명, 데이터 분석가 2명</p>
              </div>
              <div>
                <strong className="text-gray-900">담당 업무:</strong>
                <p className="text-gray-600">제품 기획, AI 모델 기획, UX/UI 설계</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 프로젝트별 경험 */}
      <div className="space-y-8">
        {/* 프로젝트 1 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-2">📊 AI 포트폴리오 추천 엔진 개발</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">2024.01 ~ 2024.06</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">6개월</span>
            </div>
          </div>

          {/* 프로젝트 이미지 */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">🖼️ 프로젝트 스크린샷</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">AI 추천 대시보드 이미지</span>
              </div>
              <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">포트폴리오 분석 화면 이미지</span>
              </div>
            </div>
          </div>

          {/* 프로젝트 목표 */}
          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">🎯 프로젝트 목표</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 사용자 투자 성향 분석을 통한 개인화된 포트폴리오 추천 시스템 구축</li>
              <li>• 리스크 대비 수익률 최적화를 위한 AI 모델 개발</li>
              <li>• 실시간 시장 데이터 반영한 동적 포트폴리오 리밸런싱 기능 구현</li>
              <li>• 사용자 친화적인 투자 정보 시각화 및 UI/UX 개선</li>
            </ul>
          </section>

          {/* 프로젝트 구성 */}
          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">👥 프로젝트 구성</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">팀 구성</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• PM: 김민균 (본인)</li>
                  <li>• 데이터 사이언티스트: 2명</li>
                  <li>• 백엔드 개발자: 3명</li>
                  <li>• 프론트엔드 개발자: 2명</li>
                  <li>• UI/UX 디자이너: 1명</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">기술 스택</h4>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Python</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">TensorFlow</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">AWS</span>
                </div>
              </div>
            </div>
          </section>

          {/* 실제 수행 내용 */}
          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">⚡ 실제 수행 내용</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">요구사항 분석 및 기획</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 타겟 사용자 페르소나 정의 및 사용자 여정 맵 작성</li>
                  <li>• 투자 전문가 인터뷰를 통한 도메인 지식 수집</li>
                  <li>• 경쟁사 분석 및 차별화 포인트 도출</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">AI 모델 기획 및 설계</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 투자 성향 분석을 위한 설문지 설계 및 가중치 모델 정의</li>
                  <li>• 포트폴리오 최적화 알고리즘 요구사항 정의</li>
                  <li>• 리스크 평가 지표 및 측정 방법론 기획</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">제품 개발 관리</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 애자일 스프린트 계획 수립 및 백로그 관리</li>
                  <li>• 개발팀과의 일일 스탠드업 미팅 진행</li>
                  <li>• QA 프로세스 정의 및 사용자 테스트 진행</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 결과 */}
          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">📈 결과</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2">정량적 성과</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 사용자 만족도: 4.2/5.0 → 4.7/5.0 (12% 향상)</li>
                  <li>• 월간 활성 사용자: 5,000명 → 15,000명 (200% 증가)</li>
                  <li>• 포트폴리오 수익률: 평균 8.5% 달성</li>
                  <li>• 사용자 이탈률: 25% → 12% (52% 감소)</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">정성적 성과</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• AI 추천 알고리즘의 정확도 크게 향상</li>
                  <li>• 사용자 피드백 기반 지속적 개선 체계 구축</li>
                  <li>• 크로스펑셔널 팀워크 향상 및 협업 문화 조성</li>
                  <li>• 투자 초보자도 쉽게 사용할 수 있는 직관적 UI 구현</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 문서 이미지 */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">📄 실제 사용 문서</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">PRD 문서 이미지</span>
              </div>
              <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">와이어프레임 이미지</span>
              </div>
              <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-sm">스프린트 보드 이미지</span>
              </div>
            </div>
          </section>
        </div>

        {/* 프로젝트 2 템플릿 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-green-600 mb-2">📱 모바일 앱 런칭 프로젝트</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">2024.07 ~ 2024.12</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">6개월</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-gray-600 text-lg">이 공간에는 두 번째 프로젝트의 상세 내용이 들어갑니다.</p>
            <p className="text-gray-500 mt-2">위와 동일한 구조로 프로젝트 목표, 구성, 수행 내용, 결과, 문서 등을 작성해주세요.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 