export default function BoardGameRecommendPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* 프로젝트 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">보드게임추천</h1>
          <p className="text-xl text-gray-600">AI 기반 개인화 보드게임 추천 서비스</p>
        </div>

        {/* 프로젝트 개요 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4">📋 프로젝트 개요</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              사용자의 취향과 게임 경험을 분석하여 맞춤형 보드게임을 추천하는 AI 기반 서비스입니다. 
              게임 카페 운영자와 보드게임 애호가들에게 최적의 게임 선택을 도와줍니다.
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
          <h2 className="text-2xl font-bold text-green-600 mb-4">⚡ 주요 기능</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">🎯 개인화 추천</h3>
              <p className="text-gray-700">사용자 취향 분석을 통한 맞춤형 게임 추천</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">📊 게임 데이터베이스</h3>
              <p className="text-gray-700">상세한 보드게임 정보와 리뷰 시스템</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">👥 그룹 매칭</h3>
              <p className="text-gray-700">인원수와 선호도를 고려한 그룹 게임 추천</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">🏪 매장 연동</h3>
              <p className="text-gray-700">근처 게임카페 정보와 보유 게임 연동</p>
            </div>
          </div>
        </section>

        {/* 기술 스택 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4">🛠️ 기술 스택</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Python</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Django</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">TensorFlow</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Redis</span>
          </div>
        </section>

        {/* 프로젝트 스크린샷 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4">📸 프로젝트 스크린샷</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">메인 추천 화면 이미지</span>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">게임 상세 정보 이미지</span>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">그룹 매칭 화면 이미지</span>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">매장 정보 화면 이미지</span>
            </div>
          </div>
        </section>

        {/* 개발 과정 및 고민 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4">💭 개발 과정 및 고민</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">추천 알고리즘 설계</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 협업 필터링과 컨텐츠 기반 필터링의 하이브리드 접근</li>
                <li>• 게임 복잡도, 플레이 시간 등 다양한 요소 고려</li>
                <li>• 콜드 스타트 문제 해결을 위한 온보딩 설계</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 향후 계획 */}
        <section>
          <h2 className="text-2xl font-bold text-green-600 mb-4">🚀 향후 계획</h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>• 모바일 앱 개발 및 푸시 알림 기능</li>
              <li>• 게임 예약 및 구매 시스템 연동</li>
              <li>• 소셜 기능 강화 (친구 추천, 그룹 생성)</li>
              <li>• VR/AR 기반 게임 미리보기 기능</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 