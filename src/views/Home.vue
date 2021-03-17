<template>
  <div
    class="grid sm:grid-rows-2 sm:grid-flow-col gap-4 font-mono p-6 overflow-y-hidden items-center border border-gray-200 rounded-lg"
  >
    <section class="sm:row-span-2 sm:col-span-4">
      <div class="anim-panel">
        <h1
          class="text-lg font-bold sm:text-5xl text-xl capitalize sm:text-center text-justify"
        >
          I'm mohsen alizadeh
        </h1>
      </div>
      <div class="">
        <p class="text-sm my-5 p-3 mx-3 text-justify">
          I am a Developer proficient in JavaScript, HTML, CSS, React, Vue, and
          Laravel who enjoys learning new technologies To consolidate my
          programming skills, I have built my own project from scratch I
          familiarized myself with industry standards and taught myself new
          languages and frameworks while designing and building projects from
          the ground up. I’m excited for an opportunity to grow as a developer
          and contribute my technical skills to a team of knowledgeable
          programmers. I'm currently looking forward to bringing my passion for
          coding to a full-time position.
        </p>
        <a
          href="#"
          class="py-3 px-6 border border-gray-200 uppercase mx-4 no-underline"
          >Get link</a
        >
      </div>
    </section>
    <section class="sm:row-span-1 sm:col-span-2">
      <h1 class="text-center my-5">Follow Me:</h1>
      <div class="flex items-center justify-center flex-wrap">
        <a
          href="https://www.linkedin.com/in/mohsen-alizadeh-dev/"
          class="h-8 w-8 mx-4"
        >
          <ion-icon name="logo-linkedin" size="large"></ion-icon>
        </a>
        <a href="https://codepen.io/mazdevelop100" class="h-8 w-8 mx-4">
          <ion-icon name="logo-codepen" size="large"></ion-icon>
        </a>
        <a href="https://github.com/mazdevelop" class="h-8 w-8 mx-4">
          <ion-icon name="logo-github" size="large"></ion-icon>
        </a>
        <a href="https://gitlab.com/dev.medsa" class="h-8 w-8 mx-4">
          <ion-icon name="logo-gitlab" size="large"></ion-icon>
        </a>
      </div>
    </section>
    <section
      class="sm:row-span-1 sm:col-span-2 my-2 border-t-2 border-gray-200"
    >
      <div class="h-72 mt-9">
        <h2 class="text-lg font-bold">Contacts:</h2>
        <div class="flex flex-wrap items-center justify-center">
          <ul class="flex flex-col my-4 p-3">
            <li>Tell: <a href="#">+989104965687</a></li>
            <li>Email: <a href="#">maz.coders@gmail.com</a></li>
            <li>
              Comming soon: <a href="http://themazlife.ir">themazlife.ir</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { TimelineMax, gsap } from "gsap";
export default {
  setup() {
    onMounted(() => {
      let tl = new TimelineMax();
      const Power2 = gsap.Ease;
      tl.from(
        "section",
        2,
        {
          opacity: 0,
          scale: 0.5,
          ease: Power2,
        },
        0.2
      )
        .staggerFrom(
          "h1 , h2",
          0.5,
          {
            opacity: 0,
            y: -40,
            delay: 1,
            ease: Power2,
          },
          0.2,
          "-=2"
        )
        .staggerFrom(
          ".anim-panel",
          1,
          {
            opacity: 0,
            y: -40,
            delay: 1,
            ease: Power2,
          },
          0.2,
          "-=1.5"
        );
    });
  },
};
</script>
