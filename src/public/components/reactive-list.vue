<template>
    <div class="reactiveServices">
        <div class="container">
            <h2>Цены на ремонт iPhone</h2>
            <p class="subtitle">В стоимость прайс-листа включены: 
                <span class="redp">диагностика + запчасть + выезд мастера + ремонт + гарантия до 3 лет</span>
            </p>
            <ul><!-- TODO завязать на template v-if="isModel/ServiceChosen" несколько ul или li-->
                <li v-for="service in $parent.$parent.services" :key="service.name">
                    <div>
                        <a href="#">{{ service.name }}</a>
                        <p>{{ service.description }}</p>
                    </div>
                    <img :src="service.image" alt="">
                    <button class="blueBtn"><span>от {{ service.price }} р.</span></button>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>