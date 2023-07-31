<script setup>
const { data: funProjects } = await useAsyncData('fwork', () => queryContent('funprojects').where({ active: true }).find());
const { data: projects } = await useAsyncData('work', () => queryContent('projects').find());
console.log(funProjects)
</script>

<template>
  <div class="container p-4 lg:py-10">
    <section class="projects-container">
      <div>
        <h3 class="heading text-3xl xl:text-4xl text-secondary mb-8 lg:mb-20">Some Things I've Built</h3>
        <div
          v-for="project in projects"
          :key="project.title"
          class="mb-20"
        >
          <project-component :item="project" />
        </div>
      </div>

      <div class="side-projects mt-28">
        <h3 class="heading text-3xl xl:text-4xl text-secondary mb-8 lg:mb-20">Side Projects</h3>
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
