<template>
  <div class="topnav">
    <div class="logo" @click="menuToggle">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue'

export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    const menuToggle = () => {
      menuVisible.value = !menuVisible.value
    }
    return {menuToggle}
  }
}
</script>

<style scoped lang="scss">
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;

  > .logo {
    max-width: 6em;
    margin-right: auto;
    cursor: pointer;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }
}
</style>
