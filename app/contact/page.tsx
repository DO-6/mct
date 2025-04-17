"use client"

import type React from "react"

import { useState, useRef } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import ReCAPTCHA from "react-google-recaptcha"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    content: "",
    serviceType: "",
    preferredTime: "",
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const captchaRef = useRef<ReCAPTCHA>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name) newErrors.name = "이름을 입력해주세요."
    if (!formData.phone) newErrors.phone = "연락처를 입력해주세요."
    if (!formData.email) newErrors.email = "이메일을 입력해주세요."
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "유효한 이메일 주소를 입력해주세요."
    if (!formData.content) newErrors.content = "내용을 입력해주세요."
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "개인정보 수집 및 이용에 동의해주세요."
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      const captchaValue = captchaRef.current?.getValue()
      if (!captchaValue) {
        setErrors((prev) => ({ ...prev, captcha: "CAPTCHA를 완료해주세요." }))
        return
      }

      // Here you would typically send the captchaValue to your server for verification
      console.log("Form submitted:", formData)
      console.log("CAPTCHA value:", captchaValue)
      alert("문의가 성공적으로 제출되었습니다. 곧 연락 드리겠습니다.")
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">문의하기</h1>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                이름 *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                연락처 *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                이메일 *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                문의 내용 *
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                required
              ></textarea>
              {errors.content && <p className="text-red-500 text-xs mt-1">{errors.content}</p>}
            </div>

            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">
                서비스 종류
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="">선택해주세요</option>
                <option value="installation">설치</option>
                <option value="maintenance">유지보수</option>
                <option value="repair">수리</option>
                <option value="consultation">상담</option>
              </select>
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">
                희망 연락 시각
              </label>
              <input
                type="time"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="agreeToTerms" checked={formData.agreeToTerms} onCheckedChange={handleCheckboxChange} />
              <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                개인정보 수집 및 이용에 동의합니다. *
              </label>
            </div>
            {errors.agreeToTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>}

            <div className="flex justify-end">
              <Button type="submit" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90">
                문의하기
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

