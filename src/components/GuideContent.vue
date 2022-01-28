<template>
    <div class="guide-wrapper">
        <div class="guide-box">
            <div class="guide-item" v-for="guide in guides" :key="guide.id">
                <a href="#">
                    <div class="guide-tittle">
                        <p>{{ guide.tittle }}</p>
                    </div>
                    <img :src="guide.url">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        guides: [
      { id: 1, url: require('../assets/guide-img1.jpg'), tittle: 'キャンパスガイド' },
      { id: 2, url: require('../assets/guide-img2.jpg'), tittle: '研究' },
      { id: 3, url: require('../assets/guide-img3.jpg'), tittle: '図書館' },
      { id: 4, url: require('../assets/guide-img4.jpg'), tittle: 'ご支援をお考えの方' },
      { id: 5, url: require('../assets/guide-img5.jpg'), tittle: '入試・受験' },
      { id: 6, url: require('../assets/guide-img6.jpg'), tittle: '採用情報' },
    ],
  }),
};
</script>

<style>

.guide-wrapper {
    background-color: #222;
    padding: 100px 0;
}

.guide-box {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.guide-item {
    width: 500px;
    height: 200px;
    overflow: hidden;
    position: relative;
}

.guide-item img {
    width: 100%;
    height: 100%;
}

.guide-tittle {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
	background-color: rgba(0,0,0,0.4);
	font-weight: bold;
	transition: all 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.guide-tittle p {
    font-size: 2.2rem;
	text-align: center;
	color:	#fff;
}

.guide-tittle:hover {
    opacity: 1;
	transform: scale(1.5);
}

</style>