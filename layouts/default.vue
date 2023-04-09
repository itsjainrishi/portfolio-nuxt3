<script setup>
useHead({
  title: 'Rishi Jain | Software Engineer',
  link: [
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css?family=Kulim+Park&display=swap'
    }
  ]
})

const mainStyle = ref("");

const handleBlur = (val) => {
  if (val) {
    mainStyle.value = "filter: blur(5px) brightness(0.7)";
  } else {
    mainStyle.value = "";
  }
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar @blur="handleBlur" />
    <div class="flex-1 flex flex-col" :style="mainStyle">
      <slot />
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #202630;
}

@font-face {
  font-family: 'icomoon';
  src: url('@/assets/fonts/icomoon.eot?4k6ucb');
  src: url('@/assets/fonts/icomoon.eot?4k6ucb#iefix') format('embedded-opentype'),
    url('@/assets/fonts/icomoon.ttf?4k6ucb') format('truetype'),
    url('@/assets/fonts/icomoon.woff?4k6ucb') format('woff'),
    url('@/assets/fonts/icomoon.svg?4k6ucb#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^='icon-'],
[class*=' icon-'] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'Kulim Park', sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

.main {
  width: 100%;
  padding: 150px 0px;
}

@keyframes fadeInTop {
  0% {
    opacity: 0;
    transform: translate3d(0px, -50px, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeInBottom {
  0% {
    opacity: 0;
    transform: translate3d(0px, 50px, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-50px, 0, 0);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}
</style>
