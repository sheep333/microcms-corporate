<!-- pages/news/index.vue -->
<script setup>
// カテゴリー一覧
const categories = [
  { id: 'all', name: 'すべて' },
  { id: 'news', name: 'お知らせ' },
  { id: 'press', name: 'プレスリリース' },
  { id: 'blog', name: 'ブログ' },
]

// 選択中のカテゴリー
const selectedCategory = ref('all')

// ニュースデータ（後でmicroCMSから取得する想定）
const news = ref([
  {
    id: 1,
    title: '本社オフィスを移転いたしました',
    category: 'news',
    date: '2024.04.01',
    excerpt: '業務拡大に伴い、本社オフィスを移転いたしました。新オフィスでは、より効率的な業務環境を整備し...',
    thumbnail: '/images/dummy-1.jpg'
  },
  {
    id: 2,
    title: '新サービス「〇〇」の提供を開始',
    category: 'press',
    date: '2024.03.15',
    excerpt: '当社は、新しいクラウドサービス「〇〇」の提供を開始いたしました。本サービスは...',
    thumbnail: '/images/dummy-2.jpg'
  },
  {
    id: 3,
    title: '技術ブログ：最新のWeb技術動向',
    category: 'blog',
    date: '2024.03.01',
    excerpt: 'Web開発の現場で注目を集める最新技術について、当社エンジニアが解説します...',
    thumbnail: '/images/dummy-3.jpg'
  },
  // 他の記事データ
])

// フィルタリングされたニュース記事を取得
const filteredNews = computed(() => {
  if (selectedCategory.value === 'all') {
    return news.value
  }
  return news.value.filter(item => item.category === selectedCategory.value)
})

// カテゴリー名を取得する関数
const getCategoryName = (categoryId) => {
  const category = categories.find(c => c.id === categoryId)
  return category ? category.name : ''
}

// カテゴリーに応じたスタイルを返す関数
const getCategoryStyle = (categoryId) => {
  switch (categoryId) {
    case 'news':
      return 'bg-blue-50 text-blue-600'
    case 'press':
      return 'bg-green-50 text-green-600'
    case 'blog':
      return 'bg-orange-50 text-orange-600'
    default:
      return 'bg-gray-50 text-gray-600'
  }
}
</script>

<template>
  <div>
    <!-- ページヘッダー -->
    <section class="bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4 py-16 md:py-24">
        <div class="max-w-3xl mx-auto text-center">
          <p class="font-inter text-green-600 text-sm font-medium tracking-wider mb-4">NEWS</p>
          <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">お知らせ</h1>
          <p class="text-gray-600">
            企業情報やサービスに関する最新のお知らせをご覧いただけます
          </p>
        </div>
      </div>
    </section>

    <!-- カテゴリーフィルター -->
    <section class="bg-white py-8 sticky top-16 z-10 border-b border-gray-100">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-wrap gap-4 justify-center">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="selectedCategory = category.id"
              :class="[
                'px-6 py-2 rounded-full text-sm font-medium transition-colors',
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              ]"
            >
              {{ category.name }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ニュース一覧 -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <!-- 記事グリッド -->
          <div class="space-y-8">
            <div
              v-for="item in filteredNews"
              :key="item.id"
              class="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div class="p-6 md:p-8">
                <div class="flex flex-wrap items-center gap-4 mb-4">
                  <span class="font-inter text-gray-500">{{ item.date }}</span>
                  <span 
                    :class="[
                      'px-3 py-1 text-xs font-medium rounded-full',
                      getCategoryStyle(item.category)
                    ]"
                  >
                    {{ getCategoryName(item.category) }}
                  </span>
                </div>
                <h2 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  <NuxtLink :to="`/news/${item.id}`" class="block">
                    {{ item.title }}
                  </NuxtLink>
                </h2>
                <p class="text-gray-600 mb-4">{{ item.excerpt }}</p>
                <NuxtLink 
                  :to="`/news/${item.id}`"
                  class="inline-flex items-center text-green-600 hover:text-green-700"
                >
                  詳しく見る
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- ページネーション -->
          <div class="mt-16 flex justify-center">
            <nav class="flex items-center gap-2">
              <button class="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div class="flex gap-2">
                <button class="px-4 py-2 rounded-lg bg-green-600 text-white">1</button>
                <button class="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">2</button>
                <button class="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">3</button>
              </div>
              <button class="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>