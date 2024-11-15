<script setup>
import Sidebar from '../parts/Sidenavbar.vue'
import Navbar from '../parts/Navbar.vue'

import { ref } from 'vue'
import TextInput from '../components/TextInput.vue'
import Label from '../components/Label.vue'

const firstName = ref('سامي')
const lastName = ref('الفوزان')
const email = ref('hhu@gmail.com')
const username = ref('samy')
const mobile = ref('053 020 5791')
const currentPassword = ref('')
const newPassword = ref('')
const confirmNewPassword = ref('')

const handleSubmit = () => {
  // Handle form submission
}
</script>

<template>
  <!-- Sidebar component -->
  <Sidebar />

  <main
    :class="{
      'xl:mr-68': $globalStore.isToggled, // Margin-right for larger screens when sidebar is toggled
      'xl:mr-19': !$globalStore.isToggled, // Margin-right for larger screens when sidebar is not toggled
      'mr-10': $globalStore.isSmallScreen // Margin-right for smaller screens
    }"
  >
    <!-- Navbar component -->
    <Navbar />

    <div class="w-full p-6 mx-auto">
      <!-- Container for main content -->
      <div class="flex flex-wrap mt-6 -mx-3">
        <!-- Flex container for form card -->
        <div class="w-full max-w-full px-3 flex-0">
          <!-- Form card -->
          <div
            class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border"
          >
            <div class="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6">
              <!-- Header of the form card -->
              <h5 class="mb-0 dark:text-white text-lg">تعديل ملفي الشخصي</h5>
            </div>

            <div class="p-6">
              <form class="sm:grid grid-cols-2 gap-4" @submit.prevent="handleSubmit">
                <div>
                  <Label for="first-name" text="الإسم الأول" />
                  <TextInput id="first-name" placeholder="الإسم الأول" v-model="firstName" />
                </div>
                <div>
                  <Label for="last-name" text="الإسم الأخير" />
                  <TextInput id="last-name" placeholder="الإسم الأخير" v-model="lastName" />
                </div>
                <div>
                  <Label for="email" text="البريد الإلكتروني" />
                  <TextInput id="email" placeholder="البريد الإلكتروني" v-model="email" />
                </div>
                <div>
                  <Label for="username" text="إسم المستخدم" />
                  <TextInput id="username" placeholder="إسم المستخدم" v-model="username" />
                </div>
                <div>
                  <Label for="mobile" text="رقم الجوال" />
                  <TextInput id="mobile" placeholder="رقم الجوال" v-model="mobile" />
                </div>
                <div>
                  <Label for="current-password" text="كلمة المرور الحالية" />
                  <TextInput
                    id="current-password"
                    placeholder="كلمة المرور الحالية"
                    v-model="currentPassword"
                  />
                </div>
                <div>
                  <Label for="new-password" text="كلمة المرور الجديدة" />
                  <TextInput
                    id="new-password"
                    placeholder="كلمة المرور الجديدة"
                    v-model="newPassword"
                  />
                </div>
                <div>
                  <Label for="confirm-new-password" text="تأكيد كلمة المرور الجديدة" />
                  <TextInput
                    id="confirm-new-password"
                    placeholder="تأكيد كلمة المرور الجديدة"
                    v-model="confirmNewPassword"
                  />
                </div>
                <div class="col-span-2 flex justify-end">
                  <button type="submit" class="bg-[#125B90] text-white px-8 py-2 rounded-3xl">
                    حفظ
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
