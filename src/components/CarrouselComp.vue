<template>
  <q-carousel arrows animated v-model="slide" height="614px">
    <q-carousel-slide
      name="first"
      img-src="https://www.awwwards.com/awards/sites_of_the_day/2022/04/Richard-Ekwonye-cover.jpg"
    >
      <div class="content q-mt-xl">
        <div class="row ">
          <div class="col-12">
            <h3 class="titulo-aphit text-white">Aphit</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="text-center text-white descaphit">{{ descaphit }}</p>
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide
      name="Second"
      img-src="https://www.awwwards.com/awards/sites_of_the_day/2022/04/Richard-Ekwonye-cover.jpg"
    >
      <div class="row">
        <div class="col-6">
          <div class="custom-title"></div>
        </div>
      </div>

      <div class="content">
        <div class="row">
          <div class="col-12">
            <h3 class="titulo-aphit text-white">O Aphit</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="text-center text-white descaphit">{{ descaphit2 }}</p>
          </div>
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "CarrouselComp",

  setup() {
    return {
      slide: ref("first"),
      titulo: "APHIT",

      descaphit:
        "Aphit é o melhor software de faturação para gestão de contas a pagar, receber e faturas.",
      descaphit2:
        "Com o Aphit, você pode faturar seus clientes de forma rápida e eficiente.",
    };
  },
});
</script>

<style lang="scss" scoped>
.custom-title {
  text-align: left;
  padding: 12px;
  text-color: white;
}
.socials {
  text-align: right;
  padding: 12px;
  text-color: white;
}

.descaphit {
  font-size: 18px;
  margin-left: 17px;
  margin-bottom: 15px;
}

.carousel {
  position: relative;
  display: flex;
}

.slides {
  position: relative;
  top: -4em;
  left: 10em;
}

.content {
  text-align: center;
}

.img {
  position: absolute;
  width: 450px;
  height: 450px;
  opacity: 0;
  z-index: 9999;

  &.active {
    opacity: 1;
  }
}
</style>
