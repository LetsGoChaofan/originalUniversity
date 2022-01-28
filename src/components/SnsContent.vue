<template>
   <div class="sns-wrapper">
        <p>ハッシュタグ<span>令平photo</span>で大学の思い出をSNSにアップしよう</p>
        <div class="icon-area">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
        </div>
        <div class="sns-box">
            <slick :options="snsSlide">
                <img src="@/assets/sns-img1.jpg">
                <img src="@/assets/sns-img2.jpg">
                <img src="@/assets/sns-img3.jpg">
                <img src="@/assets/sns-img4.jpg">
                <img src="@/assets/sns-img5.jpg">
                <img src="@/assets/sns-img6.jpg">
            </slick>
        </div>
    </div>
</template>

<script>
import Slick from 'vue-slick';
import '../../node_modules/slick-carousel/slick/slick.css';

export default {
    components: {
        Slick
    },
    data: () => ({
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

<style>
.sns-wrapper {
    background-color: #fff;
    margin: 0;
    padding-top: 40px;
}

.sns-wrapper p {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    text-align: center;
}

.sns-wrapper span {
    color: #33CCFF;
}

.sns-wrapper span::before {
    content: '\f292';
    font-family: FontAwesome;
}

.icon-area {
    padding: 20px 0 70px 0;
    display: flex;
    justify-content: center;
}

.fab {
    font-size: 5rem;
    margin: 0 10px;
}

.fa-facebook-square {
    color: #3b5998;
}

.fa-twitter {
    color: #1da1f2;
}

.fa-instagram {
    color: #e1306c;
}

.sns-box img {
    width: 400px;
    border-top: 7px solid #333399;
    border-bottom: 7px solid #333399;
    vertical-align: bottom;
}

</style>