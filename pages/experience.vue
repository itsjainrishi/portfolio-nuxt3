<script setup>
const { data: jobs } = await useAsyncData('experience', () => queryContent('experience').find());
</script>

<template>
  <div class="container p-4 lg:py-10">
    <section class="experience relative">
      <h3 class="heading text-3xl xl:text-4xl mb-8 lg:mb-20 text-tertiary">Work Experience</h3>
      <div class="jobs-container">
        <div class="timeline">
          <job-component v-for="job in jobs" :item="job" :key="job.company" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  margin-bottom: 30px;
  padding-bottom: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 20px;
  bottom: 20px;
  display: block;
  width: 4px;
  background: rgb(100, 255, 218);
  margin-left: 18px;
}
.timeline:last-child::after {
  content: '';
  position: absolute;
  bottom: 0px;
  height: 20px;
  width: 20px;
  margin-left: 10px;
  float: left;
  border-radius: 50%;
  line-height: 40px;
  box-shadow: 0 0 0 5px rgb(100, 255, 218);
}
</style>