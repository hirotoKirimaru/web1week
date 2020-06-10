<template>
  <div
    @mousedown="handleMouseDown"

    class="v-color-picker__canvas-dot"
    style="{
        position:absolute;
        display:inline-block;
        }
    "

    :style="{
        width:dotSize + 'px',
        height:dotSize + 'px',
        left:localPerformer.position.x + 'px',
        top:localPerformer.position.y + 'px',
        transform:`translateX(${initialPosition.x}px) translateY(${initialPosition.y}px)`,
        }
    "
  >
    {{ localPerformer.shortName }}
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
export default class Performer extends Vue {
  @Prop({
    default: {
      position: {
        x: 0,
        y: 0,
      },
      shortName: '',
    },
  })
  private readonly performer: any;

  @Prop({ default: 30 })
  private readonly dotSize: any;

  private localPerformer: any;

  created() {
    this.localPerformer = this.performer;
    this.$nextTick();
  }

    private initialPosition = {
      x: 0,
      y: 0,
    }

    onMouseMove(e: MouseEvent) {
      console.log('move');
      console.log({ x: e.pageX, y: e.pageY });

      this.initialPosition = {
        x: e.pageX,
        y: e.pageY - (this.dotSize * 2),
      };

      console.log(this.localPerformer.position);
    }

    handleMouseDown() {
      console.log('handleMouseDown');
      const boundingRect = this.$el.getBoundingClientRect();
      console.log({ boundingRect });

      this.initialPosition = {
        x: boundingRect.left,
        y: boundingRect.top - (this.dotSize * 2),
      };

      console.log({ initial: this.initialPosition });

      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('mouseup', this.handleMouseUp);
    }

    handleMouseUp() {
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('mouseup', this.handleMouseUp);

      this.localPerformer.position = {
        x: this.initialPosition.x,
        y: this.initialPosition.y,
      };
    }
}
</script>
