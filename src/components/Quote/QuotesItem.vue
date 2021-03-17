<template>
  <transition appear @before-enter="beforeEnter" @enter="enter">
    <div
      class="flex flex-wrap justify-between opacity-0 z-10 shadow-lg m-3 border-2 border-gray-900 text-gray-700 rounded-lg p-2"
    >
      <div class="text-red-500 cursor-pointer" @click="removeItem">x</div>
      <div class="">{{ quote.author }}</div>
      <div class="">{{ quote.quote }}</div>
      <div class="">{{ formattedDate }}</div>
    </div>
  </transition>
</template>

<script>
import { computed } from "vue";
import gsap from "gsap";
export default {
  props: {
    quote: Object,
  },
  setup(props, { emit }) {
    let date = new Date(props.quote?.date);
    function removeItem() {
      emit("remove-item");
      console.log(props.quote);
    }
    let formattedDate = computed(
      () => date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
    );
    const beforeEnter = (el) => {
      gsap.to(el, {
        y: 10,
      });
    };

    const enter = (el) => {
      gsap.to(el, {
        duration: 0.5,
        y: 0,
        delay: 0.3,
        opacity: 1,
      });
    };

    return {
      formattedDate,
      removeItem,
      beforeEnter,
      enter,
    };
  },
};
</script>

<style>
</style>