<template>
  <div class=" justify-center bg-slate-100" dir="ltr">
    <nav style="border-radius: 0px 0px 50px 50px !important"
      class="bg-white shadow-lg dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 border-t-8 border-green-700">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <nuxt-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/rezaLogo.png" class="h-12" alt=" Logo" />
          <span class="self-center text-lg font-semibold whitespace-nowrap text-green-700">خادمین افتخاری چایخانه</span>
        </nuxt-link>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <nuxt-link to="login">
            <button type="button"
              class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              ورود به سامانه
            </button>
          </nuxt-link>

          <button data-collapse-toggle="navbar-sticky" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-950 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">راهنمای
                سامانه</a>
            </li>
            <li>
              <nuxt-link to="/contactUs"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                آدرس ها و شماره تماس ها
              </nuxt-link>
            </li>
            <li>
              <a href="/"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">اخبار
                خادمین افتخاری چایخانه</a>
            </li>
            <li>
              <a href="/"
                class="block py-2 px-3 !text-green-900 rounded md:bg-transparent md:text-green-900 md:p-0 md:dark:text-blue-500"
                aria-current="page">خانه</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="pt-28">
      <v-container>
        <!-- page content -->
        <div class="w-full h-100">


          <section class="cards">
            <h1 class="title text-center my-5  !text-4xl"> راه های ارتباطی ما </h1>

            <div class="flex flex-row gap-4 py-6">
              <div class="basis-1/1 md:basis-1/4">
                <a class="card-info text-center py-6" href="tel:02146052876">

                  <h2 class="tilte-card">تلفن</h2>
                  <p>02146052876</p>
                  <!-- <i class="fa-solid fa-phone"></i> -->
                </a>
              </div>
              <div class="basis-1/1 md:basis-1/4">
                <a class="card-info text-center py-6" href="mailto:featherpar_1981@yahoo.com">
                  <!-- <i class="fa-solid fa-headset"></i> -->
                  <h2>ایمیل</h2>
                  <p>info@yahoo.com</p>
                </a>
              </div>
              <div class="basis-1/1 md:basis-1/4">
                <a class="card-info text-center py-6" href="https://www.instagram.com/chaykhane_hazrate_reza?igsh=MW9rbG8wcnNhMzJ0Zg==">
                  <!-- <i class="fa-regular fa-envelope"></i> -->
                  <h2>اینستاگرام</h2>
                  <p>featherpar_1981@yahoo.com</p>
                </a>
              </div>
              <div class="basis-1/1 md:basis-1/4">
                <a class="card-info text-center py-6" href="https://t.me/chaykhane_hazrate_reza">
                  <!-- <i class="fa-regular fa-envelope"></i> -->
                  <h2>تلگرام ما</h2>
                  <p>chaykhane_hazrate_reza</p>
                </a>
              </div>
            </div>

          </section>
        </div>


        <section class="map my-5 col-12">
          <div class="container ">
            <h3 class="m-3 text-center  !text-4xl">
              آدرس ما
            </h3>
            <div class="row">
              <div class="address">
                <div class="iframe-container">

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3210.1215113658272!2d54.9581111!3d36.430444400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDI1JzQ5LjYiTiA1NMKwNTcnMjkuMiJF!5e0!3m2!1sfa!2s!4v1717869925289!5m2!1sfa!2s"
                    style="border: 0" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
              </div>
            </div>
          </div>
        </section>
      </v-container>
    </div>
  </div>



  <footer class="bg-green-100 dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 p-4 lg:py-8 md:grid-cols-4">
        <div>
          <div class="!mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            <a href="#" class="text-gray-950 hover:text-gray-900 dark:hover:text-white">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 8 19">
                <path fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd" />
              </svg>
              <span class="sr-only">Facebook page</span>
            </a>
          </div>
        </div>
        <div>
          <div class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            <a href="#" class="text-gray-950 hover:text-gray-900 dark:hover:text-white">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 21 16">
                <path
                  d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span class="sr-only">Discord community</span>
            </a>
          </div>
        </div>
        <div>
          <div class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            <a href="#" class="text-gray-950 hover:text-gray-900 dark:hover:text-white">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 17">
                <path fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd" />
              </svg>
              <span class="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
        <div>
          <div class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            <a href="#" class="text-gray-950 hover:text-gray-900 dark:hover:text-white">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 21 16">
                <path
                  d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span class="sr-only">Discord community</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="py-6 bg-green-800 dark:bg-gray-700 text-center w-100">
      <span class="text-sm text-gray-100 dark:text-gray-300 !text-center">© 2023 تمام حقوق این وبگاه متعلق به آستان قدس
        رضوی است.
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];

const slide = [
  { id: 0, src: "/images/slider/slider4.png", alt: "slider-img" },
  { id: 1, src: "/images/slider/slider5.png", alt: "slider-img" },
];
</script>
<style>
.index-body {
  height: 100%;
}

.v-application {
  background: transparent;
}

.v-application__wrap {
  min-height: auto;
}
</style>
