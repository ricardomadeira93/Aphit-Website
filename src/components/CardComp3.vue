<template>
  <div class="q-pa-md q-gutter-md ">
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-card-section class="q-pt-none">{{ lorem }}</q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardComp3',

  setup() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
})
</script>

<style lang="sass" scoped>

.my-card,q-btn
  width: 100%
  max-width: 350px
  text-align: center
  font-size: 15px
.row
  margin-left: 180px
</style>
