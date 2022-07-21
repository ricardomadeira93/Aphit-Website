<template>
  <q-page q-pa-md>
    <div class="container">
      <div class="row justify-center">
        <div class="col-4"></div>
        <div class="q-pa-xl text-center col-4">
          <h4>Termos e Condições de utilização</h4>
          <Step3Form />
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Step3Form from "src/components/Step3Form.vue";

export default defineComponent({
  components: { Step3Form },

  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
