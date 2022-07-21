<template>
  <q-page q-pa-md>
    <div class="container">
      <q-separator />
      <div class="row justify-center grey-8 bg-cards">
        <div class="container">
          <CardTestemunhos>
            <ButtonsCards>
              <slot style="button-80">
                <div class="text-h4">**Nome**</div>
                <q-separator class="q-mt-md" />
                <q-card-section class="q-pt-md text-body1">{{
                  texttestemunhos
                }}</q-card-section>
              </slot>
            </ButtonsCards>
          </CardTestemunhos>
        </div>
      </div>
      <q-separator />
    </div>

    <div class="container">
      <div class="row row-cards justify-center text-center q-pa-xl">
        <div class="col-4">
          <OnboardingCard>
            <slot class="nome">
              <q-card class="my-card">
                <q-card-section>
                  <div class="row no-wrap items-center">
                    <div class="col text-h6">Pacote 1</div>
                  </div>
                </q-card-section>
                <q-separator />
                <q-card-section class="q-pt-sm">
                  <div class="text-h6 q-pa-md">Features</div>
                  <q-separator />
                  <div class="text-caption q-mt-sm text-bold text-grey">
                    <p>
                      Small plates, salads & sandwiches in an intimate setting.
                    </p>
                    <p>
                      Small plates, salads & sandwiches in an intimate setting.
                    </p>
                    <p>
                      Small plates, salads & sandwiches in an intimate setting.
                    </p>
                  </div>
                </q-card-section>

                <q-separator />
                <div class="text-h6 q-mt-md">10,99€/Mês</div>

                <q-card-actions class="justify-center">
                  <q-btn flat color="primary"> Adquirir </q-btn>
                </q-card-actions>
              </q-card>
            </slot>
          </OnboardingCard>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-center">
        <Step1Form />
      </div>
    </div>
    <div class="container">
      <div class="row justify-center">
        <Step2Form />
      </div>
    </div>
    <div class="container">
      <div class="row justify-center">
        <Menu />
        <Step3Form />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import CardTestemunhos from "src/components/CardTestemunhos.vue";
import OnboardingCard from "src/components/OnboardingCard.vue";
import Step1Form from "src/components/Step1Form.vue";
import Step2Form from "src/components/Step2Form.vue";
import Step3Form from "src/components/Step3Form.vue";
import Menu from "src/components/MenuComp.vue";

export default defineComponent({
  components: {
    CardTestemunhos,
    OnboardingCard,
    Step1Form,
    Step2Form,
    Step3Form,
    Menu,
  },
  setup() {
    return {
      texttestemunhos: "Amazed by Aphit.....",
    };
  },
});
</script>

<style lang="css" scoped>
.bg-cards {
  height: 600px;
}

.row-cards {
  margin-left: 180px;
}
</style>
