<template>
  <div id="app">
    <Header />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/layouts/Header.vue"

export default {
  name: "App",
  components: {
    Header, // 사용하려고 하는 component들을 안에 명시해준다.
  },
}
</script>

<style>
#app {
  background-color: aliceblue;
}
</style>
