<template>
    <div class="contents">
        <div class="main-visual-wrapper">
            <div class="main-visual">
                <slick :options="mainVisualSlide">
                    <img src="@/assets/univ-img1.jpg">
                    <img src="@/assets/univ-img2.jpg">
                    <img src="@/assets/univ-img3.jpg">
                    <img src="@/assets/univ-img4.jpg">
                </slick>
            </div>
        </div>
        <Pickup></Pickup>
        <News></News>
        <Events></Events>
        <Guide></Guide>
         <Sns></Sns>
    </div>
</template>

<script>
import Pickup from './PickupContent.vue';
import News from './NewsContent.vue';
import Events from './EventsContent.vue';
import Guide from './GuideContent.vue';
import Sns from './SnsContent.vue';
import Slick from 'vue-slick';
import '../../node_modules/slick-carousel/slick/slick.css';


export default {
  components: {
    Slick, Pickup, News, Events, Guide, Sns,
  },
  data: () => ({
    mainVisualSlide: {
      fade: true,
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      arrows: false,
      draggable: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      cssEase: 'linear',
    },
    snsSlide: {
      autoplay: true, 
      autoplaySpeed: 0,
      speed: 4500,
      cssEase: "linear",
      slidesToShow: 4,
      swipe: false,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false,
    },
  }),
};
</script>

<style scoped>
.main-visual-wrapper {
    width: 100%;
    background-color: #111;
}

.main-visual {
    width: 1260px;
    margin: 0 auto;
}

.main-visual img {
    width: 100%;
    vertical-align: bottom;
}

</style>
