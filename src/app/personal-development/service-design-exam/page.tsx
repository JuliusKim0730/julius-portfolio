export default function ServiceDesignExamPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* 프로젝트 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">서비스경험디자인 기사 필기시험 사이트</h1>
          <p className="text-xl text-gray-600">개인 개발 프로젝트</p>
        </div>

        {/* 프로젝트 개요 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">📋 프로젝트 개요</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              서비스경험디자인 기사 자격증 필기시험을 준비하는 수험생들을 위한 온라인 학습 플랫폼입니다. 
              체계적인 문제 은행과 학습 관리 기능을 제공하여 효율적인 시험 준비를 지원합니다.
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
          <h2 className="text-2xl font-bold text-blue-600 mb-4">⚡ 주요 기능</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">📚 문제 은행 시스템</h3>
              <p className="text-gray-700">과목별 분류된 기출문제와 예상문제를 체계적으로 관리</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">📊 학습 진도 관리</h3>
              <p className="text-gray-700">개인별 학습 진도와 취약점 분석 제공</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">🎯 모의고사 기능</h3>
              <p className="text-gray-700">실제 시험과 동일한 환경의 모의고사 시스템</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">📈 통계 및 분석</h3>
              <p className="text-gray-700">정답률, 소요시간 등 상세한 학습 통계 제공</p>
            </div>
          </div>
        </section>

        {/* 기술 스택 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">🛠️ 기술 스택</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Express</span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">JWT</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Chart.js</span>
          </div>
        </section>

        {/* 프로젝트 스크린샷 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">📸 프로젝트 스크린샷</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">메인 대시보드 이미지</span>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">문제 풀이 화면 이미지</span>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">통계 분석 화면 이미지</span>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">모의고사 화면 이미지</span>
            </div>
          </div>
        </section>

        {/* 개발 과정 및 고민 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">💭 개발 과정 및 고민</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">문제점 및 해결 방안</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>문제:</strong> 대용량 문제 데이터의 효율적 관리</li>
                <li>• <strong>해결:</strong> MongoDB의 인덱싱과 페이지네이션을 활용한 성능 최적화</li>
                <li>• <strong>문제:</strong> 사용자별 학습 진도 추적의 복잡성</li>
                <li>• <strong>해결:</strong> Redux를 활용한 상태 관리와 로컬 스토리지 연동</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 향후 계획 */}
        <section>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">🚀 향후 계획</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>• 모바일 앱 버전 개발</li>
              <li>• AI 기반 개인화 학습 추천 시스템 도입</li>
              <li>• 스터디 그룹 및 커뮤니티 기능 추가</li>
              <li>• 실시간 랭킹 시스템 구현</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 