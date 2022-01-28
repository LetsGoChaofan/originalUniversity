<template>
    <div class="sub-navi">
        <ul class="target-list">
            <li v-for="target in targets">
                <a href="#">{{ target.item }}</a>
            </li>
        </ul>
        <ul class="utility-navi">
            <li><a href="#" class="inquiry">お問い合わせ</a></li>
            <li><a href="#" class="access">アクセス</a></li>
            <li><a href="#" class="langage">Langage</a></li>
            <li>
                <router-link to="/Document" class="document-request">資料請求</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: () => ({
        targets: [
            { item: '受験生の方' },
            { item: '在校生の方' },
            { item: '卒業生の方' },
            { item: '保護者の方' },
            { item: '企業の方' },
            ],
    }),
};
</script>

<style scoped>
.sub-navi {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
}

.sub-navi ul {
    margin: 0;
    padding: 0;
}

.target-list {
    display: flex;
    justify-content: center;
    align-content: center;
    list-style: none;
    width: 60%;
    background-color: #4169E1;
}

.target-list li {
    border-right: solid 1px white;
    box-sizing: border-box;
    width: 100%;
}

.target-list li a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    position: relative;
    transition: all 0.3s ease;
}

.target-list a:hover {
    background-color: #4689FF;
}

.utility-navi {
    display: flex;
    height: 100%;
    width: 40%;
    justify-content: center;
    align-items: center;
    list-style: none;
    border-left: 1px solid gray;
    box-sizing: border-box;
    background-color: #333;
}

.utility-navi li {
    width: 100%;
    border-right: solid 1px white;
    box-sizing: border-box;
}

.utility-navi li:last-child {
    border: none;
}

.utility-navi li a {
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    text-decoration: none;
    transition: all 0.4s ease;
}

.utility-navi a:hover {
    background-color: #555;
}

.inquiry::before {
    font-family: FontAwesome;
    content: '\f0e0';
    display: flex;
    align-items: center;
    margin-right: 5px;
}

.access::before {
    font-family: FontAwesome;
    content: '\f3c5';
    display: flex;
    align-items: center;
    margin-right: 5px;
}

.langage::before {
    font-family: FontAwesome;
    content: '\f0ac';
    display: flex;
    align-items: center;
    margin-right: 5px;
}

.document-request::before {
    font-family: FontAwesome;
    content: '\f518';
    display: flex;
    align-items: center;
    margin-right: 5px;
}
</style>
