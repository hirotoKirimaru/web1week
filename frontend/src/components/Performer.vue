<template>
  <div
    @mouseup="onMouseup"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"

    style="{
        width:100px;
        height:100px;
        position:absolute;
        display:inline-block;
        backgroundColor:red
        }
    "

    :style="{
        left:position.x + 'px',
        top:position.y + 'px',
        }
    "

  >
    きり丸

  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Performer extends Vue {
  // @Prop()
  // public initialX: number;
  // @Prop()
  // public initialY: number;

    private dragging = false;

    private position = {
      x: 100,
      y: 200,
    }

    private initialPosition = {
      x: 0,
      y: 0,
    }

    onMouseDown(e: MouseEvent) {
      console.log("mousedown");
      this.dragging = true;
      this.initialPosition = {
        x: e.pageX,
        y: e.pageY,
      };
      console.log("mousedown end");
    }

    onMouseMove(e: MouseEvent) {
      // To prevent selection while moving cursor
      e.preventDefault();

      if (!this.dragging) return;
      console.log("move");

      const delta = {
        x: e.pageX - this.initialPosition.x,
        y: e.pageY - this.initialPosition.y,
      };

      this.position = {
        x: this.initialPosition.x + delta.x,
        y: this.initialPosition.y + delta.y,
      };
    }

    onMouseup() {
      console.log("mouseup");
      this.dragging = false;
    }
}
</script>
