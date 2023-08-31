<script setup>
const { data } = await useAsyncData('home', () => queryContent('/').findOne());
</script>

<template>
  <div class="lg:container p-4 lg:px-0 lg:pt-10 h-min-screen">
    <div class="basic-info">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div class="col-span-1">
          <h1 class="text-3xl tracking-[1px] mb-6">
            {{ data.title }}
          </h1>
          <h2 class="text-secondary text-7xl mb-6 tracking-[2px]">
            {{ data.name }}
          </h2>
          <div class="max-w-[500px]">
            <p class="xl:text-2xl">
              {{ data.description }}
            </p>
          </div>
          <div class="social-icons flex gap-4 lg:gap-6 my-8 xl:my-12 xl:text-3xl">
            <a aria-label="Github" :href="data.github" target="_blank">
              <i class="icon-github text-xl lg:text-2xl font-icomoon before:content-['\eab0']"></i>
            </a>
            <a aria-label="Linkedin" :href="data.linkedin" target="_blank">
              <i class="icon-linkedin text-xl lg:text-2xl font-icomoon before:content-['\eac9']"></i>
            </a>
          </div>
          <div class="flex gap-4 lg:gap-6">
            <a
              href="mailto:irishijain96@gmail.com?Subject=Hello"
              target="_top"
              class="contact-btn mb-12 lg:mb-0"
            >
              <button class="flex gap-4 xl:gap-6 items-center text-sm xl:text-xl bg-transparent font-semibold border-2 border-secondary rounded-lg p-3 xl:p-4">
                <svg class="icon icon-envelop w-6 h-6" viewBox="0 0 32 32" fill="#333333">
                  <path d="M29 4h-26c-1.65 0-3 1.35-3 3v20c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-20c0-1.65-1.35-3-3-3zM12.461 17.199l-8.461 6.59v-15.676l8.461 9.086zM5.512 8h20.976l-10.488 7.875-10.488-7.875zM12.79 17.553l3.21 3.447 3.21-3.447 6.58 8.447h-19.579l6.58-8.447zM19.539 17.199l8.461-9.086v15.676l-8.461-6.59z">
                  </path>
                </svg>
                Contact
              </button>
            </a>
            <a href="/RishiJain_CV.pdf" download>
              <button class="flex gap-4 xl:gap-6 items-center text-sm xl:text-xl bg-transparent font-semibold border-2 border-secondary rounded-lg p-3 xl:p-4">
                <svg class="icon icon-cloud-download w-6 h-6" viewBox="0 0 32 32" fill="#333333">
                  <path d="M27.844 11.252c-0.101-4.022-3.389-7.252-7.433-7.252-2.369 0-4.477 1.109-5.839 2.835-0.764-0.987-1.959-1.624-3.303-1.624-2.307 0-4.176 1.871-4.176 4.179 0 0.201 0.015 0.399 0.043 0.592-0.351-0.063-0.711-0.098-1.080-0.098-3.344-0-6.054 2.712-6.054 6.058s2.71 6.058 6.054 6.058h2.868l7.078 7.328 7.078-7.328 3.484-0c3.004-0.006 5.438-2.444 5.438-5.451 0-2.565-1.771-4.716-4.156-5.296zM16 26l-6-6h4v-6h4v6h4l-6 6z">
                  </path>
                </svg>
                Resume
              </button>
            </a>
          </div>
        </div>
        <div class="col-span-1 justify-self-center">
          <div class="avatar max-w-[300px] rounded-full">
            <img
              alt="Rishi Jain"
              class="object-contain max-w-full rounded-full"
              src="~/assets/images/about/me.jpg"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="tech-wrapper mt-20">
      <div class="flex items-center gap-4 mb-6 lg:mb-12">
        <h3 class="text-2xl">Technologies I have worked with</h3>
        <div class="h-px flex-grow max-w-xs bg-blue-100"></div>
      </div>
      <div class="content">
        <ul class="flex gap-4 lg:gap-6 flex-wrap">
          <li v-for="technology in data.skills" class="group">
            <div data-tooltip-target="tooltip-default" class="flex items-center justify-center shadow-circle w-16 h-16 bg-white rounded-full">
              <img class="w-10 h-10" :src="`/tech/${technology}`" />
            </div>
            <div
              role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-primary rounded-lg shadow-sm opacity-0 tooltip group-hover:opacity-100 group-hover:visible"
            >
              {{ technology.split('.')[0].toUpperCase() }}
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.tech-wrapper ul {
  column-count: 2;
}
</style>