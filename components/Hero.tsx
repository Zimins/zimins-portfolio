"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10"></div>
      
      {/* 배경 원형 요소들 */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70 -z-5"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-70 -z-5"></div>
      
      {/* 메인 콘텐츠 */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* 왼쪽 텍스트 영역 */}
        <div className="flex flex-col space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
            프론트엔드 개발자
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            안녕하세요, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">지민</span>입니다
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
            사용자 경험을 중요시하는 프론트엔드 개발자입니다. 
            최신 웹 기술을 활용하여 아름답고 기능적인 웹사이트를 만듭니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-xl"
            >
              연락하기
            </Link>
            <Link 
              href="/portfolio" 
              className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-medium rounded-xl border border-gray-200 transition-all duration-300 text-center shadow-md hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700"
            >
              포트폴리오 보기
            </Link>
          </div>
          
          {/* 기술 스택 */}
          <div className="flex flex-wrap gap-4 pt-8">
            <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <span className="text-gray-800 dark:text-gray-200 font-medium">React</span>
            </div>
            <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <span className="text-gray-800 dark:text-gray-200 font-medium">Next.js</span>
            </div>
            <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <span className="text-gray-800 dark:text-gray-200 font-medium">TypeScript</span>
            </div>
            <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <span className="text-gray-800 dark:text-gray-200 font-medium">Tailwind CSS</span>
            </div>
          </div>
        </div>
        
        {/* 오른쪽 이미지 영역 */}
        <div className="relative h-[500px] md:h-[600px] w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform rotate-3 opacity-20 blur-xl"></div>
          <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <Image
              src="https://picsum.photos/id/1/1200/800"
              alt="프로필 이미지"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* 플로팅 카드 요소 */}
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 w-48">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">3년 경력</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">프론트엔드 개발</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 w-48">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">20+ 프로젝트</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">완료</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 하단 스크롤 안내 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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
          className="text-gray-600 dark:text-gray-300"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
} 