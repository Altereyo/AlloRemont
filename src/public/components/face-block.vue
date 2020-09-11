<template>
    <div class="faceBlock">
        <div class="container">
            <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#" v-if="modelChosen || serviceChosen" @click="$parent.$parent.clearData('all')">Главная</a>
                            <template   v-else>Главная</template>
                        </li>
                        <li v-if="modelChosen || serviceChosen" class="breadcrumb-item" >
                            <a href="#" v-if="modelChosen && serviceChosen" @click="$parent.$parent.clearData('currentService')">Ремонт {{ modelChosen }}</a>
                            <template   v-else-if="modelChosen && !serviceChosen">Ремонт {{ modelChosen }}</template>
                            <template   v-else-if="!modelChosen && serviceChosen">{{ serviceChosen }}</template>
                        </li>
                        <li v-if="modelChosen && serviceChosen" class="breadcrumb-item">
                            {{ serviceChosen }}
                        </li>
                    </ol>
            </nav>
            <div class="mainInfo">
                <div class="mainInfoWrapper">
                <h1>{{ header() }}</h1>
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
                                <button class="blueBtn" data-toggle="modal" data-target="#modalWindow" @click="$parent.$parent.changeModalHeader('zayavka')">
                                    <span>от {{ showMinPrice() }} руб.</span>
                                    <span class="subSpan">Заявка на ремонт</span>
                                </button>
                                <button class="greenBtn" data-toggle="modal" data-target="#modalWindow" @click="$parent.$parent.changeModalHeader('master')">
                                    <span>Вызвать мастера</span>
                                </button>
                            </div>
                        </div>
                        <img src="https://alloremont24.ru/img/apple.png" id="mainAppleImg" alt="Apple image">
                    </div>
                </div>
                <img v-if="modelChosen" :src="modelImage()" style="align-self: flex-end" alt="iphone model photo">
                <img v-else src="https://alloremont24.ru/img/remont-iphone.png" alt="Iphone picture">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['modelChosen', 'serviceChosen'],
    data() {
        return {
        }
    },
    methods: {
        header() {
            let header = ''

            if (this.modelChosen && this.serviceChosen) {
                header = this.serviceChosen +' '+ this.modelChosen
            }
            else if (this.modelChosen) {
                header = 'Ремонт ' + this.modelChosen
            }
            else if (this.serviceChosen) {
                header = this.serviceChosen + ' iPhone'
            }
            else {
                header = 'Ремонт iPhone в Москве'
            }

            return header
        },
        showMinPrice() {
            let price = null

            if (this.modelChosen && this.serviceChosen) {
                price = this.$parent.$parent.prices.find(object => object.service == this.serviceChosen).modelPrice[this.modelChosen]
            }
            else if (this.modelChosen && !this.serviceChosen) {
                price = this.$parent.$parent.models.find(iphone => iphone.model == this.modelChosen).minPrice
            }
            else if (!this.modelChosen && this.serviceChosen) {
                price = this.$parent.$parent.services.find(service => service.name == this.serviceChosen).minPrice
            }
            else {
                price = 890
            }
            
            return price
        },
        modelImage() {
            let image = this.$parent.$parent.models.find(iphone => iphone.model == this.modelChosen).image                
            return image
        }
    }
}
</script>