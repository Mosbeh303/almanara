<script setup></script>

<template>
  <div class="mt-0 transition-all duration-200 ease-in-out">
    <section>
      <div class="relative flex items-center min-h-screen p-0 overflow-hidden bg-center bg-cover">
        <div class="container z-1 mx-auto">
          <div class="flex flex-wrap -mx-3">
            <div
              class="flex flex-col w-full max-w-full px-3 mx-auto lg:mx-0 shrink-0 md:flex-0 md:w-7/12 lg:w-5/12 xl:w-4/12"
            >
              <div
                class="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none lg:py4 dark:bg-slate-850 rounded-2xl bg-clip-border"
              >
                <div class="p-6">
                  <img src="@/assets/images/icon_logo.jpeg" alt="" class="w-24 rounded-xl" />
                </div>
                <div class="p-6 pb-0 mb-0">
                  <h4 class="font-bold">
                    تسجيل الدخول <span class="bg-[#1f6a9b] px-2 bg-opacity-20">كمعلم حلقة</span>
                  </h4>
                  <p class="mb-0">أدخل بريدك الإلكتروني وكلمة المرور لتسجيل الدخول</p>
                </div>

                <div class="flex-auto p-6">
                  <form role="form">
                    <div class="mb-4">
                      <input
                        type="email"
                        placeholder="البريد الإلكتروني"
                        class="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div class="mb-4">
                      <input
                        type="password"
                        placeholder="كلمة المرور"
                        class="focus:shadow-primary-outline dark:bg-slate-850 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div class="min-h-6 mb-0.5 block pl-12 text-right">
                      <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div
                          class="shadow relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        ></div>
                        <span class="ms-3 text-sm">تذكرني</span>
                      </label>
                    </div>
                    <div class="text-center">
                      <button
                        type="button"
                        class="inline-block w-full px-16 py-3.5 mt-6 mb-0 text-sm font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-[#1F6A9B] border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs tracking-tight-rem bg-150 bg-x-25"
                      >
                        تسجيل الدخول
                      </button>
                    </div>
                  </form>
                </div>
                <!-- <div
                  class="border-black/12.5 rounded-b-2xl border-t-0 border-solid p-6 text-center pt-0 px-1 sm:px-6"
                >
                  <p class="mx-auto mb-4 text-sm font-normal">
                    Don't have an account?
                    <a
                      href="../../../pages/authentication/signup/basic.html"
                      class="font-semibold text-transparent bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-500"
                      >Sign up</a
                    >
                  </p>
                </div> -->
              </div>
            </div>
            <div
              class="absolute top-0 left-0 flex-col justify-center hidden w-6/12 h-full max-w-full px-3 pr-0 my-auto text-center flex-0 lg:flex"
            >
              <div
                class="relative flex flex-col justify-center h-full px-24 m-4 bg-cover rounded-xl bg-[url('https://images.pexels.com/photos/4998693/pexels-photo-4998693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1908')]"
              >
                <span
                  class="absolute top-0 left-0 w-full h-full bg-cover rounded-xl opacity-60 bg-zinc-900"
                ></span>
                <div class="relative z-30">
                  <h4 class="text-white mt-6">
                    عن عثمان بن عفان رضي الله عنه عن النبي صلى الله عليه وسلم قال:
                  </h4>
                  <p class="text-white font-bold text-3xl mt-6">
                    «خَيرُكُم من تعلَّمَ القرآنَ وعلَّمَهُ»
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
