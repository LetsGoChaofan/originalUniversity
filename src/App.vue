<template>
  <div id="app">
    <HeaderNavi></HeaderNavi>
    <SubNavi></SubNavi>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderNavi from './components/HeaderNavi.vue';
import SubNavi from './components/SubNavi.vue';
import DocumentForm from './components/DocumentForm.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: { HeaderNavi, SubNavi, DocumentForm, Main, Footer },
};
</script>

<style>
body {
    margin: 0;
    font-family: 'Noto Sans JP', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN',
    'メイリオ', Meiryo, 'MS Pゴシック', 'MS PGothic', sans-serif;
}

</style>
