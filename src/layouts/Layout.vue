<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="row navbar" style="background-color: white">
        <div class="col-4 menu text-center">
          <Menu/>
        </div>
          <div class="col-4"></div>
        <div class="col-4 text-right">
          <q-btn
            class="q-ma-sm"
            flat
            :ripple="false"
            icon="fa-brands fa-youtube"
            size="20px"
            color="black"
          ></q-btn>
          <q-btn
            class="q-ma-sm"
            flat
            :ripple="false"
            icon="fa-brands fa-whatsapp"
            size="20px"
            color="black"
          ></q-btn>
          <q-btn
            class="q-ma-sm"
            flat
            :ripple="false"
            icon="fa-brands fa-facebook"
            size="20px"
            color="black"
          ></q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Menu from "src/components/MenuComp.vue";
import { defineComponent, ref } from "vue";
export default {
  name: "MainLayout",
  components: { Menu },
  setup() {
    return {
      link: ref("inbox"),
    };
  },
};
</script>

<style lang="scss">
.my-menu-link {
  color: white;
}

.btn-nav {
  background-color: #ffffff;
  height: 5px;
}

.lista-menu {
  top: 43px;
  left: 880.859px;
}

.navbar {
  height: 130px;
}

.row {
  font-size: 16px;
  font-weight: 500;
}

.botao {
  font-size: 18px;
}

.menu {
  color: black;
}
</style>
