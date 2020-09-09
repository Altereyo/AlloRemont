<template>
    <header>
        <div class="topHeader">
            <div class="container">
                <div class="logo">
                    <a href="#">
                        <img src="https://alloremont24.ru/img/logo.png" alt="Ремонт iphone с выездом мастера на дом - Alloremont24.ru">
                    </a>
                </div>
                <div class="makeCall">
                    <a href="tel:+79067263924">+7 (906) <strong>726-39-24</strong></a>
                </div>
            </div>
        </div>
        <div class="botHeader">
            <div class="container">
                <div class="botHeaderLists">
                    <div class="chooseModel botHeaderList">
                        <p>Выбрать модель</p>
                        <ul>
                            <li v-for="item in $parent.models" :key="item.model">
                                <a href="#">{{ item.model }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="chooseService botHeaderList">
                        <p>Неисправности</p>
                        <ul>
                            <li v-for="item in $parent.services" :key="item.name">
                                <a href="#">{{ item.name }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <button :click="orderCall()"><p>Заказать обратный звонок</p></button>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    methods: {
        orderCall() {

        }
    },
}
</script>