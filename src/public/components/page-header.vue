<template>
    <header>
        <div class="topHeader">
            <div class="container">
                <div class="logo">
                    <a href="#" @click="$parent.clearData('all')">
                        <img src="https://alloremont24.ru/img/logo.png" alt="Ремонт iphone с выездом мастера на дом - Alloremont24.ru">
                    </a>
                </div>
                <div class="makeCall">
                    <a href="tel:+79067263924">+7 (906) <strong>999-99-99</strong></a>
                </div>
            </div>
        </div>
        <div class="botHeader">
            <div class="container">
                <div class="botHeaderLists">
                    <div class="chooseModel botHeaderList">
                        <p>Выбрать модель</p>
                        <ul ref="modelsUl">
                            <li v-for="item in $parent.models" :key="item.model">
                                <a href="#" @click="$parent.changePage(item.model, 'model')">{{ item.model }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="chooseService botHeaderList">
                        <p>Неисправности</p>
                        <ul ref="servicesUl">
                            <li v-for="item in $parent.services" :key="item.name">
                                <a href="#" @click="$parent.changePage(item.name, 'service')">{{ item.name }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <button><p>Заказать обратный звонок</p></button>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    methods: {
        // handleUl (action) {
        //     switch (action) {
        //         case 'hideModels':
        //             this.$refs.modelsUl.style.display = 'none'
        //             break
        //         case 'hideServices':
        //             this.$refs.servicesUl.style.display = 'none'
        //             break
        //         case 'showModels':
        //             this.$refs.modelsUl.style.display = 'flex'
        //             break
        //         case 'showServices':
        //             this.$refs.servicesUl.style.display = 'flex'
        //             break
        //     }
        // }
    },
}
</script>