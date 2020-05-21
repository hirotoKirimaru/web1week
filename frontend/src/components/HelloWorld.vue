<template>
  <v-container>
    <v-row class="text-center">
      <v-row>
        <PerformanceArea/>
      </v-row>

<!--      <v-row>-->
<!--        <v-color-picker/>-->
<!--      </v-row>-->

    </v-row>
  </v-container>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    PerformanceArea: () => import('@/components/PerformanceArea.vue'),
  },
})
export default class HelloWorld extends Vue {
}
</script>
