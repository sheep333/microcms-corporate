<!-- pages/index.vue -->
<script setup>
import { onMounted } from 'vue'
import { Squirrel, Sprout, Leaf } from 'lucide-vue-next'

// アニメーション用のフラグ
const isVisible = ref(false)

onMounted(() => {
  // マウント後にアニメーションを開始
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>
<template>
  <div>
    <!-- ヒーローセクション -->
    <section class="relative min-h-[70vh] bg-white overflow-hidden">
      <!-- 装飾的な背景要素 -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-0 right-0 w-1/2 h-full bg-green-50 transform -skew-x-12 translate-x-20 opacity-60"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div class="container mx-auto px-4 h-full flex items-center relative">
        <div class="max-w-4xl mx-auto py-12 text-center">
          <!-- タグライン -->
          <Transition
            enter-from-class="opacity-0 translate-y-4"
            enter-active-class="transition duration-1000"
            enter-to-class="opacity-100 translate-y-0"
          >
            <div v-show="isVisible" class="inline-block">
              <span class="font-inter text-green-600 text-sm font-medium tracking-wider px-4 py-2 bg-green-50 rounded-full">
                SINCE 1952
              </span>
            </div>
          </Transition>

          <!-- メインタイトル -->
          <Transition
            enter-from-class="opacity-0 translate-y-8"
            enter-active-class="transition duration-1000 delay-300"
            enter-to-class="opacity-100 translate-y-0"
          >
            <h1 v-show="isVisible" class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mt-8">
              <span class="relative inline-block mb-2">
                信頼と実績で
              </span>
              <br>
              <span class="text-green-600">未来を創造する</span>
            </h1>
          </Transition>

          <!-- サブテキスト -->
          <Transition
            enter-from-class="opacity-0 translate-y-4"
            enter-active-class="transition duration-1000 delay-600"
            enter-to-class="opacity-100 translate-y-0"
          >
            <p v-show="isVisible" class="text-lg text-gray-600 font-light leading-relaxed tracking-wide mx-auto max-w-2xl mt-8">
              創業以来70年、お客様とともに歩み続けてきた実績と信頼。
              これからも革新的なソリューションで、お客様のビジネスの成功をサポートします。
            </p>
          </Transition>

          <!-- ボタン -->
          <Transition
            enter-from-class="opacity-0 translate-y-4"
            enter-active-class="transition duration-1000 delay-900"
            enter-to-class="opacity-100 translate-y-0"
          >
            <div v-show="isVisible" class="flex gap-4 pt-8 justify-center">
              <NuxtLink
                to="/contact"
                class="group relative inline-flex items-center px-8 py-4 bg-green-600 text-white rounded overflow-hidden"
              >
                <span class="absolute inset-0 bg-green-700 transform translate-y-full transition-transform group-hover:translate-y-0"></span>
                <span class="relative">お問い合わせ</span>
              </NuxtLink>
              <NuxtLink
                to="/about"
                class="group relative inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 rounded overflow-hidden"
              >
                <span class="absolute inset-0 bg-gray-50 transform translate-y-full transition-transform group-hover:translate-y-0"></span>
                <span class="relative">会社概要</span>
              </NuxtLink>
            </div>
          </Transition>
        </div>
      </div>

      <!-- 装飾的な要素（新緑イメージ） -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <!-- 大きな葉のような要素 -->
        <svg class="absolute top-20 left-20 w-24 h-24 text-green-100/60 animate-leaf-float" viewBox="0 0 24 24">
          <path fill="currentColor" d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
        </svg>
        <svg class="absolute top-40 right-32 w-32 h-32 text-green-300/40 animate-leaf-float-slow" viewBox="0 0 24 24">
          <path fill="currentColor" d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
        </svg>
        <svg class="absolute bottom-24 left-1/3 w-28 h-28 text-green-200/50 animate-leaf-float-reverse" viewBox="0 0 24 24">
          <path fill="currentColor" d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
        </svg>

        <!-- 中サイズの葉 -->
        <svg class="absolute bottom-1/4 right-1/4 w-16 h-16 text-green-300/40 animate-leaf-float-delay" viewBox="0 0 24 24">
          <path fill="currentColor" d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
        </svg>
        <svg class="absolute bottom-1/3 left-24 w-20 h-20 text-green-200/30 animate-leaf-float-slow-reverse" viewBox="0 0 24 24">
          <path fill="currentColor" d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
        </svg>

        <!-- 光の粒子効果 -->
        <div class="absolute top-1/2 right-1/3 w-3 h-3 bg-white-100/40 rounded-full animate-particle"></div>
        <div class="absolute bottom-1/3 right-1/4 w-4 h-4 bg-white-50/30 rounded-full animate-particle-delay"></div>
        <div class="absolute top-1/3 left-1/2 w-5 h-5 bg-white-100/40 rounded-full animate-particle-slow"></div>
      </div>
    </section>

    <!-- 事業内容 -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="font-inter text-green-600 text-sm font-medium tracking-wider">OUR SERVICES</span>
          <h2 class="text-3xl font-bold mt-4 mb-6 tracking-tight text-gray-900">事業内容</h2>
          <p class="text-gray-600">お客様のビジネスの成功に貢献する多様なサービスを提供しています</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- サービス1 -->
          <div class="bg-white p-8 rounded-lg group hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
              <!-- 森のアイコン -->
              <Sprout class="w-8 h-8 text-green-600" />
            </div>
            <h3 class="text-xl font-bold mb-4 tracking-tight text-gray-900">環境調査サービス</h3>
            <p class="text-gray-600 font-light tracking-wide">自然環境の調査・分析を行い、最適なソリューションを提供します。</p>
          </div>

          <!-- サービス2 -->
          <div class="bg-white p-8 rounded-lg group hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
              <!-- 新芽のアイコン -->
              <Squirrel class="w-8 h-8 text-green-600" />             
            </div>
            <h3 class="text-xl font-bold mb-4 tracking-tight text-gray-900">緑化推進サービス</h3>
            <p class="text-gray-600 font-light tracking-wide">緑豊かな環境づくりをサポートし、持続可能な開発を実現します。</p>
          </div>

          <!-- サービス3 -->
          <div class="bg-white p-8 rounded-lg group hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
              <!-- 葉のアイコン -->
              <Leaf class="w-8 h-8 text-green-600" />
            </div>
            <h3 class="text-xl font-bold mb-4 tracking-tight text-gray-900">環境コンサルティング</h3>
            <p class="text-gray-600 font-light tracking-wide">環境に配慮したビジネス展開のためのコンサルティングを提供します。</p>
          </div>
        </div>
      </div>
    </section>
    <!-- 最新情報 -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="font-inter text-green-600 text-sm font-medium tracking-wider">NEWS</span>
          <h2 class="text-3xl font-bold mt-4 tracking-tight text-gray-900">最新情報</h2>
        </div>
        <div class="max-w-3xl mx-auto">
          <div v-for="i in 3" :key="i" class="group border-b border-gray-200 py-8 transition-colors hover:bg-gray-50">
            <div class="flex items-center gap-4 mb-2">
              <span class="font-inter text-sm text-gray-500">2024.00.00</span>
              <span class="px-3 py-1 text-xs font-medium bg-green-50 text-green-600 rounded">カテゴリ</span>
            </div>
            <h3 class="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
              <NuxtLink to="/news/1" class="block">ニュースタイトルがここに入ります</NuxtLink>
            </h3>
          </div>
          <div class="text-center mt-12">
            <NuxtLink
              to="/news"
              class="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded hover:bg-gray-50 transition-colors"
            >
              ニュース一覧
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 採用情報バナー -->
    <section class="bg-gray-50 py-20">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto">
          <span class="font-inter text-green-600 text-sm font-medium tracking-wider">CAREERS</span>
          <h2 class="text-3xl font-bold mt-4 mb-6 tracking-tight text-gray-900">採用情報</h2>
          <p class="text-gray-600 mb-8">私たちと一緒に、新しい価値を創造していきませんか？<br>様々な職種で仲間を募集しています。</p>
          <NuxtLink
            to="/recruit"
            class="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition-colors"
          >
            採用情報を見る
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 葉っぱの浮遊アニメーション */
@keyframes leafFloat {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  10% {
    transform: translate(15px, -30px) rotate(3deg) scale(1.01);
  }
  20% {
    transform: translate(45px, -60px) rotate(8deg) scale(1.02);
  }
  30% {
    transform: translate(75px, -45px) rotate(12deg) scale(1.03);
  }
  40% {
    transform: translate(90px, -15px) rotate(15deg) scale(1.02);
  }
  50% {
    transform: translate(105px, 0px) rotate(18deg) scale(1);
  }
  60% {
    transform: translate(90px, 30px) rotate(15deg) scale(0.99);
  }
  70% {
    transform: translate(75px, 60px) rotate(12deg) scale(0.98);
  }
  80% {
    transform: translate(45px, 45px) rotate(8deg) scale(0.97);
  }
  90% {
    transform: translate(15px, 15px) rotate(3deg) scale(0.98);
  }
  100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
}

@keyframes leafFloatReverse {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  10% {
    transform: translate(-15px, -30px) rotate(-3deg) scale(1.01);
  }
  20% {
    transform: translate(-30px, -75px) rotate(-8deg) scale(1.02);
  }
  30% {
    transform: translate(-75px, -45px) rotate(-12deg) scale(1.03);
  }
  40% {
    transform: translate(-90px, -15px) rotate(-15deg) scale(1.02);
  }
  50% {
    transform: translate(-105px, 0px) rotate(-18deg) scale(1);
  }
  60% {
    transform: translate(-90px, 30px) rotate(-15deg) scale(0.99);
  }
  70% {
    transform: translate(-75px, 60px) rotate(-12deg) scale(0.98);
  }
  80% {
    transform: translate(-45px, 45px) rotate(-8deg) scale(0.97);
  }
  90% {
    transform: translate(-15px, 15px) rotate(-3deg) scale(0.98);
  }
  100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
}

/* パーティクルのアニメーション */
@keyframes particle {
  0%, 100% { 
    opacity: 0.3;
    transform: translate(0, 0) scale(1);
  }
  50% { 
    opacity: 0.6;
    transform: translate(10px, -10px) scale(5);
  }
}

.animate-leaf-float {
  animation: leafFloat 20s ease-in-out infinite;
}

.animate-leaf-float-slow {
  animation: leafFloat 32s ease-in-out infinite;
  animation-delay: 1s;
}

.animate-leaf-float-delay {
  animation: leafFloat 20s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-leaf-float-reverse {
  animation: leafFloatReverse 18s ease-in-out infinite;
  animation-delay: 1.5s;
}

.animate-leaf-float-slow-reverse {
  animation: leafFloatReverse 20s ease-in-out infinite;
  animation-delay: 0.5s;
}

.animate-particle {
  animation: particle 6s ease-in-out infinite;
}

.animate-particle-delay {
  animation: particle 6s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-particle-slow {
  animation: particle 8s ease-in-out infinite;
  animation-delay: 4s;
}

.group:hover .group-hover\:bg-green-100 {
  transition-duration: 0.3s;
}

.group:hover {
  transform: translateY(-2px);
  transition: transform 0.3s ease-in-out;
}

.transition {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* 不透明度のトランジション */
.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

/* Y軸方向の移動 */
.translate-y-4 {
  transform: translateY(1rem);
}

.translate-y-8 {
  transform: translateY(2rem);
}

.translate-y-0 {
  transform: translateY(0);
}

/* 遅延の設定 */
.delay-300 {
  transition-delay: 300ms;
}

.delay-600 {
  transition-delay: 600ms;
}

.delay-900 {
  transition-delay: 900ms;
}

/* アニメーション時間 */
.duration-1000 {
  transition-duration: 1000ms;
}

/* トランジション用のユーティリティクラス */
.transition-opacity {
  transition-property: opacity;
}

.transition-transform {
  transition-property: transform;
}

.transition-all {
  transition-property: all;
}
</style>