<template>
  <div>
    <input type="text" v-model="name" />
    <button @click="show(name)">Show</button>
  </div>
</template>

<script>
/// <reference path="../../../../types/browser.d.ts" />

import Vue from 'vue';
import { gsap } from 'gsap';

export default Vue.extend({
  data: () => {
    return { name: '' };
  },
  methods: {
    show(name) {
      nodecg.sendMessage('lower-third', { name });
    },
  },
});
</script>
