<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-card class="my-card">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pa-md">
        <q-input
          filled
          v-model="name"
          label="*O nome da sua empresa *"
          hint="Nome da Empresa"
          lazy-rules
        />
        <q-input
          filled
          v-model="age"
          label="*NIF*"
          hint="Número de Identificação Fiscal"
          lazy-rules
        />
        <q-input
          filled
          v-model="number"
          label="*Número de Telefone*"
          hint="Tel."
          lazy-rules
        />

        <div>
          <q-btn label="Reset" type="reset" color="white" text-color="black" />
          <q-btn
            label="Retroceder"
            type="backward"
            color="white"
            text-color="black"
            to="/RegPage"
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
  name: "Step2Form",
  
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

 
    return {
      name,
      age,
      accept,

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
