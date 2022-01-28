<template>
    <div class="main-wrapper">
        <div class="home-link">
            <ul>
                <li><a href="/">ホーム</a></li>
                <li>資料請求</li>
            </ul>
        </div>
        <div class="page-tittle">
                <h2 class="form-tittle">資料請求</h2>
        </div>
        <div class="form-contents">
            <div class="tittle-area">
                <h2 class="h2-tittle">資料請求フォーム</h2>
            </div>
            <!-- ここからform -->
            <form>
                <!-- ここから資料選択欄 -->
                <dl class="form-box">
                    <dt>
                        ご希望の資料
                        <span>必須</span>
                    </dt>
                    <dd>
                        <ul>
                            <li>
                                <input type="checkbox">
                                <label>大学案内2022</label>
                            </li>
                            <li>
                                <input type="checkbox">
                                <label>入試案内2022</label>
                            </li>
                            <li>
                                <input type="checkbox">
                                <label>入学試験問題集</label>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <!-- ここまで資料選択欄 -->
                <!-- ここから名前記入欄 -->
                <dl class="form-box name-area">
                    <dt>
                        氏名
                        <span>必須</span>
                    </dt>
                    <dd>
                        <label>姓</label>
                        <validation-provider rules="required" v-slot="{ errors }" mode="lazy">
                            <input type="text" v-model="name1" placeholder="令和" autocomplete="family-name">
                            <span class="error">{{ errors[0] }}</span>
                        </validation-provider>
                    </dd>
                    <dd>
                        <label>名</label>
                        <validation-provider rules="required" v-slot="{ errors }" mode="lazy">
                            <input type="text" v-model="name2" placeholder="太郎" autocomplete="given-name" >
                            <span class="error">{{ errors[0] }}</span>
                        </validation-provider>
                    </dd>
                </dl>
                <dl class="form-box name-area">
                    <dt>
                        ふりがな
                        <span>必須</span>
                    </dt>
                    <dd>
                        <label>せい</label>
                        <validation-provider rules="required" v-slot="{ errors }" mode="lazy">
                            <input type="text" v-model="name3" placeholder="れいわ">
                            <span class="error">{{ errors[0] }}</span>
                        </validation-provider>
                    </dd>
                    <dd>
                        <label>めい</label>
                        <validation-provider rules="required" v-slot="{ errors }" mode="lazy">
                            <input type="text" v-model="name4" placeholder="たろう">
                            <span class="error">{{ errors[0] }}</span>
                        </validation-provider>
                    </dd>
                </dl>
                <!-- ここまで名前記入欄 -->
                <!-- ここから生年月日記入欄 -->
                <dl class="form-box birth-area">
                    <dt>
                        生年月日
                        <span>必須</span>
                    </dt>
                    <dd>
                        <validation-provider rules="required" v-slot="{ errors }" mode="lazy">
                            <input type="text" v-model="birthDay" placeholder="2021年01月01日">
                            <span class="error">{{ errors[0] }}</span>
                        </validation-provider>
                    </dd>
                </dl>
                <!-- ここまで生年月日記入欄 -->
                <!-- ここから性別選択欄 -->
                <dl class="form-box sex-area">
                    <dt>
                        性別
                        <span>必須</span>
                    </dt>
                    <dd>
                        <input type="radio" name="sex">
                        <label>男性</label>
                    </dd>
                    <dd>
                        <input type="radio" name="sex">
                        <label>女性</label>
                    </dd>
                </dl>
                <!-- ここまで性別選択欄 -->
                <!-- ここから住所記入欄 -->
                <dl class="form-box address-area">
                    <dt>
                        住所
                        <span>必須</span>
                    </dt>
                    <dd>
                        <ul>
                            <li>
                                <label>郵便番号</label>
                                <validation-provider rules="required" v-slot="{ errors }" mode="lazy">
                                    <input type="text" v-model="postalCode" placeholder="1234567" size="8" maxlength="8" onKeyUp="AjaxZip3.zip2addr(this,'','pref','addr');">
                                    <span class="error">{{ errors[0] }}</span>
                                </validation-provider>
                            </li>
                            <li>
                                <label>都道府県</label>
                                <validation-provider rules="required" v-slot="{ errors }" mode="lazy">
                                    <input type="text" name="pref" v-model="prefecture" placeholder="東京都">
                                    <span class="error">{{ errors[0] }}</span>
                                </validation-provider>
                            </li>
                            <li>
                                <label>市区町村</label>
                                <validation-provider rules="required" v-slot="{ errors }" mode="lazy">
                                    <input type="text" name="addr" v-model="address" placeholder="渋谷区上原町">
                                    <span class="error">{{ errors[0] }}</span>
                                </validation-provider>
                            </li>
                            <li>
                                <label>丁目・番地</label>
                                <validation-provider rules="required" v-slot="{ errors }" mode="lazy">
                                    <input type="text" v-model="houseNumber" placeholder="1-1-1">
                                    <span class="error">{{ errors[0] }}</span>
                                </validation-provider>
                            </li>
                            <li>
                                <label>マンション名・部屋番号</label>
                                <input type="text" placeholder="×××ビル101号">
                            </li>
                        </ul>
                    </dd>
                </dl>
                <!-- ここまで住所記入欄 -->
                <!-- ここから電話番号記入欄 -->
                <dl class="form-box number-area">
                    <dt>電話番号</dt>
                    <dd>
                        <input type="text" placeholder="0312340001" autocomplete="tel">
                    </dd>
                </dl>
                <!-- ここまで電話番号記入欄 -->
                <!-- ここからメールアドレス記入欄 -->
                <dl class="form-box mail-area">
                    <dt>
                        メールアドレス
                        <span>必須</span>
                    </dt>
                    <dd>
                        <validation-provider rules="required|email" v-slot="{ errors }" mode="lazy">
                            <input type="text" v-model="email" placeholder="sample@co.jp">
                            <span class="error">{{ errors[0] }}</span>
                        </validation-provider>
                    </dd>
                </dl>
                <!-- ここまでメールアドレス記入欄 -->
                <!-- ここから区分選択欄 -->
                <dl class="form-box job-area">
                    <dt>
                        区分
                        <span>必須</span>
                    </dt>
                    <dd>
                        <select class="job-select">
                            <option value selected>選択してください</option>
                            <option value="1">高校1年生</option>
                            <option value="2">高校2年生</option>
                            <option value="3">高校3年生</option>
                            <option value="4">予備校生</option>
                            <option value="5">短大生</option>
                            <option value="6">専門学生</option>
                            <option value="7">大学院生</option>
                            <option value="8">中学生</option>
                            <option value="9">社会人</option>
                            <option value="10">保護者</option>
                            <option value="11">その他</option>
                        </select>
                    </dd>
                </dl>
                <!-- ここまで区分選択欄 -->
                <!-- ここから学校名記入欄 -->
                <dl class="form-box school-area">
                    <dt>学校名</dt>
                    <dd>
                        <input type="text">
                    </dd>
                </dl>
                <!-- ここまで学校名記入欄 -->
                <!-- ここから個人情報の取り扱いについて -->
                <div class="privacy">
                    <h3 class="h3-tittle">個人情報の取り扱いについて</h3>
                    <p>
                        本フォームにご記入していただいた個人情報は、その利用目的の範囲において、適切な取り扱いをいたします。
                        <br>
                        1.大学案内、入試案内、入試試験問題集の発送
                        <br>
                        2.メールによる本学に関する情報の提供
                        <br>
                        3.個人を特定しない、統計情報としての利用
                        <br>
                        上記1～3を行うために利用いたします。
                    </p>
                </div>
                <div class="btn-area">
                    <!-- データの送信機能は未実装 -->
                    <button class="btn">
                        <span>入力内容の確認へ</span>
                        <i class="icon fas fa-chevron-right"></i>
                    </button>
                </div>
            </form>
            <!-- ここまでform -->
        </div>
    </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: '入力してください。',
});

extend('email', {
  ...email,
  message: '正しいメールアドレスを入力してください。',
});

export default {
  components: {
    ValidationProvider,
  },
  data: () => ({
        name1: '',
        name2: '',
        name3: '',
        name4: '',
        birthDay: '',
        postalCode: '',
        prefecture: '',
        address: '',
        houseNumber: '',
        email: '',
  }),
};
</script>

<style scoped>
.page-tittle {
    padding: 100px 0;
    display: flex;
    align-items: center;
}

.form-tittle {
    color: #333;
    font-family: 'MS Mincho';
    font-size: 2.8rem;
    width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    position: relative;
}

.form-tittle::before {
    position: absolute;
    content: '';
    left: 50%;
    bottom: -20px;
    display: inline-block;
    width: 60px;
    height: 5px;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    background-color: #4169E1;
    border-radius: 3px;
}

.home-link {
    width: 960px;
}

.home-link ul {
    list-style: none;
    margin: 0;
    display: flex;
    font-weight: bold;
}

.home-link li:last-child::before {
    content: '＞';
    font-size: 0.9rem;
    padding: 0 5px;
    font-weight: bold;
}

.home-link a {
    transition: 0.5s ease;
}
.home-link a:hover {
    text-decoration: none;
}

.form-contents {
    width: 960px;
    margin: 0 auto;
}

.h2-tittle {
    font-size: 2rem;
    font-family: 'MS Mincho';
    border-left: 5px solid #4169E1;
    box-sizing: border-box;
    padding-left: 20px;
}

.form-box {
    border-top: 2px solid #CCC;
    padding: 25px 0;
    margin: 0;
    display: flex;
}

.form-box dt {
    width: 200px;
}

.form-box dt span {
    color: #CC0000;
    padding-left: 10px;
}

.form-box dd {
    color: #333;
}

.form-box dd ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.form-box dd li {
    padding-bottom: 20px;
}

.form-box dd li:last-child {
    padding: 0;
}

input{
    border: 2px solid #d3d3d3;
    border-radius: 3px;
    font-size: 100%;
}

input[type="text"]:focus {
    border: 2px solid #4169E1;
    outline: none;
}

.name-area input {
    padding: 8px;
    margin-left: 5px;
}

.birth-area input {
    padding: 8px;
}

.sex-area dd {
    display: flex;
    align-items: center;
}

.sex-area input {
    width: 17px;
    height: 17px;
}

.address-area input {
    padding: 10px;
    margin-left: 5px;
    display: block;
}

.number-area input {
    padding: 8px;
}

.mail-area input {
    padding: 8px;
    width: 250px;
    box-sizing: border-box;
}

.job-select {
    padding: 8px;
    width: 230px;
    box-sizing: border-box;
    font-size: 100%;
}

.school-area {
    border-bottom: 2px solid #CCC;
}

.school-area input {
    padding: 8px;
    width: 200px;
    box-sizing: border-box;
}

.privacy {
    margin-top: 70px;
    border: 2px solid #4169E1;
}

.privacy p {
    margin: 20px;
}

.h3-tittle {
    text-align: center;
}

.btn-area {
    text-align: center;
    margin: 80px 0;
}

.btn {
    border: 1px solid #4169E1;
    color: white;
    text-decoration: none;
    background-color: #4169E1;
    width: 400px;
    padding: 15px 0;
    font-size: 1.5rem;
    box-sizing: border-box;
    position: relative;
    transition: 0.4s;
    z-index: 1;
}

.btn::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: white;
    transform-origin: 0% 50%;
    transform: scaleX(0);
    transition: 0.4s;
}

.btn:hover {
    color: #4169E1;
}

.btn:hover::before {
    transform-origin: 0% 50%;
    transform: scaleX(1);
}

.btn span {
    display: block;
    width: 100%;
}

.icon {
    position: absolute;
    top: 50%;
    right: 5%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.error {
    display: block;
    color: red;
    margin: 5px 0 0 10px;
    font-size: 0.9rem;
}

</style>
