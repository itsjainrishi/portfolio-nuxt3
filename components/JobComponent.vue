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
    <div class="timeline-box-inner">
      <div
        :style="basicStyle"
        class="timeline-icon h-10 w-10 float-left text-center icon-shadow rounded-[50%] !leading-10" 
      >
        <i class="icon-pen2 text-white before:content-['\e906']"></i>
      </div>
      <div class="timeline-label relative p-4 ml-16 bg-[#0c0e11] text-tertiary">
        <h2 class="text-xl xl:text-2xl mb-7">
          {{ item.title }}
          <span class="org text-[#64ffda]">{{ item.company }}</span>
          <span class="time text-base opacity-[0.6]">&nbsp;{{ item.time }}</span>
        </h2>
        <div class="description xl:text-xl">
          <ContentRendererMarkdown :value="item" />
        </div>
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
