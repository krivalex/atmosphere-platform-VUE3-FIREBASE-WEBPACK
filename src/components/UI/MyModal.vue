<template>
  <div class="dialog" v-if="show" @click.stop="hideModal">
    <div @click.stop class="dialog-content">
      <slot></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "my-modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$emit("update: show", false);
    },
  },

}

</script>

<style scoped>
.dialog {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
}

.dialog-content {
  background-color: #216491;
  margin: auto;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  min-width: 50px;
  min-height: 300px;
}

.close-button {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .dialog-content {
    padding: 10px;
    max-width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
