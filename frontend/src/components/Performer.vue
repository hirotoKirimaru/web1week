<template>
  <div
    @mousedown="handleMouseDown"

    class="v-color-picker__canvas-dot"
    style="{
        position:absolute;
        display:inline-block;
        backgroundColor:red
        }
    "

    :style="{
        width:dotSize + 'px',
        height:dotSize + 'px',
        left:position.x + 'px',
        top:position.y + 'px',
        }
    "

  >
    きり丸

  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

  @Component
export default class Performer extends Vue {
  // @Prop()
  // public initialX: number;
  // @Prop()
  // public initialY: number;

    private dotSize = 100;

    private position = {
      x: 100,
      y: 100,
    }

    private initialPosition = {
      x: 0,
      y: 0,
    }

    onMouseMove(e: MouseEvent) {
      console.log('move');

      const delta = {
        x: e.pageX - this.initialPosition.x,
        y: e.pageY - this.initialPosition.y,
      };
      console.log(delta);

      this.position = {
        x: this.initialPosition.x + delta.x,
        y: this.initialPosition.y + delta.y,
      };
      console.log(this.position);
    }

    handleMouseDown() {
      const boundingRect = this.$el.getBoundingClientRect();
      console.log({ boundingRect });

      this.initialPosition = {
        x: boundingRect.left - this.dotSize,
        y: boundingRect.top - this.dotSize,
      };

      console.log({ initial: this.initialPosition });

      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('mouseup', this.handleMouseUp);
    }

    handleMouseUp() {
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
}
</script>
