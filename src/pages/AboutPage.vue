<template>
  <div class="" style="height: 100%">
    <div class="row text-center justify-center">
      <q-item-label>
        <h5>A equipa</h5>
      </q-item-label>
    </div>
    <div class="" style="height: 100%">
      <div class="row text-center justify-center">
        <TeamCardComp1>
          <slot>
            <figure class="figura">
              <div class="profile-image">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg"
                  alt="profile-sample2"
                />
              </div>
              <figcaption>
                <h3>Sue Shei</h3>
                <h5>Founder</h5>
                <p>
                  Which is worse, that everyone has his price, or that the price
                  is always so low.
                </p>
                <div class="icons">
                  <a href="#"><i class="ion-social-reddit"></i></a>
                  <a href="#"> <i class="ion-social-twitter"></i></a>
                  <a href="#"> <i class="ion-social-vimeo"></i></a>
                </div>
              </figcaption>
            </figure>
          </slot>
        </TeamCardComp1>
        <TeamCardComp2>
          <slot>
            <figure class="figura">
              <div class="profile-image">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample2.jpg"
                  alt="profile-sample2"
                />
              </div>
              <figcaption>
                <h3>Sue Shei</h3>
                <h5>Founder</h5>
                <p>
                  Which is worse, that everyone has his price, or that the price
                  is always so low.
                </p>
                <div class="icons">
                  <a href="#"><i class="ion-social-reddit"></i></a>
                  <a href="#"> <i class="ion-social-twitter"></i></a>
                  <a href="#"> <i class="ion-social-vimeo"></i></a>
                </div>
              </figcaption>
            </figure>
          </slot>
        </TeamCardComp2>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TeamCardComp1 from "src/components/TeamCardComp1.vue";
import TeamCardComp2 from "src/components/TeamCardComp2.vue";

export default defineComponent({
  components: {  TeamCardComp1, TeamCardComp2 },

  setup() {
    return {
      nomeelemento1: "David",
      nomeelemento2: "Pedro",
      textoelemento1: "A sua paixão....",
      textoelemento2: "A sua paixão....",
      textabout: "A missão do Aphit é",
    };
  },
});
</script>

<style lang="scss" scoped>
.txt {
  font-weight: bold;
  font-size: 20px;
}

.txt-desc {
  font-size: 18px;
  font-weight: 500;
}

.figura {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
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
