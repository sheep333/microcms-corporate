<!-- pages/contact.vue -->
<script setup>
import { ref } from 'vue'

// フォームの状態管理
const form = ref({
  type: '',  // お問い合わせ種別
  company: '', // 会社名
  name: '',    // お名前
  email: '',   // メールアドレス
  tel: '',     // 電話番号
  message: '', // お問い合わせ内容
  privacy: false // プライバシーポリシーの同意
})

// バリデーションエラーの状態管理
const errors = ref({})

// お問い合わせ種別の選択肢
const inquiryTypes = [
  { id: 'general', label: '事業に関するお問い合わせ' },
  { id: 'recruit', label: '採用に関するお問い合わせ' },
  { id: 'media', label: '取材・メディア関連のお問い合わせ' },
]

// バリデーション関数
const validate = () => {
  errors.value = {}
  
  if (!form.value.type) {
    errors.value.type = 'お問い合わせ種別を選択してください'
  }
  
  if (!form.value.name?.trim()) {
    errors.value.name = 'お名前を入力してください'
  }
  
  if (!form.value.email?.trim()) {
    errors.value.email = 'メールアドレスを入力してください'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = '正しいメールアドレスを入力してください'
  }
  
  if (!form.value.message?.trim()) {
    errors.value.message = 'お問い合わせ内容を入力してください'
  }
  
  if (!form.value.privacy) {
    errors.value.privacy = 'プライバシーポリシーに同意してください'
  }
  
  return Object.keys(errors.value).length === 0
}

// フォーム送信処理
const handleSubmit = async () => {
  if (!validate()) {
    // エラーがある場合は処理を中断
    return
  }
  
  try {
    // ここにフォーム送信のAPI呼び出しを実装
    console.log('フォーム送信:', form.value)
    
    // 送信成功時の処理
    alert('お問い合わせを受け付けました')
    // フォームのリセット
    form.value = {
      type: '',
      company: '',
      name: '',
      email: '',
      tel: '',
      message: '',
      privacy: false
    }
  } catch (error) {
    console.error('送信エラー:', error)
    alert('送信に失敗しました。時間をおいて再度お試しください')
  }
}
</script>

<template>
  <div>
    <!-- ページヘッダー -->
    <section class="bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4 py-16 md:py-24">
        <div class="max-w-3xl mx-auto text-center">
          <p class="font-inter text-green-600 text-sm font-medium tracking-wider mb-4">CONTACT</p>
          <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">お問い合わせ</h1>
          <p class="text-gray-600 leading-relaxed">
            事業に関するお問い合わせやご相談など、<br class="hidden md:block">
            お気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </section>

    <!-- お問い合わせフォーム -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <form @submit.prevent="handleSubmit" class="space-y-8">
            <!-- お問い合わせ種別 -->
            <div class="space-y-2">
              <label class="block font-medium text-gray-900">
                お問い合わせ種別
                <span class="text-red-500 text-sm ml-1">必須</span>
              </label>
              <div class="space-y-3">
                <div
                  v-for="type in inquiryTypes"
                  :key="type.id"
                  class="flex items-center"
                >
                  <input
                    type="radio"
                    :id="type.id"
                    v-model="form.type"
                    :value="type.id"
                    class="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                  >
                  <label :for="type.id" class="ml-3 text-gray-700">
                    {{ type.label }}
                  </label>
                </div>
              </div>
              <p v-if="errors.type" class="text-red-500 text-sm mt-1">
                {{ errors.type }}
              </p>
            </div>

            <!-- 会社名 -->
            <div class="space-y-2">
              <label for="company" class="block font-medium text-gray-900">
                会社名
                <span class="text-gray-500 text-sm ml-1">任意</span>
              </label>
              <input
                type="text"
                id="company"
                v-model="form.company"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="株式会社〇〇"
              >
            </div>

            <!-- お名前 -->
            <div class="space-y-2">
              <label for="name" class="block font-medium text-gray-900">
                お名前
                <span class="text-red-500 text-sm ml-1">必須</span>
              </label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="山田 太郎"
              >
              <p v-if="errors.name" class="text-red-500 text-sm mt-1">
                {{ errors.name }}
              </p>
            </div>

            <!-- メールアドレス -->
            <div class="space-y-2">
              <label for="email" class="block font-medium text-gray-900">
                メールアドレス
                <span class="text-red-500 text-sm ml-1">必須</span>
              </label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="example@example.com"
              >
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                {{ errors.email }}
              </p>
            </div>

            <!-- 電話番号 -->
            <div class="space-y-2">
              <label for="tel" class="block font-medium text-gray-900">
                電話番号
                <span class="text-gray-500 text-sm ml-1">任意</span>
              </label>
              <input
                type="tel"
                id="tel"
                v-model="form.tel"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="03-0000-0000"
              >
            </div>

            <!-- お問い合わせ内容 -->
            <div class="space-y-2">
              <label for="message" class="block font-medium text-gray-900">
                お問い合わせ内容
                <span class="text-red-500 text-sm ml-1">必須</span>
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="6"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="お問い合わせ内容をご記入ください"
              ></textarea>
              <p v-if="errors.message" class="text-red-500 text-sm mt-1">
                {{ errors.message }}
              </p>
            </div>

            <!-- プライバシーポリシー -->
            <div class="space-y-4">
              <div class="p-4 bg-gray-50 rounded-lg">
                <div class="text-sm text-gray-600 leading-relaxed">
                  <!-- プライバシーポリシーの内容 -->
                  <h3 class="font-bold text-gray-900 mb-2">個人情報の取り扱いについて</h3>
                  <p class="mb-4">
                    ご入力いただいた個人情報は、お問い合わせへの回答や必要な情報のご提供のために利用させていただきます。
                  </p>
                  <p>
                    取得した個人情報は、法令に基づく場合を除き、本人の同意なく第三者に提供することはありません。
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  v-model="form.privacy"
                  class="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                >
                <label for="privacy" class="ml-3 text-gray-700">
                  プライバシーポリシーに同意する
                  <span class="text-red-500 text-sm ml-1">必須</span>
                </label>
              </div>
              <p v-if="errors.privacy" class="text-red-500 text-sm mt-1">
                {{ errors.privacy }}
              </p>
            </div>

            <!-- 送信ボタン -->
            <div class="text-center pt-4">
              <button
                type="submit"
                class="inline-flex justify-center px-8 py-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- お電話でのお問い合わせ -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">お電話でのお問い合わせ</h2>
          <p class="text-gray-600 mb-8">
            お急ぎの方は、お電話でもお問い合わせいただけます。
          </p>
          <div class="inline-block bg-white rounded-lg shadow-sm px-8 py-6">
            <p class="text-sm text-gray-600 mb-2">お問い合わせ窓口</p>
            <p class="text-3xl font-bold text-gray-900 mb-2">03-0000-0000</p>
            <p class="text-gray-600">
              受付時間：平日 9:00～18:00
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>