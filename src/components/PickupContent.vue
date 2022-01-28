<template>
    <div class="pickup-wrapper">
        <h2>Pick Up</h2>
        <div class="pickup-contents">
            <carousel :per-page="3" :autoplay="true" :autoplayTimeout="4500" :loop="true" :navigation-enabled="true" navigation-next-label="＞" navigation-prev-label="＜">
                <slide v-for="pickup in pickups" :key="pickup.id">
                    <div class="pickup-item">
                        <a href="#">
                                <div class="pickup-read">
                                    <div class="read-more">READ MORE</div>
                                </div>
                                <img :src="pickup.url">
                            <div class="pickup-tittle">
                                <p>{{ pickup.tittle }}</p>
                            </div>
                        </a>
                    </div>
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
        Carousel, Slide,
    },
    data: () => ({
        pickups: [
      { id: 1, url: require('../assets/pickup-img1.jpg'), tittle: '新型コロナウィルス特設ページ' },
      { id: 2, url: require('../assets/pickup-img2.jpg'), tittle: '令和平成大学のSDGsへの取り組み' },
      { id: 3, url: require('../assets/pickup-img3.jpg'), tittle: 'オープンキャンパス2021 WEBでの体験も可能！' },
      { id: 4, url: require('../assets/pickup-img4.jpg'), tittle: 'あなたの就活をサポート！就職支援実施中' },
      { id: 5, url: require('../assets/pickup-img5.jpg'), tittle: '令和平成大学における国際交流' },
    ],
  }),
};
</script>

<style>
.pickup-wrapper {
    padding: 50px 0;
}

.pickup-wrapper h2 {
    font-size: 2.8rem;
    font-family: 'Fjalla One';
    letter-spacing: 3px;
    text-align: center;
}

.pickup-wrapper h2:first-letter {
    color: #333399;
}

.pickup-contents {
    width: 1550px;
    margin: 0 auto;
}

.pickup-item {
   width: 500px;
   transition: 0.5s ease;
   padding: 0 5px;
   box-sizing: border-box;
   position: relative;
   overflow: hidden;
}

.pickup-item a {
    text-decoration: none;
}

.pickup-item img {
    width: 100%;
    vertical-align: bottom;
}

.pickup-read {
    width: 490px;
    height: 325px;
    position: absolute;
    box-sizing: border-box;
    opacity: 0;
    background-color: rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease;
}

.read-more {
    font-size: 1.8rem;
    color: #fff;
}

.pickup-item:hover .pickup-read {
    opacity: 1;
    transition: 0.3s ease;
}

.pickup-tittle {
    font-size: 1.2rem;
    color: #111;
    text-align: center;
    border-bottom: 2px solid #333399;
    padding: 10px 0;
}

.pickup-tittle p {
    margin: 0;
}

</style>
