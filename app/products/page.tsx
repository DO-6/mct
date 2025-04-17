"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCard from "@/components/ProductCard"

// 제품 데이터
const products = [
  {
    id: 1,
    name: "YK 원심식 냉각기",
    category: "YORK products",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EA%B7%B8%EB%A6%BC06.jpg-xig4LqYB9LLdjr4tibvxJqHStQSQRC.jpeg",
    link: "https://www.latam.johnsoncontrols.com/en/hvac-equipment/chillers/yk-centrifugal-chiller",
  },
  {
    id: 2,
    name: "YZ마그네틱 베어링 터보 냉동기",
    category: "YORK products",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image01-1qvmQfwWvoUXA5x5gqgOcAcRNEtXMr.png",
    link: "https://www.latam.johnsoncontrols.com/en/hvac-equipment/chillers/yz-magnetic-bearing-centrifugal-chiller",
  },
  {
    id: 15,
    name: "YVAA 인버터 공냉식 칠러",
    category: "YORK products",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CHI_commercialproductdetail_product_yvaa_2.jpg-B987gWj3oJ2fuioZ1ut79s5TRGCrFQ.jpeg",
    link: "https://www.johnsoncontrols.kr/hvac-equipment/chillers/yvaa-air-cooled-variable-speed-drive-screw-chiller",
  },

  // Frick, sabroe
  {
    id: 3,
    name: "Frick Open Screw Comp.",
    category: "Frick, sabroe",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EA%B7%B8%EB%A6%BC07.jpg-h1XwegAY4AbU9OxNd3Z6UjAsAscwbL.jpeg",
    link: "https://www.johnsoncontrols.kr/industrial-refrigeration/industrial-refrigeration/rxf-frick-compressor-packages",
  },
  {
    id: 4,
    name: "SABROE Open Screw Comp.",
    category: "Frick, sabroe",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EA%B7%B8%EB%A6%BC08.jpg-zRrdq9s56rxY4XpSR7lNNNH4eoPtxV.jpeg",
    link: "https://www.sabroe.com/products-and-solutions/compressors/screw-compressor-unit",
  },

  // Hitachi
  {
    id: 5,
    name: "Hitachi Invertor Multi-Screw Chiller",
    category: "Hitachi",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EA%B7%B8%EB%A6%BC09.jpg-ckKQvYBlf59QwV2Q2kfkt0ScZlPi5t.jpeg",
    link: "http://busungrh.com/bbs/board.php?bo_table=refrigerator",
  },
  {
    id: 6,
    name: "Hitachi Air Cooled Screw Chiller.",
    category: "Hitachi",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EA%B7%B8%EB%A6%BC10.jpg-5QvmnHcAqHpljKpk6R9waCNTdHjINd.jpeg",
    link: "http://busungrh.com/bbs/board.php?bo_table=refrigerator",
  },

  // 부성
  {
    id: 7,
    name: "1.",
    category: "부성",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-IaxvuRkDWQFtcIqgohSKScU9FG7mzu.jpeg",
    link: "http://busungrh.com/bbs/board.php?bo_table=refrigerator&wr_id=16",
  },
  {
    id: 8,
    name: "Unit Cooler",
    category: "부성",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-ciSDaHr4dJhirOmoRRy4oPq7WbvVSL.jpeg",
    link: "http://busungrh.com/bbs/board.php?bo_table=refrigerator&wr_id=31&page=1",
  },
  {
    id: 9,
    name: "Chilling Unit (공냉식,수냉식)",
    category: "부성",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-tvJxus9zuHUNwHscohtxrUbOWv2uzw.jpeg",
    link: "http://busungrh.com/bbs/board.php?bo_table=refrigerator&wr_id=41&page=3",
  },
  {
    id: 10,
    name: "반폐 Screw Chilling Unit",
    category: "부성",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-oFcYzED8CBPMZn0oS10MLK2hWnFJ2C.jpeg",
    link: "http://busungrh.com/bbs/board.php?bo_table=refrigerator&wr_id=43&page=3",
  },

  // Parts Delivery
  {
    id: 11,
    name: "O/H PART",
    category: "Parts Delivery",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EA%B7%B8%EB%A6%BC03.jpg-KJ546hEI8Xkz5krgGT7ocP5IlV8tpP.jpeg",
    link: "",
  },
  {
    id: 12,
    name: "Spare part",
    category: "Parts Delivery",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EA%B7%B8%EB%A6%BC04.jpg-DJ7E1D0ZLGeJkG8WoNBkN93VqQgxrG.jpeg",
    link: "",
  },
]

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ["YORK products", "Frick, sabroe", "Hitachi", "부성", "Parts Delivery"]

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">제품 목록</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">카테고리</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                selectedCategory === null ? "bg-primary text-white shadow-md" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              전체
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  selectedCategory === category ? "bg-primary text-white shadow-md" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

