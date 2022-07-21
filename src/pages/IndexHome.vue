<template>
  <q-page q-pa-md>
    <CarrouselComp />
    <q-separator />
    <div class="row justify-center white bg-cards q-mt-xl">
      <CardComp1>
        <figure class="figura">
          <div class="profile-image">
            <q-icon class="fa-solid fa-bars" style="font-size: 36px"></q-icon>
          </div>
          <figcaption>
            <h4>Opções</h4>
            <q-btn color="orange" flat>...</q-btn>
            <p class="q-mt-md">
              Which is worse, that everyone has his price, or that the price is
              always so low.
            </p>
          </figcaption>
        </figure>
      </CardComp1>

      <CardComp2>
        <figure class="figura">
          <div class="profile-image">
            <q-icon
              class="fa-solid fa-question"
              style="font-size: 36px"
            ></q-icon>
          </div>
          <figcaption>
            <h4>Informação</h4>
            <q-btn flat color="orange" to="/AboutPage">Sobre</q-btn>
            <p class="q-mt-md">
              Which is worse, that everyone has his price, or that the price is
              always so low.
            </p>
            <div class="icons">
              <a href="#"><i class="ion-social-reddit"></i></a>
              <a href="#"> <i class="ion-social-twitter"></i></a>
              <a href="#"> <i class="ion-social-vimeo"></i></a>
            </div>
          </figcaption>
        </figure>
      </CardComp2>

      <CardComp3>
        <figure class="figura">
          <div class="profile-image">
            <q-icon class="fa-solid fa-phone" style="font-size: 36px"></q-icon>
          </div>
          <figcaption>
            <h4>Contactar</h4>
            <q-btn to="/ContactsPage" flat color="orange">Contactos</q-btn>
            <p class="q-mt-md">
              Which is worse, that everyone has his price, or that the price is
              always so low.
            </p>
            <div class="icons">
              <a href="#"><i class="ion-social-reddit"></i></a>
              <a href="#"> <i class="ion-social-twitter"></i></a>
              <a href="#"> <i class="ion-social-vimeo"></i></a>
            </div>
          </figcaption>
        </figure>
      </CardComp3>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import CarrouselComp from "src/components/CarrouselComp.vue";
import CardComp1 from "src/components/CardComp1.vue";
import CardComp2 from "src/components/CardComp1.vue";
import CardComp3 from "src/components/CardComp1.vue";
export default defineComponent({
  components: {
    CardComp1,
    CardComp2,
    CardComp3,
    CarrouselComp,
  },
  setup() {
    return {
      textoptions:
        "Diversos pacotes disponíveis dependendo da sua necessidade!",
      textabout: "Aphit is the best and most inovative software!",
      textcontacts: "Contacts us and get to know even more about Aphit!",
    };
  },
});
</script>

<style lang="css" scoped>
.bg-cards {
  height: 600px;
  background-color: white;
}

.figura {
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.62);
  overflow: hidden;
  margin: 10px;
  min-width: 250px;
  max-width: 310px;
  width: 100%;
  background-color: #ffffff;
  color: #2b2b2b;
  text-align: center;
  font-size: 16px;
}

.figura .profile-image {
  padding: 15% 10% 0;
}

.figura .profile-image img {
  max-width: 100%;
  vertical-align: top;
  position: relative;
  border-radius: 50%;
  max-width: 40%;
}

.figura figcaption {
  padding: 5% 10% 15%;
}

.figura .icons i:hover {
  color: #555;
}

.figura .icons i a {
  text-decoration: none;
}
</style>
