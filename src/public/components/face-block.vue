<template>
    <div class="faceBlock">
        <div class="container">
            <nav aria-label="breadcrumb">
            <!-- TODO 3 добавить полный функционал страниц -->
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Главная</a></li>
                        <li class="breadcrumb-item"><a href="">СЕРВИС</a></li>
                        <li class="breadcrumb-item active" aria-current="page">МОДЕЛЬ</li>
                    </ol>
            </nav>
            <div class="mainInfo">
                <div class="mainInfoWrapper">
                    <h1>{{ h1 }}</h1>
                    <div class="mainInfoGoodsWithApple">
                        <div class="mainInfoGoodsWithoutApple">
                            <ol class="goods">
                                <li>
                                    <p>С выездом <strong>мастера на дом</strong></p>
                                </li>
                                <li>
                                    <p><strong>Оригинальные</strong> запчасти</p>
                                </li>
                                <li>
                                    <p>Круглосуточно <strong>24 часа</strong></p>
                                </li>
                                <li>
                                    <p>Срочный ремонт <strong>6-7 минут</strong></p>
                                </li>
                            </ol>
                            <div class="twoBtns">
                                <button class="blueBtn" @click="model()">
                                    <span>от {{ countPrice }} руб.</span>
                                    <span class="subSpan">Заявка на ремонт</span>
                                </button>
                                <button class="greenBtn" @click="service()">
                                    <span>Вызвать мастера</span>
                                </button>
                            </div>
                        </div>
                        <img src="https://alloremont24.ru/img/apple.png" id="mainAppleImg" alt="Apple image">
                    </div>
                </div>
                <img :src="mainImage" alt="Iphone picture">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            h1: "Ремонт iPhone в Москве",
            mainImage: "https://alloremont24.ru/img/remont-iphone.png"
        }
    },
    methods: {
        model() {
            this.$parent.$parent.isModelChosen = !this.$parent.$parent.isModelChosen
            console.log('isModelChosen: '+this.$parent.$parent.isModelChosen)
            console.log('isServiceChosen: '+this.$parent.$parent.isServiceChosen)
        },
        service() {
            this.$parent.$parent.isServiceChosen = !this.$parent.$parent.isServiceChosen
            console.log('isModelChosen: '+this.$parent.$parent.isModelChosen)
            console.log('isServiceChosen: '+this.$parent.$parent.isServiceChosen)
        }
    },
    computed: {
        countPrice() {
            return '1390'
        }
    },
}
</script>