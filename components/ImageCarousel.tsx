"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20250304_185941363_08.jpg-ESTt4XonlOKgVTrVISZmRwvZvrIGDC.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20250304_185941363_01.jpg-QovGPsTBCwLixZDnWgIB19pizIChvw.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20250304_190145764.jpg-lSb280HymGyhvp7cxzZDWEFsT5Jb0z.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20250304_185941363_11.jpg-IlKRmiJDWRn3uyU16Y8AdzhLouagY5.jpeg",
]

const imageAlts = [
  "MCE 엠씨엔지니어링 사무실 입구",
  "MCE 엠씨엔지니어링 사무실 내부",
  "MCE 엠씨엔지니어링 회사 로고 및 입구",
  "MCE 엠씨엔지니어링 장비실",
]

export default function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right")
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 10000) // 변경된 부분: 5000에서 10000으로 증가

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setDirection("left")
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setDirection("right")
    setCurrentImage((prevImage) => (prevImage + 1) % images.length)
  }

  const getImageStyle = (index: number) => {
    if (index === currentImage) {
      return "translate-x-0"
    }

    if (direction === "right") {
      return index === (currentImage + 1) % images.length ? "translate-x-full" : "-translate-x-full"
    } else {
      return index === (currentImage - 1 + images.length) % images.length ? "-translate-x-full" : "translate-x-full"
    }
  }

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${getImageStyle(index)}`}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={imageAlts[index]}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      <Button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 sm:p-2 rounded-full 
                 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
        size="icon"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        <span className="sr-only">이전 이미지</span>
      </Button>
      <Button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 sm:p-2 rounded-full 
                 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
        size="icon"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        <span className="sr-only">다음 이미지</span>
      </Button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentImage ? "right" : "left")
              setCurrentImage(index)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`이미지 ${index + 1}로 이동`}
          />
        ))}
      </div>
    </div>
  )
}

