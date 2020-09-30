<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">基础</Button>
  <Dialog
    v-model:visible="x"
    :close-on-click-overlay="false"
    :beforeConfirm="beforeConfirm"
    :beforeCancel="beforeCancel"
  >
    <p>第一行文字12</p>
    <p>第二行文字123</p>
  </Dialog>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
import { ref } from "vue";
export default {
  name: "DialogDemo",
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const beforeConfirm = () => {
      return false
    };
    const beforeCancel = () => {
    };
    return { x, toggle, beforeConfirm, beforeCancel };
  },
};
</script>

<style scoped>
</style>
