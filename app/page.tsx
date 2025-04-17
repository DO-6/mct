"use client"

import { useState } from "react"
import Header from "@/components/Header"
import ImageCarousel from "@/components/ImageCarousel"
import Footer from "@/components/Footer"
import Modal, { InquiryForm } from "@/components/Modal"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="h-[48vh] md:h-[60vh] lg:h-[72vh]">
          <ImageCarousel />
        </div>

        <div className="bg-neutral text-foreground py-12 sm:py-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg sm:text-xl mb-6">
              50년 이상의 경험과 최첨단 기술로 고객의 니즈에 맞는 최적의 냉동 시스템을 설계하고 유지보수합니다.
            </p>
            <p className="text-base sm:text-lg">신뢰성, 효율성, 지속가능성 - 이것이 우리가 추구하는 가치입니다.</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 text-center">
          <Button
            onClick={openModal}
            className="text-lg sm:text-xl py-3 sm:py-4 px-8 sm:px-10 bg-action hover:bg-action/90 text-white rounded-md 
                     shadow-md hover:shadow-lg transition-all duration-300"
          >
            견적문의 및 서비스 신청
          </Button>
        </div>
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <InquiryForm onClose={closeModal} />
      </Modal>
    </div>
  )
}

