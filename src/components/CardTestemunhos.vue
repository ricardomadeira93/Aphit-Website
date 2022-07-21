<template>
  <div class="q-pa-xl q-gutter-md">
    <q-card class="my-card shadow-13 bordered q-mt-xl">
      <img class="imgcard" src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-card-section>
        <!-- Conteudo slots -->
        <slot></slot>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardTestemunhos",

  setup() {
    return {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
});
</script>

<style lang="sass" scoped>

.my-card,q-btn
  width: 289px

  text-align: center
  font-size: 15px
.row
  margin-left: 180px

.imgcard 
      border-radius: 50%

</style>
