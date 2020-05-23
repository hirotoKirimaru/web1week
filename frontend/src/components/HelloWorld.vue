<template>
  <v-container>
    <v-row
      class="text-center"
      :style="{
        height:300 + 'px',
      }"
    >
      <v-col xs="12">
        <PerformanceArea
          :performerList="performerList"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-btn
        dark
        fab
        bottom
        right
        color="purple darken-2"
        @click="addPerformer"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>

    </v-row>
    <v-row class="text-center">
      <v-col xs="12">
        <PerformerList
          :performerList="performerList"
        />
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Performer from '@/types/performer';

  @Component({
    components: {
      PerformanceArea: () => import('@/components/PerformanceArea.vue'),
      PerformerList: () => import('@/components/PerformerList.vue'),
    },
  })
export default class HelloWorld extends Vue {
    private performerList: Performer[] = [
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

    addPerformer() {
      this.performerList.push(
        {
          id: 5,
          position: {
            x: 200,
            y: 10,
          },
          shortName: '麒',
          longName: 'キリン',
        },
      );
    }
}
</script>
