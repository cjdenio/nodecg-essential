<template>
  <div>
    <h2>{{ counter }}</h2>
    <button @click="counter++">Up</button>
  </div>
</template>

<script lang="ts">
/// <reference path="../../../../types/browser.d.ts" />

import Vue from 'vue';
import { gsap } from 'gsap';

export default Vue.extend({
  data: () => {
    return { counter: 0 };
  },
  methods: {
    show(name: string) {},
  },
  created() {
    nodecg.listenFor('lower-third', m => {
      this.show(m.name);
    });
  },
});
</script>
