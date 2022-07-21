<template>
  <q-page q-pa-md>
    <div class="container">
      <div class="row justify-center">
        <div class="col-4"></div>
        <div class="q-pa-xl text-center col-4">
          <h4>Introduza as informações da sua empresa ou negócio</h4>
          <Step2Form />
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Step2Form from "src/components/Step2Form.vue";

export default defineComponent({
  components: { Step2Form },

  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
