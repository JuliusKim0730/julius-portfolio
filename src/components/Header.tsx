'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const menuItems = [
    { name: 'AboutMe', href: '/about' },
    { 
      name: 'PR', 
      href: '#',
      submenu: [
        { name: '이끌어내는 기획자', href: '/pr/leader' },
        { name: 'ZeroToOne 기획자', href: '/pr/zero-to-one' },
        { name: '조직관리자', href: '/pr/organizer' }
      ]
    },
    {
      name: '커리어',
      href: '#',
      submenu: [
        { name: '[AI] 스톡폴리오', href: '/career/stockfolio' },
        { name: '[AI] 팩타고라', href: '/career/factora' },
        { name: '[IT] 위에이알', href: '/career/wiar' },
        { name: '[IT] 팀스노우볼', href: '/career/teamsnowball' },
        { name: '[게임] 더블유게임즈', href: '/career/wgames' },
        { name: '[IT] 넥스트매치', href: '/career/nextmatch' },
        { name: '[게임] 바이닐랩', href: '/career/vinyllab' },
        { name: '[게임] 브로모스튜디오', href: '/career/bromostudio' },
        { name: '[게임] 산게임즈', href: '/career/sangames' },
        { name: '[그외] 기타 경력', href: '/career/others' }
      ]
    },
    {
      name: 'SideJob',
      href: '#',
      submenu: [
        { name: '[IT] 버츄얼 CHAT 프로토타입 외주 기획', href: '/sidejob/virtual-chat' },
        { name: '[IT] 메타버스 JJAANN 기능 추가 및 개선 외주 기획', href: '/sidejob/metaverse-jjaann' },
        { name: '[IT] 아동 상담 복지앱 초기 기획', href: '/sidejob/child-welfare' }
      ]
    },
    {
      name: '강의',
      href: '#',
      submenu: [
        { name: '취업-이직멘토링', href: '/teaching/mentoring' },
        { name: '게임기획강의', href: '/teaching/game-planning' },
        { name: '이븐아이 게임 기획 과외', href: '/teaching/even-i' },
        { name: '게임 개발프로젝트 게임톤 운영', href: '/teaching/gameton' }
      ]
    },
    {
      name: '개인개발',
      href: '#',
      submenu: [
        { name: '서비스경험디자인 기사 필기시험 사이트', href: '/personal-development/service-design-exam' },
        { name: '웹소설헬퍼', href: '/personal-development/web-novel-helper' },
        { name: '보드게임추천', href: '/personal-development/board-game-recommend' },
        { name: '청약정보 확인', href: '/personal-development/housing-info' },
        { name: 'MeetingAgentGame', href: '/personal-development/meeting-agent-game' }
      ]
    }
  ];

  return (
    <header className="bg-white shadow-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Portfolio.
          </Link>

          {/* 네비게이션 메뉴 */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 px-3 rounded-md hover:bg-gray-50"
                >
                  {item.name}
                </Link>

                {/* 드롭다운 메뉴 */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button className="md:hidden p-2 text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 