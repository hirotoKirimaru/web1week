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

    <v-row class="ma-1">
      <v-col sm="4">
        <v-btn
          dark
          color="purple darken-2"
          @click.stop="addModalPerformer"
        >
          次の隊列の追加
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col sm="8">
        <v-slider
          :tick-labels="parts"
          :value="0"
          min="0"
          :max="parts.length -1"
          :tick-size="parts.length"
        >
        </v-slider>
      </v-col>

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
            v-model="tmpPerformer.id"
            label="駒のID"
            required
          ></v-text-field>

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
          :performerList="performerList"
          @editPerformer="editPerformer"
          @deletePerformer="deletePerformer"
        />
      </v-col>
    </v-row>
    <v-row class="text-center" v-if="selected">
      <v-col xs="12">
        <v-text-field
          v-model="tmpPerformer.id"
          label="駒のID"
          required
        ></v-text-field>

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

  @Component({
    components: {
      PerformanceArea: () => import('@/components/PerformanceArea.vue'),
      PerformerList: () => import('@/components/PerformerList.vue'),
    },
  })
export default class HelloWorld extends Vue {
    private dialog = false;

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

    private parts: string[] = [
      '黎明',
      '日中',
      '逢魔が時',
      '彼は誰時',
    ];

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

    mounted() {
      const item: string | null = localStorage.getItem('performerList');
      if (item == null) {
        return;
      }
      this.performerList = JSON.parse(item);
    }

    addModalPerformer() {
      this.dialog = true;
      if (this.performerList.length === 0) {
        this.tmpPerformer.id = 0;
        return;
      }

      const num = this.performerList.reduce((a, b) => (a.id > b.id ? a : b));
      this.tmpPerformer.id = num.id + 1;
    }

    addPerformer() {
      this.dialog = false;

      const tmp = { ...this.tmpPerformer };

      this.performerList.push(tmp);
      localStorage.setItem('performerList', JSON.stringify(this.performerList));
    }

    editPerformer(editPerformer: Performer) {
      this.selected = true;
      const findPerformer: Performer | undefined = this.performerList
        .find((performer) => performer.id === editPerformer.id, 0);

      if (findPerformer === undefined) {
        console.debug('見つかりませんでした。');
        return;
      }

      this.tmpPerformer = findPerformer;
    }

    editCommitPerformer() {
      this.selected = false;
      localStorage.setItem('performerList', JSON.stringify(this.performerList));
    }

    deletePerformer(deletePerformer: Performer) {
      const deleteIndex = this.performerList
        .findIndex((performer) => performer.id === deletePerformer.id, 0);

      this.performerList.splice(deleteIndex, 1);
      localStorage.setItem('performerList', JSON.stringify(this.performerList));
    }
}
</script>
