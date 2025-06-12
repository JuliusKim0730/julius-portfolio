'use client';

export default function LeaderPage() {
  return (
    <div className="max-w-6xl mx-auto" style={{ backgroundColor: '#F9FAFB', minHeight: '100vh' }}>
      {/* 1. 표지 + 커리어 요약 */}
      <section className="py-20">
        <div className="p-12 rounded-lg shadow-lg text-center" style={{ backgroundColor: '#FFFFFF' }}>
          <h1 className="text-6xl font-bold mb-6" style={{ color: '#1F2937' }}>
            이끌어내는 <span style={{ color: '#2563EB' }}>기획자</span>
          </h1>
          <p className="text-2xl mb-8" style={{ color: '#6B7280' }}>
            팀원들의 잠재력을 끌어내어 최고의 성과를 만들어내는 리더십
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2563EB' }}>15년차 경험</h3>
              <p style={{ color: '#6B7280' }}>
                게임 및 IT 분야에서 다양한 프로젝트를 성공적으로 이끈 베테랑 기획자
              </p>
            </div>
            
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#A5B4FC' }}>팀 리더십</h3>
              <p style={{ color: '#6B7280' }}>
                3인부터 24인 조직까지, 다양한 규모의 팀을 성공적으로 이끈 경험
              </p>
            </div>
            
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#3B82F6' }}>결과 중심</h3>
              <p style={{ color: '#6B7280' }}>
                제품 출시부터 운영까지, 완성도 높은 결과물 달성에 특화
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 대표 결과물 */}
      <section className="py-16">
        <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#FFFFFF' }}>
          <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#1F2937' }}>대표 결과물</h2>
          
          <div className="text-center mb-12">
            <p className="text-xl mb-8" style={{ color: '#6B7280' }}>
              출시했던 대표적인 AI 서비스입니다.
            </p>
          </div>

          {/* AI 서비스 (상단) */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#2563EB' }}>AI 서비스</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
                <h4 className="text-lg font-bold mb-4" style={{ color: '#2563EB' }}>영상 생성 AI</h4>
                <h5 className="text-xl font-bold mb-2" style={{ color: '#1F2937' }}>스톡폴리오</h5>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  AI 기반 투자 포트폴리오<br />관리 서비스
                </p>
              </div>

              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
                <h4 className="text-lg font-bold mb-4" style={{ color: '#A5B4FC' }}>지식기반 챗봇 AI</h4>
                <h5 className="text-xl font-bold mb-2" style={{ color: '#1F2937' }}>팩타고라</h5>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  AI 팩트체킹<br />서비스
                </p>
              </div>

              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h4 className="text-lg font-bold mb-4" style={{ color: '#3B82F6' }}>영상 AI</h4>
                <h5 className="text-xl font-bold mb-2" style={{ color: '#1F2937' }}>Pixt AI</h5>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  AI 영상 제작<br />서비스
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12 p-6 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
            <h4 className="text-lg font-bold mb-3" style={{ color: '#1F2937' }}>대표 결과물</h4>
            <p style={{ color: '#6B7280' }}>
              게임과 IT 서비스에서 각각 출시한 대표 결과물을 공유드립니다.<br />
              모두 기획 초기부터 합류하여 결과물 출시까지 경험하였습니다.
            </p>
          </div>

          {/* 게임 & IT 서비스 (하단) */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: '#2563EB' }}>게임 & IT 서비스</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
                <h4 className="text-lg font-bold mb-4" style={{ color: '#2563EB' }}>동남아향 메타버스</h4>
                <h5 className="text-xl font-bold mb-2" style={{ color: '#1F2937' }}>위에이알</h5>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  보핀<br />메타버스 플랫폼
                </p>
              </div>

              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
                <h4 className="text-lg font-bold mb-4" style={{ color: '#A5B4FC' }}>Twitch, 실시간 예측퀴즈</h4>
                <h5 className="text-xl font-bold mb-2" style={{ color: '#1F2937' }}>팀스노우볼</h5>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  Decakill<br />실시간 예측 서비스
                </p>
              </div>

              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h4 className="text-lg font-bold mb-4" style={{ color: '#3B82F6' }}>모바일 RPG</h4>
                <h5 className="text-xl font-bold mb-2" style={{ color: '#1F2937' }}>더블유게임즈</h5>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  Undead nation<br />모바일 전략 RPG
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 핵심 커리어 */}
      <section className="py-16">
        <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#FFFFFF' }}>
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#1F2937' }}>핵심 커리어</h2>
          
          {/* 핵심 IT 커리어 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8" style={{ color: '#2563EB' }}>핵심 IT 커리어 (IT PM Background)</h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
                <h4 className="text-xl font-bold mb-2" style={{ color: '#2563EB' }}>2024</h4>
                <h5 className="text-lg font-bold" style={{ color: '#1F2937' }}>스톡폴리오</h5>
              </div>
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
                <h4 className="text-xl font-bold mb-2" style={{ color: '#A5B4FC' }}>2023</h4>
                <h5 className="text-lg font-bold" style={{ color: '#1F2937' }}>위에이알</h5>
              </div>
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h4 className="text-xl font-bold mb-2" style={{ color: '#3B82F6' }}>2022</h4>
                <h5 className="text-lg font-bold" style={{ color: '#1F2937' }}>팀스노우볼</h5>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h4 className="font-bold mb-3" style={{ color: '#1F2937' }}>스톡폴리오</h4>
                <p style={{ color: '#6B7280' }}>
                  AI 영상 제작 서비스 Pixt AI에 PM을 맡았습니다.<br />
                  3인 조직의 개발팀을 이끌었으며, 서비스 출시를 위한 세부 업무를 진행.<br />
                  향후 로드맵과 일정 관리를 진행했습니다.
                </p>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
                <h4 className="font-bold mb-3" style={{ color: '#1F2937' }}>위에이알</h4>
                <p style={{ color: '#6B7280' }}>
                  24인 조직의 셀 리드로 게임 프로젝트와 메타버스 프로젝트를 담당했습니다.<br />
                  이 중 메타버스 서비스 보핀의 총 책임자로 서비스 기획부터 출시까지 이루어냈습니다.
                </p>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
                <h4 className="font-bold mb-3" style={{ color: '#1F2937' }}>팀스노우볼</h4>
                <p style={{ color: '#6B7280' }}>
                  10인 조직의 PO로 실시간 예측 프로그램과 이를 위한 사이트 3종의 총 책임자를 담당.<br />
                  제품의 초기 기획부터 런칭과 이후 운영까지 이끌었습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 핵심 게임 커리어 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8" style={{ color: '#2563EB' }}>핵심 게임 커리어 (Game Design Background)</h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
                <h4 className="text-xl font-bold mb-2" style={{ color: '#2563EB' }}>2017</h4>
                <h5 className="text-lg font-bold" style={{ color: '#1F2937' }}>더블유게임즈</h5>
              </div>
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
                <h4 className="text-xl font-bold mb-2" style={{ color: '#A5B4FC' }}>2016</h4>
                <h5 className="text-lg font-bold" style={{ color: '#1F2937' }}>브로모스튜디오</h5>
              </div>
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h4 className="text-xl font-bold mb-2" style={{ color: '#3B82F6' }}>2012</h4>
                <h5 className="text-lg font-bold" style={{ color: '#1F2937' }}>산게임즈</h5>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h4 className="font-bold mb-3" style={{ color: '#1F2937' }}>더블유게임즈</h4>
                <p style={{ color: '#6B7280' }}>
                  입사 당시, 시스템 기획자로 입사.<br />
                  모바일 전략게임 Undead Nation과 모바일 Idle RPG Undead World를 맡아 각각 시스템과 컨텐츠, 레벨디자인의 업무를 수행했습니다.<br />
                  두 게임 모두 출시 이후 운영 기획 역시 진행했습니다.
                </p>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
                <h4 className="font-bold mb-3" style={{ color: '#1F2937' }}>브로모스튜디오</h4>
                <p style={{ color: '#6B7280' }}>
                  입사 당시, 디펜스게임 장르를 MOBA로 바꾸는데 일조<br />
                  이후 전투 밸런스와 캐릭터 기획, 전투 컨텐츠 기획을 담당했습니다.
                </p>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
                <h4 className="font-bold mb-3" style={{ color: '#1F2937' }}>산게임즈</h4>
                <p style={{ color: '#6B7280' }}>
                  제페토 자회사 산게임즈로 입사할 당시 시스템 기획자로 업무를 수행.<br />
                  이후 SNG 올려라 선장님의 팀장 대행 업무를 맡았습니다.<br />
                  서비스 기획 초기부터 출시까지 전 과정을 이끌고 운영 기획 및 차기작 기획을 진행했습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 핵심 경험 */}
          <div>
            <h3 className="text-2xl font-bold mb-8" style={{ color: '#2563EB' }}>핵심 경험</h3>
            
            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
              <h4 className="text-xl font-bold mb-6 text-center" style={{ color: '#1F2937' }}>제품 출시</h4>
              <p className="mb-8 text-center" style={{ color: '#6B7280' }}>
                저는 제품 출시를 위한 기획과 일정 관리, 조직 관리에 탁월합니다.<br />
                게임시스템 기획을 토대로 만들어온 상세 기획에 대한 디테일은 주니어 조직에서 주니어 개발자와 일할 때에도 결과물을 만들어낼 수 있습니다.<br />
                1인 기획을 많이 해온 만큼 제품 전체를 관리하며, 일정과 일감을 산출하고 이를 분배하는 것 또한 능합니다.<br />
                마지막으로 조직장을 경험하면서 인적관리에 대한 경험 역시 갖춰왔습니다.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-4">
                  <h5 className="font-bold mb-2" style={{ color: '#2563EB' }}>SERVICE DESIGN</h5>
                  <p className="text-sm" style={{ color: '#6B7280' }}>서비스 설계 및 기획</p>
                </div>
                <div className="text-center p-4">
                  <h5 className="font-bold mb-2" style={{ color: '#A5B4FC' }}>PROJECT MANAGE</h5>
                  <p className="text-sm" style={{ color: '#6B7280' }}>프로젝트 관리 및 일정 조율</p>
                </div>
                <div className="text-center p-4">
                  <h5 className="font-bold mb-2" style={{ color: '#3B82F6' }}>PEOPLE MANAGE</h5>
                  <p className="text-sm" style={{ color: '#6B7280' }}>팀 리더십 및 인적 관리</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 주요 프로젝트 상세 */}
      <section className="py-16">
        <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#FFFFFF' }}>
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#1F2937' }}>주요 프로젝트 상세</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* 팀스노우볼 */}
            <div className="p-8 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2563EB' }}>팀스노우볼</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>역할</h4>
                  <p style={{ color: '#6B7280' }}>10인 조직 PO, 실시간 예측 프로그램 총 책임자</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>성과</h4>
                  <ul className="space-y-1" style={{ color: '#6B7280' }}>
                    <li>• 실시간 예측 사이트 3종 동시 런칭</li>
                    <li>• 초기 기획부터 운영까지 전 과정 리드</li>
                    <li>• Twitch 연동 실시간 예측 시스템 구축</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>기간</h4>
                  <p style={{ color: '#6B7280' }}>2022.11 ~ 2022.10</p>
                </div>
              </div>
            </div>

            {/* 위에이알 */}
            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#A5B4FC' }}>위에이알</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>역할</h4>
                  <p style={{ color: '#6B7280' }}>24인 조직 셀 리드, 메타버스 서비스 보핀 총 책임자</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>성과</h4>
                  <ul className="space-y-1" style={{ color: '#6B7280' }}>
                    <li>• 동남아향 메타버스 플랫폼 보핀 출시</li>
                    <li>• 게임 프로젝트와 메타버스 프로젝트 동시 관리</li>
                    <li>• 대규모 조직 운영 경험</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>기간</h4>
                  <p style={{ color: '#6B7280' }}>2022.11 ~ 2023.07</p>
                </div>
              </div>
            </div>

            {/* 스톡폴리오 */}
            <div className="p-8 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#3B82F6' }}>스톡폴리오</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>역할</h4>
                  <p style={{ color: '#6B7280' }}>AI 서비스 기획 PM, 3인 개발팀 리드</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>성과</h4>
                  <ul className="space-y-1" style={{ color: '#6B7280' }}>
                    <li>• AI 영상 제작 서비스 Pixt AI 출시</li>
                    <li>• AI 투자 포트폴리오 관리 서비스 개발</li>
                    <li>• 로드맵 및 일정 관리 전담</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>기간</h4>
                  <p style={{ color: '#6B7280' }}>2024.01 ~ 2025.03</p>
                </div>
              </div>
            </div>

            {/* 더블유게임즈 */}
            <div className="p-8 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2563EB' }}>더블유게임즈</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>역할</h4>
                  <p style={{ color: '#6B7280' }}>시스템 기획자, 모바일 게임 2종 담당</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>성과</h4>
                  <ul className="space-y-1" style={{ color: '#6B7280' }}>
                    <li>• Undead Nation, Undead World 출시</li>
                    <li>• 시스템, 컨텐츠, 레벨디자인 전담</li>
                    <li>• 출시 후 운영 기획까지 담당</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>기간</h4>
                  <p style={{ color: '#6B7280' }}>2017.04 ~ 2021.11</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 그 외 경험 */}
      <section className="py-16">
        <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#FFFFFF' }}>
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#1F2937' }}>그 외 경험</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#2563EB' }}>추가 프로젝트 경험</h3>
              <div className="space-y-6">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>팩타고라</h4>
                  <p className="text-sm mb-2" style={{ color: '#6B7280' }}>2023.10 ~ 2023.12</p>
                  <p style={{ color: '#6B7280' }}>AI 팩트체킹 서비스 PO 역할</p>
                </div>

                <div className="p-6 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>넥스트게임즈</h4>
                  <p className="text-sm mb-2" style={{ color: '#6B7280' }}>2017.01 ~ 2017.04</p>
                  <p style={{ color: '#6B7280' }}>모바일 게임 기획자</p>
                </div>

                <div className="p-6 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>브로모스튜디오</h4>
                  <p className="text-sm mb-2" style={{ color: '#6B7280' }}>2016</p>
                  <p style={{ color: '#6B7280' }}>MOBA 장르 전환 프로젝트 참여</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#2563EB' }}>사이드 프로젝트</h3>
              <div className="space-y-6">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>메타버스 JJAANN</h4>
                  <p style={{ color: '#6B7280' }}>가상공간 플랫폼 기능 추가 및 개선 외주 기획</p>
                </div>

                <div className="p-6 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>버츄얼 CHAT</h4>
                  <p style={{ color: '#6B7280' }}>프로토타입 외주 기획</p>
                </div>

                <div className="p-6 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>아동 상담 복지앱</h4>
                  <p style={{ color: '#6B7280' }}>초기 기획 담당</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-lg text-center" style={{ backgroundColor: '#F3F4FF' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#1F2937' }}>강의 및 멘토링</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2" style={{ color: '#A5B4FC' }}>교육 경험</h4>
                <ul className="text-sm space-y-1" style={{ color: '#6B7280' }}>
                  <li>• 취업-이직 멘토링</li>
                  <li>• 게임기획 강의</li>
                  <li>• 이븐아이 게임 기획 과외</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2" style={{ color: '#A5B4FC' }}>운영 경험</h4>
                <ul className="text-sm space-y-1" style={{ color: '#6B7280' }}>
                  <li>• 게임 개발프로젝트 게임톤 운영</li>
                  <li>• 주니어 개발자 멘토링</li>
                  <li>• 팀 빌딩 워크샵 진행</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* 6. 핵심 경험 섹션 (각 프로젝트별 상세) */}
       <section className="py-16">
         <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#FFFFFF' }}>
           <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#1F2937' }}>핵심 경험 섹션</h2>
           <p className="text-xl text-center mb-16" style={{ color: '#6B7280' }}>
             각 프로젝트별 상세 도전과제와 솔루션, 그리고 성과를 소개합니다
           </p>

           {/* 1. 팀스노우볼 - Decakill Project */}
           <div className="mb-20">
             <div className="p-8 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
               <div className="flex items-center mb-6">
                 <h3 className="text-3xl font-bold mr-4" style={{ color: '#2563EB' }}>팀스노우볼</h3>
                 <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#2563EB', color: '#FFFFFF' }}>
                   Decakill Project
                 </span>
               </div>
               
               <div className="grid lg:grid-cols-2 gap-8 mb-8">
                 <div>
                   <h4 className="text-xl font-bold mb-4" style={{ color: '#1F2937' }}>테마: 상상을 현실로</h4>
                   <div className="mb-6">
                     <h5 className="font-bold mb-3" style={{ color: '#1F2937' }}>서비스 개요</h5>
                     <ul className="space-y-2" style={{ color: '#6B7280' }}>
                       <li>• Twitch Extension 기반 실시간 퀴즈 및 예측 참여 서비스</li>
                       <li>• E-sports 시청자 참여도 향상 및 시장 성장 목표</li>
                     </ul>
                   </div>
                   
                   <div>
                     <h5 className="font-bold mb-3" style={{ color: '#1F2937' }}>도전 과제</h5>
                     <ul className="space-y-2" style={{ color: '#6B7280' }}>
                       <li>• E-sports 전문회사의 첫 B2C 서비스</li>
                       <li>• 전문 기획인력 부재 상황에서 10인 조직 관리</li>
                       <li>• 30% 이상 리텐션 요구사항</li>
                     </ul>
                   </div>
                 </div>

                 <div>
                   <h5 className="font-bold mb-3" style={{ color: '#1F2937' }}>핵심 솔루션</h5>
                   <ul className="space-y-2 mb-6" style={{ color: '#6B7280' }}>
                     <li>• 게이미피케이션 설계: 실시간 예측 → 포인트 경쟁 → 메타버스 연계</li>
                     <li>• 4개 프로젝트 동시 진행: 메인 Extension + 랭킹사이트 + 상점 백오피스 + 문제출제 시스템</li>
                     <li>• 상세 기획 시스템: 와이어프레임, 스토리보드, 플로우차트 구축</li>
                   </ul>
                   
                   <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                     <h5 className="font-bold mb-3" style={{ color: '#1F2937' }}>프로젝트 기간</h5>
                     <p style={{ color: '#6B7280' }}>2021.11 ~ 2022.10</p>
                   </div>
                 </div>
               </div>

               <div>
                 <h5 className="font-bold mb-4 text-center" style={{ color: '#1F2937' }}>핵심 성과</h5>
                 <div className="grid md:grid-cols-4 gap-6">
                   <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                     <div className="text-3xl font-bold mb-2" style={{ color: '#2563EB' }}>80%</div>
                     <p className="text-sm" style={{ color: '#6B7280' }}>PC 시청자 대비<br />사용자 참여율</p>
                   </div>
                   <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                     <div className="text-3xl font-bold mb-2" style={{ color: '#2563EB' }}>42%</div>
                     <p className="text-sm" style={{ color: '#6B7280' }}>사이트<br />전환율</p>
                   </div>
                   <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                     <div className="text-3xl font-bold mb-2" style={{ color: '#2563EB' }}>85%</div>
                     <p className="text-sm" style={{ color: '#6B7280' }}>2문제 이상 참여<br />적극 사용자</p>
                   </div>
                   <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                     <div className="text-sm font-bold mb-2" style={{ color: '#2563EB' }}>주요 협력</div>
                     <p className="text-xs" style={{ color: '#6B7280' }}>엠비션, 만당<br />농심 e-sports 구단</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* 2. 위에이알 - 보핀 메타버스 */}
           <div className="mb-20">
             <div className="p-8 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
               <div className="flex items-center mb-6">
                 <h3 className="text-3xl font-bold mr-4" style={{ color: '#A5B4FC' }}>위에이알</h3>
                 <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#A5B4FC', color: '#FFFFFF' }}>
                   보핀 메타버스
                 </span>
               </div>
               
               <div className="grid lg:grid-cols-2 gap-8 mb-8">
                 <div>
                   <h4 className="text-xl font-bold mb-4" style={{ color: '#1F2937' }}>테마: 팀원의 성장을</h4>
                   <div className="mb-6">
                     <h5 className="font-bold mb-3" style={{ color: '#1F2937' }}>서비스 개요</h5>
                     <ul className="space-y-2" style={{ color: '#6B7280' }}>
                       <li>• 동남아 타겟 메타버스 서비스</li>
                       <li>• 평균 연차 1.6년 미만 주니어 조직 24인 관리</li>
                     </ul>
                   </div>
                   
                   <div>
                     <h5 className="font-bold mb-3" style={{ color: '#1F2937' }}>도전 과제</h5>
                     <ul className="space-y-2" style={{ color: '#6B7280' }}>
                       <li>• 개발 경험 전무한 주니어 조직</li>
                       <li>• 본디 열풍 대응으로 1달 내 출시 요구</li>
                       <li>• 기존 클레이랜드 NFT 서비스 연계 필요</li>
                     </ul>
                   </div>
                 </div>

                 <div>
                   <h5 className="font-bold mb-3" style={{ color: '#1F2937' }}>핵심 솔루션</h5>
                   <ul className="space-y-2 mb-6" style={{ color: '#6B7280' }}>
                     <li>• 단계적 성장 전략: 하이퍼캐주얼 게임 2개 → 메타버스 전환</li>
                     <li>• 애자일 조직 운영: KPT 회고, 1on1 관리, 실시간 문제 대응</li>
                     <li>• 최소 기능 집중: 핵심 Flow 중심 UX 설계로 개발 부하 최소화</li>
                   </ul>
                   
                   <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                     <h5 className="font-bold mb-3" style={{ color: '#1F2937' }}>프로젝트 기간</h5>
                     <p style={{ color: '#6B7280' }}>2022.10 ~ 2023.07</p>
                   </div>
                 </div>
               </div>

               <div>
                 <h5 className="font-bold mb-4 text-center" style={{ color: '#1F2937' }}>핵심 성과</h5>
                 <div className="grid md:grid-cols-4 gap-6">
                   <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                     <div className="text-3xl font-bold mb-2" style={{ color: '#A5B4FC' }}>95%</div>
                     <p className="text-sm" style={{ color: '#6B7280' }}>런칭 시<br />기능 구현도</p>
                   </div>
                   <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                     <div className="text-3xl font-bold mb-2" style={{ color: '#A5B4FC' }}>23%</div>
                     <p className="text-sm" style={{ color: '#6B7280' }}>D-3 리텐션<br />(본디 9% 대비 2.5배)</p>
                   </div>
                   <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                     <div className="text-3xl font-bold mb-2" style={{ color: '#A5B4FC' }}>1,500명</div>
                     <p className="text-sm" style={{ color: '#6B7280' }}>1주일 내<br />유저 확보</p>
                   </div>
                   <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                     <div className="text-3xl font-bold mb-2" style={{ color: '#A5B4FC' }}>80%</div>
                     <p className="text-sm" style={{ color: '#6B7280' }}>아트 에셋<br />구현 완료</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* 3. 스톡폴리오 - PixtAI */}
           <div className="mb-20">
             <div className="p-8 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
               <div className="flex items-center mb-6">
                 <h3 className="text-3xl font-bold mr-4" style={{ color: '#3B82F6' }}>스톡폴리오</h3>
                 <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#3B82F6', color: '#FFFFFF' }}>
                   PixtAI
                 </span>
               </div>
               
               <div className="grid lg:grid-cols-2 gap-8 mb-8">
                 <div>
                   <h4 className="text-xl font-bold mb-4" style={{ color: '#1F2937' }}>테마: 문제의 솔루션을</h4>
                   <div className="mb-6">
                     <h5 className="font-bold mb-3" style={{ color: '#1F2937' }}>서비스 개요</h5>
                     <ul className="space-y-2" style={{ color: '#6B7280' }}>
                       <li>• 글로벌 타겟 AI 영상 제작 서비스</li>
                       <li>• 4인 소규모 조직에서 총체적 난국 상황 해결</li>
                     </ul>
                   </div>
                   
                   <div>
                     <h5 className="font-bold mb-3" style={{ color: '#1F2937' }}>도전 과제</h5>
                     <ul className="space-y-2" style={{ color: '#6B7280' }}>
                       <li>• 외주 결과물 분석 불가능한 상태</li>
                       <li>• 디자이너-개발팀 간 충돌</li>
                       <li>• 2월 CES, 4월 NAB쇼 출시 임박</li>
                       <li>• 비상주 대표진으로 인한 결정권 부재</li>
                     </ul>
                   </div>
                 </div>

                 <div>
                   <h5 className="font-bold mb-3" style={{ color: '#1F2937' }}>핵심 솔루션</h5>
                   <ul className="space-y-2 mb-6" style={{ color: '#6B7280' }}>
                     <li>• 제품 책임자 권한 위임: 모든 기획 결정을 PM 중심으로 통합</li>
                     <li>• 핵심 Flow 집중: AI 영상 제작 핵심 경험만 유지, 개발 스펙 최소화</li>
                     <li>• 분기별 목표 설정: CES → NAB쇼 → 월드IT쇼 → 스마트테크코리아쇼</li>
                     <li>• 체계적 프로세스 구축: 아이데이션 → 기획 브리핑 → 개발 브리핑 → 회고</li>
                   </ul>
                   
                   <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                     <h5 className="font-bold mb-3" style={{ color: '#1F2937' }}>프로젝트 기간</h5>
                     <p style={{ color: '#6B7280' }}>2024.01 ~ 현재</p>
                   </div>
                 </div>
               </div>

               <div>
                 <h5 className="font-bold mb-4 text-center" style={{ color: '#1F2937' }}>핵심 성과</h5>
                 <div className="grid md:grid-cols-3 gap-6">
                   <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                     <div className="text-lg font-bold mb-2" style={{ color: '#3B82F6' }}>4개 전시 성공</div>
                     <p className="text-sm" style={{ color: '#6B7280' }}>CES, NAB쇼, 월드IT쇼<br />스마트테크코리아쇼</p>
                   </div>
                   <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                     <div className="text-lg font-bold mb-2" style={{ color: '#3B82F6' }}>제품 고도화</div>
                     <p className="text-sm" style={{ color: '#6B7280' }}>AI 엔진 최적화<br />20개 시스템/기능 추가</p>
                   </div>
                   <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                     <div className="text-lg font-bold mb-2" style={{ color: '#3B82F6' }}>조직 안정화</div>
                     <p className="text-sm" style={{ color: '#6B7280' }}>논쟁 해소<br />업무 집중도 향상</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* 4. 더블유게임즈 - Undead Nation */}
           <div className="mb-20">
             <div className="p-8 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
               <div className="flex items-center mb-6">
                 <h3 className="text-3xl font-bold mr-4" style={{ color: '#2563EB' }}>더블유게임즈</h3>
                 <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#2563EB', color: '#FFFFFF' }}>
                   Undead Nation
                 </span>
               </div>
               
               <div className="grid lg:grid-cols-2 gap-8 mb-8">
                 <div>
                   <h4 className="text-xl font-bold mb-4" style={{ color: '#1F2937' }}>테마: 데이터에서 솔루션을</h4>
                   <div className="mb-6">
                     <h5 className="font-bold mb-3" style={{ color: '#1F2937' }}>서비스 개요</h5>
                     <ul className="space-y-2" style={{ color: '#6B7280' }}>
                       <li>• Facebook Gameroom, AOS, iOS 출시 전략 게임</li>
                       <li>• 시스템 기획부터 밸런스, 컨텐츠, Live 운영까지 총괄</li>
                     </ul>
                   </div>
                   
                   <div>
                     <h5 className="font-bold mb-3" style={{ color: '#1F2937' }}>도전 과제</h5>
                     <ul className="space-y-2" style={{ color: '#6B7280' }}>
                       <li>• 대규모 업데이트 후 D-1 리텐션 40%대에서 급격히 하락</li>
                       <li>• 마케팅 효율 감소, 원인 불명 상황</li>
                     </ul>
                   </div>
                 </div>

                 <div>
                   <h5 className="font-bold mb-3" style={{ color: '#1F2937' }}>핵심 솔루션</h5>
                   <ul className="space-y-2 mb-6" style={{ color: '#6B7280' }}>
                     <li>• 데이터 기반 가설 수립: 신규 유저 튜토리얼 클리어율 분석</li>
                     <li>• 문제점 발견: 효율 좋은 S급 캐릭터 지급했으나, 유저들이 예쁜 D급 캐릭터 육성으로 난이도 급상승</li>
                     <li>• 레벨 디자인 수정: 각 스테이지별 배치 조정으로 "아슬아슬한 승리" 경험 설계</li>
                   </ul>
                   
                   <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                     <h5 className="font-bold mb-3" style={{ color: '#1F2937' }}>프로젝트 기간</h5>
                     <p style={{ color: '#6B7280' }}>2017.05 ~ 2021.10</p>
                   </div>
                 </div>
               </div>

               <div>
                 <h5 className="font-bold mb-4 text-center" style={{ color: '#1F2937' }}>핵심 성과</h5>
                 <div className="grid md:grid-cols-4 gap-6">
                   <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                     <div className="text-lg font-bold mb-2" style={{ color: '#2563EB' }}>D-1 리텐션</div>
                     <p className="text-sm" style={{ color: '#6B7280' }}>정상 회복</p>
                   </div>
                   <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                     <div className="text-lg font-bold mb-2" style={{ color: '#2563EB' }}>광고 효과</div>
                     <p className="text-sm" style={{ color: '#6B7280' }}>증대</p>
                   </div>
                   <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                     <div className="text-lg font-bold mb-2" style={{ color: '#2563EB' }}>추가 결제</div>
                     <p className="text-sm" style={{ color: '#6B7280' }}>유도 성공</p>
                   </div>
                   <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                     <div className="text-lg font-bold mb-2" style={{ color: '#2563EB' }}>이탈 방지</div>
                     <p className="text-sm" style={{ color: '#6B7280' }}>클리어율 정상화</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>

           {/* 5. 기타 경험 */}
           <div className="mb-16">
             <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#1F2937' }}>기타 경험</h3>
             
             <div className="grid lg:grid-cols-2 gap-8">
               <div>
                 <h4 className="text-xl font-bold mb-6" style={{ color: '#2563EB' }}>IT 분야</h4>
                 <div className="space-y-4">
                   <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                     <h5 className="font-bold mb-2" style={{ color: '#1F2937' }}>넥스트매치(아만다)</h5>
                     <p className="text-sm mb-2" style={{ color: '#6B7280' }}>데이팅앱 운영 PM</p>
                     <p className="text-sm" style={{ color: '#6B7280' }}>데이터 기반 상품 기획으로 월 매출 15% 성장</p>
                   </div>
                   
                   <div className="p-6 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
                     <h5 className="font-bold mb-2" style={{ color: '#1F2937' }}>팩타고라</h5>
                     <p className="text-sm mb-2" style={{ color: '#6B7280' }}>신뢰도 높은 AI 챗봇 서비스 PM</p>
                     <p className="text-sm" style={{ color: '#6B7280' }}>세일즈 버전 완성</p>
                   </div>
                 </div>
               </div>

               <div>
                 <h4 className="text-xl font-bold mb-6" style={{ color: '#2563EB' }}>게임 분야</h4>
                 <div className="space-y-4">
                   <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                     <h5 className="font-bold mb-2" style={{ color: '#1F2937' }}>바이닐랩</h5>
                     <p className="text-sm mb-2" style={{ color: '#6B7280' }}>SNG게임 기획 팀장</p>
                     <p className="text-sm" style={{ color: '#6B7280' }}>헬로키티 IP 기반 게임 설계</p>
                   </div>
                   
                   <div className="p-6 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
                     <h5 className="font-bold mb-2" style={{ color: '#1F2937' }}>산게임즈</h5>
                     <p className="text-sm mb-2" style={{ color: '#6B7280' }}>"올려라 선장님" 1인 기획 및 팀장 대행</p>
                     <p className="text-sm" style={{ color: '#6B7280' }}>서비스 기획부터 출시까지 총괄</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* 7. 연락처 */}
       <section className="py-20">
         <div className="p-12 rounded-lg shadow-lg text-center" style={{ backgroundColor: '#FFFFFF' }}>
           <h2 className="text-4xl font-bold mb-8" style={{ color: '#1F2937' }}>연락처</h2>
          
          <div className="mb-8">
            <p className="text-xl mb-6" style={{ color: '#6B7280' }}>
              함께 성장할 팀을 찾고 있습니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
              <svg className="w-6 h-6" style={{ color: '#2563EB' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-lg font-medium" style={{ color: '#1F2937' }}>010-9853-6340</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
              <svg className="w-6 h-6" style={{ color: '#A5B4FC' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-lg font-medium" style={{ color: '#1F2937' }}>kia1026@naver.com</span>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
            <p className="text-lg italic" style={{ color: '#6B7280' }}>
              "팀의 잠재력을 끌어내어 함께 성장하는 것이 저의 가장 큰 보람입니다"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 