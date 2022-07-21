<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-card class="my-card">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pa-md">
        <q-checkbox v-model="teal" label="Termos e Condições" color="primary" />
        <q-checkbox v-model="orange" label="Newsletter" color="primary" />
        <div>
          <q-btn
            label="Retroceder"
            type="backward"
            color="white"
            text-color="black"
            to="/RegPage2"
            class="q-ml-sm"
          />
          <q-btn
            label="Seguinte"
            to="/RegPage3"
            type="submit"
            color="primary"
            text-color="black"
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </q-card>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Step3Form",
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      accept,
      model: ref(null),
      options: ["Comércio", "Restauração"],
      teal: ref(true),
      orange: ref(false),
      red: ref(false),
      cyan: ref(true),

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
});
</script>

<style lang="scss">
.my-card {
  width: 450px;
}
</style>
