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
  <h1>示例2</h1>
  <Button @click="showDialog">指令式打开</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import Dialog from "../lib/Dialog.vue";
import { ref } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  name: "DialogDemo",
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const beforeConfirm = () => {
      return false;
    };
    const beforeCancel = () => {};

    const showDialog = () => {
      openDialog({title:'提示',content:'<p>123</p>'})
    };
    return { x, toggle, beforeConfirm, beforeCancel, showDialog };
  },
};
</script>

<style scoped>
</style>
