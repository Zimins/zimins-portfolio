"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: '개인 블로그 웹사이트',
    category: '웹 개발',
    image: 'https://picsum.photos/id/26/800/600',
    description: 'Next.js와 Tailwind CSS를 활용한 개인 블로그 웹사이트입니다. 마크다운 기반의 콘텐츠 관리 시스템을 구현했습니다.'
  },
  {
    id: 2,
    title: '쇼핑몰 모바일 앱',
    category: '앱 개발',
    image: 'https://picsum.photos/id/3/800/600',
    description: 'React Native를 활용한 쇼핑몰 모바일 앱입니다. 상품 검색, 장바구니, 결제 기능을 구현했습니다.'
  },
  {
    id: 3,
    title: '대시보드 UI 디자인',
    category: 'UI/UX 디자인',
    image: 'https://picsum.photos/id/60/800/600',
    description: 'Figma를 활용한 관리자 대시보드 UI 디자인입니다. 데이터 시각화와 사용자 경험을 중심으로 디자인했습니다.'
  },
  {
    id: 4,
    title: '온라인 교육 플랫폼',
    category: '웹 개발',
    image: 'https://picsum.photos/id/20/800/600',
    description: 'React와 Firebase를 활용한 온라인 교육 플랫폼입니다. 강의 시청, 퀴즈, 진도 관리 기능을 구현했습니다.'
  },
  {
    id: 5,
    title: '헬스케어 모니터링 앱',
    category: '앱 개발',
    image: 'https://picsum.photos/id/96/800/600',
    description: 'Flutter를 활용한 헬스케어 모니터링 앱입니다. 건강 데이터 추적 및 분석 기능을 구현했습니다.'
  },
  {
    id: 6,
    title: '포트폴리오 웹사이트',
    category: '웹 개발',
    image: 'https://picsum.photos/id/24/800/600',
    description: 'Next.js와 Tailwind CSS를 활용한 개인 포트폴리오 웹사이트입니다. 반응형 디자인과 다크 모드를 지원합니다.'
  }
];

const categories = ['전체', '웹 개발', '앱 개발', 'UI/UX 디자인'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('전체');
  
  const filteredProjects = activeCategory === '전체' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
            포트폴리오
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            최근 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">프로젝트</span> 둘러보기
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            다양한 웹 개발 및 앱 개발 프로젝트를 진행했습니다.
            각 프로젝트는 사용자 경험과 기능성을 모두 고려하여 개발되었습니다.
          </p>
        </div>
        
        {/* 카테고리 필터 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <span className="inline-block px-4 py-1.5 text-xs font-medium bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                <Link 
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                >
                  자세히 보기
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="ml-2 w-5 h-5"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            href="/projects"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 inline-block shadow-lg hover:shadow-xl"
          >
            모든 프로젝트 보기
          </Link>
        </div>
      </div>
    </section>
  );
} 