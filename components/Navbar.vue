<script setup>

const emit = defineEmits(["blur"]);
const navbarActive = ref(false);
const target = ref(null);

const toggleNavbar = () => {
  navbarActive.value = !navbarActive.value
  emit("blur", navbarActive.value);
}
const closeNavbar = () => {
  navbarActive.value = false
  emit("blur", false);
}

onClickOutside(target, () => {
  if (navbarActive.value) {
    closeNavbar();
  }
})
</script>

<template>
  <nav
    class="navbar bg-[#202630] sticky top-0 z-30"
    role="navigation"
    aria-label="main-navigation"
    ref="target"
  >
    <div
      class="flex items-center w-full z-50 h-[70px] xl:h-20 shadow-b px-3 xl:px-4 relative"
    >
      <div class="navbar-brand w-full flex justify-between">
        <nuxt-link class="navbar-item img py-3 xl:py-4" to="/">
          <img
            alt="R"
            class="h-10 xl:h-12"
            src="~/assets/R.svg"
            @click="closeNavbar"
          />
        </nuxt-link>

        <a
          :class="['navbar-burger self-center lg:hidden', 'burger', { 'is-active': navbarActive }]"
          aria-label="menu"
          aria-expanded="false"
          role="button"
          @click="toggleNavbar"
        >
          <img
            class="w-6 h-6 xl:w-8 xl:h-8"
            :src="navbarActive ? '/cancel.svg' : '/menu.svg'"
          />
        </a>
      </div>

      <div
        :class="[
          'navbar-menu lg:relative lg:flex lg:flex-1 lg:justify-end',
          navbarActive ? 'is-active fixed z-30 w-full -ml-4 mt-[46px] top-4 lg:mt-0 lg:ml-0 lg:top-0 bg-[#202630]': 'hidden'
        ]"
      >
        <div
          class="flex flex-col lg:flex-row text-secondary xl:text-xl items-center"
          @click="closeNavbar"
        >
          <nuxt-link class="navbar-item experience p-3 xl:py-4 ml-3 mr-auto lg:mx-auto" to="/experience">
            Experience
          </nuxt-link>
          <nuxt-link class="navbar-item work p-3 xl:py-4 ml-3 mr-auto lg:mx-auto" to="/work">Work</nuxt-link>
          <a class="navbar-item resume p-3 xl:py-4 ml-3 mr-auto lg:mx-auto" href="/RishiJain_CV.pdf" download>
            <button
              class="btn-resume text-primary border xl:border-2 border-primary text-sm xl:text-xl p-2 xl:p-4 rounded xl:rounded-lg"
            >
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.shadow-b {
  box-shadwow: 0 1px 3px 1px rgba(0, 0, 0, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.3);
}
</style>
