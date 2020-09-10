<template>
    <div class="remontMoscow">
        <div class="container">
            <h3>Сервисный центр по ремонту Айфон в Москве</h3>
            <p class="subtitle">Мастерская по ремонту телефонов Айфон. Несмотря на частые поломки, мы выполним ремонт недорого. 
                Наш сервисный центр имеет всё необходимое оборудование для диагностики и быстрого восстановления 
                устройств Apple в любом удобном для Вас месте.
            </p>
            <p class="subtitle">Не в коем случае не пытайтесь устранить неисправности iPhone своими руками или самостоятельно. 
                В данном случае смогут помочь только мастера по ремонту Айфон.
            </p>
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