<template>
  <div>
    <div v-for="(t,i) in titles" :key="i">{{t}}</div>
    <component v-for="(c,i) in defaults" :key="i" :is="c"></component>
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

<style scoped>

</style>
