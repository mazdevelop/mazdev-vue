<template>
  <div class="home">
    <Toast v-if="showToast" :value="warrning" />
    <Quotes @bad-value="triggerToast" />
  </div>
</template>

<script>
import { ref } from "vue";
import Toast from "@/components/Toast";
import Quotes from "@/components/Quote/Quotes";
export default {
  components: { Toast, Quotes },
  setup() {
    const showToast = ref(false);
    const warrning = "Quotes are more than allowed";

    function triggerToast() {
      showToast.value = true;
      setTimeout(() => (showToast.value = false), 3000);
    }
    return { showToast, triggerToast, warrning };
  },
};
</script>

<style>
</style>
