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
          :performerList="partPerformer()"
        />
      </v-col>
    </v-row>

    <v-row class="ma-1">
      <v-col sm="4">
        <v-btn
          dark
          color="purple darken-2"
          @click.stop="addModalPart"
        >
          次の隊列の追加
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col sm="8">
        <v-slider
          :tick-labels="parts"
          v-model="selectedPart"
          min="0"
          :max="parts.length -1"
          :tick-size="parts.length"
        >
        </v-slider>
      </v-col>
      <v-dialog
        v-model="partDialog"
        max-width="500"
      >
        <v-card>
          <v-card-title class="headline">次の隊列を追加しますか</v-card-title>

          <v-text-field
            v-model="partName"
            label="隊列名"
            required
          ></v-text-field>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              @click="partDialog = false"
            >
              破棄
            </v-btn>

            <v-btn
              @click="addPart"
            >
              追加
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-row class="ma-1">
      <v-btn
        dark
        color="purple darken-2"
        @click.stop="addModalPerformer"
      >
        踊り子の追加
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-dialog
        v-model="dialog"
        max-width="500"
      >
        <v-card>
          <v-card-title class="headline">踊り子を追加しますか？</v-card-title>

          <v-text-field
            v-model="tmpPerformer.position.x"
            label="駒の位置(x)"
            required
          ></v-text-field>

          <v-text-field
            v-model="tmpPerformer.position.y"
            label="駒の位置(y)"
            required
          ></v-text-field>


          <v-text-field
            v-model="tmpPerformer.shortName"
            :count="2"
            label="踊り子の短縮名称(駒の表示に使用)"
            required
          ></v-text-field>

          <v-text-field
            v-model="tmpPerformer.longName"
            label="踊り子名"
            required
          ></v-text-field>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              @click="dialog = false"
            >
              破棄
            </v-btn>

            <v-btn
              @click="addPerformer"
            >
              追加
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-row>
    <v-row class="text-center">
      <v-col xs="12">
        <PerformerList
          :performerList="partPerformer()"
          @editPerformer="editPerformer"
          @deletePerformer="deletePerformer"
        />
      </v-col>
    </v-row>
    <v-row class="text-center" v-if="selected">
      <v-col xs="12">
        <v-text-field
          v-model="tmpPerformer.position.x"
          label="駒の位置(x)"
          required
        ></v-text-field>

        <v-text-field
          v-model="tmpPerformer.position.y"
          label="駒の位置(y)"
          required
        ></v-text-field>


        <v-text-field
          v-model="tmpPerformer.shortName"
          :count="2"
          label="踊り子の短縮名称(駒の表示に使用)"
          required
        ></v-text-field>

        <v-text-field
          v-model="tmpPerformer.longName"
          label="踊り子名"
          required
        ></v-text-field>

        <v-btn
          @click="editCommitPerformer"
        >
          修正
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Performer } from '@/types/performer';
import { Part, Performance } from '@/types/part';


  @Component({
    components: {
      PerformanceArea: () => import('@/components/PerformanceArea.vue'),
      PerformerList: () => import('@/components/PerformerList.vue'),
    },
  })
export default class HelloWorld extends Vue {
    private dialog = false;

    private partDialog = false;

    private selected = false;

    private tmpPerformer: Performer = {
      id: 0,
      position: {
        x: 0,
        y: 0,
      },
      shortName: '',
      longName: '',
    };

    private partName = '';

    private selectedPart = 0;

    private parts: string[] = [
      '黎明',
      '日中',
      '逢魔が時',
      '彼は誰時',
    ];

    private performance: Performance = new Performance([]);

    // private performerList: Part[] = [];

    mounted() {
      const item: string | null = localStorage.getItem('performerList');
      if (item == null) {
        return;
      }
      // this.performerList = JSON.parse(item);
      this.performance = new Performance(JSON.parse(item));
      console.log(this.performance);
    }

    addModalPerformer() {
      this.dialog = true;
      if (this.performance.parts.length === 0) {
        this.tmpPerformer.id = 0;
        return;
      }

      const num = this.performance.parts.reduce((a, b) => (a.id > b.id ? a : b));
      this.tmpPerformer.id = num.id + 1;
    }

    addModalPart() {
      this.partDialog = true;
    }

    addPart() {
      this.partDialog = true;
      const tmp = this.partName;

      this.parts.push(tmp);
    }

    addPerformer() {
      this.dialog = false;

      const tmp = { ...this.tmpPerformer };
      console.debug(tmp);

      // const findPerformer: Performer[] | undefined =
      if (this.performance.parts.length > 0) {
        console.log('データあり');
        const parts: Part[] = this.performance.parts
          .filter((index) => index.id === this.selectedPart);

        parts[0].performer.push(tmp);
      } else {
        console.log('データなし');
        this.performance.parts = [{
          id: 0,
          name: '',
          performer: [tmp],
        }];
      }

      localStorage.setItem('performerList', JSON.stringify(this.performance));
    }

    editPerformer(editPerformer: Performer) {
      this.selected = true;
      const findPerformer: Performer | undefined = this.performance.parts
        .flatMap((part) => part.performer)
        .find((performer) => performer.id === editPerformer.id, 0);

      if (findPerformer === undefined) {
        console.debug('見つかりませんでした。');
        return;
      }

      this.tmpPerformer = findPerformer;
    }

    editCommitPerformer() {
      this.selected = false;
      localStorage.setItem('performerList', JSON.stringify(this.performance));
    }

    deletePerformer(deletePerformer: Performer) {
      const deleteIndex = this.performance.parts
        .findIndex((performer) => performer.id === deletePerformer.id, 0);

      this.performance.parts.splice(deleteIndex, 1);
      localStorage.setItem('performerList', JSON.stringify(this.performance));
    }

    partPerformer() {
      return this.performance.partPosition(this.selectedPart);
    }
}
</script>
