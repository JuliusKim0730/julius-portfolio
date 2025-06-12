export default function WearPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* 기업 헤더 */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">위에이알 (WeAR)</h1>
          <p className="text-xl text-gray-600">메타버스 플랫폼 개발 및 서비스 기업</p>
        </div>

        {/* 기업 개요 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-600 mb-4">🏢 기업 소개</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              위에이알(WeAR)은 메타버스 플랫폼 개발에 특화된 기업으로, 가상현실과 증강현실 기술을 활용하여 
              사용자들에게 몰입감 있는 디지털 경험을 제공합니다. 클레이랜드 후속 모델을 포함한 
              다양한 메타버스 프로젝트를 통해 차세대 소셜 플랫폼을 구축하고 있습니다.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <strong className="text-gray-900">업계:</strong>
                <p className="text-gray-600">메타버스 / VR/AR</p>
              </div>
              <div>
                <strong className="text-gray-900">규모:</strong>
                <p className="text-gray-600">중소기업 (30-50명)</p>
              </div>
              <div>
                <strong className="text-gray-900">설립:</strong>
                <p className="text-gray-600">2020년</p>
              </div>
            </div>
          </div>
        </section>

        {/* 담당 조직 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-600 mb-4">🎯 담당 조직</h2>
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">메타버스 개발팀 - 셀 리드 / 기획 리드</h3>
            <p className="text-gray-700 mb-4">
              메타버스 플랫폼의 전체적인 기획과 개발을 담당하는 핵심 조직으로, 
              24명 규모의 개발팀을 이끌며 다양한 메타버스 프로젝트를 성공적으로 출시했습니다.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <strong className="text-gray-900">팀 구성:</strong>
                <p className="text-gray-600">기획자 4명, 개발자 15명, 디자이너 3명, QA 2명</p>
              </div>
              <div>
                <strong className="text-gray-900">담당 업무:</strong>
                <p className="text-gray-600">메타버스 기획, 팀 관리, 프로세스 구축</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 프로젝트별 경험 */}
      <div className="space-y-8">
        {/* 프로젝트 1: 메타버스 플랫폼 프로젝트 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-2">🌐 메타버스 플랫폼 프로젝트 (클레이랜드 후속)</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">2022.11 ~ 2022.12</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">2개월</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">기획 리드</span>
            </div>
          </div>

          {/* 프로젝트 목표 */}
          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">🎯 프로젝트 목표</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 클레이랜드의 성공 요소를 분석하여 차세대 메타버스 플랫폼 설계</li>
              <li>• 사용자 참여도와 리텐션을 높이는 소셜 기능 강화</li>
              <li>• 확장 가능한 메타버스 아키텍처 구축</li>
              <li>• 크리에이터 이코노미 기반의 수익 모델 설계</li>
            </ul>
          </section>

          {/* 실제 수행 내용 */}
          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">⚡ 실제 수행 내용</h3>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">시스템 기획</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 메타버스 월드 생성 및 관리 시스템 설계</li>
                  <li>• 아바타 커스터마이징 및 인터랙션 시스템 기획</li>
                  <li>• 실시간 멀티플레이어 통신 아키텍처 설계</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">전체 컨텐츠 설계</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 가상 공간별 테마와 활동 컨텐츠 기획</li>
                  <li>• 사용자 생성 컨텐츠(UGC) 시스템 설계</li>
                  <li>• 이벤트 및 커뮤니티 활동 프레임워크 구축</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 결과 */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">📈 결과</h3>
            <div className="bg-green-50 p-4 rounded-lg">
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 메타버스 플랫폼의 기본 아키텍처 및 시스템 설계 완료</li>
                <li>• 차기 프로젝트의 기술적 기반 마련</li>
                <li>• 팀 내 메타버스 개발 노하우 축적</li>
              </ul>
            </div>
          </section>
        </div>

        {/* 프로젝트 2: 하이퍼캐쥬얼 게임 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-2">🎮 하이퍼캐쥬얼 게임 - Last Ark</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">2022.11 ~ 2022.12</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">2개월</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">기획 리드</span>
            </div>
          </div>

          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">⚡ 실제 수행 내용</h3>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">폴리싱 작업 담당</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 게임 밸런스 조정 및 사용자 경험 개선</li>
                <li>• UI/UX 최적화 및 튜토리얼 개선</li>
                <li>• 출시 전 최종 품질 검증 및 버그 수정</li>
              </ul>
            </div>
          </section>
        </div>

        {/* 프로젝트 3: 수집형 캐쥬얼 게임 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-green-600 mb-2">🎯 수집형 캐쥬얼 게임 기획</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">2022.12 ~ 2023.01</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">2개월</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">PD</span>
            </div>
          </div>

          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">⚡ 실제 수행 내용</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">전체 시스템 및 컨텐츠 기획</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 수집 메커니즘 및 성장 시스템 설계</li>
                  <li>• 캐릭터 및 아이템 밸런스 기획</li>
                  <li>• 사용자 진행도 및 보상 체계 구축</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">게임 개발 팀 관리</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 개발 일정 관리 및 마일스톤 설정</li>
                  <li>• 팀원 간 업무 분배 및 협업 체계 구축</li>
                  <li>• 정기적인 진행 상황 점검 및 피드백</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* 프로젝트 4: Project H */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">🔗 Project H - 실시간 통신 기반 캐쥬얼 게임</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">2023.01 ~ 2023.02</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">2개월</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">기획자</span>
            </div>
          </div>

          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">⚡ 실제 수행 내용</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">실시간 통신 기반 캐쥬얼 게임 개발</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 멀티플레이어 실시간 게임 메커니즘 설계</li>
                  <li>• 네트워크 동기화 및 지연 최소화 방안 기획</li>
                  <li>• 사용자 매칭 시스템 및 로비 기능 설계</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">시스템 기획 및 전체 컨텐츠 설계</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 게임 룰 및 승부 조건 정의</li>
                  <li>• 사용자 프로그레션 및 랭킹 시스템</li>
                  <li>• 소셜 기능 및 커뮤니티 요소 기획</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* 프로젝트 5: Boppin 서비스 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-teal-600 mb-2">🎪 Boppin 메타버스 서비스</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">2023.02 ~ 2023.07</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">6개월</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">셀 리드</span>
            </div>
          </div>

          {/* 프로젝트 목표 */}
          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">🎯 프로젝트 목표</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 동남아시아 시장을 타겟으로 한 메타버스 소셜 플랫폼 구축</li>
              <li>• 사용자 참여도와 리텐션을 극대화하는 인터랙티브 콘텐츠 제공</li>
              <li>• 안정적인 서비스 운영을 위한 인프라 및 프로세스 구축</li>
              <li>• 24명 규모 개발팀의 효율적인 관리 및 성과 창출</li>
            </ul>
          </section>

          {/* 프로젝트 구성 */}
          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">👥 프로젝트 구성</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">팀 구성 (24명)</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 셀 리드: 김민균 (본인)</li>
                  <li>• 기획자: 3명</li>
                  <li>• 클라이언트 개발자: 8명</li>
                  <li>• 서버 개발자: 6명</li>
                  <li>• 디자이너: 4명</li>
                  <li>• QA: 2명</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">기술 스택</h4>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Unity</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Node.js</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">WebRTC</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">AWS</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Redis</span>
                </div>
              </div>
            </div>
          </section>

          {/* 실제 수행 내용 */}
          <section className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">⚡ 실제 수행 내용</h3>
            <div className="space-y-4">
              <div className="bg-teal-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">메타버스 보핀 서비스 설계</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 가상 공간 및 아바타 시스템 기획</li>
                  <li>• 실시간 음성/영상 커뮤니케이션 기능 설계</li>
                  <li>• 사용자 생성 콘텐츠 및 이벤트 시스템 기획</li>
                  <li>• 동남아시아 문화에 맞는 로컬라이제이션 전략 수립</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">일정 관리 및 프로세스 구축</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 애자일 스크럼 방법론 도입 및 스프린트 계획 수립</li>
                  <li>• 일일 스탠드업 미팅 및 주간 회고 진행</li>
                  <li>• 크로스펑셔널 팀 간 협업 프로세스 정립</li>
                  <li>• 품질 관리 및 배포 프로세스 체계화</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">개발팀 관리 및 성장 지원</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 24명 팀원의 개별 성장 계획 수립 및 멘토링</li>
                  <li>• 정기적인 1:1 미팅을 통한 피드백 및 동기부여</li>
                  <li>• 기술 스터디 및 지식 공유 세션 운영</li>
                  <li>• 팀 빌딩 활동 및 조직 문화 개선</li>
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
                  <li>• <strong>D-3 리텐션:</strong> 28% 달성</li>
                  <li>• <strong>DAU:</strong> 1,000명 달성</li>
                  <li>• <strong>동남아 3개국 출시:</strong> 태국, 베트남, 인도네시아</li>
                  <li>• <strong>팀 이탈률:</strong> 5% 미만 유지</li>
                  <li>• <strong>프로젝트 일정:</strong> 100% 준수</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-2">정성적 성과</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 회사 최초 메타버스 서비스 성공적 출시</li>
                  <li>• 24명 규모 팀의 효율적 관리 및 성과 창출</li>
                  <li>• 애자일 개발 문화 정착 및 프로세스 체계화</li>
                  <li>• 팀원들의 기술 역량 및 협업 능력 향상</li>
                  <li>• 동남아시아 시장 진출 기반 마련</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 학습 및 성장 */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">🌱 학습 및 성장</h3>
            <div className="bg-purple-50 p-4 rounded-lg">
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>메타버스 전문성:</strong> 가상 공간 설계 및 사용자 경험 최적화 노하우 습득</li>
                <li>• <strong>대규모 팀 리더십:</strong> 24명 규모 팀 관리 및 성과 창출 경험</li>
                <li>• <strong>글로벌 서비스:</strong> 다국가 동시 출시 및 로컬라이제이션 경험</li>
                <li>• <strong>프로세스 혁신:</strong> 애자일 방법론 도입 및 개발 문화 개선</li>
                <li>• <strong>위기 관리:</strong> 프로젝트 리스크 관리 및 문제 해결 능력 향상</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}