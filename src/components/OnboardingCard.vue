<template>
  <q-card class="my-card">
    <slot>
      <q-card-section>
        <div class="row no-wrap items-center"></div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pt-none text-center"> </q-card-section>
      <q-separator />
      <q-separator />
      <q-card-actions class="justify-center"> </q-card-actions>
    </slot>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "OnboardingCard",
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
