<template>
  <Performer/>
</template>

<script lang="ts">
import Vue from 'vue';

import { Component } from 'vue-property-decorator';

@Component({
  components: {
    Performer: () => import('@/components/Performer.vue'),
  },
})
export default class PerformanceArea extends Vue {}
</script>
