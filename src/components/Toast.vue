<template>
  <transition appear @before-enter="beforeEnter" @enter="enter">
    <div class="toast-wrapper">
      <div class="toast"  >{{ value }}</div>
    </div>
  </transition>
</template>
<script>
import gsap from 'gsap';
export default {
  props: {
    value: {
      type: String,
    },
  },
  setup(props) {
    const beforeEnter=(el)=>{
      gsap.to(el,{
        y:0,
      })
    }

    const enter=(el)=>{
      gsap.to(el,{
        duration:0.5,
        y:20,
        delay:0.4,
        opacity:1,
      })
    }
    return{ beforeEnter , enter }
  }
};
</script>
<style>
.toast-wrapper {
  position: fixed;
  width: 100%;
  top: 100px;
  z-index: 1;
  opacity:0;
}
.toast {
  padding: 20px;
  color: white;
  background: #ff0062;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: 0 auto;
}
</style>