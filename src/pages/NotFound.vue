<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 select-none">
    <div class="text-center space-y-5 max-w-md">
      <h1 class="text-9xl font-black text-indigo-600 tracking-widest drop-shadow-md">404</h1>
      
      <div class="inline-block bg-red-500 text-white px-3 py-1 text-xs rounded-md font-bold rotate-6 tracking-wide shadow-sm">
        រកមិនឃើញទំព័រឡើយ!
      </div>
      
      <h2 class="text-2xl font-bold text-gray-800 pt-2">រកមិនឃើញអាសយដ្ឋាននេះទេ</h2>
      
      <p class="text-gray-500 text-base leading-relaxed">
        សុំទោសផង! ផ្លូវលីងដែលអ្នកកំពុងព្យាយាមចូលទៅកាន់ មិនមានវត្តមាននៅក្នុងប្រព័ន្ធរចនាសម្ព័ន្ធបច្ចុប្បន្នឡើយ។
      </p>
      
      <div class="pt-4">
        <router-link 
          to="/" 
          class="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          ⬅️ ត្រឡប់ទៅទំព័រដើមវិញ
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// បង្ហាញនៅពេល User ឬ Router រកលីងដែលវាយបញ្ចូលមិនឃើញ
</script>