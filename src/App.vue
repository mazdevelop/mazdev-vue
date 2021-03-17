<template>
  <div>
    <app-header></app-header>
    <div class="container mx-auto px-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    appHeader: Header,
  },
};
</script>

<style scoped>
#menu-toggle:checked + #menu {
  display: block;
}
</style>