import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

// 게시글 타입 정의
interface Post {
  id: number
  title: string
  date: string
  author: string
  views: number
  attachments: {
    name: string
    type: string
    url: string
  }[]
}

// 샘플 게시글 데이터 (순서 변경)
const posts: Post[] = [
  {
    id: 1,
    title: "부성-인증서 pdf",
    date: "2024.12.12",
    author: "관리자",
    views: 156,
    attachments: [
      {
        name: "부성-인증서.pdf",
        type: "pdf",
        url: "/files/부성-인증서.pdf",
      },
    ],
  },
  {
    id: 2,
    title: "사업자등록",
    date: "2025.03.06",
    author: "관리자",
    views: 42,
    attachments: [
      {
        name: "사업자등록증.pdf",
        type: "pdf",
        url: "/resources/business-registration", // PDF 뷰어 페이지로 연결
      },
    ],
  },
]

export default function ResourceDetail({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === Number(params.id))

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-12">자료실</h1>

          <div className="border-t-2 border-b border-gray-200">
            <div className="py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <div className="text-sm text-gray-600">
                작성자 : {post.author} {post.date} 조회 : {post.views}회
              </div>
            </div>

            <div className="py-6">
              {post.attachments.map((file, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                  <FileText className="w-5 h-5" />
                  <Link href={file.url} className="hover:underline">
                    {file.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Link href="/resources">
              <Button variant="default" className="px-8">
                목록
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

