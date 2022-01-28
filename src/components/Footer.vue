<template>
    <div class="footer">
        <ul>
            <li v-for="list in lists">
                <a href="#">{{ list.item }}</a>
            </li>
        </ul>
        <div class="footer-icon">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-line"></i>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        lists: [
            { item: 'お問い合わせ' },
            { item: 'このサイトについて' },
            { item: '個人情報の取り扱い' },
            { item: '教職員の方へ' },
            { item: 'サイトマップ' },
        ],
    }),
};
</script>

<style scoped>
.footer {
    background-color: #222;
    padding: 25px 0;
    margin: 0;
}

.footer ul {
    list-style: none;
    display: flex;
    justify-content: center;
}

.footer li {
    border-right: 2px solid #fff;
}

.footer li:last-child {
    border-right: none;
}

.footer a {
    text-decoration: none;
    color: #fff;
    padding: 0 15px;
}

.footer a:hover {
    opacity: 0.7;
}

.footer-icon {
    display: flex;
    justify-content: center;
}

.fab {
    font-size: 1.4rem;
    color: #ccc;
    padding: 7px 5px 0 5px;
}
</style>
