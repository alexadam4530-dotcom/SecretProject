<template>
  <div class="flex h-screen bg-gray-100 overflow-hidden">
    
    <div class="hidden md:flex md:flex-shrink-0 w-64 bg-indigo-900 text-white flex-col">
      <div class="h-16 flex items-center px-6 bg-indigo-950 font-bold text-xl tracking-wide border-b border-indigo-800">
        POS SYSTEM
      </div>
      <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto space-y-1 px-3">
        <a href="#" class="bg-indigo-800 text-white group flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors">
          📊 ផ្ទាំងគ្រប់គ្រង (Dashboard)
        </a>
        <a href="#" class="text-indigo-200 hover:bg-indigo-800 hover:text-white group flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors">
          📦 ផលិតផល (Products)
        </a>
        <a href="#" class="text-indigo-200 hover:bg-indigo-800 hover:text-white group flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors">
          🛒 ការលក់ (Sales)
        </a>
        <a href="#" class="text-indigo-200 hover:bg-indigo-800 hover:text-white group flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors">
          ⚙️ ការកំណត់ (Settings)
        </a>
      </div>
      <div class="p-4 border-t border-indigo-800">
        <button @click="handleLogout" class="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
          🚪 ចាកចេញ (Logout)
        </button>
      </div>
    </div>

    <div class="flex flex-col flex-1 w-0 overflow-hidden">
      
      <header class="h-16 bg-white shadow-sm flex items-center justify-between px-6 border-b border-gray-200">
        <h1 class="text-lg font-semibold text-gray-800">ទំព័រដើមនៃប្រព័ន្ធគ្រប់គ្រង</h1>
        <div class="flex items-center space-y-0 space-x-3">
          <span class="text-sm font-medium text-gray-600">សួស្តី, អ្នកប្រើប្រាស់!</span>
          <div class="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">U</div>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto p-6">
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          
          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-500 uppercase tracking-wider">ការលក់សរុបថ្ងៃនេះ</p>
              <p class="mt-2 text-3xl font-bold text-gray-900">$1,250.00</p>
            </div>
            <div class="p-3 bg-green-50 text-green-600 rounded-lg text-2xl">💰</div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-500 uppercase tracking-wider">ចំនួនវិក្កយបត្រ</p>
              <p class="mt-2 text-3xl font-bold text-gray-900">42 ម៉ាស៊ីន</p>
            </div>
            <div class="p-3 bg-blue-50 text-blue-600 rounded-lg text-2xl">📄</div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-500 uppercase tracking-wider">ទំនិញជិតអស់ពីស្តុក</p>
              <p class="mt-2 text-3xl font-bold text-gray-900 text-red-600">5 មុខ</p>
            </div>
            <div class="p-3 bg-red-50 text-red-600 rounded-lg text-2xl">⚠️</div>
          </div>

        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-base font-bold text-gray-900 mb-4">ប្រវត្តិកិច្ចការចុងក្រោយ</h3>
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-64 flex items-center justify-center text-gray-400">
            [ កន្លែងសម្រាប់ដាក់តារាង ឬគំនូសតាងស្ថិតិផ្សេងៗ ]
          </div>
        </div>

      </main>
    </div>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// មុខងារចាកចេញពីប្រព័ន្ធ
const handleLogout = () => {
  if (confirm('តើអ្នកពិតជាចង់ចាកចេញមែនទេ?')) {
    // ត្រឡប់ទៅកាន់ទំព័រ Login វិញ
    router.push('/login')
  }
}
</script>