export default function MentoringPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* 강의 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">취업-이직멘토링</h1>
          <p className="text-xl text-gray-600">15년 경력 기반 실무자 멘토링</p>
        </div>

        {/* 강의 배경 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">🌟 강의 배경</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              15년간 게임, IT, AI 분야에서 쌓은 실무 경험과 다양한 회사에서의 취업 및 이직 경험을 바탕으로, 
              현실적이고 실용적인 취업/이직 가이드를 제공하고자 멘토링을 시작하게 되었습니다.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong className="text-gray-900">멘토링 분야:</strong>
                <p className="text-gray-600">게임기획, IT기획, AI서비스기획</p>
              </div>
              <div>
                <strong className="text-gray-900">대상:</strong>
                <p className="text-gray-600">신입~5년차 기획자, 취업준비생</p>
              </div>
            </div>
          </div>
        </section>

        {/* 강의 목적 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">🎯 강의 목적</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">실무 중심 가이드</h3>
              <p className="text-gray-700">이론보다는 실제 업무에서 필요한 스킬과 노하우 전수</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">개인별 맞춤 조언</h3>
              <p className="text-gray-700">개인의 상황과 목표에 맞는 구체적인 커리어 로드맵 제시</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">네트워킹 기회</h3>
              <p className="text-gray-700">업계 인사이트 공유 및 네트워킹 기회 제공</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">지속적 성장</h3>
              <p className="text-gray-700">단발성이 아닌 지속적인 커리어 성장 지원</p>
            </div>
          </div>
        </section>

        {/* 관련 기간 */}
        <section>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">📅 관련 기간</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-bold mb-2">1기 멘토링</h3>
              <p className="text-gray-600 mb-2">2023.03 ~ 2023.05 (3개월)</p>
              <p className="text-gray-700">참가자: 12명 | 취업 성공률: 83% (10명 취업)</p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-bold mb-2">2기 멘토링</h3>
              <p className="text-gray-600 mb-2">2023.09 ~ 2023.11 (3개월)</p>
              <p className="text-gray-700">참가자: 15명 | 취업 성공률: 87% (13명 취업)</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-bold mb-2">3기 멘토링 (진행중)</h3>
              <p className="text-gray-600 mb-2">2024.03 ~ 2024.05 (3개월)</p>
              <p className="text-gray-700">참가자: 18명 | 진행률: 80% (현재 면접 단계)</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 