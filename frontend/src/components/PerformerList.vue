<template>
  <div>
    <v-row>
      <v-col xs="12">
        <v-chip v-for="performer in performerList" :key="performer.id">
          {{ performer.longName }}
        </v-chip>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Component, Prop } from 'vue-property-decorator';

@Component({
  components: {
    Performer: () => import('@/components/Performer.vue'),
  },
})
export default class PerformerList extends Vue {
  @Prop()
  private performerList: any;
}
</script>
