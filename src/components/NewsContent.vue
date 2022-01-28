<template>
    <div class="news-wrapper">
        <div class="news">
            <h2>News</h2>
            <ul class="news-list">
                <li>
                    <div class="date-tag">
                        <time datetime="2021-11-02" class="time" >2021/11/02</time>
                        <p class="notice">お知らせ</p>
                    </div>
                    <p class="text-link">
                        <a href="#">TOEIC対策講座の実施について</a>
                    </p>
                </li>
                <li>
                    <div class="date-tag">
                        <time datetime="2021-10-27" class="time" >2021/10/27</time>
                        <p class="act">学生の活躍</p>
                    </div>
                    <p class="text-link">
                        <a href="#">かるた部が「第13回かるた大会」で優勝しました</a>
                    </p>
                </li>
                <li>
                    <div class="date-tag">
                        <time datetime="2021-10-25" class="time" >2021/10/25</time>
                        <p class="notice">お知らせ</p>
                    </div>
                    <p class="text-link">
                        <a href="#">「令和平成大学通信 vol.18」を発行しました</a>
                    </p>
                </li>
                <li>
                    <div class="date-tag">
                        <time datetime="2021-10-21" class="time" >2021/10/21</time>
                        <p class="important">重要</p>
                    </div>
                    <p class="text-link">
                        <a href="#">新型コロナウィルス感染症への対応について（まとめ）</a>
                    </p>
                </li>
                <li>
                    <div class="date-tag">
                        <time datetime="2021-10-21" class="time" >2021/10/21</time>
                        <p class="important">重要</p>
                    </div>
                    <p class="text-link">
                        <a href="#">一部施設の利用制限について</a>
                    </p>
                </li>
            </ul>
            <div class="news-footer">
                <a href="#" class="news-btn">もっと見る</a>
            </div>
        </div>
    </div>
</template>

<script>
    
</script>

<style>
.news-wrapper {
    background-color: #EEE;
    margin: 0;
    padding:  45px 0;
}

.news {
    width: 1260px;
    margin: auto;
}

.news h2 {
    font-size: 2.8rem;
    font-family: 'Fjalla One';
    margin: 0;
    letter-spacing: 3px;
}

.news h2:first-letter {
    color: #333399;
}

.news-list {
    background-color: #fff;
    list-style: none;
    padding: 0;
    margin: 0;
}

.news-list li {
    border-bottom: 1px solid #dcdcdc;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 100px;
    box-sizing: border-box;
}

.news-list p {
    margin: 0;
}

.date-tag {
    display: flex;
    flex-direction: column;
    width: 10%;
}

.notice::before {
    font-family: FontAwesome;
    content: '\f02b';
    color: #333399;
    margin-right: 5px;
}

.act::before {
    font-family: FontAwesome;
    content: '\f02b';
    color: #FF9933;
    margin-right: 5px;
}

.important::before {
    font-family: FontAwesome;
    content: '\f02b';
    color: #FF3333;
    margin-right: 5px;
}

.text-link a {
    color: black;
    text-decoration: none;
    transition: 0.4s;
    padding-left: 70px;
}

.text-link a:hover{
    opacity: 0.6;
    transition: 0.4s;
}

.news-footer {
    width: 100%;
    margin-top: 20px;
    text-align: center;
}

.news-btn {
    border: 1.5px solid #333399;
    padding: 10px 50px;
    text-decoration: none;
    background-color: #333399;
    color: #fff;
    font-size: 0.8rem;
    transition: 0.5s ease;
}

.news-btn:hover {
    background-color: #fff;
    color: #333399;
    transition: 0.5s ease;
}

</style>