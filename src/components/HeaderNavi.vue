<template>
    <div class="header">
            <h1>
                <a href="/" class="header-logo">
                    <img src="@/assets/logo/university-logo.png" alt="令和平成大学">
                </a>
            </h1>
            <nav class="gnav">
                <ul>
                    <li v-for="menu in menus">
                        <a href="#">{{ menu.item }}</a>
                    </li>
                </ul>
            </nav>
            <button class="menu-btn" @click="isActive=!isActive">
                <i class="fas fa-bars"></i>
            </button>
            <div class="menu" v-show="isActive">
                <ul>
                    <li v-for="menu in menus">
                        <a href="#">{{ menu.item }}</a>
                    </li>
                </ul>
            </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        isActive: false,
        menus: [
            { item: '大学紹介'},
            { item: '学部・大学院'},
            { item: '入試情報'},
            { item: '学生生活'},
            { item: '国際交流・留学'},
            { item: '就職・キャリア'},
            ],
    }),
};
</script>

<style scoped>
.header {
    display: flex;
    height: 100px;
    width: 100%;
    align-items: center;
}

.header h1 {
    margin: 0;
    padding: 0;
    width: 240px;
}

.gnav {
    height: 100%;
    width: 100%;
}

.gnav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
}

.gnav li {
    width: 100%;
}

.gnav li a {
    font-weight: bold;
    font-size: 20px;
    color: #333;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    position: relative;
}

.gnav a::before, .gnav a::after {
    position: absolute;
    border-bottom: 4px solid #0000BB;
    content: '';
    transition: all 0.4s ease;
    width: 0;
    bottom: 0;
    display: block;
}

.gnav a::before {
    left: 50%;
}

.gnav a:after {
    right: 50%;
}

.gnav a:hover::before, .gnav a:hover::after {
    width: 50%;
}

.gnav a:hover, .header-logo:hover {
    color: rgba(0,0,0,0.6);
}

</style>
