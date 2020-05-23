<template>
  <v-app>
    <v-app-bar
      app
      color="purple darken-1"
      dark
    >
      <div class="d-flex align-center">
        よさこいアプリ
      </div>

      <v-spacer></v-spacer>
      <Auth/>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    HelloWorld: () => import('@/components/HelloWorld.vue'),
    Auth: () => import('@/components/Auth.vue'),
  },
})
export default class App extends Vue {
}
</script>
