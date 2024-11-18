// composables/useApi.ts
import type { News, Work, Recruit } from '@/types/microcms'
import { client } from '@/plugins/microcms'

export const useApi = () => {
  // ニュース一覧を取得
  const getNewsList = async (queries?: any) => {
    return await client.getList<News>({
      endpoint: 'news',
      queries: {
        fields: ['id', 'title', 'category', 'thumbnail', 'publishedAt'],
        orders: '-publishedAt',
        filters: 'isPublished[equals]true',
        ...queries,
      },
    })
  }

  // ニュース詳細を取得
  const getNewsDetail = async (contentId: string) => {
    return await client.getListDetail<News>({
      endpoint: 'news',
      contentId,
    })
  }

  // 制作実績一覧を取得
  const getWorksList = async (queries?: any) => {
    return await client.getList<Work>({
      endpoint: 'works',
      queries: {
        fields: ['id', 'title', 'category', 'thumbnail', 'client', 'publishedAt'],
        orders: '-publishedAt',
        filters: 'isPublished[equals]true',
        ...queries,
      },
    })
  }

  // 制作実績詳細を取得
  const getWorkDetail = async (contentId: string) => {
    return await client.getListDetail<Work>({
      endpoint: 'works',
      contentId,
    })
  }

  // 採用情報一覧を取得
  const getRecruitList = async (queries?: any) => {
    return await client.getList<Recruit>({
      endpoint: 'recruit',
      queries: {
        fields: ['id', 'title', 'department', 'employmentType'],
        filters: 'isPublished[equals]true',
        ...queries,
      },
    })
  }

  // 採用情報詳細を取得
  const getRecruitDetail = async (contentId: string) => {
    return await client.getListDetail<Recruit>({
      endpoint: 'recruit',
      contentId,
    })
  }

  return {
    getNewsList,
    getNewsDetail,
    getWorksList,
    getWorkDetail,
    getRecruitList,
    getRecruitDetail,
  }
}