<template>
    <div>
        <pageheader />
        <main>
            <modal :modalHeader="modalHeader" :modalButton="modalButton" />
            <indexpage v-if="isModelChosen == false && isServiceChosen == false"/>
            <reducedpage v-else-if="isModelChosen == true || isServiceChosen == true" :model="modelChosen" :service="serviceChosen" />
        </main>
        <pagefooter />
    </div>
</template>

<script>

import pageheader from "./components/page-header.vue";
import modal from "./components/modal.vue"
import indexpage from "./containers/index-page.vue";
import reducedpage from "./containers/model-or-service-chosen.vue";
import pagefooter from "./components/page-footer.vue"

export default {
    components: { pageheader, modal, indexpage, reducedpage, pagefooter },

    data() {
        return {
            modalHeader: '',
            modalButton: '',

            models: [],
            modelsApi: "./src/public/db/models.json",
            isModelChosen: false,
            modelChosen: '',

            services: [],
            servicesApi: "./src/public/db/services.json",
            isServiceChosen: false,
            serviceChosen: '',

            prices: [],
            pricesApi: "./src/public/db/prices.json"
        };
    },
    methods: {
        changeModalHeader(header) {
            switch (header) {
                case 'zayavka':
                    this.modalHeader = 'Заявка на ремонт'
                    this.modalButton = 'Отправить заявку'
                    break
                case 'master':
                    this.modalHeader = 'Вызов мастера'
                    this.modalButton = 'Вызов мастера'
                    break
                case 'zvonok':
                    this.modalHeader = 'Обратный звонок'
                    this.modalButton = 'Заказать звонок'
                    break
            }
        },
        changePage(name, type) {
            switch (type) {
                case 'model':
                    this.modelChosen = name
                    this.isModelChosen = true
                    break
                case 'service':
                    this.serviceChosen = name
                    this.isServiceChosen = true
            }
        },
        clearData(how) {
            switch (how) {
                case 'all':
                    this.modelChosen = ''
                    this.isModelChosen = false
                    this.serviceChosen = ''
                    this.isServiceChosen = false
                    break
                case 'currentModel':
                    this.modelChosen = ''
                    this.isModelChosen = false
                    break
                case 'currentService':
                    this.serviceChosen = ''
                    this.isServiceChosen = false
                    break
            }
        },
        getModels() {
            return fetch(this.modelsApi)
                .then((d) => d.json())
                .then((d) => (this.models = d))
        },
        getServices() {
            return fetch(this.servicesApi)
                .then((d) => d.json())
                .then((d) => (this.services = d))
        },
        getPrices() {
            return fetch(this.pricesApi)
                .then((d) => d.json())
                .then((d) => (this.prices = d))
        },
    },
    mounted() {
        this.getModels()
        this.getServices()
        this.getPrices()
    },
};
</script>