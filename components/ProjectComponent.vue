<script setup>
const props = defineProps({
  item: { type: Object, default: {} }
})
</script>

<template>
  <div class="project-wrapper relative">
    <div class="grid grid-cols-4 md:grid-cols-8 xlg:grid-cols-12">
      <div class="col-span-full col-start-1 col-span-4 lg:row-span-full lg:col-start-1 lg:col-span-4 xlg:col-start-1 xlg:col-span-6">
        <div class="project-image">
          <a :href="item.external" class="cursor-pointer" target="_blank">
            <img class="w-full" :src="`/${item.image}`" />
          </a>
        </div>
      </div>
      <div class="col-span-full col-start-1 col-span-4 lg:row-span-full lg:col-span-5 lg:col-end-9 xlg:col-span-7 xlg:col-end-13 self-center">
        <div class="mt-6 lg:mt-0 project-content">
          <div>
            <h3 class="lg:text-right text-secondary mb-5 text-xl xlg:text-2xl xl:text-3xl font-medium cursor-pointer">
              {{ item.title }}
            </h3>
            <div class="proj-description bg-[#0c0e11] p-4 xlg:p-6 text-white">
              <p class="mb-4 xlg:mb-6 font-bold text-sm xlg:text-base xl:text-xl">{{ item.description }}</p>
              <ul class="tech-list flex flex-wrap">
                <li v-for="techSkill in item.tech" class="pr-3 text-tertiary text-sm xlg:text-base xl:text-xl">
                  {{ techSkill }}
                </li>
              </ul>
            </div>
            <div class="project-link mt-4">
              <div class="w-6 h-6 float-right">
                <a :href="item.external" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#64ffda" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
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
