<template>
    <div class="fulltime">
        <div class="container">
            <h3>Круглосуточный ремонт iPhone 24 часа</h3>
            <p>Мы ремонтируем все модели Айфонов круглосуточно. 
                Мастера оснащены всем необходимым оборудованием для устранения неисправностей 24 часа в сутки 
                по ремонту и замене экрана, стекла, корпуса, батарейки, динамика, микрофона, камеры, кнопок, разъемов и шлейфов.
                </p>
            <p>Круглосуточная диагностика всех устройств Apple iPhone 24 на 7 и ремонт:</p>
            <ul>
                <li v-for="item in $parent.$parent.models" :key="item.model">
                    <span>{{ item.model }}</span>
                </li>
            </ul>
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
}
</script>

<style>

</style>