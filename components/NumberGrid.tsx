"use client";

import Image from 'next/image';
import { useEffect, useState, useRef, useCallback } from 'react';

// 칩 데이터 타입 정의
type TechChip = {
  name: string;
  color: string;
  bgColor: string;
  borderColor: string;
};

// 칩 인스턴스 타입 정의
type ChipInstance = {
  id: number;
  chip: TechChip;
  position: number;
  verticalPosition: number;
};

// 칩 데이터 배열
const techChips: TechChip[] = [
  { name: "Flutter", color: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30" },
  { name: "Android", color: "text-green-600 dark:text-green-400", bgColor: "bg-green-500/10", borderColor: "border-green-500/30" },
  { name: "nextjs", color: "text-gray-800 dark:text-gray-200", bgColor: "bg-gray-500/10", borderColor: "border-gray-500/30" },
  { name: "python", color: "text-yellow-600 dark:text-yellow-400", bgColor: "bg-yellow-500/10", borderColor: "border-yellow-500/30" },
  { name: "firebase", color: "text-orange-600 dark:text-orange-400", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/30" },
  { name: "cursor", color: "text-purple-600 dark:text-purple-400", bgColor: "bg-purple-500/10", borderColor: "border-purple-500/30" },
  { name: "django", color: "text-emerald-600 dark:text-emerald-400", bgColor: "bg-emerald-500/10", borderColor: "border-emerald-500/30" },
  { name: "Github", color: "text-gray-700 dark:text-gray-300", bgColor: "bg-gray-700/10", borderColor: "border-gray-700/30" },
  { name: "typescript", color: "text-blue-500 dark:text-blue-300", bgColor: "bg-blue-400/10", borderColor: "border-blue-400/30" },
];

// 랜덤 칩 선택 함수
const getRandomChip = () => {
  const randomIndex = Math.floor(Math.random() * techChips.length);
  return techChips[randomIndex];
};

// 랜덤 수직 위치 생성 함수 (20%~80%)
const getRandomVerticalPosition = () => {
  return 20 + Math.random() * 60;
};

export default function NumberGrid() {
  const [chipInstances, setChipInstances] = useState<ChipInstance[]>([]);
  const [cardWidth, setCardWidth] = useState(0);
  const [chipWidths, setChipWidths] = useState<{[key: number]: number}>({});
  const [flippedCards, setFlippedCards] = useState<{[key: number]: boolean}>({});
  const cardRef = useRef<HTMLDivElement>(null);
  const chipRefsMap = useRef<{[key: number]: HTMLDivElement | null}>({});
  const idCounterRef = useRef(1); // ID 카운터를 useRef로 관리하여 리렌더링 시에도 유지
  const initializedRef = useRef(false);
  
  // 카드 뒤집기 함수
  const flipCard = (cardNumber: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardNumber]: !prev[cardNumber]
    }));
  };
  
  // 새로운 칩 인스턴스 생성 함수 (useCallback으로 메모이제이션)
  const createNewChipInstance = useCallback((startPosition: number) => {
    const newId = idCounterRef.current++; // useRef를 사용하여 고유 ID 생성
    const newChip: ChipInstance = {
      id: newId,
      chip: getRandomChip(),
      position: startPosition,
      verticalPosition: getRandomVerticalPosition()
    };
    return newChip;
  }, []);
  
  // 칩 요소 참조 저장 함수
  const setChipRef = (id: number, element: HTMLDivElement | null) => {
    chipRefsMap.current[id] = element;
  };
  
  // 칩 너비 측정 useEffect
  useEffect(() => {
    // 모든 칩 요소의 너비 측정
    const newWidths: {[key: number]: number} = {};
    let hasNewMeasurements = false;
    
    Object.entries(chipRefsMap.current).forEach(([idStr, element]) => {
      const id = parseInt(idStr);
      if (element && !chipWidths[id]) {
        newWidths[id] = element.offsetWidth;
        hasNewMeasurements = true;
      }
    });
    
    // 새로운 측정값이 있을 때만 상태 업데이트
    if (hasNewMeasurements) {
      setChipWidths(prev => ({
        ...prev,
        ...newWidths
      }));
    }
  }, [chipInstances, chipWidths]);
  
  // 초기화 useEffect
  useEffect(() => {
    // 카드 너비 측정
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
    
    // 초기화가 아직 되지 않았을 때만 초기 칩 생성
    if (!initializedRef.current && cardWidth > 0) {
      // 초기 칩 생성 (순차적으로 나타나도록 위치 조정)
      const initialChips = [
        createNewChipInstance(cardWidth),
        createNewChipInstance(cardWidth + 150),
        createNewChipInstance(cardWidth + 300)
      ];
      setChipInstances(initialChips);
      initializedRef.current = true;
    }
  }, [cardWidth, createNewChipInstance]);
  
  // 애니메이션 useEffect - 별도로 분리
  useEffect(() => {
    // 초기화가 완료된 후에만 애니메이션 시작
    if (!initializedRef.current || cardWidth === 0) return;
    
    // 칩 움직임 애니메이션
    const moveInterval = setInterval(() => {
      setChipInstances(prev => {
        return prev.map(instance => {
          const chipWidth = chipWidths[instance.id] || 0;
          
          // 칩의 오른쪽 끝이 왼쪽 벽에 닿았을 때 (칩 너비를 고려)
          if (instance.position + chipWidth <= 0) {
            // 새로운 칩으로 교체 (ID는 새로 생성)
            return createNewChipInstance(cardWidth);
          }
          // 칩 위치 업데이트
          return {
            ...instance,
            position: instance.position - 1
          };
        });
      });
    }, 30);
    
    console.log('Animation interval started');
    
    return () => {
      console.log('Animation interval cleared');
      clearInterval(moveInterval);
    };
  }, [cardWidth, chipWidths, createNewChipInstance]);
  
  return (
    <section className="w-full py-10 px-2 md:px-4 lg:px-8">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* 상단 영역 배경 */}
        <div className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-1.5 md:p-2">
          {/* 커스텀 그리드 */}
          <div className="grid grid-cols-5 gap-1.5 md:gap-2" style={{ gridTemplateColumns: '1fr 1fr 1.5fr 1fr 1fr', gridTemplateRows: 'minmax(180px, 1fr) minmax(180px, 1fr) minmax(180px, 1fr) minmax(180px, 1fr)' }}>
            {/* 1-3번 카드 */}
            {Array.from({ length: 2 }, (_, i) => i + 1).map((number) => {
              if (number === 1) {
                return (
                  <div 
                    key={number} 
                    className="relative h-full cursor-pointer [perspective:1000px]"
                    onClick={() => flipCard(number)}
                  >
                    <div 
                      className={`w-full h-full transition-all duration-500 ${
                        flippedCards[number] ? '[transform:rotateY(180deg)]' : ''
                      } [transform-style:preserve-3d]`}
                    >
                      {/* 카드 앞면 */}
                      <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl [backface-visibility:hidden]">
                        <span className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">{number}</span>
                      </div>
                      
                      {/* 카드 뒷면 */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <span className="text-3xl md:text-4xl font-bold text-white">Hello!</span>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <div 
                  key={number} 
                  className="bg-white dark:bg-gray-800 flex items-center justify-center rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:z-10"
                >
                  <span className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">{number}</span>
                </div>
              );
            })}
            
            {/* 3번 카드 - Product Engineer */}
            <div 
              className="bg-white dark:bg-gray-800 flex flex-col items-center justify-center rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:z-10 p-3"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-center">Product Engineer</h3>
              <p className="text-sm md:text-base text-purple-600 dark:text-purple-400 mt-2 text-center font-medium">all in one 제품 제작</p>
            </div>
            
            {/* 4-5번 합친 카드 - 게이머 정보 */}
            <div 
              className="col-span-2 bg-white dark:bg-gray-800 flex flex-col items-center justify-center rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:z-10 p-4"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center mb-2">
                  <span className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200">Board Gamer</span>
                  <span className="text-2xl md:text-3xl ml-2">🎲</span>
                </div>
                <div className="w-16 h-px bg-gray-300 dark:bg-gray-600 my-2"></div>
                <div className="flex items-center mt-2">
                  <span className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200">Digital Gamer</span>
                  <span className="text-2xl md:text-3xl ml-2">🎮</span>
                </div>
              </div>
            </div>
            
            {/* 6번 카드 */}
            <div 
              className="bg-white dark:bg-gray-800 flex items-center justify-center rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:z-10"
            >
              <span className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">6</span>
            </div>
            
            {/* 가운데 큰 카드 (7번) - 프로필 정보 */}
            <div 
              className="col-span-3 row-span-2 bg-white dark:bg-gray-800 flex items-center justify-between px-6 md:px-10 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:z-10"
              style={{ gridRow: "span 2" }}
            >
              <div className="flex flex-col items-start">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  프로덕트 엔지니어
                </h2>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  지민입니다.
                </h1>
              </div>
              <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-sm"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-gray-700">
                  <Image
                    src="https://picsum.photos/id/1/200/200"
                    alt="프로필 이미지"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* 8번 카드 */}
            <div 
              key={8} 
              className="bg-white dark:bg-gray-800 flex items-center justify-center rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:z-10"
            >
              <div className="flex items-center">
                <span 
                  className="text-7xl md:text-8xl lg:text-9xl font-bold text-orange-500 dark:text-orange-400"
                  style={{ transform: 'rotate(-5deg)' }}
                >
                  B
                </span>
                <span 
                  className="text-7xl md:text-8xl lg:text-9xl font-bold text-orange-500 dark:text-orange-400"
                  style={{ transform: 'rotate(5deg)' }}
                >
                  1
                </span>
              </div>
            </div>
            
            {/* 9번과 11번 합친 카드 - 경력 정보 */}
            <div 
              className="row-span-2 bg-white dark:bg-gray-800 flex flex-col items-start justify-center rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:z-10 p-4"
              style={{ gridRow: "span 2" }}
            >
              <div className="flex flex-col w-full">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Career</h2>
                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-3 font-medium">Since 2018</p>
                
                <div className="mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-green-600 dark:text-green-400 mb-1">Naver</h3>
                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">software engineer</p>
                </div>
                
                <div className="w-full h-px bg-gray-300 dark:bg-gray-600 my-3"></div>
                
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-purple-600 dark:text-purple-400 mb-1">Naver Z</h3>
                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">software engineer</p>
                </div>
              </div>
            </div>
            
            {/* 10번 카드 */}
            <div 
              className="bg-white dark:bg-gray-800 flex items-center justify-center rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:z-10"
            >
              <span className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">10</span>
            </div>
            
            {/* 12-15번 카드 */}
            {Array.from({ length: 3 }, (_, i) => i + 12).map((number) => {
              if (number === 12) {
                return (
                  <div 
                    key={number} 
                    className="bg-white dark:bg-gray-800 flex flex-col items-center justify-center rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:z-10 p-3"
                  >
                    <div className="flex flex-col items-center text-center">
                      <span className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200">Small</span>
                      <span className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200">Business</span>
                      <span className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200">CEO</span>
                    </div>
                  </div>
                );
              }
              if (number === 13) {
                return (
                  <div 
                    key={number} 
                    className="bg-white dark:bg-gray-800 flex items-center justify-center rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:z-10 p-3 relative overflow-hidden"
                    ref={cardRef}
                  >
                    {chipInstances.map(instance => (
                      <div 
                        key={instance.id}
                        ref={(el) => setChipRef(instance.id, el)}
                        className={`${instance.chip.bgColor} border ${instance.chip.borderColor} rounded-full px-4 py-2 flex items-center absolute left-0`}
                        style={{ 
                          transform: `translateX(${instance.position}px)`,
                          top: `${instance.verticalPosition}%`,
                          transition: 'top 0.5s ease'
                        }}
                      >
                        <span className={`${instance.chip.color} font-semibold whitespace-nowrap`}>{instance.chip.name}</span>
                        <div className={`w-2 h-2 ${instance.chip.color.split(' ')[0].replace('text', 'bg')} rounded-full ml-2 animate-pulse`}></div>
                      </div>
                    ))}
                  </div>
                );
              }
              return (
                <div 
                  key={number} 
                  className="bg-white dark:bg-gray-800 flex items-center justify-center rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:z-10"
                >
                  <span className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">{number}</span>
                </div>
              );
            })}
            
            {/* 15번 카드 - A.I */}
            <div 
              className="bg-white dark:bg-gray-800 flex items-center justify-center rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:z-10"
            >
              <div className="flex items-center">
                <span className="text-4xl md:text-5xl lg:text-6xl mr-2">🧡</span>
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-200">A.I</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 