<template>
  <!-- sidenav -->
  <aside
    id="sidenav-main"
    :class="{
      'fixed inset-y-0 right-0 flex-wrap items-center justify-between block w-full p-0 my-4 transition-all duration-200 ease-in-out border-0 shadow-none z-990 xl:mr-4 rounded-2xl max-w-64 overflow-y-auto bg-[#125B90]': true,
      'md:translate-x-[80%] translate-x-0': !$globalStore.isToggled,
      'md:translate-x-0 translate-x-[80%]': $globalStore.isToggled
    }"
  >
    <!-- header -->
    <div class="h-20">
      <!-- x i -->
      <i
        class="absolute top-0 left-0 p-4 opacity-50 cursor-pointer fas fa-times text-white xl:hidden"
        aria-hidden="true"
        sidenav-close-btn=""
      ></i>

      <a class="block px-8 py-6 m-0 text-sm whitespace-nowrap text-white" href="#" target="_blank">
        <span
          class="mr-1 font-semibold transition-all duration-200 ease-in-out opacity-100 text-base"
          >بوابة المعلمين</span
        >
      </a>
    </div>

    <!-- //---------hr----------// -->

    <div
      class="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-gray-400 to-transparent"
    ></div>

    <div class="items-center block w-full h-auto grow basis-full" id="sidenav-collapse-main">
      <!-- primary list  -->

      <ul class="flex flex-col pr-0 mb-0 list-none كف-4">
        <!-- primary list item -->

        <li class="mt-8 w-full">
          <!-- primary anchor  -->

          <router-link
            to="/dashboard"
            class="ease-in-out text-sm leading-default py-2.7 active after:ease-in-out after:font-awesome-5-free my-0 mx-2 flex items-center whitespace-nowrap px-4 font-medium shadow-none transition-colors after:mr-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 text-white dark:opacity-80 dark:after:text-white/50 dark:after:text-white after:content-['\f107']"
          >
            <!-- big anchor expandable -->

            <div
              class="stroke-none flex items-center justify-center rounded-lg bg-center fill-current px-2.5 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5 text-white"
                :class="{
                  ' md:absolute left-6': !$globalStore.isToggled,
                  'md:static absolute left-6': $globalStore.isToggled
                }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>

            <!-- primary span -->

            <span class="mr-1 duration-300 pointer-events-none ease opacity-100">الرئسية</span>
          </router-link>
        </li>

        <li class="mt-4 w-full">
          <!-- primary anchor  -->

          <router-link
            to="/groups"
            class="ease-in-out text-sm leading-default py-2.7 active after:ease-in-out after:font-awesome-5-free my-0 mx-2 flex items-center whitespace-nowrap px-4 font-medium shadow-none transition-colors after:mr-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 text-white dark:opacity-80 dark:after:text-white/50 dark:after:text-white after:content-['\f107']"
          >
            <div
              class="stroke-none flex items-center justify-center rounded-lg bg-center fill-current px-2.5 text-center text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
                :class="{
                  ' md:absolute left-6': !$globalStore.isToggled,
                  'md:static absolute left-6': $globalStore.isToggled
                }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
                />
              </svg>
            </div>

            <span class="mr-1 duration-300 pointer-events-none ease opacity-100">الحلقات</span>
          </router-link>
        </li>

        <li class="mt-4 w-full">
          <!-- primary anchor  -->

          <a
            collapse_trigger="primary"
            href="javascript:;"
            class="ease-in-out text-sm leading-default py-2.7 active after:ease-in-out after:font-awesome-5-free my-0 mx-2 flex items-center whitespace-nowrap px-4 font-medium shadow-none transition-colors after:mr-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 text-white dark:opacity-80 dark:after:text-white/50 dark:after:text-white after:content-['\f107']"
            aria-expanded="false"
          >
            <div
              class="stroke-none flex items-center justify-center rounded-lg bg-center fill-current px-2.5 text-center text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
                :class="{
                  ' md:absolute left-6': !$globalStore.isToggled,
                  'md:static absolute left-6': $globalStore.isToggled
                }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
            </div>

            <span class="mr-1 duration-300 pointer-events-none ease opacity-100"
              >نتائج الإختبارات</span
            >
          </a>
        </li>

        <li class="mt-4 w-full">
          <!-- primary anchor  -->

          <a
            collapse_trigger="primary"
            href="javascript:;"
            class="ease-in-out text-sm leading-default py-2.7 active after:ease-in-out after:font-awesome-5-free my-0 mx-2 flex items-center whitespace-nowrap px-4 font-medium shadow-none transition-colors after:mr-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 text-white dark:opacity-80 dark:after:text-white/50 dark:after:text-white after:content-['\f107']"
            aria-expanded="false"
          >
            <div
              class="stroke-none flex items-center justify-center rounded-lg bg-center fill-current px-2.5 text-center text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
                :class="{
                  ' md:absolute left-6': !$globalStore.isToggled,
                  'md:static absolute left-6': $globalStore.isToggled
                }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12.75v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18.75v-6M7.5 8.25 12 3.75m4.5 4.5L12 3.75m0 0v12"
                />
              </svg>
            </div>

            <span class="mr-1 duration-300 pointer-events-none ease opacity-100"> البريد</span>
          </a>
        </li>
      </ul>
    </div>

    <!--  -->
  </aside>
</template>

<script>
export default {
  mounted() {
    this.updateScreenSize()
    window.addEventListener('resize', this.updateScreenSize)
  },
  beforeRouteLeave() {
    window.removeEventListener('resize', this.updateScreenSize)
  },
  methods: {
    updateScreenSize() {
      this.$globalStore.isSmallScreen = window.innerWidth < 1200
    }
  }
}
</script>
