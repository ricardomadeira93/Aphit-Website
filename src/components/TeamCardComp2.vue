<template>
  <div class="q-pa-xl q-gutter-md">
      <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TeamCardComp2',



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
