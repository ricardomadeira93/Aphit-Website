<template>
    <slot></slot>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormComp',



  setup() {
    return {
    }
  },


})



</script>


<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
