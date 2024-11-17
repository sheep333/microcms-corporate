<!-- pages/recruit.vue -->
<script setup>
// 募集職種データ
const positions = [
  {
    id: 1,
    title: 'Webエンジニア',
    type: '正社員',
    description: 'Webシステムやアプリケーションの設計・開発をお任せします。',
    requirements: [
      '実務経験3年以上',
      'フロントエンド開発の経験',
      'バックエンド開発の経験',
    ],
    preferred: [
      'TypeScript、Reactの使用経験',
      'AWSなどクラウドサービスの経験',
      'アジャイル開発の経験',
    ],
  },
  {
    id: 2,
    title: 'プロジェクトマネージャー',
    type: '正社員',
    description: '顧客との折衝から要件定義、プロジェクト管理までをお任せします。',
    requirements: [
      'プロジェクトマネジメント経験3年以上',
      'IT業界での実務経験',
      'コミュニケーション能力',
    ],
    preferred: [
      'PMP資格保持者',
      'スクラムマスターの経験',
      '英語でのコミュニケーション能力',
    ],
  },
]
</script>

<template>
  <div>
    <!-- ヒーローセクション -->
    <section class="relative bg-gradient-to-b from-green-50 to-white">
      <div class="container mx-auto px-4 py-20 md:py-32">
        <div class="max-w-4xl mx-auto text-center">
          <p class="font-inter text-green-600 text-sm font-medium tracking-wider mb-6">RECRUITMENT</p>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
            私たちと一緒に<br>
            未来を創っていきませんか
          </h1>
          <p class="text-xl text-gray-600 leading-relaxed mb-12">
            1952年の創業以来、お客様とともに歩み続けてきた私たちは、<br class="hidden md:block">
            次の70年を築いていく仲間を募集しています。
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#positions" class="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
              募集職種を見る
            </a>
            <NuxtLink to="/contact" class="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              お問い合わせ
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- メッセージセクション -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <p class="font-inter text-green-600 text-sm font-medium tracking-wider">MESSAGE</p>
              <h2 class="text-3xl font-bold text-gray-900 tracking-tight">
                チャレンジを恐れない<br>
                仲間を募集しています
              </h2>
              <p class="text-gray-600 leading-relaxed">
                私たちは、技術力だけでなく、新しいことにチャレンジする意欲を大切にしています。経験やスキルは入社後でも身につけることができますが、チャレンジ精神は個人の大切な資質だと考えています。
              </p>
            </div>
            <div class="bg-gray-100 aspect-square rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 募集職種 -->
    <section id="positions" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <p class="font-inter text-green-600 text-sm font-medium tracking-wider mb-4">OPEN POSITIONS</p>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 tracking-tight">募集職種</h2>
            <p class="text-gray-600">現在、以下の職種で募集を行っています</p>
          </div>
          
          <div class="space-y-8">
            <div 
              v-for="position in positions" 
              :key="position.id"
              class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div class="p-6 md:p-8">
                <div class="flex flex-wrap items-center gap-4 mb-4">
                  <h3 class="text-xl font-bold text-gray-900">{{ position.title }}</h3>
                  <span class="px-3 py-1 bg-green-50 text-green-600 text-sm font-medium rounded-full">
                    {{ position.type }}
                  </span>
                </div>
                <p class="text-gray-600 mb-8">{{ position.description }}</p>
                
                <div class="space-y-6">
                  <!-- 必須要件 -->
                  <div>
                    <h4 class="text-base font-bold text-gray-900 mb-3">必須要件</h4>
                    <ul class="space-y-2">
                      <li 
                        v-for="(req, index) in position.requirements" 
                        :key="index"
                        class="flex items-start text-gray-600"
                      >
                        <span class="mt-1.5 mr-2 w-1 h-1 bg-gray-600 rounded-full"></span>
                        {{ req }}
                      </li>
                    </ul>
                  </div>
                  
                  <!-- 歓迎要件 -->
                  <div>
                    <h4 class="text-base font-bold text-gray-900 mb-3">歓迎要件</h4>
                    <ul class="space-y-2">
                      <li 
                        v-for="(pref, index) in position.preferred" 
                        :key="index"
                        class="flex items-start text-gray-600"
                      >
                        <span class="mt-1.5 mr-2 w-1 h-1 bg-gray-600 rounded-full"></span>
                        {{ pref }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 福利厚生 -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <p class="font-inter text-green-600 text-sm font-medium tracking-wider mb-4">BENEFITS</p>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 tracking-tight">福利厚生</h2>
            <p class="text-gray-600">働きやすい環境づくりのため、様々な制度を用意しています</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-6 bg-gray-50 rounded-lg">
              <h3 class="text-lg font-bold text-gray-900 mb-4">勤務・休暇</h3>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-start">
                  <span class="mt-1.5 mr-2 w-1 h-1 bg-gray-600 rounded-full"></span>
                  完全週休2日制（土日祝）
                </li>
                <li class="flex items-start">
                  <span class="mt-1.5 mr-2 w-1 h-1 bg-gray-600 rounded-full"></span>
                  年間休日120日以上
                </li>
                <li class="flex items-start">
                  <span class="mt-1.5 mr-2 w-1 h-1 bg-gray-600 rounded-full"></span>
                  フレックスタイム制
                </li>
                <li class="flex items-start">
                  <span class="mt-1.5 mr-2 w-1 h-1 bg-gray-600 rounded-full"></span>
                  リモートワーク可能
                </li>
              </ul>
            </div>

            <div class="p-6 bg-gray-50 rounded-lg">
              <h3 class="text-lg font-bold text-gray-900 mb-4">保険・手当</h3>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-start">
                  <span class="mt-1.5 mr-2 w-1 h-1 bg-gray-600 rounded-full"></span>
                  各種社会保険完備
                </li>
                <li class="flex items-start">
                  <span class="mt-1.5 mr-2 w-1 h-1 bg-gray-600 rounded-full"></span>
                  通勤手当支給
                </li>
                <li class="flex items-start">
                  <span class="mt-1.5 mr-2 w-1 h-1 bg-gray-600 rounded-full"></span>
                  資格取得支援制度
                </li>
                <li class="flex items-start">
                  <span class="mt-1.5 mr-2 w-1 h-1 bg-gray-600 rounded-full"></span>
                  書籍購入支援
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 採用ステップ -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <p class="font-inter text-green-600 text-sm font-medium tracking-wider mb-4">PROCESS</p>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 tracking-tight">採用ステップ</h2>
            <p class="text-gray-600">選考から内定までの流れをご紹介します</p>
          </div>

          <div class="relative">
            <div class="absolute left-4 md:left-1/2 h-full w-px bg-gray-200 -translate-x-1/2"></div>
            
            <div class="space-y-12">
              <div class="relative pl-12 md:pl-0">
                <div class="absolute left-0 md:left-1/2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold -translate-x-1/2">1</div>
                <div class="md:grid md:grid-cols-2 md:gap-8">
                  <div class="md:text-right">
                    <h3 class="text-lg font-bold text-gray-900 mb-2">エントリー</h3>
                    <p class="text-gray-600">お問い合わせフォームよりエントリー</p>
                  </div>
                  <div class="hidden md:block"></div>
                </div>
              </div>

              <div class="relative pl-12 md:pl-0">
                <div class="absolute left-0 md:left-1/2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold -translate-x-1/2">2</div>
                <div class="md:grid md:grid-cols-2 md:gap-8">
                  <div class="hidden md:block"></div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">書類選考</h3>
                    <p class="text-gray-600">履歴書・職務経歴書による選考</p>
                  </div>
                </div>
              </div>

              <div class="relative pl-12 md:pl-0">
                <div class="absolute left-0 md:left-1/2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold -translate-x-1/2">3</div>
                <div class="md:grid md:grid-cols-2 md:gap-8">
                  <div class="md:text-right">
                    <h3 class="text-lg font-bold text-gray-900 mb-2">面接</h3>
                    <p class="text-gray-600">1〜2回の面接を実施</p>
                  </div>
                  <div class="hidden md:block"></div>
                </div>
              </div>

              <div class="relative pl-12 md:pl-0">
                <div class="absolute left-0 md:left-1/2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold -translate-x-1/2">4</div>
                <div class="md:grid md:grid-cols-2 md:gap-8">
                  <div class="hidden md:block"></div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">内定</h3>
                    <p class="text-gray-600">内定通知・条件提示</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTAセクション -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
            あなたの経験と情熱を<br>
            私たちとともに
          </h2>
          <p class="text-gray-600 leading-relaxed mb-12">
            70年の歴史を持つ私たちと一緒に、<br class="hidden md:block">
            次の時代を創っていく仲間をお待ちしています。
          </p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              エントリーする
              <svg 
                class="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </NuxtLink>
            <a
              href="#positions"
              class="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              募集職種を確認する
            </a>
          </div>

          <!-- 補足情報 -->
          <div class="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 class="text-lg font-bold text-gray-900 mb-4">お問い合わせ</h3>
            <p class="text-gray-600 mb-4">
              採用に関するご質問やご不明な点がございましたら、<br class="hidden md:block">
              お気軽にお問い合わせください。
            </p>
            <p class="text-gray-900 font-medium">
              採用担当
              <a 
                href="tel:0300000000" 
                class="text-green-600 hover:text-green-700 ml-2"
              >
                03-0000-0000
              </a>
            </p>
            <p class="text-sm text-gray-500 mt-2">
              受付時間：平日 9:00～18:00
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>