<template>
    <div class="fulltime">
        <div class="container">
            <h3>Круглосуточный ремонт iPhone 24 часа</h3>
            <p>Мы ремонтируем все модели Айфонов круглосуточно. 
                Мастера оснащены всем необходимым оборудованием для устранения неисправностей 24 часа в сутки 
                по ремонту и замене экрана, стекла, корпуса, батарейки, динамика, микрофона, камеры, кнопок, разъемов и шлейфов.
                </p>
            <p>Круглосуточная диагностика всех устройств Apple iPhone 24 на 7 и ремонт:</p>
            <div class="lines">
                <ul v-for="line in headers" :key="line">
                    <li v-for="item in sortByLine(line)" @click="$parent.$parent.changePage(item.model, 'model')" :key="item.model">
                        <span>{{ item.model }}</span>
                    </li>
                </ul>
            </div>
            <p>Срочный ремонт 24 часа. Запчасти на все Айфоны в наличии, <a href="tel:+79067263924">звоните!</a></p>
            <div class="twoBtns">
                <button class="blueBtn">
                    <span>Заявка на ремонт</span>
                </button>
                <button class="greenBtn">
                    <span>Вызвать мастера</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['modelChosen', 'serviceChosen'],
    data() {
        return {
            headers: ['iPhone 11', 'iPhone X', 'iPhone 7/8', 'iPhone 6', 'iPhone 5']
        }
    },
    methods: {
        sortByLine(linee) {
            return this.$parent.$parent.models.filter(model => {
                if (model.line == linee) {
                    return model
                }
            })
        }
    },
}
</script>