<template>
    <div>
        <pageheader />
        <main>
            <indexpage v-if="isModelChosen == false && isServiceChosen == false"/>
            <reducedpage v-else-if="isModelChosen == true || isServiceChosen == true" :model="modelChosen" :service="serviceChosen" />
        </main>
        <pagefooter />
    </div>
</template>

<script>
// TODO 1 сделать один компонент modal, в котором будут завязаны разные template v-if в зависимости от :type="", как в учебном примере

import pageheader from "./components/page-header.vue";
import indexpage from "./containers/index-page.vue";
import reducedpage from "./containers/model-or-service-chosen.vue";
import pagefooter from "./components/page-footer.vue"

export default {
    components: { pageheader, indexpage, reducedpage, pagefooter },

    data() {
        return {
            models: [],
            modelsApi: "./src/public/jsons/models.json",
            isModelChosen: false,
            modelChosen: '',

            services: [],
            servicesApi: "./src/public/jsons/services.json",
            isServiceChosen: false,
            serviceChosen: '',

            prices: [],
            pricesApi: "./src/public/jsons/prices.json"
        };
    },
    methods: {
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