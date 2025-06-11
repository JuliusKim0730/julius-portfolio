export default function HousingInfoPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* 프로젝트 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">청약정보 확인</h1>
          <p className="text-xl text-gray-600">실시간 청약 정보 통합 플랫폼</p>
        </div>

        {/* 프로젝트 개요 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">📋 프로젝트 개요</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              전국 아파트 청약 정보를 실시간으로 수집하고 분석하여 
              사용자에게 맞춤형 청약 정보와 분석 데이터를 제공하는 통합 플랫폼입니다.
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
          <h2 className="text-2xl font-bold text-orange-600 mb-4">⚡ 주요 기능</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">🏠 실시간 청약 정보</h3>
              <p className="text-gray-700">전국 청약 단지 정보 실시간 수집 및 업데이트</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">📊 경쟁률 분석</h3>
              <p className="text-gray-700">과거 데이터 기반 경쟁률 예측 및 분석</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">🔔 맞춤 알림</h3>
              <p className="text-gray-700">사용자 조건에 맞는 청약 일정 알림</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">📈 시세 분석</h3>
              <p className="text-gray-700">주변 시세 비교 및 투자 가치 분석</p>
            </div>
          </div>
        </section>

        {/* 기술 스택 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">🛠️ 기술 스택</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Python</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">FastAPI</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Beautiful Soup</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Celery</span>
          </div>
        </section>

        {/* 프로젝트 스크린샷 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">📸 프로젝트 스크린샷</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">메인 대시보드 이미지</span>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">청약 상세 정보 이미지</span>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">경쟁률 분석 차트 이미지</span>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">알림 설정 화면 이미지</span>
            </div>
          </div>
        </section>

        {/* 개발 과정 및 고민 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">💭 개발 과정 및 고민</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">데이터 수집 및 처리</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 여러 공공기관 사이트의 청약 정보 크롤링</li>
                <li>• 실시간 데이터 업데이트를 위한 스케줄링 시스템 구축</li>
                <li>• 데이터 정합성 검증 및 중복 제거 로직 개발</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 향후 계획 */}
        <section>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">🚀 향후 계획</h2>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li>• 기계학습 기반 청약 성공 확률 예측 모델</li>
              <li>• 청약 자동 접수 도우미 기능</li>
              <li>• 지역별 부동산 투자 가이드 콘텐츠</li>
              <li>• 청약 커뮤니티 및 정보 공유 플랫폼</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 