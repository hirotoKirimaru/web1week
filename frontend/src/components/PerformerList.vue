<template>
  <div>
    <v-row>
      <v-col xs="12">
        <v-chip
          v-for="performer in performerList" :key="performer.id"
          close
          @click="emitEdit(performer)"
          @click:close="emitClose(performer)"
        >
          {{ performer.longName }}
        </v-chip>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Component, Prop } from 'vue-property-decorator';
import Performer from '@/types/performer';

@Component({
  components: {
    Performer: () => import('@/components/Performer.vue'),
  },
})
export default class PerformerList extends Vue {
  @Prop()
  private performerList: Performer[] | undefined;

  emitEdit(performer: Performer) {
    this.$emit('editPerformer', performer);
  }

  emitClose(performer: Performer) {
    this.$emit('deletePerformer', performer);
  }
}
</script>
