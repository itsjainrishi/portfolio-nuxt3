<script setup>
const { data: jobs } = await useAsyncData('experience', () => queryContent('experience').find());
</script>

<template>
  <div class="lg:container mx-auto p-4 lg:px-0 lg:py-10">
    <section class="experience relative">
      <div class="flex items-center gap-4 mb-6 lg:mb-12">
        <h3 class="text-2xl text-secondary">Work Experience</h3>
        <div class="h-px flex-grow max-w-xs bg-blue-100"></div>
      </div>
      <div class="jobs-container">
        <job-component v-for="job in jobs" :item="job" :key="job.company" />
      </div>
    </section>
  </div>
</template>
