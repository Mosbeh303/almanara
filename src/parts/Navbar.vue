<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- Navbar -->
  <nav
    navbar-main
    class="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start"
    navbar-scroll="false"
  >
    <div class="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
      <nav>
        <!-- Breadcrumb -->
        <ol class="flex flex-wrap pt-1 ml-12 bg-transparent rounded-lg sm:ml-12">
          <li class="pr-0 text-sm leading-normal">
            <a class="text-gray-600 opacity-50 dark:text-white" href="javascript:;">
              شركة المتارة المتقدمة
            </a>
          </li>
        </ol>
        <h6 class="mb-0 font-bold text-gray-700 capitalize">حلقات جامع الراجحي</h6>
      </nav>

      <div class="relative flex items-center -ml-8">
        <!-- Sidebar toggle button for larger screens -->

        <span
          v-if="!$globalStore.isToggled"
          @click="$globalStore.toggleSidebar()"
          class="cursor-pointer absolute"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>

        <span v-else @click="$globalStore.toggleSidebar()" class="cursor-pointer absolute">
          <div class="w-4.5 overflow-hidden">
            <i
              class="ease mb-0.75 relative block h-0.5 -translate-x-[5px] rounded-sm bg-gray-600 transition-all dark:bg-white"
            ></i>
            <i
              class="ease mb-0.75 relative block h-0.5 rounded-sm bg-gray-600 transition-all dark:bg-white"
            ></i>
            <i
              class="ease relative block h-0.5 -translate-x-[5px] rounded-sm bg-gray-600 transition-all dark:bg-white"
            ></i>
          </div>
        </span>
      </div>
      <div
        class="flex items-center mt-2 grow sm:mt-0 sm:ml-6 md:ml-0 lg:flex lg:basis-auto"
        id="navbar"
      >
        <div class="flex items-center md:mr-auto md:pl-4"></div>
        <ul class="flex flex-row justify-end pr-0 mb-0 list-none md-max:w-full">
          <li class="flex items-center">
            <DropdownMenu name="سليمان الأحمد" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import DropdownMenu from '../components/DropdownMenu.vue'
</script>
