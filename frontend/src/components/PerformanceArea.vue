<template>
  <div>
    <div v-for="performer in performerList" :key="performer.id">
      <Performer
        :performer="performer"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Component } from 'vue-property-decorator';

@Component({
  components: {
    Performer: () => import('@/components/Performer.vue'),
  },
})
export default class PerformanceArea extends Vue {
  private performerList = [
    {
      id: 1,
      position: {
        x: 100,
        y: 100,
      },
      shortName: '桐',
      longName: 'きり丸',
    },
    {
      id: 2,
      position: {
        x: 200,
        y: 100,
      },
      shortName: '無',
      longName: 'ナイナイ',
    },
    {
      id: 3,
      position: {
        x: 300,
        y: 100,
      },
      shortName: '水',
      longName: '水上',
    },
    {
      id: 4,
      position: {
        x: 200,
        y: 50,
      },
      shortName: 'ゴ',
      longName: 'ゴリラ',
    },
  ];
}
</script>
