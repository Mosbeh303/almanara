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
  <!-- Sidebar component -->
  <Sidebar />

  <main
    :class="{
      'xl:mr-68': $globalStore.isToggled,
      'xl:mr-19': !$globalStore.isToggled,
      'mr-10': $globalStore.isSmallScreen
    }"
  >
    <!-- Navbar component -->
    <Navbar />

    <div class="w-full p-6 mx-auto">
      <!-- Container for main content -->
      <div class="flex flex-wrap mt-6 -mx-3">
        <!-- Flex container for the table card -->
        <div class="w-full max-w-full px-3 flex-0">
          <!-- Table card -->
          <div
            class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border"
          >
            <div class="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6">
              <!-- Header of the table card -->
              <h5 class="mb-0 dark:text-white text-lg">الحلقات</h5>
              <!-- Additional description can be added here if needed -->
            </div>

            <div class="p-4 mb-8">
              <!-- Table for displaying data -->
              <table class="w-full box-border">
                <thead>
                  <!-- Table headers -->
                  <tr class="border-b border-slate-200s">
                    <th class="p-3">#</th>
                    <th>إسم الحلقة</th>
                    <th>المعلم</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Table rows -->
                  <tr>
                    <td class="p-3">1</td>
                    <td>الحلقة الأولى</td>
                    <td>سليمان الأحمد</td>
                  </tr>

                  <tr>
                    <td class="p-3">2</td>
                    <td>الحلقة الثانية</td>
                    <td>سليمان الأحمد</td>
                  </tr>
                </tbody>
              </table>
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
