<script setup>
import Colors from "@/assets/Colors.js";

const props = defineProps({
  item: { type: Object, default: {} },
})

const basicStyle = computed(() => {
  return {
    background: randomColor()
  }
});
const randomColor = () => {
  let result = ''
  let count = 0
  for (const color in Colors)
    if (Math.random() < 1 / ++count) result = color
  return result
};
</script>

<template>
  <article class="timeline-box relative mt-1 mt-6 mb-5">
    <div class="timeline-label relative p-4 bg-white text-primary shadow-circle">
      <h2 class="text-xl xl:text-2xl mb-7">
        {{ item.title }}
        <span class="org text-[#64ffda] text-secondary">{{ item.company }}</span>
        <span class="time text-base opacity-[0.6]">&nbsp;{{ item.time }}</span>
      </h2>
      <div class="description xl:text-xl">
        <ContentRendererMarkdown :value="item" />
      </div>
    </div>
  </article>
</template>

<style>
.icon-shadow {
  box-shadow: 0 0 0 5px rgb(100, 255, 218);
}

.description li {
  padding-left: 30px;
  margin-bottom: 10px;
}

.description li::before {
  content: '\2023';
  position: absolute;
  left: 20px;
  font-size: 18px;
}
</style>
