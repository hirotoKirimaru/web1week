<template>
  <div>
    <v-row>
      <v-col xs="12">
        <div v-for="performer in performerList" :key="performer.id">
          <Performer
            :performer="performer"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';
import { Performer } from '@/types/performer';

@Component({
  components: {
    Performer: () => import('@/components/Performer.vue'),
  },
})
export default class PerformanceArea extends Vue {
  @Prop()
  private performerList: Performer[] | undefined;
}
</script>
