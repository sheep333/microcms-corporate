<!-- pages/about.vue -->
<template>
  <div>
    <!-- ページヘッダー -->
    <section class="bg-gray-50">
      <div class="container mx-auto px-4 py-16 md:py-24">
        <div class="max-w-3xl mx-auto text-center">
          <span class="font-inter text-green-600 text-sm font-medium tracking-wider">ABOUT US</span>
          <h1 class="text-4xl font-bold mt-4 tracking-tight text-gray-900">会社概要</h1>
        </div>
      </div>
    </section>

    <!-- 企業理念 -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-16">
            <span class="font-inter text-green-600 text-sm font-medium tracking-wider">PHILOSOPHY</span>
            <h2 class="text-3xl font-bold mt-4 mb-6 tracking-tight text-gray-900">企業理念</h2>
            <p class="text-xl font-medium text-gray-600">
              「信頼」と「革新」を追求し<br>
              お客様とともに未来を創造する
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 会社概要テーブル -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <span class="font-inter text-green-600 text-sm font-medium tracking-wider">ABOUT</span>
            <h2 class="text-3xl font-bold mt-4 tracking-tight text-gray-900">基本情報</h2>
          </div>
          <div class="rounded-lg shadow-sm">
            <dl class="divide-y divide-gray-200">
              <div class="grid grid-cols-1 md:grid-cols-3 py-4 px-6">
                <dt class="font-medium text-gray-900">商号</dt>
                <dd class="mt-1 md:mt-0 md:col-span-2">株式会社〇〇</dd>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 py-4 px-6">
                <dt class="font-medium text-gray-900">創業</dt>
                <dd class="mt-1 md:mt-0 md:col-span-2">1952年（昭和27年）</dd>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 py-4 px-6">
                <dt class="font-medium text-gray-900">資本金</dt>
                <dd class="mt-1 md:mt-0 md:col-span-2">〇〇万円</dd>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 py-4 px-6">
                <dt class="font-medium text-gray-900">代表取締役</dt>
                <dd class="mt-1 md:mt-0 md:col-span-2">〇〇 〇〇</dd>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 py-4 px-6">
                <dt class="font-medium text-gray-900">事業内容</dt>
                <dd class="mt-1 md:mt-0 md:col-span-2">
                  <ul class="list-disc ml-4 space-y-1">
                    <li>事業内容1</li>
                    <li>事業内容2</li>
                    <li>事業内容3</li>
                  </ul>
                </dd>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 py-4 px-6">
                <dt class="font-medium text-gray-900">所在地</dt>
                <dd class="mt-1 md:mt-0 md:col-span-2">
                  〒000-0000<br>
                  東京都〇〇区〇〇1-1-1
                </dd>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 py-4 px-6">
                <dt class="font-medium text-gray-900">従業員数</dt>
                <dd class="mt-1 md:mt-0 md:col-span-2">〇〇名（2024年4月現在）</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- 沿革 -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <span class="font-inter text-green-600 text-sm font-medium tracking-wider">HISTORY</span>
            <h2 class="text-3xl font-bold mt-4 tracking-tight text-gray-900">沿革</h2>
          </div>
          <div class="space-y-8">
            <div class="relative pl-8 md:pl-0">
              <div class="md:grid md:grid-cols-5 md:gap-8">
                <div class="font-inter font-medium text-gray-900 mb-2 md:mb-0 md:text-right">1952年</div>
                <div class="col-span-4">
                  <div class="prose prose-gray">
                    <p>創業</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative pl-8 md:pl-0">
              <div class="md:grid md:grid-cols-5 md:gap-8">
                <div class="font-inter font-medium text-gray-900 mb-2 md:mb-0 md:text-right">1960年</div>
                <div class="col-span-4">
                  <div class="prose prose-gray">
                    <p>〇〇事業開始</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative pl-8 md:pl-0">
              <div class="md:grid md:grid-cols-5 md:gap-8">
                <div class="font-inter font-medium text-gray-900 mb-2 md:mb-0 md:text-right">2000年</div>
                <div class="col-span-4">
                  <div class="prose prose-gray">
                    <p>〇〇技術の開発に成功</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative pl-8 md:pl-0">
              <div class="md:grid md:grid-cols-5 md:gap-8">
                <div class="font-inter font-medium text-gray-900 mb-2 md:mb-0 md:text-right">2024年</div>
                <div class="col-span-4">
                  <div class="prose prose-gray">
                    <p>創業70周年</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- アクセス -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <span class="font-inter text-green-600 text-sm font-medium tracking-wider">ACCESS</span>
            <h2 class="text-3xl font-bold mt-4 tracking-tight text-gray-900">アクセス</h2>
          </div>
          <div class="rounded-lg shadow-sm p-6">
            <div class="mb-6">
              <h3 class="text-lg font-bold mb-2">本社</h3>
              <p class="text-gray-600">
                〒000-0000<br>
                東京都〇〇区〇〇1-1-1<br>
                TEL: 03-0000-0000
              </p>
            </div>
            <div class="mb-4">
              <h4 class="font-medium mb-2">交通アクセス</h4>
              <ul class="text-gray-600 space-y-2">
                <li>〇〇線「〇〇駅」徒歩5分</li>
                <li>〇〇線「〇〇駅」徒歩8分</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>