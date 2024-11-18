<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen bg-white">
    <!-- ヘッダー -->
    <header class="fixed w-full bg-white shadow-md z-50">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-green-700">
          会社名
        </NuxtLink>
        <div class="hidden md:flex space-x-8">
          <NuxtLink to="/about" class="text-gray-700 hover:text-green-600">会社概要</NuxtLink>
          <NuxtLink to="/works" class="text-gray-700 hover:text-green-600">制作実績</NuxtLink>
          <NuxtLink to="/news" class="text-gray-700 hover:text-green-600">お知らせ</NuxtLink>
          <NuxtLink to="/recruit" class="text-gray-700 hover:text-green-600">採用情報</NuxtLink>
          <NuxtLink to="/contact" class="text-gray-700 hover:text-green-600">お問い合わせ</NuxtLink>
        </div>
        <!-- モバイルメニュー -->
        <button class="md:hidden">
          <span class="block w-6 h-0.5 bg-gray-600 mb-1"></span>
          <span class="block w-6 h-0.5 bg-gray-600 mb-1"></span>
          <span class="block w-6 h-0.5 bg-gray-600"></span>
        </button>
      </nav>
    </header>

    <!-- メインコンテンツ -->
    <main class="pt-16">
      <slot />
    </main>

    <!-- フッター -->
    <footer class="bg-green-800 text-white">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">会社名</h3>
            <p class="text-sm">
              〒000-0000<br>
              東京都○○区○○1-1-1
            </p>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-4">メニュー</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/about">会社概要</NuxtLink></li>
              <li><NuxtLink to="/works">制作実績</NuxtLink></li>
              <li><NuxtLink to="/news">お知らせ</NuxtLink></li>
              <li><NuxtLink to="/recruit">採用情報</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="text-center mt-12 pt-8 border-t border-green-500">
          <p>&copy; 2024 会社名 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>