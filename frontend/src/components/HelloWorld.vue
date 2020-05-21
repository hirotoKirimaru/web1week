<template>
  <v-container>
    <v-row class="text-center">
      <!--      <v-col cols="12">-->
      <!--        <v-img-->
      <!--          :src="require('../assets/logo.svg')"-->
      <!--          class="my-3"-->
      <!--          contain-->
      <!--          height="200"-->
      <!--        />-->
      <!--      </v-col>-->

      <!--      <v-col class="mb-4">-->
      <!--        <h1 class="display-2 font-weight-bold mb-3">-->
      <!--          Welcome to Vuetify-->
      <!--        </h1>-->

      <!--        <p class="subheading font-weight-regular">-->
      <!--          For help and collaboration with other Vuetify developers,-->
      <!--          <br>please join our online-->
      <!--          <a-->
      <!--            href="https://community.vuetifyjs.com"-->
      <!--            target="_blank"-->
      <!--          >Discord Community</a>-->
      <!--        </p>-->
      <!--      </v-col>-->

      <!--      <v-col-->
      <!--        class="mb-5"-->
      <!--        cols="12"-->
      <!--      >-->
      <!--        <h2 class="headline font-weight-bold mb-3">-->
      <!--          What's next?-->
      <!--        </h2>-->

      <!--        <v-row justify="center">-->
      <!--          <a-->
      <!--            v-for="(next, i) in whatsNext"-->
      <!--            :key="i"-->
      <!--            :href="next.href"-->
      <!--            class="subheading mx-3"-->
      <!--            target="_blank"-->
      <!--          >-->
      <!--            {{ next.text }}-->
      <!--          </a>-->
      <!--        </v-row>-->
      <!--      </v-col>-->

      <!--      <v-col-->
      <!--        class="mb-5"-->
      <!--        cols="12"-->
      <!--      >-->
      <!--        <h2 class="headline font-weight-bold mb-3">-->
      <!--          Important Links-->
      <!--        </h2>-->

      <!--        <v-row justify="center">-->
      <!--          <a-->
      <!--            v-for="(link, i) in importantLinks"-->
      <!--            :key="i"-->
      <!--            :href="link.href"-->
      <!--            class="subheading mx-3"-->
      <!--            target="_blank"-->
      <!--          >-->
      <!--            {{ link.text }}-->
      <!--          </a>-->
      <!--        </v-row>-->
      <!--      </v-col>-->

      <v-row>
        <MizuCanvas/>
      </v-row>

      <!--      <v-col-->
      <!--        class="mb-5"-->
      <!--        cols="12"-->
      <!--      >-->
      <!--        &lt;!&ndash;        <h2 class="headline font-weight-bold mb-3">&ndash;&gt;-->
      <!--        &lt;!&ndash;          Ecosystem&ndash;&gt;-->
      <!--        &lt;!&ndash;        </h2>&ndash;&gt;-->

      <!--        &lt;!&ndash;        <v-row justify="center">&ndash;&gt;-->
      <!--        &lt;!&ndash;          <a&ndash;&gt;-->
      <!--        &lt;!&ndash;            v-for="(eco, i) in ecosystem"&ndash;&gt;-->
      <!--        &lt;!&ndash;            :key="i"&ndash;&gt;-->
      <!--        &lt;!&ndash;            :href="eco.href"&ndash;&gt;-->
      <!--        &lt;!&ndash;            class="subheading mx-3"&ndash;&gt;-->
      <!--        &lt;!&ndash;            target="_blank"&ndash;&gt;-->
      <!--        &lt;!&ndash;          >&ndash;&gt;-->
      <!--        &lt;!&ndash;            {{ eco.text }}&ndash;&gt;-->
      <!--        &lt;!&ndash;          </a>&ndash;&gt;-->
      <!--        &lt;!&ndash;        </v-row>&ndash;&gt;-->
      <!--        <v-row>-->
      <!--          <v-color-picker/>-->
      <!--          &lt;!&ndash;          <canvas height="300" width="300"/>&ndash;&gt;-->

      <!--          &lt;!&ndash;          {{genDot()}}&ndash;&gt;-->

      <!--          <div style="width: 800px; height: 400px">-->
      <!--            <div-->
      <!--              class="v-color-picker__canvas-dot "-->
      <!--              style="width:100px;height:100px;transform:translate(100, 100)"-->

      <!--            />-->
      <!--          </div>-->


      <!--        </v-row>-->


      <v-row>
        <v-color-picker/>
      </v-row>

      <!--      </v-col>-->
    </v-row>
  </v-container>
</template>


<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  // import { VNode } from 'vue';

  @Component({
    components: {
      MizuCanvas: () => import('@/components/Tairetsu.ts'),
    },
  })
  export default class HelloWorld extends Vue {
    // genDot(): VNode {
    //   // const radius = parseInt(10, 10) / 2
    //   // const x = convertToUnit(this.dot.x - radius)
    //   // const y = convertToUnit(this.dot.y - radius)
    //   const radius = 10;
    //   const x = 1;
    //   const y = 1;
    //
    //   return this.$createElement('div', {
    //     staticClass: 'v-color-picker__canvas-dot',
    //     style: {
    //       // width: convertToUnit(this.dotSize),
    //       // height: convertToUnit(this.dotSize),
    //       width: 10,
    //       height: 10,
    //       transform: `translate(${x}, ${y})`,
    //     },
    //   });
    // }
  }
</script>
