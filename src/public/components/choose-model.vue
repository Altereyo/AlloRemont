<template>
    <div class="chooseModelBlock">
        <div class="container">
            <h2>Сколько стоит ремонт Айфонов в Москве</h2>
            <p class="subtitle">Круглосуточный ремонт iPhone рядом с мной и с выездом к Вам на дом. 
                Сразу при Вас отремонтируем любую модель и неисправность Айфона <strong>в Москве и Московской Области.</strong> 
                И заменим всё, что можно поменять и отремонтировать на выезде 24/7. 
                А теперь просто, выбери модель своего телефона Айфон и узнай цены услуг по ремонту:</p>
            <div class="modelsList">
                <div class="line" v-for="header in headers" :key="header">
                    <h3>{{ header }}</h3>
                    <ul>
                        <li v-for="item in sortByLine(header)" :key="item.model">
                            <span @click="$parent.$parent.changePage(item.model, 'model')">{{ item.model }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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