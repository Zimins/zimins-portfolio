"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export default function AppleImacGrid() {
  return (
    <div className="bg-neutral-100 p-2 md:p-4 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-2">
        {/* Six-speaker sound system */}
        <div className="col-span-6 md:col-span-3 bg-white rounded-3xl p-4 flex flex-col">
          <h3 className="text-2xl font-semibold text-pink-500">Six-speaker</h3>
          <p className="text-lg font-medium">sound system</p>
        </div>

        {/* World's best all-in-one */}
        <div className="col-span-6 md:col-span-3 bg-white rounded-3xl p-4 flex items-center justify-center">
          <h3 className="text-2xl font-semibold text-blue-500 text-center">
            World's best
            <br />
            all-in-one
          </h3>
        </div>

        {/* Apple Intelligence */}
        <div className="col-span-12 md:col-span-6 bg-white rounded-3xl p-6 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Apple Intelligence
          </h2>
        </div>

        {/* Supports up to two displays */}
        <div className="col-span-6 md:col-span-3 bg-white rounded-3xl p-4 flex flex-col">
          <div className="flex justify-center mb-2">
            <svg width="120" height="40" viewBox="0 0 120 40" className="text-orange-400">
              <rect x="10" y="10" width="40" height="25" stroke="currentColor" strokeWidth="2" fill="none" />
              <rect x="60" y="10" width="40" height="25" stroke="currentColor" strokeWidth="2" fill="none" />
              <rect x="25" y="35" width="10" height="2" fill="currentColor" />
              <rect x="75" y="35" width="10" height="2" fill="currentColor" />
            </svg>
          </div>
          <p className="text-base font-medium text-center">Supports up to two displays</p>
        </div>

        {/* New spectrum of colors */}
        <div className="col-span-6 md:col-span-3 bg-white rounded-3xl p-4 flex flex-col items-center">
          <p className="text-base font-medium text-center mb-2">
            New spectrum
            <br />
            of colors
          </p>
          <div className="flex space-x-1 h-16">
            <div className="w-2 h-full bg-green-500 rounded-t-full"></div>
            <div className="w-2 h-full bg-yellow-500 rounded-t-full"></div>
            <div className="w-2 h-full bg-orange-500 rounded-t-full"></div>
            <div className="w-2 h-full bg-red-500 rounded-t-full"></div>
            <div className="w-2 h-full bg-purple-500 rounded-t-full"></div>
            <div className="w-2 h-full bg-blue-500 rounded-t-full"></div>
            <div className="w-2 h-full bg-gray-300 rounded-t-full"></div>
          </div>
        </div>

        {/* Desk View */}
        <div className="col-span-6 md:col-span-3 bg-white rounded-3xl p-4 flex flex-col items-center">
          <p className="text-base font-medium text-center mb-2">Desk View</p>
          <div className="relative w-full h-20 bg-yellow-100 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=80&width=120"
                alt="Desk View"
                width={120}
                height={80}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* macOS Sequoia */}
        <div className="col-span-6 md:col-span-3 bg-gradient-to-br from-blue-600 via-purple-500 to-orange-500 rounded-3xl p-4 flex flex-col justify-end">
          <h3 className="text-3xl font-semibold text-white">macOS</h3>
          <h3 className="text-3xl font-semibold text-white">Sequoia</h3>
        </div>

        {/* Up to 32GB unified memory */}
        <div className="col-span-6 md:col-span-3 bg-white rounded-3xl p-4 flex flex-col items-center">
          <p className="text-base font-medium text-center">Up to</p>
          <h3 className="text-5xl font-bold text-pink-500">32GB</h3>
          <p className="text-base font-medium text-center">unified memory</p>
        </div>

        {/* Magic accessories with USB-C */}
        <div className="col-span-6 md:col-span-3 bg-white rounded-3xl p-4 flex flex-col">
          <p className="text-base font-medium text-center mb-2">
            Magic accessories
            <br />
            with USB-C
          </p>
          <div className="flex justify-center">
            <svg width="120" height="40" viewBox="0 0 120 40" className="text-gray-300">
              <rect x="10" y="15" width="80" height="20" rx="3" fill="currentColor" />
              <circle cx="100" cy="25" r="10" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Main iMac Image */}
        <div className="col-span-12 bg-white rounded-3xl p-4 flex justify-center items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202025-03-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2012.19.51-2aBCBZ7isgoS0nVITZDfRk2TGJOC7N.png"
            alt="iMac in multiple colors"
            width={800}
            height={400}
            className="object-contain max-h-80"
          />
        </div>

        {/* Up to 6x faster */}
        <div className="col-span-6 md:col-span-3 bg-white rounded-3xl p-4 flex flex-col items-center">
          <p className="text-base font-medium text-center">Up to</p>
          <h3 className="text-6xl font-bold text-green-600">6x</h3>
          <p className="text-base font-medium text-center">
            faster than the
            <br />
            most popular
            <br />
            Intel-based iMac
          </p>
        </div>

        {/* Up to 2x faster */}
        <div className="col-span-6 md:col-span-3 bg-white rounded-3xl p-4 flex flex-col items-center">
          <p className="text-base font-medium text-center">Up to</p>
          <h3 className="text-6xl font-bold text-orange-500">2x</h3>
          <p className="text-base font-medium text-center">
            faster than
            <br />
            iMac with M1
          </p>
        </div>

        {/* 12MP Center Stage camera */}
        <div className="col-span-6 md:col-span-3 bg-white rounded-3xl p-4 flex flex-col">
          <p className="text-base font-medium text-center mb-2">12MP Center Stage camera</p>
          <div className="flex justify-center items-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-800 rounded-full border-2 border-black"></div>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
          </div>
          <div className="h-16 bg-green-100 mt-2 rounded-lg"></div>
        </div>

        {/* M4 chip */}
        <div className="col-span-6 md:col-span-3 bg-gradient-to-br from-teal-400 to-blue-900 rounded-3xl p-4 flex items-center justify-center">
          <div className="bg-black bg-opacity-80 rounded-xl p-4 w-24 h-24 flex items-center justify-center">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=30&width=30"
                alt="Apple logo"
                width={30}
                height={30}
                className="mx-auto mb-1"
              />
              <p className="text-xl font-bold text-white">M4</p>
            </div>
          </div>
        </div>

        {/* 4.5K Retina display */}
        <div className="col-span-6 md:col-span-3 bg-white rounded-3xl p-4 flex flex-col items-center">
          <p className="text-base font-medium text-center">24-inch</p>
          <h3 className="text-4xl font-bold text-orange-500">4.5K Retina</h3>
          <p className="text-base font-medium text-center">display</p>
        </div>

        {/* Nano-texture glass option */}
        <div className="col-span-6 md:col-span-3 bg-white rounded-3xl p-4 flex items-center justify-center">
          <h3 className="text-2xl font-semibold text-purple-500 text-center">
            Nano-texture
            <br />
            glass option
          </h3>
        </div>

        {/* Studio-quality mics */}
        <div className="col-span-6 md:col-span-3 bg-white rounded-3xl p-4 flex flex-col items-center">
          <div className="h-12 flex items-center justify-center space-x-1 mb-2">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={cn("w-1 bg-blue-400", i % 2 === 0 ? "h-8" : "h-4")}></div>
            ))}
          </div>
          <p className="text-base font-medium text-center">Studio-quality mics</p>
        </div>

        {/* Touch ID */}
        <div className="col-span-6 md:col-span-3 bg-white rounded-3xl p-4 flex flex-col items-center">
          <p className="text-base font-medium text-center mb-2">Touch ID</p>
          <div className="w-16 h-16">
            <svg viewBox="0 0 64 64" className="w-full h-full text-green-600">
              <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="32" cy="32" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="32" cy="32" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="32" cy="32" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* iPhone Mirroring */}
        <div className="col-span-6 md:col-span-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl p-4 flex flex-col items-center">
          <p className="text-base font-medium text-white text-center mb-2">iPhone Mirroring</p>
          <div className="relative w-16 h-28 bg-black rounded-xl overflow-hidden border-4 border-black">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-black rounded-full z-10"></div>
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-1 p-1">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-sm bg-white bg-opacity-70"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

