<script setup>
const props = defineProps({
  item: { type: Object, default: {} }
})
</script>

<template>
  <div class="project-wrapper relative">
    <div class="grid grid-cols-4 md:grid-cols-8 xlg:grid-cols-12 gap-4 lg:gap-6 bg-white shadow-circle p-6 rounded-2xl">
      <div class="col-span-full col-start-1 col-span-4 xlg:col-span-6 rounded-xl h-80 overflow-hidden shadow-project-img">
        <div class="project-image rounded-xl">
          <a
            :href="item.external"
            class="cursor-pointer overflow-hidden"
            target="_blank"
          >
            <img class="w-full rounded-2xl h-auto hover:-translate-y-2/4 ease-in duration-[6000ms]" :src="`/${item.image}`" />
          </a>
        </div>
      </div>
      <div class="col-start-1 col-span-4 xlg:col-span-6 self-center">
        <div class="mt-6 lg:mt-0 project-content">
          <div>
            <h3 class="text-center mb-5 text-xl xlg:text-2xl xl:text-3xl font-bold cursor-pointer">
              {{ item.title }}
            </h3>
            <div class="p-4 xlg:p-6">
              <p class="mb-4 xlg:mb-6 font-medium text-sm xlg:text-base xl:text-xl">
                {{ item.description }}
              </p>
              <ul class="tech-list flex flex-wrap">
                <li
                  v-for="techSkill in item.tech"
                  class="pr-3 text-secondary text-sm xlg:text-base xl:text-xl"
                >
                  {{ techSkill }}
                </li>
              </ul>
            </div>
            <div class="project-link mt-4 flex items-center gap-6 justify-center">
              <div>
                <a
                  class="flex items-center justify-center gap-2 text-xl"
                  :href="item.external"
                  target="_blank"
                >
                  Live
                  <svg
                    class="feather feather-external-link w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#333"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
              <div v-if="item.github">
                <a
                  class="flex items-center justify-center gap-2 text-xl"
                  aria-label="Github"
                  :href="item.github"
                  target="_blank"
                >
                  Code
                  <i class="icon-github text-xl lg:text-2xl font-icomoon before:content-['\eab0']"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
figcaption,
.overlay {
  transition: .45s ease-in-out;
}

.overlay {
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(90%);
}

.proj-description {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
</style>
