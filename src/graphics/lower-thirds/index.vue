<template>
  <div class="lower-third" ref="lowerThird">{{ name }}</div>
</template>

<script>
/// <reference path="../../../../types/browser.d.ts" />

import gsap from 'gsap';

export default {
  data: () => ({ name: '', tween: null }),
  methods: {
    show(name) {
      this.name = name;
      if (this.tween && this.tween.isActive()) {
        this.tween.kill();
      }
      this.tween = gsap.fromTo(
        this.$refs.lowerThird,
        {
          left: '-100%',
        },
        {
          left: 0,
          duration: 2,
          ease: 'power4.out',
        },
      );
    },
  },
  created() {
    nodecg.listenFor('lower-third', m => {
      this.show(m.name);
    });
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
body {
  background-color: black;
}
.lower-third {
  background-color: white;
  font-weight: bold;
  position: absolute;
  left: 0;
  bottom: 5vw;
  font-family: 'Poppins', sans-serif;
  font-size: 3vw;
  padding: 2vw 3vw;
  color: black;
}
</style>
