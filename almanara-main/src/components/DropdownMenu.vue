<template>
  <div class="relative" @click="toggleDropdown">
    <button
      class="px-0 py-2 text-sm font-semibold text-gray-700 transition-all ease-nav-brand dark:text-white flex gap-2 items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-5 text-gray-600"
      >
        <path
          fill-rule="evenodd"
          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
          clip-rule="evenodd"
        />
      </svg>

      <span class="hidden sm:inline">{{ name }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        :class="{ 'rotate-180': isOpen }"
        class="size-4 transition-transform duration-200"
      >
        <path
          fill-rule="evenodd"
          d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute sm:right-0 left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20"
    >
      <router-link to="/profile" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 !text-sm"
        >الملف الشخصي</router-link
      >
      <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 !text-sm">تسجيل الخروج</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.size-4 {
  width: 16px;
  height: 16px;
}
.size-5 {
  width: 20px;
  height: 20px;
}
</style>
