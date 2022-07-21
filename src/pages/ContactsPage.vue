<template>
  <q-page q-pa-md style="height:100%">
    <div class="" style="height:900px">
      <div class="row text-center justify-center q-pa-xl" style="height:100%">
        <FormComp>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6168.341103953585!2d-9.143832132542528!3d39.375016222883026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18b3a59a4aa165%3A0x442dfaf3e16221e!2zU29sdcOnb2VzLCBJbmZvcm3DoXRpY2EgRWxlY3Ryw7NuaWNhIGUgU2VydmnDp29z!5e0!3m2!1spt-PT!2spt!4v1648222778639!5m2!1spt-PT!2spt"
            width="100%"
            height="450"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            q-pt-md
          ></iframe>
          <div class="q-pa-md bg-grey-2 text-center">
            <q-card-section>
              <div class="row no-wrap">
                <div class="col text-h6 ellipsis">{{ nomeEmpresa }}</div>
              </div>
              <q-separator />
              <p class="text-caption q-mt-md">{{ rua }}</p>
              <q-separator />
              <p class="text-caption q-mt-md">{{ telefone }}</p>
              <q-separator />
              <p class="text-caption q-mt-md">{{ email }}</p>
            </q-card-section>
            <div class="row justify-center">
              <q-card-actions text-center>
                <q-btn col-6 flat color="orange">{{ website }}</q-btn>
                <q-btn col-6 flat color="orange">{{ website }}</q-btn>
              </q-card-actions>
            </div>
          </div>
        </FormComp>
      </div>
    </div>
    
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import FormComp from 'src/components/FormComp.vue'


export default defineComponent({
  components: {  FormComp },

  setup() {
    return {
      nomeEmpresa: 'Empresa',
      rua: 'Rua Lorem Lorem Lorem Lorem',
      telefone: '933 333 333',
      email: 'fewfwfwe@gmail.com',
      website: 'https://www.facebook.com/aphit.pt/'
    }
  }



})


</script>

<style lang="scss" scoped>
.row,p {
  font-size: 14px;
  font-weight: 600;
}

</style>
