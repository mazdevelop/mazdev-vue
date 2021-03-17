<template>
  <div class="home">
    <Toast v-if="showToast" :value="warrning" />
    <Todos @badValue="triggerToast" />

  </div>
</template>

<script>
import { ref } from "vue";
import Toast from "../components/Toast.vue";
import Todos from "../components/Todo/Todos.vue";
export default {
  components: { Toast, Todos },
  setup() {
    const showToast = ref(false);
    const warrning = "You must enter a value for the todo";
    
    function triggerToast()  {
      showToast.value = true;
      setTimeout(() => (showToast.value = false), 3000);
    };
    return { showToast, triggerToast, warrning };
  },
};
</script>

<style>
</style>
