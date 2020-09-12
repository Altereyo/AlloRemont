<template>
    <div class="remontMaster">
        <div class="container">
            <div>
                <h3>{{ showH() }}</h3>
                <p>{{ showFirstP() }}</p>
                <p>{{ showSecondP() }}</p>
            </div>
            <img src="https://alloremont24.ru/img/remont-iphone-2.png" alt="remont-iphone">
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
                header = this.serviceChosen +' '+ this.modelChosen +' с выездом мастера'
            }
            else if (this.modelChosen) {
                header = 'Ремонт '+ this.modelChosen +' с выездом мастера'
            }
            else if (this.serviceChosen) {
                header = this.serviceChosen + ' iPhone с выездом мастера'
            }
            else {
                header = 'Ремонт iPhone с выездом мастера'
            }

            return header
        },
        showFirstP() {
            let p = ''
            if (this.modelChosen || this.serviceChosen) {
                p = 'Mauris consequat ipsum eu massa fringilla, tincidunt dapibus erat malesuada. Fusce quam mi, venenatis vel posuere volutpat, tempor sed odio. Mauris a commodo justo, et ornare leo. Fusce id ex vel ligula vestibulum porta.'
            }
            else {
                p = 'Срочное устранение неполадок Айфонов с выездом мастера в Москве и Московской Области. Наш мастер решит более 99% неисправностей на дому круглосуточно. Быстрый выезд специалиста или курьера к Вам домой, кафе, офис за 20 минут.'
            }
            return p
        },
        showSecondP() {
            let p = ''
            if (this.modelChosen || this.serviceChosen) {
                p = 'Pellentesque nec turpis urna. Etiam luctus egestas porttitor. Mauris tempor erat sit amet venenatis feugiat. Pellentesque.'
            }
            else {
                p = 'Выездной ремонт — это наиболее распространенная услуга нашего сервисного центра по ремонту iPhone круглосуточно 24 часа в сутки!'
            }
            return p
        }
    },
}
</script>