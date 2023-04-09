<script setup>
const { data: funProjects } = await useAsyncData('work', () => queryContent('funprojects').find());
const { data: projects } = await useAsyncData('work', () => queryContent('projects').find());
</script>

<template>
  <div class="container p-4 lg:py-10">
    <section class="projects-container">
      <h3 class="heading text-3xl xl:text-4xl text-secondary mb-8 lg:mb-20">Some Things I've Built</h3>
      <div
        v-for="project in projects"
        :key="project.title"
        class="mb-20"
      >
        <project-component :item="project" />
      </div>
    </section>
  </div>
</template>
