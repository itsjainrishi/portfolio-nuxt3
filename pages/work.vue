<script setup>
const { data: funProjects } = await useAsyncData('fwork', () => queryContent('funprojects').where({ active: true }).find());
const { data: projects } = await useAsyncData('work', () => queryContent('projects').find());
</script>

<template>
  <div class="lg:container p-4 lg:px-0 lg:py-10">
    <section class="projects-container">
      <div>
        <div class="flex items-center gap-4 mb-6 lg:mb-12">
          <h3 class="text-2xl text-secondary">Some Things I've Built</h3>
          <div class="h-px flex-grow max-w-xs bg-blue-100"></div>
        </div>
        <div
          v-for="project in projects"
          :key="project.title"
          class="mb-20"
        >
          <project-component :item="project" />
        </div>
      </div>

      <div class="side-projects mt-28">
        <div class="flex items-center gap-4 mb-6 lg:mb-12">
          <h3 class="text-2xl text-secondary">Side Projects</h3>
          <div class="h-px flex-grow max-w-xs bg-blue-100"></div>
        </div>
        <div
          v-for="project in funProjects"
          :key="project.title"
          class="mb-20"
        >
          <project-component :item="project" />
        </div>
      </div>
    </section>
  </div>
</template>
