"use client";

export default function NumberGrid() {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* 커스텀 그리드 */}
        <div className="grid grid-cols-5 gap-4 md:gap-6" style={{ gridTemplateColumns: '1fr 1fr 1.5fr 1fr 1fr', gridTemplateRows: 'minmax(180px, 1fr) minmax(180px, 1fr) minmax(180px, 1fr) minmax(180px, 1fr)' }}>
          {/* 1-6번 카드 */}
          {Array.from({ length: 6 }, (_, i) => i + 1).map((number) => {
            return (
              <div 
                key={number} 
                className="bg-white dark:bg-gray-800 flex items-center justify-center rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">{number}</span>
              </div>
            );
          })}
          
          {/* 7번과 12번 합친 카드 (세로로 합침) */}
          <div 
            className="bg-white dark:bg-gray-800 flex flex-col items-center justify-center rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg row-span-2"
            style={{ gridRow: "span 2" }}
          >
            <span className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">7</span>
            <div className="h-px w-16 bg-gray-300 dark:bg-gray-600 my-2"></div>
            <span className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mt-4">12</span>
          </div>
          
          {/* 8번과 13번 합친 카드 (세로로 합침) */}
          <div 
            className="bg-white dark:bg-gray-800 flex flex-col items-center justify-center rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg row-span-2"
            style={{ gridRow: "span 2" }}
          >
            <span className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">8</span>
            <div className="h-px w-16 bg-gray-300 dark:bg-gray-600 my-2"></div>
            <span className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mt-4">13</span>
          </div>
          
          {/* 9번과 14번 합친 카드 (세로로 합침) */}
          <div 
            className="bg-white dark:bg-gray-800 flex flex-col items-center justify-center rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg row-span-2"
            style={{ gridRow: "span 2" }}
          >
            <span className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">9</span>
            <div className="h-px w-16 bg-gray-300 dark:bg-gray-600 my-2"></div>
            <span className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mt-4">14</span>
          </div>
          
          {/* 10번 카드 */}
          <div 
            className="bg-white dark:bg-gray-800 flex items-center justify-center rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">10</span>
          </div>
          
          {/* 11번 카드 */}
          <div 
            className="bg-white dark:bg-gray-800 flex items-center justify-center rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">11</span>
          </div>
          
          {/* 15-16번 카드 */}
          <div 
            className="bg-white dark:bg-gray-800 flex items-center justify-center rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">15</span>
          </div>
          
          <div 
            className="bg-white dark:bg-gray-800 flex items-center justify-center rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">16</span>
          </div>
          
          {/* 17-20번 카드 */}
          {Array.from({ length: 4 }, (_, i) => i + 17).map((number) => {
            return (
              <div 
                key={number} 
                className="bg-white dark:bg-gray-800 flex items-center justify-center rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">{number}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 