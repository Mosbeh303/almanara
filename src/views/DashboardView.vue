<script setup>
import Sidebar from '../parts/Sidenavbar.vue'
import Navbar from '../parts/Navbar.vue'

import DataTable from 'datatables.net-vue3'

import DataTablesCore from 'datatables.net'

DataTable.use(DataTablesCore)

const data = [
  [1, 'الحلقة الأولى', 'سليمان الأحمد'],
  [2, 'الحلقة الأولى', 'سليمان الأحمد']
]
</script>

<template>
  <!-- <div class="absolute bg-blue-500 dark:hidden min-h-72 w-full"></div> -->
  <Sidebar />
  <main
    :class="{
      'xl:mr-68': $globalStore.isToggled,
      'xl:mr-19': !$globalStore.isToggled,
      'mr-10': $globalStore.isSmallScreen,
    }"
  >
    <Navbar />
    <div class="w-full p-6 mx-auto">
      <div class="flex flex-wrap mt-6 -mx-3">
        <div class="w-full max-w-full px-3 flex-0">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border"
          >
            <div class="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6">
              <h5 class="mb-0 dark:text-white text-lg">حلقة البغوي</h5>
              <div class="mt-4 flex flex-wrap items-center gap-4">
                <div class="flex items-center gap-2">
                  <div
                    class="flex items-center justify-center w-7 h-7 rounded-full border border-green-400 bg-green-100 hover:scale-125 cursor-default"
                  >
                    <span class="text-sm font-medium mb-1">ح</span>
                  </div>
                  <p>حاضر</p>
                </div>

                <div class="flex items-center gap-2">
                  <div
                    class="flex items-center justify-center w-7 h-7 rounded-full border border-red-300 bg-red-100 hover:scale-125 cursor-default"
                  >
                    <span class="text-sm font-medium mb-1">غ</span>
                  </div>
                  <p>غائب</p>
                </div>

                <div class="flex items-center gap-2">
                  <div
                    class="flex items-center justify-center w-7 h-7 rounded-full border border-yellow-400 bg-yellow-100 hover:scale-125 cursor-default"
                  >
                    <span class="text-sm font-medium mb-1">س</span>
                  </div>
                  <p>مستأذن</p>
                </div>

                <div class="flex items-center gap-2">
                  <div
                    class="flex items-center justify-center w-7 h-7 rounded-full border border-blue-400 bg-blue-100 hover:scale-125 cursor-default"
                  >
                    <span class="text-sm font-medium mb-1">ح</span>
                  </div>
                  <p>متأخر</p>
                </div>

                <div class="flex items-center gap-2">
                  <div
                    class="flex items-center justify-center w-7 h-7 rounded-full border border-gray-600 bg-gray-100 hover:scale-125 cursor-default"
                  >
                    <span class="text-sm font-medium mb-1">ج</span>
                  </div>
                  <p>إجازة</p>
                </div>
              </div>
            </div>

            <div class="p-6">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div class="rounded-2xl border border-gray-400 px-4 py-6 text-center">
                  <p class="font-medium text-gray-700">سيف الدين الكثيري</p>
                  <div class="mt-3 flex justify-center gap-2 flex-wrap">
                    <div
                      class="flex items-center justify-center w-7 h-7 rounded-full border border-gray-600"
                    >
                      <span class="text-sm font-medium mb-1">ح</span>
                    </div>
                    <div
                      class="flex items-center justify-center w-7 h-7 rounded-full border border-gray-600"
                    >
                      <span class="text-sm font-medium mb-1">غ</span>
                    </div>
                    <div
                      class="flex items-center justify-center w-7 h-7 rounded-full border border-gray-600"
                    >
                      <span class="text-sm font-medium mb-1">س</span>
                    </div>
                    <div
                      class="flex items-center justify-center w-7 h-7 rounded-full border border-gray-600"
                    >
                      <span class="text-sm font-medium mb-1">ت</span>
                    </div>
                  </div>
                </div>

                <div class="rounded-2xl border border-gray-400 px-4 py-6 text-center">
                  <p class="font-medium text-gray-700">سيف الدين الكثيري</p>
                  <div class="mt-3 flex justify-center gap-2 flex-wrap">
                    <div
                      class="flex items-center justify-center w-7 h-7 rounded-full border border-gray-600"
                    >
                      <span class="text-sm font-medium mb-1">ح</span>
                    </div>
                    <div
                      class="flex items-center justify-center w-7 h-7 rounded-full border border-gray-600"
                    >
                      <span class="text-sm font-medium mb-1">غ</span>
                    </div>
                    <div
                      class="flex items-center justify-center w-7 h-7 rounded-full border border-gray-600"
                    >
                      <span class="text-sm font-medium mb-1">س</span>
                    </div>
                    <div
                      class="flex items-center justify-center w-7 h-7 rounded-full border border-gray-600"
                    >
                      <span class="text-sm font-medium mb-1">ت</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<style>
/* @import 'datatables.net-dt'; */
.datatable {
  margin: 15px;
}
</style>
