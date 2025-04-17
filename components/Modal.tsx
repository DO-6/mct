"use client"

import type React from "react"
import { type ReactNode, useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full m-4 max-h-[90vh] overflow-y-auto">
        {children}
      </div>
    </div>
  )
}

export function InquiryForm({ onClose }: { onClose: () => void }) {
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
      // CAPTCHA 검증 없이 바로 폼 제출 처리
      console.log("Form submitted:", formData)
      onClose()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">견적문의 및 서비스 신청</h2>

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
          내용 *
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

      <div className="flex justify-end space-x-2">
        <Button type="button" onClick={onClose} variant="outline">
          취소
        </Button>
        <Button type="submit">제출하기</Button>
      </div>
    </form>
  )
}

