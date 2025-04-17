import Image from "next/image"
import { ChevronRight } from "lucide-react"

interface Product {
  id: number
  name: string
  category: string
  image: string
  link: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const renderSafely = (value: any): string => {
    if (typeof value === "string") return value
    if (typeof value === "number") return value.toString()
    if (value instanceof Error) return value.message
    if (typeof value === "object" && value !== null) return JSON.stringify(value)
    return ""
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <div className="relative w-full h-48 bg-white">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={renderSafely(product.name)}
          fill
          className="object-contain"
        />
        <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs">
          {renderSafely(product.category)}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800">{renderSafely(product.name)}</h3>
        {product.link && (
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <span className="hover:underline">자세히 보기</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  )
}

