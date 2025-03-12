"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: '기업 웹사이트 리디자인',
    category: '웹 개발',
    image: 'https://picsum.photos/id/26/800/600',
    description: '현대적인 디자인과 사용자 경험을 개선한 기업 웹사이트 리디자인 프로젝트입니다.'
  },
  {
    id: 2,
    title: '모바일 쇼핑 앱',
    category: '앱 개발',
    image: 'https://picsum.photos/id/3/800/600',
    description: 'iOS 및 Android 플랫폼을 위한 직관적인 사용자 인터페이스를 갖춘 쇼핑 애플리케이션입니다.'
  },
  {
    id: 3,
    title: '대시보드 UI 디자인',
    category: 'UI/UX 디자인',
    image: 'https://picsum.photos/id/60/800/600',
    description: '데이터 시각화와 사용자 경험을 중심으로 한 관리자 대시보드 디자인 프로젝트입니다.'
  },
  {
    id: 4,
    title: '온라인 교육 플랫폼',
    category: '웹 개발',
    image: 'https://picsum.photos/id/20/800/600',
    description: '사용자 맞춤형 학습 경험을 제공하는 반응형 온라인 교육 플랫폼입니다.'
  },
  {
    id: 5,
    title: '헬스케어 모니터링 앱',
    category: '앱 개발',
    image: 'https://picsum.photos/id/96/800/600',
    description: '사용자의 건강 데이터를 추적하고 분석하는 모바일 헬스케어 애플리케이션입니다.'
  },
  {
    id: 6,
    title: '브랜드 아이덴티티 디자인',
    category: '그래픽 디자인',
    image: 'https://picsum.photos/id/24/800/600',
    description: '로고, 색상 팔레트, 타이포그래피를 포함한 종합적인 브랜드 아이덴티티 디자인 프로젝트입니다.'
  }
];

export default function Portfolio() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            최근 <span className="text-blue-600 dark:text-blue-400">프로젝트</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            다양한 산업 분야에서 진행한 프로젝트들을 소개합니다.
            각 프로젝트는 고객의 요구사항을 충족시키기 위한 맞춤형 솔루션입니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <Link 
                  href={`/portfolio/${project.id}`}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center"
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
                    className="ml-1 w-4 h-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/portfolio"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 inline-block"
          >
            모든 프로젝트 보기
          </Link>
        </div>
      </div>
    </section>
  );
} 