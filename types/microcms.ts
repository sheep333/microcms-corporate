// types/microcms.ts

// 共通の型
export type MicroCMSImage = {
  url: string
  width: number
  height: number
}

// ニュースの型
export type News = {
  id: string
  title: string
  content: string
  category: 'news' | 'press' | 'blog'
  thumbnail?: MicroCMSImage
  publishedAt: string
  isPublished: boolean
}

// 制作実績の型
export type Work = {
  id: string
  title: string
  description: string
  category: 'web' | 'system' | 'app'
  thumbnail: MicroCMSImage
  images?: MicroCMSImage[]
  client?: string
  url?: string
  period?: string
  technologies?: string[]
  content: string
  publishedAt: string
  isPublished: boolean
}

// 採用情報の型
export type Recruit = {
  id: string
  title: string
  department: string
  employmentType: 'full' | 'contract' | 'part'
  description: string
  requirements: string
  preferred?: string
  salary: string
  benefits: string
  location: string
  isPublished: boolean
}