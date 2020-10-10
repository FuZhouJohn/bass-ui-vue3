<template>
  <div class="bass-tabs">
    <div class="bass-tabs-nav">
      <div class="bass-tabs-nav-item" v-for="(t,i) in titles" :key="i">{{ t }}</div>
    </div>
    <div class="bass-tabs-content">
      <component class="bass-tabs-content-item" v-for="(c,i) in defaults" :key="i" :is="c"></component>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
export default {
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach(tag=>{
      if(tag.type !== Tab){
        throw new Error('Tabs 组件的子标签必须是 Tab 组件')
      }
    })
    const titles = defaults.map(tag=>{
      return tag.props.title
    })
    return {defaults,titles}
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.bass-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
