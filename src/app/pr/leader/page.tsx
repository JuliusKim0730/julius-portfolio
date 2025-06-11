export default function LeaderPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">이끌어내는 기획자</h1>
          <p className="text-xl text-gray-600">팀원들의 잠재력을 끌어내어 최고의 성과를 만들어내는 리더십</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">핵심 역량</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3">팀 동기부여</h3>
                <p className="text-gray-700">개별 팀원의 강점을 파악하고 적절한 역할을 부여하여 팀 전체의 시너지를 극대화합니다.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3">목표 설정 & 달성</h3>
                <p className="text-gray-700">명확한 목표 설정과 단계별 마일스톤을 통해 팀이 성과를 달성할 수 있도록 이끕니다.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3">소통 & 협업</h3>
                <p className="text-gray-700">효과적인 커뮤니케이션을 통해 팀 내부의 갈등을 해결하고 협업 문화를 조성합니다.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3">문제 해결</h3>
                <p className="text-gray-700">복잡한 프로젝트 상황에서 창의적인 해결책을 제시하고 팀을 올바른 방향으로 이끕니다.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">실제 사례</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">프로젝트 사례 1</h3>
              <p className="text-gray-700 mb-4">
                스톡폴리오에서 AI 서비스 기획을 담당하면서, 개발팀과 디자인팀 간의 소통 문제를 해결하고 
                각 팀원의 전문성을 최대한 활용할 수 있는 워크플로우를 구축했습니다.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">팀 리더십</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">프로세스 개선</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">성과 달성</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">리더십 철학</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
              <blockquote className="text-lg text-gray-800 italic mb-4">
                "진정한 리더는 자신이 앞서가는 것이 아니라, 팀원들이 스스로 앞서갈 수 있도록 뒤에서 밀어주는 사람입니다."
              </blockquote>
              <p className="text-gray-700">
                15년간의 경험을 통해 깨달은 것은 최고의 성과는 개인의 능력보다는 팀의 시너지에서 나온다는 것입니다. 
                저는 각 팀원이 자신의 역량을 최대한 발휘할 수 있는 환경을 만드는 것을 가장 중요하게 생각합니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">주요 성과</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">15년+</div>
                <p className="text-gray-600">팀 리더 경험</p>
              </div>
              <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <p className="text-gray-600">프로젝트 완성</p>
              </div>
              <div className="text-center p-4 bg-white border border-gray-200 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                <p className="text-gray-600">팀원 육성</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 