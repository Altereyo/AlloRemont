<template>
    <div>
        <pageheader />
        <main>
            <indexpage v-if="isModelChosen == false && isServiceChosen == false"/>
            <reducedpage v-else-if="isModelChosen == true || isServiceChosen == true"/>
        </main>
        <pagefooter />
    </div>
</template>

<script>
// TODO 2 можно сделать один компонент modal, в котором будут завязаны разные template v-if в зависимости от :type="", как в учебном примере
// TODO завязать заголовки и p через <>Ремонт {{item. model}} в Москве</>

import pageheader from "./components/page-header.vue";
import indexpage from "./containers/index-page.vue";
import reducedpage from "./containers/model-or-service-chosen.vue";
import pagefooter from "./components/page-footer.vue"

export default {
    components: { pageheader, indexpage, reducedpage, pagefooter },

    data() {
        return {
            models: [],
            services: [],
            modelsApi: "./src/public/jsons/models.json",
            servicesApi: "./src/public/jsons/services.json",
            isModelChosen: false,
            isServiceChosen: false,
        };
    },
    methods: {
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
    },
    mounted() {
        this.getModels()
        this.getServices()
    },
};
</script>