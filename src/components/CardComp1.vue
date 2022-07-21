<template>
  <div class="q-pa-xl q-gutter-md ">
    <div class="container">
      <div class="col-4 text-center">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardComp1',

  setup() {
    return {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
})
</script>

<style lang="sass" scoped>

.my-card,q-btn
  width: 289px
  text-align: center
  font-size: 15px
.row
  margin-left: 180px
</style>
