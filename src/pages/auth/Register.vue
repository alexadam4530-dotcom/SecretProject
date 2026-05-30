<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          បង្កើតគណនីថ្មី
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          ឬ 
          <router-link to="/login" class="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
            ត្រឡប់ទៅទំព័រចូលប្រព័ន្ធវិញ
          </router-link>
        </p>
      </div>

      <form class="mt-8 space-y-4" @submit.prevent="handleRegister">
        <div class="rounded-md space-y-4">
          
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700 mb-1">ឈ្មោះអ្នកប្រើប្រាស់ (Username)</label>
            <input 
              id="username" 
              name="username" 
              type="text" 
              required 
              v-model="username"
              class="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              placeholder="ឧទាហរណ៍: Nalen"
            />
          </div>

          <div>
            <label for="email-address" class="block text-sm font-medium text-gray-700 mb-1">អ៊ីមែល (Email)</label>
            <input 
              id="email-address" 
              name="email" 
              type="email" 
              required 
              v-model="email"
              class="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              placeholder="ឧទាហរណ៍: user@gmail.com"
            />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">លេខសម្ងាត់ (Password)</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              v-model="password"
              class="appearance-none relative block w-full px-3 py-2.5 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              placeholder="••••••••"
            />
          </div>
        </div>

        <div class="flex items-center">
          <input 
            id="agree-terms" 
            name="agree-terms" 
            type="checkbox" 
            required
            v-model="agreeTerms"
            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label for="agree-terms" class="ml-2 block text-sm text-gray-900 select-none">
            ខ្ញុំយល់ព្រមទៅនឹងរាល់លក្ខខណ្ឌនានា
          </label>
        </div>

        <div class="pt-2">
          <button 
            type="submit" 
            class="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
          >
            ចុះឈ្មោះគណនី
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

const username = ref('')
const email = ref('')
const password = ref('')
const agreeTerms = ref(false)

const handleRegister = () => {
  console.log('ទិន្នន័យចុះឈ្មោះ:', {
    username: username.value,
    email: email.value,
    password: password.value
  })
  
  alert('បង្កើតគណនីបានជោគជ័យ! សូមចូលប្រព័ន្ធ។')
  // ចុះឈ្មោះរួច ឲ្យវាលោតទៅទំព័រ Login វិញដើម្បីឲ្យគាត់ Login ចូល
  router.push('/login')
}
</script>