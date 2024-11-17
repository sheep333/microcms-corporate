<!-- pages/works.vue -->
<script setup>
import { ref } from 'vue'

// カテゴリー一覧
const categories = [
  { id: 'all', name: 'すべて' },
  { id: 'web', name: 'Webサイト' },
  { id: 'system', name: 'システム開発' },
  { id: 'app', name: 'アプリケーション' }
]

// 選択中のカテゴリー
const selectedCategory = ref('all')

// 制作実績データ（後でmicroCMSから取得する想定）
const works = ref([
  {
    id: 1,
    title: 'コーポレートサイトリニューアル',
    category: 'web',
    thumbnail: '/images/dummy-1.jpg',
    client: '株式会社〇〇様',
    year: '2024',
    description: 'レスポンシブ対応のコーポレートサイトを制作しました。'
  },
  {
    id: 2,
    title: '在庫管理システム開発',
    category: 'system',
    thumbnail: '/images/dummy-2.jpg',
    client: '株式会社△△様',
    year: '2023',
    description: 'クラウドベースの在庫管理システムを開発しました。'
  },
  // 他の実績データ
])

// カテゴリーでフィルタリングした実績を取得
const filteredWorks = computed(() => {
  if (selectedCategory.value === 'all') {
    return works.value
  }
  return works.value.filter(work => work.category === selectedCategory.value)
})
</script>

<template>
  <div>
    <!-- ページヘッダー -->
    <section class="bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4 py-16 md:py-24">
        <div class="max-w-3xl mx-auto text-center">
          <p class="font-inter text-green-600 text-sm font-medium tracking-wider mb-4">WORKS</p>
          <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">制作実績</h1>
          <p class="text-gray-600 leading-relaxed">
            お客様のビジネスの成功に貢献してきた私たちの実績をご紹介します。
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

    <!-- 制作実績一覧 -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <!-- グリッドレイアウト -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="work in filteredWorks"
              :key="work.id"
              class="group"
            >
              <div class="bg-gray-50 rounded-lg overflow-hidden transition-shadow hover:shadow-lg">
                <!-- サムネイル -->
                <div class="aspect-video bg-gray-200 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <!-- 実際の画像に置き換え -->
                  <div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                </div>
                <!-- コンテンツ -->
                <div class="p-6">
                  <div class="mb-4">
                    <span class="inline-block px-3 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
                      {{ categories.find(c => c.id === work.category)?.name }}
                    </span>
                  </div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {{ work.title }}
                  </h3>
                  <p class="text-sm text-gray-500 mb-4">{{ work.client }}</p>
                  <p class="text-gray-600 text-sm mb-4">{{ work.description }}</p>
                  <div class="flex justify-between items-center">
                    <span class="font-inter text-sm text-gray-500">{{ work.year }}</span>
                    <NuxtLink
                      :to="`/works/${work.id}`"
                      class="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
                    >
                      詳しく見る
                      <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ページネーション（必要に応じて） -->
          <div class="mt-16 flex justify-center" v-if="filteredWorks.length > 0">
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