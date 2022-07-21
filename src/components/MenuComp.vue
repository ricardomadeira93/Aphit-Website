<template>
  <div class="menu" :class="{ 'small-menu': smallMenu }">
    <MenuItem v-for="(item, index) in menuTree" :key="index"
    :data="item.children" :label="item.label"  :to="item.path"
    :depth="0" :smallMenu="smallMenu"> </MenuItem>
    <i @click="smallMenu = !smallMenu" class="material-icons">menu</i>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MenuItem from "src/components/MenuItemComp.vue";
import axios from "axios"

export default defineComponent({
  name: "recursive-menu",
  data: () => ({
    smallMenu: false,
    menuTree: [
      {
        label: "Home",
        icon: "fa-solid fa-house",
        path: "/",
      },
      {
        label: "Contacts",
        icon: "dashboard",
        path: "/ContactsPage",
        children: [
          {
            label: "level 2.1",
          },
        ],
      },
      {
        label: "About",
        icon: "settings",
        path: "/AboutPage",
      },
    ],
  }),
  components: {
    MenuItem,
  },
});
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  height: 100vh;
  width: 240px;
  left: 0;
  top: 0;
  border-right: 1px solid #ececec;
  transition: all 0.3s ease;
  overflow: auto;
  z-index: 1;
  background-color: white;
  i {
    position: fixed;
    left: 250px;
    font-size: 20px;
    top: 15px;
    user-select: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  &.small-menu {
    overflow: inherit     ;  
    width: 60px;
    padding-top: 50px;
    i {
      left: 20px;
    }
  }
}
</style>
