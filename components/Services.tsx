"use client";

import React from 'react';

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-blue-600 dark:text-blue-400">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 7h10" />
        <path d="M7 12h10" />
        <path d="M7 17h10" />
      </svg>
    ),
    title: '웹 개발',
    description: '반응형 웹사이트 및 웹 애플리케이션 개발. 최신 프레임워크와 기술을 활용하여 사용자 친화적인 웹 경험을 제공합니다.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-purple-600 dark:text-purple-400">
        <rect width="14" height="20" x="5" y="2" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: '모바일 앱 개발',
    description: 'iOS 및 Android 플랫폼을 위한 네이티브 및 크로스 플랫폼 모바일 애플리케이션 개발. 사용자 경험에 중점을 둔 앱 솔루션을 제공합니다.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-indigo-600 dark:text-indigo-400">
        <path d="M12 2H2v10h10V2Z" />
        <path d="M22 12h-10v10h10V12Z" />
        <path d="M12 12H2v10h10V12Z" />
        <path d="M22 2h-10v10h10V2Z" />
      </svg>
    ),
    title: 'UI/UX 디자인',
    description: '사용자 중심의 인터페이스 및 경험 디자인. 직관적이고 매력적인 디자인으로 사용자 참여도를 높입니다.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-pink-600 dark:text-pink-400">
        <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
    title: '디지털 마케팅',
    description: 'SEO, 소셜 미디어 마케팅, 콘텐츠 마케팅 등 종합적인 디지털 마케팅 서비스를 제공합니다.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-green-600 dark:text-green-400">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: '보안 솔루션',
    description: '웹사이트 및 애플리케이션을 위한 보안 감사 및 솔루션 구현. 데이터 보호 및 보안 취약점 해결을 지원합니다.'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-orange-600 dark:text-orange-400">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.29 7 12 12l8.71-5" />
        <path d="M12 22V12" />
      </svg>
    ),
    title: '클라우드 솔루션',
    description: 'AWS, Azure, Google Cloud 등 클라우드 플랫폼을 활용한 인프라 설계 및 구현. 확장 가능하고 안정적인 클라우드 솔루션을 제공합니다.'
  }
];

export default function Services() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
            서비스
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            고객의 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">비즈니스 성장</span>을 위한 솔루션
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            고객의 비즈니스 목표를 달성하기 위한 다양한 디지털 서비스를 제공합니다.
            최신 기술과 창의적인 접근 방식으로 차별화된 솔루션을 만듭니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 group"
            >
              <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl inline-block group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50 dark:group-hover:from-blue-900/30 dark:group-hover:to-purple-900/30 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 font-medium">
                <span>자세히 보기</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 