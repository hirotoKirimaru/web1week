<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    HelloWorld:  () => import('@/components/HelloWorld.vue'),
  }
})
export default class Home extends Vue{
};
</script>
