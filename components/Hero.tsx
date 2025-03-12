"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-8 lg:px-16">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* 메인 콘텐츠 */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* 왼쪽 텍스트 영역 */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            <span className="text-blue-600 dark:text-blue-400">창의적인</span> 디지털 경험을 만듭니다
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            최신 웹 기술을 활용하여 사용자 중심의 디지털 솔루션을 제공합니다. 
            아이디어를 현실로 만들어 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 text-center"
            >
              문의하기
            </Link>
            <Link 
              href="/portfolio" 
              className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg border border-blue-600 transition-colors duration-300 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-400 dark:border-blue-400"
            >
              포트폴리오 보기
            </Link>
          </div>
        </div>
        
        {/* 오른쪽 이미지 영역 */}
        <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="https://picsum.photos/id/180/1200/800"
            alt="디지털 경험 이미지"
            fill
            className="object-cover"
            priority
          />
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