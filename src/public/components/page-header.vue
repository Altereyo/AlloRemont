<template>
    <header>
        <div id="fullScreen">
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
                    <button data-toggle="modal" data-target="#modalWindow" @click="$parent.changeModalHeader('zvonok')"><p>Заказать обратный звонок</p></button>
                </div>
            </div>
        </div>
        <div id="phoneScreen">
            <div class="logo">
                <a href="#" @click="$parent.clearData('all')">
                    <img src="https://alloremont24.ru/img/logo-mobile.png" alt="Ремонт iphone с выездом мастера на дом - Alloremont24.ru">
                </a>
            </div>
            <div class="makeCall center">
                <a href="tel:+79067263924">+7 (906) <strong>999-99-99</strong></a>
            </div>
            <button class="openMenu" @click="handleMenu()"></button>
        </div>
        <div class="menu" ref="menuBlock">
            <div>
                <button class="menu-header" @click="showList('models'), checkOpenedUls('services')" type="button" data-toggle="collapse" data-target="#collapsedFirstList" aria-expanded="false" aria-controls="collapsedFirstList">
                    Выбрать модель
                </button>
                <div class="collapse" ref="modelsList" id="collapsedFirstList">
                    <ul>
                        <li v-for="iphone in $parent.models" @click="$parent.changePage(iphone.model, 'model')" :key="iphone.model">
                            <span>{{ iphone.model }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <hr>
            <div>
                <button class="menu-header" @click="showList('services'), checkOpenedUls('models')" type="button" data-toggle="collapse" data-target="#collapsedSecondList" aria-expanded="false" aria-controls="collapsedSecondList">
                    Неисправности
                </button>
                <div class="collapse" ref="servicesList" id="collapsedSecondList">
                    <ul>
                        <li v-for="service in $parent.services" @click="$parent.changePage(service.name, 'service')" :key="service.name">
                            <span>{{ service.name }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            menuShown: false,
            modelsShown: false,
            servicesShown: false
        }
    },
    methods: {
        handleMenu() {
            if (this.menuShown) {
                this.removeShowClass()
                this.menuShown = !this.menuShown
                this.$refs.menuBlock.style.marginTop = '-150px'
            } else if (!this.menuShown) {
                this.menuShown = !this.menuShown
                this.$refs.menuBlock.style.marginTop = '0px'
            }
        },
        showList(type) {
            switch (type) {
                case 'models':
                    this.modelsShown = !this.modelsShown
                    break
                case 'services':
                    this.servicesShown = !this.servicesShown
                    break
            }
        },
        removeShowClass() {
            this.$refs.modelsList.classList.remove('show')
            this.$refs.servicesList.classList.remove('show')
        },
        checkOpenedUls(check) {
            switch (check) {
                case 'models':
                    this.$refs.modelsList.classList.remove('show')
                    break
                case 'services':
                    this.$refs.servicesList.classList.remove('show')
                    break
            }
        }
    },
}
</script>