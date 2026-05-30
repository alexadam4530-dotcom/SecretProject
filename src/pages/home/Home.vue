<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-700 to-purple-800 flex flex-col items-center justify-center text-white px-4">
    <div class="max-w-2xl text-center space-y-6">
      <div class="inline-flex p-4 bg-white/10 rounded-full backdrop-blur-md mb-2">
        <span class="text-5xl animate-bounce">🛒</span>
      </div>
      
      <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight">
        ប្រព័ន្ធគ្រប់គ្រងការលក់ <span class="text-yellow-400">POS SYSTEM</span>
      </h1>
      
      <p class="text-lg md:text-xl text-indigo-100 max-w-md mx-auto leading-relaxed">
        ស្វាគមន៍មកកាន់ប្រព័ន្ធគ្រប់គ្រងហាងទំនើប រហ័សទាន់ចិត្ត រៀបចំឡើងដោយប្រើប្រាស់ Vue 3, Vite និង Tailwind CSS។
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <router-link 
          to="/login" 
          class="w-full sm:w-auto bg-white text-indigo-700 px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-50 transition-all transform hover:-translate-y-0.5"
        >
          ចូលប្រើប្រាស់ប្រព័ន្ធ
        </router-link>
        
        <router-link 
          to="/register" 
          class="w-full sm:w-auto bg-indigo-600 border border-indigo-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-500 transition-all transform hover:-translate-y-0.5"
        >
          ចុះឈ្មោះគណនីថ្មី
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// ទំព័រស្វាគមន៍រួម (Static Welcome Page)
</script>