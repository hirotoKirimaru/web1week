<template>
  <v-row class="ma-1">
    <v-col sm="4">
      <v-btn
        dark
        color="purple darken-2"
        @click.stop="dialog = true"
      >
        隊列名変更
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-col>
    <v-col sm="8">
      <v-slider
        :tick-labels="this.parts.map((part) => part.name)"
        v-model="localSelectedPart"
        min="0"
        :max="parts.length -1"
        :tick-size="parts.length"
      >
      </v-slider>
    </v-col>
    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <v-card>

        <v-data-table
          :headers="headers"
          :items="parts"
          hide-default-footer
          class="elevation-1"
        >
          <template v-slot:item.name="props">
            <v-edit-dialog
              :return-value.sync="props.item.name"
            > {{ props.item.name }}
              <template v-slot:input>
                <v-text-field
                  v-model="props.item.name"
                  label="Edit"
                  single-line
                  counter
                ></v-text-field>
              </template>
            </v-edit-dialog>
          </template>

          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>隊列名</v-toolbar-title>
              <v-divider
                class="mx-4"
                inset
                vertical
              ></v-divider>
              <v-spacer></v-spacer>
              <v-btn color="primary" dark class="mb-2"
                     @click="update"
              >更新</v-btn>
              <v-divider
                class="mx-4"
                inset
                vertical
              ></v-divider>
              <v-spacer></v-spacer>
              <v-btn color="primary" dark class="mb-2"
                @click="registerItem"
              >次の隊列</v-btn>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
              small
              @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            データを追加してください
          </template>
        </v-data-table>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';

  @Component
export default class PartView extends Vue {
    @Prop()
    private parts: any;

    @Prop({ default: 0 })
    private selectedPart: number;

    private localSelectedPart = 0;

    private dialog = false;

    private headers = [
      {
        text: '隊列名',
        sortable: false,
        value: 'name',
      },
      { text: '削除', value: 'actions', sortable: false },
    ];

    mounted() {
      this.localSelectedPart = this.selectedPart;
      this.$nextTick();
    }

    @Watch('localSelectedPart')
    onTextChanged(newText: number, oldText: string) {
      this.$emit('update', this.localSelectedPart);
    }

    registerItem() {
      let num;
      if (this.parts.length > 0) {
        num = this.parts.map((a: any) => a.order)
          .reduce((a: any, b: any) => (a > b ? a : b));
        num += 1;
      } else {
        num = 0;
      }

      const part = {
        order: num,
        name: '',
      };

      this.parts.push(part);
    }

    update() {
      this.dialog = false;
      localStorage.setItem('parts', JSON.stringify(this.parts));
      this.$emit('updatePart');
    }

    deleteItem(item: any) {
      const index = this.parts.indexOf(item);
      this.parts.splice(index, 1);
    }
}
</script>
