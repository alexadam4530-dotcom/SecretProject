<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          ចូលប្រើប្រាស់ប្រព័ន្ធ
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          ឬ 
          <router-link to="/register" class="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
            បង្កើតគណនីថ្មីនៅទីនេះ
          </router-link>
        </p>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="rounded-md space-y-4">
          
          <div>
            <label for="email-address" class="block text-sm font-medium text-gray-700 mb-1">អ៊ីមែល (Email)</label>
            <input 
              id="email-address" 
              name="email" 
              type="email" 
              autocomplete="email" 
              required 
              v-model="email"
              class="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              placeholder="ឧទាហរណ៍: user@gmail.com"
            />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">លេខសម្ងាត់ (Password)</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              autocomplete="current-password" 
              required 
              v-model="password"
              class="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              placeholder="••••••••"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input 
              id="remember-me" 
              name="remember-me" 
              type="checkbox" 
              v-model="rememberMe"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900 select-none">
              ចងចាំខ្ញុំ
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
              ភ្លេចលេខសម្ងាត់?
            </a>
          </div>
        </div>

        <div>
          <button 
            type="submit" 
            class="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
          >
            ចូលប្រព័ន្ធ
          </button>
        </div>
      </form>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// បង្កើត State សម្រាប់រក្សាទុកទិន្នន័យ Form
const email = ref('')
const password = ref('')
const rememberMe = ref(false)

// Function សម្រាប់ដំណើរការពេលចុចប៊ូតុង Login
const handleLogin = () => {
  // ត្រង់នេះយើងគ្រាន់តែធ្វើតេស្តសិន នៅថ្ងៃក្រោយគ្រូនឹងឲ្យភ្ជាប់ជាមួយ API នៅក្នុង stores/auth.store.js
  console.log('ទិន្នន័យដែលបានបំពេញ:', { 
    email: email.value, 
    password: password.value, 
    rememberMe: rememberMe.value 
  })
  
  // ឧទាហរណ៍៖ បើវាយត្រូវ ឲ្យវាលោតទៅទំព័រ Dashboard តែម្តង
  if (email.value && password.value) {
    alert('ចូលប្រព័ន្ធបានជោគជ័យ! (គំរូ)')
    router.push('/dashboard')
  }
}
</script>