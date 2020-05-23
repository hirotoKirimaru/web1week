<template>
  <v-container>
    <v-row
      class="text-center"
      :style="{
        height:300 + 'px',
      }"
    >
      <v-col xs="12">
        <PerformanceArea/>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col xs="12">
        <PerformerList/>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
      PerformanceArea: () => import('@/components/PerformanceArea.vue'),
      PerformerList: () => import('@/components/PerformerList.vue'),
    },
  })
export default class HelloWorld extends Vue {
}
</script>
