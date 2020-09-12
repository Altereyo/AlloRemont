<template>
    <div class="remontMoscow">
        <div class="container">
            <h3>{{ showH() }}</h3>
            <p class="subtitle">{{ showFirstP() }}</p>
            <p class="subtitle">{{ showSecondP() }}</p>
            <div class="twoBtns">
                <button class="blueBtn" data-toggle="modal" data-target="#modalWindow" @click="$parent.$parent.changeModalHeader('zayavka')">
                    <span>Заявка на ремонт</span>
                </button>
                <button class="greenBtn" data-toggle="modal" data-target="#modalWindow" @click="$parent.$parent.changeModalHeader('master')">
                    <span>Вызвать мастера</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['modelChosen', 'serviceChosen'],

    methods: {
        showH() {
            let header = ''

            if (this.modelChosen && this.serviceChosen) {
                header = this.serviceChosen +' '+ this.modelChosen +' в Москве'
            }
            else if (this.modelChosen) {
                header = 'Ремонт '+ this.modelChosen +' в Москве'
            }
            else if (this.serviceChosen) {
                header = this.serviceChosen + ' iPhone в Москве'
            }
            else {
                header = 'Ремонт iPhone в Москве'
            }

            return header
        },
        showFirstP() {
            let p = ''
            if (this.modelChosen || this.serviceChosen) {
                p = 'Nullam vitae scelerisque augue. Nam non odio sit amet mauris volutpat rutrum. Nam eleifend dui tortor, sit amet vehicula turpis pulvinar quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at.'
            }
            else {
                p = 'Мастерская по ремонту iPhone. Несмотря на частые поломки, мы выполним ремонт недорого. Наш сервисный центр имеет всё необходимое оборудование для диагностики и быстрого восстановления устройств Apple в любом удобном для Вас месте.'
            }
            return p
        },
        showSecondP() {
            let p = ''
            if (this.modelChosen || this.serviceChosen) {
                p = 'Phasellus in dolor nec leo tristique auctor quis nec mi. Vestibulum elit arcu, porta et nulla vel, porttitor interdum velit.'
            }
            else {
                p = 'Не в коем случае не пытайтесь устранить неисправности iPhone самостоятельно. В данном случае смогут помочь только мастера по ремонту Айфон.'
            }
            return p
        }
    },
}
</script>