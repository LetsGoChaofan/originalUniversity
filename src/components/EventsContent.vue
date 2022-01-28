<template>
    <div class="events-wrapper">
        <h2>Events</h2>
        <div class="event-box">
            <div class="event-item" v-for="event in events" :key="event.id">
                <a href="#">
                    <div class="event-date">
                        <p>{{ event.date }}</p>
                        <p class="event-day">{{ event.day }}</p>
                    </div>
                    <img :src="event.url">
                    <div class="event-tittle">{{ event.tittle }}</div>
                </a>
            </div>
        </div>
            <div class="event-footer">
                <a href="#" class="event-btn">イベント一覧</a>
            </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        events: [
      { id: 1, date: '11/17', day: 'Wed.', url: require('../assets/event-img1.jpg'), tittle: '第二回「SDGs～できることから少しずつ～」' },
      { id: 2, date: '11/08', day: 'Mon.', url: require('../assets/event-img2.jpg'), tittle: 'オンラインTOEIC対策講座' },
      { id: 3, date: '11/06', day: 'Sat.', url: require('../assets/event-img3.jpg'), tittle: '世界のお茶を飲み比べ「お茶フェス」開催' },
      { id: 4, date: '10/26', day: 'Tue.', url: require('../assets/event-img4.jpg'), tittle: '大学太郎教授講演会「AIの進化がもたらす生活の変化」' },
      { id: 5, date: '10/08', day: 'Fri.', url: require('../assets/event-img5.jpg'), tittle: '令和平成祭' },
      { id: 6, date: '10/04', day: 'Mon.', url: require('../assets/event-img6.jpg'), tittle: '公務員志望者向け講座' },
    ],
  }),
};
</script>

<style>
.events-wrapper {
    background-image: url('../assets/background/background1.jpg');
    background-size: cover;
    padding: 45px 0;
}


.events-wrapper h2 {
    font-size: 3rem;
    font-family: 'Fjalla One';
    letter-spacing: 3px;
    text-align: center;
}

.events-wrapper h2:first-letter {
    color: #333399;
}

.event-box {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.event-item {
    position: relative;
    width: 480px;
    margin: 20px 25px;
    transition: 0.5s ease;
}

.event-item:hover {
    transition: 0.5s ease;
    opacity: 0.7;
}

.event-item img {
    width: 100%;
}

.event-date {
    width: 110px;
    height: 110px;
    position: absolute;
    top: -35px;
    left: -35px;
    font-size: 1.7rem;
    font-family: 'Oswald';
    box-sizing: border-box;
    border-radius: 50%;
    border: 3px solid #333399;
    background-color: white;
    color: #333399;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.event-date p {
    margin: 0;
}

.event-day {
    font-size: 1.3rem;
}

.event-tittle {
    width: 100%;
    position: absolute;
    bottom: 5px;
    padding: 15px;
    box-sizing: border-box;
    background-color: rgba(51, 51, 153, 0.7);
    color: #fff;
}

.event-footer {
    width: 100%;
    margin-top: 20px;
    text-align: center;
}

.event-btn {
    border: 1.5px solid #333399;
    padding: 10px 50px;
    text-decoration: none;
    background-color: #333399;
    color: #fff;
    font-size: 0.8rem;
    transition: 0.5s ease;
}

.event-btn:hover {
    background-color: #fff;
    color: #333399;
    transition: 0.5s ease;
}

</style>
