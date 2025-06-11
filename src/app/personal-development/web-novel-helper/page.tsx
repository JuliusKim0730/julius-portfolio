export default function WebNovelHelperPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* 프로젝트 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">웹소설헬퍼</h1>
          <p className="text-xl text-gray-600">웹소설 작가를 위한 창작 지원 도구</p>
        </div>

        {/* 프로젝트 개요 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">📋 프로젝트 개요</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              웹소설 작가들의 창작 활동을 지원하는 종합 도구입니다. 
              캐릭터 관리, 플롯 구성, 연재 스케줄 관리 등 작가들이 필요로 하는 다양한 기능을 제공합니다.
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
          <h2 className="text-2xl font-bold text-purple-600 mb-4">⚡ 주요 기능</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">👥 캐릭터 관리</h3>
              <p className="text-gray-700">상세한 캐릭터 프로필과 관계도 관리 시스템</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">📊 플롯 구성 도구</h3>
              <p className="text-gray-700">시각적 플롯 라인과 스토리 아크 관리</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">📅 연재 스케줄</h3>
              <p className="text-gray-700">연재 일정 관리와 진행률 추적</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">📝 작성 도구</h3>
              <p className="text-gray-700">집중 모드와 목표 설정 기능이 있는 에디터</p>
            </div>
          </div>
        </section>

        {/* 기술 스택 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">🛠️ 기술 스택</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Vuex</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Firebase</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Quill.js</span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Chart.js</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">PWA</span>
          </div>
        </section>

        {/* 프로젝트 스크린샷 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">📸 프로젝트 스크린샷</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">대시보드 화면 이미지</span>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">캐릭터 관리 화면 이미지</span>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">플롯 구성 도구 이미지</span>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">에디터 화면 이미지</span>
            </div>
          </div>
        </section>

        {/* 개발 과정 및 고민 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">💭 개발 과정 및 고민</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">사용자 요구사항 분석</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 웹소설 작가들과의 인터뷰를 통한 실제 니즈 파악</li>
                <li>• 기존 도구들의 한계점 분석 및 개선 방향 도출</li>
                <li>• 직관적이고 편리한 UI/UX 설계에 중점</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 향후 계획 */}
        <section>
          <h2 className="text-2xl font-bold text-purple-600 mb-4">🚀 향후 계획</h2>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>• AI 기반 스토리 아이디어 제안 기능</li>
              <li>• 작가 커뮤니티 및 피드백 시스템</li>
              <li>• 출판사 연동 및 원고 제출 기능</li>
              <li>• 다국어 지원 및 글로벌 서비스 확장</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 