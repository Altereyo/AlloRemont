<template>
    <div class="reactiveServices">
        <div class="container">
            <h2>{{ showHeader() }}</h2>
            <p class="subtitle">В стоимость прайс-листа включены: 
                <span class="redp">диагностика + запчасть + выезд мастера + ремонт + гарантия до 3 лет</span>
            </p>
            <ul>
                <template v-if="modelChosen && serviceChosen">
                    <li v-for="service in showLi()" :key="service.name">
                        <div>
                            <a href="#" data-toggle="modal" data-target="#modalWindow" @click="$parent.$parent.changeModalHeader('zayavka')">{{ service.name }}</a>
                            <p>{{ service.description }}</p>
                        </div>
                        <img :src="service.image" alt="">
                        <button class="blueBtn" data-toggle="modal" data-target="#modalWindow" @click="$parent.$parent.changeModalHeader('zayavka')"><span>от {{ showPrice(service) }} р.</span></button>
                    </li>
                </template>
                <template v-else-if="modelChosen">
                    <li v-for="service in $parent.$parent.services" :key="service.name">
                        <div>
                            <a href="#" @click="$parent.$parent.changePage(service.name, 'service')">{{ service.name }}</a>
                            <p>{{ service.description }}</p>
                        </div>
                        <img :src="service.image" alt="service image">
                        <button class="blueBtn" @click="$parent.$parent.changePage(service.name, 'service')"><span>от {{ showPrice(service.name) }} р.</span></button>
                    </li>
                </template>
                <template v-else-if="serviceChosen">
                    <li v-for="iphone in $parent.$parent.models" :key="iphone.name">
                        <div>
                            <a href="#" @click="$parent.$parent.changePage(iphone.model, 'model')">{{ iphone.model }}</a>
                            <p>{{ $parent.$parent.services.find(service => service.name == serviceChosen).description }}</p>
                        </div>
                        <img :src="$parent.$parent.services.find(service => service.name == serviceChosen).image" alt="service image">
                        <button class="blueBtn" @click="$parent.$parent.changePage(iphone.model, 'model')"><span>от {{ showPrice(iphone.model) }} р.</span></button>
                    </li>
                </template>
                <template v-else>
                    <li v-for="service in $parent.$parent.services" :key="service.name">
                        <div>
                            <a href="#" @click="$parent.$parent.changePage(service.name, 'service')">{{ service.name }}</a>
                            <p>{{ service.description }}</p>
                        </div>
                        <img :src="service.image" alt="service image">
                        <button class="blueBtn" @click="$parent.$parent.changePage(service.name, 'service')"><span>от {{ service.minPrice }} р.</span></button>
                    </li>
                </template>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
    props: ['modelChosen', 'serviceChosen'],
    data() {
        return {
            hiddenServicesApi: "./src/public/jsons/hidden-services.json",
            hiddenServices: []
        }
    },
    methods: {
        showHeader() {
            let header = ''

            if (this.modelChosen && this.serviceChosen) {
                let serviceWords = this.serviceChosen.split(' ')
                if (serviceWords[0] == 'Замена') {
                    serviceWords[0] = 'замены'
                    header = 'Цена '+ serviceWords.join(' ') +' '+ this.modelChosen +' в Москве'
                }
                else if (serviceWords[0] == 'Ремонт') {
                    header = 'Ремонт утопленного '+ this.modelChosen +' в Москве'
                }
                else if (serviceWords[0] == 'Обмен') {
                    header = 'Обмен '+ this.modelChosen +' на новый в Москве'
                }
                
            }
            else if (this.modelChosen) {
                header = 'Цены на ремонт '+ this.modelChosen +' в Москве'
            }
            else if (this.serviceChosen) {
                let serviceWords = this.serviceChosen.split(' ')
                if (serviceWords[0] == 'Замена') {
                    serviceWords[0] = 'замены'
                    header = 'Цена '+ serviceWords.join(' ') +' iPhone в Москве'
                }
                else if (serviceWords[0] == 'Ремонт') {
                    header = 'Ремонт утопленного iPhone в Москве'
                }
                else if (serviceWords[0] == 'Обмен') {
                    header = 'Обмен iPhone на новый в Москве'
                }

            }
            else {
                header = 'Цены на ремонт iPhone'
            }
            return header
        },
        showItem(itemId, arr) {
            arr.push(this.$parent.$parent.services.find(object => object.id == itemId))
        },
        showHiddenItem(itemId, arr) {
            let hiddenObject = this.hiddenServices.find(object => object.id == itemId)

            if (itemId == "remont-iphone") {
                hiddenObject.description = "Полный список услуг по ремонту "+ this.modelChosen +" с выездом мастера на дом круглосуточно 24 часа"
                hiddenObject.price = this.$parent.$parent.models.find(object => object.model == this.modelChosen).minPrice
            }
            arr.push(hiddenObject)
        },
        showLi(){
            let array = []
            
            switch (this.$parent.$parent.services.find(object => object.name == this.serviceChosen).id) {
                case "display":
                    this.showItem("display", array)
                    this.showItem("steklo", array)
                    break
                case "steklo":
                    this.showItem("steklo", array)
                    this.showItem("display", array)
                    this.showItem("back-steklo", array)
                    break
                case "back-steklo":
                    this.showItem("back-steklo", array)
                    this.showItem("korpus", array)
                    break
                case "korpus":
                    this.showItem("korpus", array)
                    this.showItem("back-steklo", array)
                    break
                case "battery":
                    this.showItem("battery", array)
                    this.showItem("gnezdo", array)
                    break
                case "gnezdo":
                    this.showItem("gnezdo", array)
                    this.showItem("battery", array)
                    break
                case "water":
                    this.showItem("water", array)
                    this.showHiddenItem("remont-iphone", array)
                    break
                case "kamera":
                    this.showHiddenItem("front-kamera", array)
                    this.showHiddenItem("back-kamera", array)
                    break
                case "dinamik":
                    this.showHiddenItem("top-dinamik", array)
                    this.showHiddenItem("bot-dinamik", array)
                    this.showItem("mikrofon", array)
                    break
                case "mikrofon":
                    this.showItem("mikrofon", array)
                    this.showItem("dinamik", array)
                    break
                case "knopka":
                    this.showHiddenItem("voulme-knopka", array)
                    this.showHiddenItem("on-knopka", array)
                    this.showHiddenItem("home-knopka", array)
                    this.showHiddenItem("vibro-knopka", array)
                    break
                case "obmen":
                    this.showItem("obmen", array)
                    this.showHiddenItem("remont-iphone", array)
                    break
            }
            
            return array
        },
        showPrice (item) {
            let price = null

            if (item.name == "Ремонт iPhone") {
                price = this.$parent.$parent.models.find(object => object.model == this.modelChosen).minPrice
            }
            else if (this.modelChosen && this.serviceChosen) {
                price = this.$parent.$parent.prices.find(object => object.service == item.name).modelPrice[this.modelChosen]
            }
            else if (this.modelChosen) {
                price = this.$parent.$parent.prices.find(object => object.service == item).modelPrice[this.modelChosen]
            }
            else if (this.serviceChosen) {
                price = this.$parent.$parent.prices.find(object => object.service == this.serviceChosen).modelPrice[item]
            }
            
            return price
        },
        getHiddenServices() {
            return fetch(this.hiddenServicesApi)
                .then((d) => d.json())
                .then((d) => (this.hiddenServices = d))
        }
    },
    mounted() {
        this.getHiddenServices()
    },
}
</script>

<style>

</style>