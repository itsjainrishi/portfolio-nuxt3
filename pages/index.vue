<script setup>
const { data } = await useAsyncData('home', () => queryContent('/').findOne());
</script>

<template>
  <div class="container p-4 lg:py-10 h-min-screen">
    <div class="basic-info">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div class="col-span-1">
          <h1 class="text-secondary text-6xl tracking-[1px] mb-6">
            {{ data.title }}
          </h1>
          <h2 class="text-primary text-7xl mb-6 tracking-[2px]">
            {{ data.name }}
          </h2>
          <div class="max-w-[500px]">
            <p class="text-secondary xl:text-xl">
              {{ data.description }}
            </p>
          </div>
          <div class="tech-wrapper mt-8 xl:mt-12">
            <h3 class="text-3xl text-secondary mb-8">Skills</h3>
            <div class="content">
              <ul class="">
                <li
                  v-for="technology in data.skills"
                  class="text-secondary before:content-['\2023'] before:mr-3 py-1 before:text-primary xl:text-xl">
                  {{ technology }}
                </li>
              </ul>
            </div>
          </div>
          <div class="social-icons my-8 xl:my-12 text-xl xl:text-3xl text-secondary">
            <a aria-label="Github" class="mr-4 xl:mr-6" :href="data.github">
              <i class="icon-github font-icomoon before:content-['\eab0']"></i>
            </a>
            <a aria-label="Linkedin" class="mr-4 xl:mr-6" :href="data.linkedin">
              <i class="icon-linkedin font-icomoon before:content-['\eac9']"></i>
            </a>
          </div>
          <a
            href="mailto:irishijain96@gmail.com?Subject=Hello"
            target="_top"
            class="contact-btn mb-12 lg:mb-0"
          >
            <button class="text-sm xl:text-xl bg-transparent text-primary border xl:border-2 border-primary rounded xl:rounded-lg p-3 xl:p-4">
              Contact
            </button>
          </a>
        </div>
        <div class="col-span-1 justify-self-center">
          <div class="avatar max-w-[300px]">
            <img
              alt="Rishi Jain"
              class="object-contain max-w-full"
              src="~/assets/images/about/me.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.tech-wrapper ul {
  column-count: 2;
}
</style>