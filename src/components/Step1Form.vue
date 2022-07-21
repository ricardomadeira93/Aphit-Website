<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-card class="my-card">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pa-md">
        <q-input
          filled
          v-model="name"
          label="*O seu nome *"
          hint="Nome e sobrenome"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Por favor preencha o nome',
          ]"
        />

  

        <q-input
          filled
          v-model="email"
          label="*O seu email *"
          hint="Email"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length > 0) || 'Por favor introduza o seu email',
          ]"
        />

        <q-input
          filled
          type="number"
          v-model="age"
          hint="Idade"
          label="A sua Idade *"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Introduza a sua idade',
            (val) => (val > 0 && val < 100) || 'Please type a idade real',
          ]"
        />
        <q-input
          class="form-group"
          filled
          type="password"
          hint="Password"
          label="*A sua Palavra-Passe *"
          lazy-rules
        />

        <div>
          <q-btn label="Reset" type="reset" color="white" text-color="black" />
          <q-btn
            label="Retroceder"
            type="backward"
            color="white"
            text-color="black"
            to="/RegPage1"
            class="q-ml-sm"
          />
          <q-btn
            label="Seguinte"
            to="/RegPage2"
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
  name: "Step1Form",
  data() {
    return {
      password: "",
      has_minimum_lenth: false,
      has_number: false,
      has_lowercsae: false,
      has_uppercase: false,
      has_special: false,
    };
  },
  watch: {
    password() {
      this.has_minimum_lenth = this.password.length > 8;
      this.has_number = /\d/.test(this.password);
      this.has_lowercase = /[a-z]/.test(this.password);
      this.has_uppercase = /[A-Z]/.test(this.password);
      this.has_special = /[!@#\$%\^\&*\)\(+=._-]/.test(this.password);
    },
  },
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const email = ref(null);
    const accept = ref(false);

    return {
      name,
      age,
      accept,
      email,

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
        email.value = null;
        accept.value = false;
      },
    };
  },
});
</script>

<style lang="scss">
.my-card {
  width: 507px;
}
</style>
