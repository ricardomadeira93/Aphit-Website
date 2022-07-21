<template>
  <q-page q-pa-md>
    <div class="container">
      <div class="row justify-center">
        <div class="col-4"></div>
        <div class="q-pa-xl text-center col-4">
          <h4>Introduza as suas informações</h4>
          <Step1Form />
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Step1Form from "src/components/Step1Form.vue";

export default defineComponent({
  components: { Step1Form },

  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
