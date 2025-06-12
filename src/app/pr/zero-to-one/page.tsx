'use client';

export default function ZeroToOnePage() {
  return (
    <div className="max-w-6xl mx-auto" style={{ backgroundColor: '#F9FAFB', minHeight: '100vh' }}>
      {/* 1. 표지 */}
      <section className="py-20 text-center">
        <div className="p-12 rounded-lg shadow-lg" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-6" style={{ color: '#1F2937' }}>
              제로에서 시작해 1로, <br />
              <span style={{ color: '#2563EB' }}>그리고 그 이상으로</span>
            </h1>
            <h2 className="text-2xl font-medium mb-8" style={{ color: '#6B7280' }}>
              Zero to One Product Builder – 김민균
            </h2>
            <div className="flex justify-center mb-8">
              <div className="text-8xl font-bold" style={{ color: '#2563EB' }}>0</div>
              <div className="text-6xl font-bold self-center mx-4" style={{ color: '#A5B4FC' }}>→</div>
              <div className="text-8xl font-bold" style={{ color: '#3B82F6' }}>1</div>
            </div>
            <p className="text-xl italic" style={{ color: '#1F2937' }}>
              "제로투원을 이끄는 기획자, 김민균"
            </p>
          </div>
        </div>
      </section>

      {/* 2. 약식 자기소개 */}
      <section className="py-16">
        <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#FFFFFF' }}>
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#1F2937' }}>Profile Overview</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2563EB' }}>요약 프로필</h3>
              <ul className="space-y-3" style={{ color: '#1F2937' }}>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#2563EB' }}></span>
                  15년차 기획자
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#2563EB' }}></span>
                  제로투원 프로젝트 다수 주도
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#2563EB' }}></span>
                  런칭 경험 및 운영, 팀 빌딩 능력 보유
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2563EB' }}>키워드</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['#제로투원', '#실행력', '#팀문화', '#런칭', '#운영확장'].map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ backgroundColor: '#EBF4FF', color: '#2563EB' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
                <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>핵심 슬로건</h4>
                <p className="text-lg italic" style={{ color: '#A5B4FC' }}>
                  "상상을 실체화하는 기획자, 팀을 움직이는 리더"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 제로투원 그래프 */}
      <section className="py-16">
        <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#FFFFFF' }}>
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#1F2937' }}>Zero to One Timeline</h2>
          
          <div className="relative">
            {/* 메인 타임라인 */}
            <div className="absolute left-8 top-0 bottom-0 w-1" style={{ backgroundColor: '#2563EB' }}></div>
            
            <div className="space-y-12">
              {[
                { 
                  project: '보핀 (데이팅앱)', 
                  year: '2018-2019',
                  phases: ['기획 완료', '개발 착수', '론칭', '운영']
                },
                { 
                  project: '데카킬 (미드코어 게임)', 
                  year: '2019-2021',
                  phases: ['기획 완료', '개발 착수', '론칭', '운영', '확장']
                },
                { 
                  project: '픽스트 AI (영상 서비스)', 
                  year: '2021-2022',
                  phases: ['기획 완료', '개발 착수', '론칭']
                },
                { 
                  project: '더블유게임즈 2종', 
                  year: '2017-2021',
                  phases: ['기획 완료', '개발 착수', '론칭', '운영', '확장']
                }
              ].map((item, index) => (
                <div key={index} className="relative pl-20">
                  <div 
                    className="absolute left-6 w-4 h-4 rounded-full border-4 border-white"
                    style={{ backgroundColor: '#2563EB' }}
                  ></div>
                  
                  <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#1F2937' }}>
                      {item.project}
                    </h3>
                    <p className="mb-4" style={{ color: '#6B7280' }}>{item.year}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.phases.map((phase, phaseIndex) => (
                        <span 
                          key={phaseIndex}
                          className="px-3 py-1 rounded-full text-sm"
                          style={{ 
                            backgroundColor: phaseIndex < 2 ? '#2563EB' : 
                                           phaseIndex < 4 ? '#3B82F6' : '#A5B4FC',
                            color: '#FFFFFF'
                          }}
                        >
                          {phase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. 기획 브리핑 사례 */}
      <section className="py-16">
        <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#FFFFFF' }}>
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#1F2937' }}>기획 브리핑 사례</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2563EB' }}>팀스노우볼 프로젝트</h3>
              
              <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#F9FAFB' }}>
                <h4 className="font-bold mb-3" style={{ color: '#1F2937' }}>브리핑 배경</h4>
                <p style={{ color: '#6B7280' }}>
                  신규 협업 툴 서비스의 컨셉 정의와 차별화 포인트를 팀 전체에 명확히 전달하기 위한 초기 브리핑
                </p>
              </div>

              <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#EBF4FF' }}>
                <h4 className="font-bold mb-3" style={{ color: '#1F2937' }}>핵심 내용</h4>
                <ul className="space-y-2" style={{ color: '#6B7280' }}>
                  <li>• 타겟 사용자 명확화 (스타트업 팀 대상)</li>
                  <li>• 핵심 기능 우선순위 정의</li>
                  <li>• MVP 범위 설정 및 개발 로드맵</li>
                  <li>• 경쟁사 대비 차별화 전략</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
                <h4 className="font-bold mb-3" style={{ color: '#1F2937' }}>결과</h4>
                <p style={{ color: '#6B7280' }}>
                  팀 전체의 방향성 일치로 개발 속도 40% 향상, 
                  불필요한 기능 개발 방지로 리소스 효율성 극대화
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#2563EB' }}>스톡폴리오 프로젝트</h3>
              
              <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#F9FAFB' }}>
                <h4 className="font-bold mb-3" style={{ color: '#1F2937' }}>브리핑 배경</h4>
                <p style={{ color: '#6B7280' }}>
                  AI 기반 투자 서비스의 복잡한 알고리즘과 사용자 경험을 
                  개발팀과 비즈니스팀이 공통으로 이해할 수 있도록 설계
                </p>
              </div>

              <div className="p-6 rounded-lg mb-6" style={{ backgroundColor: '#EBF4FF' }}>
                <h4 className="font-bold mb-3" style={{ color: '#1F2937' }}>핵심 내용</h4>
                <ul className="space-y-2" style={{ color: '#6B7280' }}>
                  <li>• AI 추천 로직의 사용자 관점 해석</li>
                  <li>• 투자 초보자도 이해 가능한 UX 설계</li>
                  <li>• 리스크 관리 기능의 시각화 방안</li>
                  <li>• 개인화 알고리즘 적용 전략</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
                <h4 className="font-bold mb-3" style={{ color: '#1F2937' }}>결과</h4>
                <p style={{ color: '#6B7280' }}>
                  복잡한 AI 기능을 직관적인 UI로 구현 성공, 
                  사용자 만족도 85% 달성 및 서비스 성공적 런칭
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 기능 로드맵 및 출시 설계 */}
      <section className="py-16">
        <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#FFFFFF' }}>
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#1F2937' }}>기능 로드맵 & 출시 설계</h2>
          
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6" style={{ color: '#2563EB' }}>스톡폴리오 - 기능 분류 & 출시 전략</h3>
            
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
                <h4 className="font-bold mb-4" style={{ color: '#2563EB' }}>Phase 1: MVP</h4>
                <ul className="space-y-2 text-sm" style={{ color: '#1F2937' }}>
                  <li>• 회원가입/로그인</li>
                  <li>• 기본 포트폴리오 분석</li>
                  <li>• AI 추천 엔진 (기본)</li>
                  <li>• 대시보드 UI</li>
                </ul>
                <div className="mt-4 text-xs" style={{ color: '#6B7280' }}>
                  출시: 2024.03 | 개발: 8주
                </div>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
                <h4 className="font-bold mb-4" style={{ color: '#A5B4FC' }}>Phase 2: 확장</h4>
                <ul className="space-y-2 text-sm" style={{ color: '#1F2937' }}>
                  <li>• 고급 분석 툴</li>
                  <li>• 리스크 관리 기능</li>
                  <li>• 소셜 기능 (팔로우)</li>
                  <li>• 알림 시스템</li>
                </ul>
                <div className="mt-4 text-xs" style={{ color: '#6B7280' }}>
                  출시: 2024.06 | 개발: 10주
                </div>
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h4 className="font-bold mb-4" style={{ color: '#3B82F6' }}>Phase 3: 고도화</h4>
                <ul className="space-y-2 text-sm" style={{ color: '#1F2937' }}>
                  <li>• AI 챗봇 상담</li>
                  <li>• 자동 투자 기능</li>
                  <li>• 프리미엄 구독</li>
                  <li>• API 연동 확장</li>
                </ul>
                <div className="mt-4 text-xs" style={{ color: '#6B7280' }}>
                  출시: 2024.09 | 개발: 12주
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#2563EB' }}>위에이알 - 기능-출시 매핑 구조</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ backgroundColor: '#F9FAFB' }}>
                    <th className="border border-gray-300 p-3 text-left" style={{ color: '#1F2937' }}>기능 카테고리</th>
                    <th className="border border-gray-300 p-3 text-left" style={{ color: '#1F2937' }}>우선순위</th>
                    <th className="border border-gray-300 p-3 text-left" style={{ color: '#1F2937' }}>개발 난이도</th>
                    <th className="border border-gray-300 p-3 text-left" style={{ color: '#1F2937' }}>출시 버전</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['AR 카메라 기능', 'High', 'Hard', 'v1.0'],
                    ['사용자 인증', 'High', 'Easy', 'v1.0'],
                    ['컨텐츠 관리', 'Medium', 'Medium', 'v1.1'],
                    ['소셜 공유', 'Medium', 'Easy', 'v1.1'],
                    ['고급 필터', 'Low', 'Hard', 'v2.0'],
                    ['분석 대시보드', 'Low', 'Medium', 'v2.0']
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 p-3" style={{ color: '#1F2937' }}>{row[0]}</td>
                      <td className="border border-gray-300 p-3">
                        <span 
                          className="px-2 py-1 rounded text-xs"
                          style={{ 
                            backgroundColor: row[1] === 'High' ? '#EBF4FF' : row[1] === 'Medium' ? '#F3F4FF' : '#F9FAFB',
                            color: row[1] === 'High' ? '#2563EB' : row[1] === 'Medium' ? '#A5B4FC' : '#6B7280'
                          }}
                        >
                          {row[1]}
                        </span>
                      </td>
                      <td className="border border-gray-300 p-3" style={{ color: '#1F2937' }}>{row[2]}</td>
                      <td className="border border-gray-300 p-3" style={{ color: '#2563EB' }}>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 팀 문화 빌딩 및 협업 */}
      <section className="py-16">
        <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#FFFFFF' }}>
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#1F2937' }}>팀 문화 빌딩 & 협업</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#2563EB' }}>아이디어 구조화 프로세스</h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>1단계: 브레인스토밍</h4>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    포스트잇을 활용한 자유로운 아이디어 발산
                    - 모든 팀원이 동등하게 참여
                    - 비판 없는 아이디어 수집
                  </p>
                </div>

                <div className="p-4 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>2단계: 그루핑</h4>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    유사한 아이디어들을 카테고리별로 분류
                    - 중복 제거 및 아이디어 정제
                    - 테마별 우선순위 설정
                  </p>
                </div>

                <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>3단계: 구조화</h4>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    실행 가능한 액션 플랜으로 전환
                    - 구체적인 실행 방안 도출
                    - 담당자 및 일정 배정
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#2563EB' }}>협업 툴 기반 커뮤니케이션</h3>
              
              <div className="space-y-6">
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                  <h4 className="font-bold mb-3" style={{ color: '#1F2937' }}>팀스노우볼 사례</h4>
                  <ul className="space-y-2 text-sm" style={{ color: '#6B7280' }}>
                    <li>• Miro를 활용한 실시간 협업 보드 운영</li>
                    <li>• Slack 채널별 주제 분리로 효율적 소통</li>
                    <li>• 주간 회고 시스템 도입으로 지속적 개선</li>
                    <li>• 모든 의사결정 과정 투명하게 공유</li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
                  <h4 className="font-bold mb-3" style={{ color: '#1F2937' }}>위에이알 사례</h4>
                  <ul className="space-y-2 text-sm" style={{ color: '#6B7280' }}>
                    <li>• Figma 협업으로 디자인-개발 갭 최소화</li>
                    <li>• Notion 기반 프로젝트 문서화 체계</li>
                    <li>• 크로스펑셔널 팀 구성으로 수평적 소통</li>
                    <li>• 정기 데모데이를 통한 피드백 문화 조성</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-lg text-center" style={{ backgroundColor: '#F3F4FF' }}>
            <h4 className="text-lg font-bold mb-3" style={{ color: '#1F2937' }}>핵심 철학</h4>
            <p className="text-lg italic" style={{ color: '#A5B4FC' }}>
              "좋은 아이디어는 모든 곳에서 나올 수 있다. 
              중요한 것은 그 아이디어들을 체계적으로 발전시킬 수 있는 문화를 만드는 것이다."
            </p>
          </div>
        </div>
      </section>

      {/* 7. 출시 이후 운영 및 확장 */}
      <section className="py-16">
        <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#FFFFFF' }}>
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#1F2937' }}>출시 이후 운영 & 확장</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#2563EB' }}>데카킬 운영 사례</h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>초기 유저 확보</h4>
                  <ul className="text-sm space-y-1" style={{ color: '#6B7280' }}>
                    <li>• 인플루언서 협업을 통한 버즈 마케팅</li>
                    <li>• 베타 테스터 200명 운영으로 초기 피드백 수집</li>
                    <li>• 게임 커뮤니티 중심의 바이럴 마케팅</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>VOC 기반 개선</h4>
                  <ul className="text-sm space-y-1" style={{ color: '#6B7280' }}>
                    <li>• 매주 100+ 사용자 피드백 분석</li>
                    <li>• 게임 밸런스 조정 우선순위 설정</li>
                    <li>• 2주 단위 업데이트 사이클 운영</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#2563EB' }}>팀스노우볼 확장 전략</h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>퍼널 분석 결과</h4>
                  <div className="text-sm space-y-1" style={{ color: '#6B7280' }}>
                    <p>가입 → 첫 프로젝트 생성: 45%</p>
                    <p>첫 프로젝트 → 팀 초대: 62%</p>
                    <p>팀 초대 → 지속 사용: 78%</p>
                  </div>
                </div>

                <div className="p-4 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
                  <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>개선 액션</h4>
                  <ul className="text-sm space-y-1" style={{ color: '#6B7280' }}>
                    <li>• 온보딩 프로세스 단순화 (45% → 65%)</li>
                    <li>• 팀 초대 인센티브 시스템 도입</li>
                    <li>• 사용 패턴 기반 개인화 추천</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#2563EB' }}>A/B 테스트 설계 프로세스</h3>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#EBF4FF' }}>
                <div className="text-2xl font-bold mb-2" style={{ color: '#2563EB' }}>1</div>
                <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>가설 설정</h4>
                <p className="text-xs" style={{ color: '#6B7280' }}>
                  데이터 기반 개선 포인트 도출
                </p>
              </div>

              <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#F3F4FF' }}>
                <div className="text-2xl font-bold mb-2" style={{ color: '#A5B4FC' }}>2</div>
                <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>테스트 설계</h4>
                <p className="text-xs" style={{ color: '#6B7280' }}>
                  A/B 그룹 분할 및 측정 지표 설정
                </p>
              </div>

              <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#F9FAFB' }}>
                <div className="text-2xl font-bold mb-2" style={{ color: '#3B82F6' }}>3</div>
                <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>실행 & 측정</h4>
                <p className="text-xs" style={{ color: '#6B7280' }}>
                  충분한 샘플 사이즈 확보 후 분석
                </p>
              </div>

              <div className="p-4 rounded-lg text-center" style={{ backgroundColor: '#EBF4FF' }}>
                <div className="text-2xl font-bold mb-2" style={{ color: '#2563EB' }}>4</div>
                <h4 className="font-bold mb-2" style={{ color: '#1F2937' }}>적용 & 확장</h4>
                <p className="text-xs" style={{ color: '#6B7280' }}>
                  우승안 적용 및 다음 테스트 계획
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 마무리 슬라이드 */}
      <section className="py-20">
        <div className="p-12 rounded-lg shadow-lg text-center" style={{ backgroundColor: '#FFFFFF' }}>
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#1F2937' }}>
            다음 제로투원을 기다립니다
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-lg" style={{ backgroundColor: '#EBF4FF' }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#2563EB' }}>기획자에서 디렉터로</h3>
              <p style={{ color: '#6B7280' }}>
                단순한 기능 기획을 넘어 제품 전체의 방향성과 전략을 이끄는 
                제품 디렉터로 성장해왔습니다.
              </p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#A5B4FC' }}>팀/제품/사업 관점</h3>
              <p style={{ color: '#6B7280' }}>
                개별 기능이 아닌 전체 생태계를 고려한 의사결정으로 
                지속 가능한 성장을 이끌어냅니다.
              </p>
            </div>

            <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#3B82F6' }}>다음 기회</h3>
              <p style={{ color: '#6B7280' }}>
                제로투원 신사업, 초기 셋업, MVP 팀 구성 등 
                새로운 도전을 기다리고 있습니다.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-lg" style={{ backgroundColor: '#F3F4FF' }}>
            <p className="text-2xl font-bold italic mb-4" style={{ color: '#1F2937' }}>
              "다음 여정에서 제가 이끌어낼 '1'은 무엇일까요?"
            </p>
            <p style={{ color: '#6B7280' }}>
              새로운 가능성을 현실로 만드는 여정에 함께하실 준비가 되셨나요?
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="text-6xl font-bold opacity-20" style={{ color: '#2563EB' }}>0 → 1 → ∞</div>
          </div>
        </div>
      </section>
    </div>
  );
} 