<template>
  <div class="topnav">
    <div class="logo"><router-link to="/">LOGO</router-link></div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="menuToggle">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </span>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    position: absolute;
    left: 16px;
    cursor: pointer;
    display: none;
    font-size: 22px;
  }

  @media (max-width: 500px) {
    > .menu {display: none}
    > .logo {margin: 0 auto}
    > .toggleAside {display: inline-block}
  }
}
</style>
