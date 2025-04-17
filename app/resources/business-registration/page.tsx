"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BusinessRegistration() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">사업자등록증</h1>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <iframe
              src={`https://docs.google.com/gview?url=https://drive.google.com/uc?export=download%26id=1Bq_3Xt5Ow8ggZvxmXLSJEZOBvBhOtgXf&embedded=true`}
              className="w-full h-[800px]"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="mt-6 flex justify-center">
            <Link href="/resources">
              <Button variant="default" className="px-8">
                목록으로 돌아가기
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

