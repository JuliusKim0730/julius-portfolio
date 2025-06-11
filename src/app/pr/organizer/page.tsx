export default function OrganizerPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">조직관리자</h1>
          <p className="text-xl text-gray-600">효율적인 팀 운영과 프로젝트 관리 전문성</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-purple-600 mb-4">조직 관리 역량</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3">팀 구조 설계</h3>
                <p className="text-gray-700">프로젝트 특성에 맞는 최적의 팀 구조를 설계하고 역할을 명확히 정의합니다.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3">프로세스 최적화</h3>
                <p className="text-gray-700">업무 프로세스를 분석하고 개선하여 팀의 생산성을 극대화합니다.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3">리소스 관리</h3>
                <p className="text-gray-700">인력, 시간, 예산 등 한정된 리소스를 효과적으로 배분하고 관리합니다.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3">성과 관리</h3>
                <p className="text-gray-700">명확한 KPI 설정과 정기적인 성과 평가를 통해 지속적인 개선을 이끕니다.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-600 mb-4">조직 관리 경험</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-indigo-800">팀스노우볼 - Product Owner & 조직장</h3>
                <p className="text-gray-700 mb-4">
                  B2C 서비스의 Product Owner로서 개발팀, 디자인팀, 마케팅팀을 총괄 관리했습니다. 
                  애자일 방법론을 도입하여 개발 효율성을 30% 향상시켰습니다.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Product Owner</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">애자일</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">팀 관리</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-yellow-800">위에이알 - 메타버스 조직장</h3>
                <p className="text-gray-700 mb-4">
                  메타버스 프로젝트의 조직장으로서 다양한 전문 분야의 팀원들을 효율적으로 관리했습니다. 
                  크로스펑셔널 팀 운영을 통해 프로젝트 완성도를 크게 향상시켰습니다.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">조직장</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">메타버스</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">크로스펑셔널</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-red-800">더블유게임즈 - 시스템 기획 팀장</h3>
                <p className="text-gray-700 mb-4">
                  4년 8개월간 게임 시스템 기획팀을 이끌며 체계적인 팀관리 시스템을 구축했습니다. 
                  팀원들의 전문성 개발과 동시에 프로젝트 성공률을 크게 높였습니다.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">시스템 기획</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">팀장</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">게임 개발</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-600 mb-4">관리 툴 & 방법론</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-purple-200 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-purple-800">프로젝트 관리</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• JIRA & Confluence</li>
                  <li>• 애자일/스크럼 방법론</li>
                  <li>• OKR 목표 관리</li>
                  <li>• 간트 차트 일정 관리</li>
                </ul>
              </div>
              <div className="bg-white border border-purple-200 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-purple-800">커뮤니케이션</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Notion 문서화</li>
                  <li>• Slack 실시간 소통</li>
                  <li>• 정기 회의 운영</li>
                  <li>• 1:1 피드백 세션</li>
                </ul>
              </div>
              <div className="bg-white border border-purple-200 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-purple-800">성과 측정</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• KPI 대시보드</li>
                  <li>• 주간/월간 리포트</li>
                  <li>• 팀 생산성 지표</li>
                  <li>• 개인 성장 추적</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-600 mb-4">조직 관리 철학</h2>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <blockquote className="text-lg text-gray-800 italic mb-4">
                "좋은 조직관리자는 시스템을 만드는 사람이 아니라, 
                사람들이 최고의 성과를 낼 수 있는 환경을 만드는 사람입니다."
              </blockquote>
              <p className="text-gray-700">
                효율적인 프로세스도 중요하지만, 팀원 개개인이 자신의 역량을 최대한 발휘할 수 있는 
                환경을 조성하는 것이 진정한 조직 관리의 핵심이라고 믿습니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-600 mb-4">조직 관리 원칙</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-purple-800">투명성</h3>
                <p className="text-gray-700">
                  모든 의사결정 과정과 성과 지표를 투명하게 공유하여 
                  팀원들이 조직의 방향성을 명확히 이해할 수 있도록 합니다.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-indigo-800">자율성</h3>
                <p className="text-gray-700">
                  각 팀원의 전문성을 신뢰하고 충분한 자율성을 부여하여 
                  창의적이고 주도적인 업무 수행을 장려합니다.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-blue-800">성장 지원</h3>
                <p className="text-gray-700">
                  개인의 역량 개발과 커리어 성장을 적극적으로 지원하여 
                  조직과 개인이 함께 발전할 수 있는 선순환 구조를 만듭니다.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3 text-green-800">지속가능성</h3>
                <p className="text-gray-700">
                  단기적 성과보다는 장기적 관점에서 지속 가능한 
                  조직 문화와 프로세스를 구축하는 데 집중합니다.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-600 mb-4">관리 성과</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                <p className="text-gray-600">관리한 팀원 수</p>
              </div>
              <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                <p className="text-gray-600">완성 프로젝트</p>
              </div>
              <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">15년+</div>
                <p className="text-gray-600">관리 경험</p>
              </div>
              <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
                <p className="text-gray-600">프로젝트 성공률</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 