<template>
    <div>
        <faceblock />
        <choosemodel />
        <bluecall />
        <reactivelist />
        <bluecall />
        <examples />
        <remontmoscow />
        <remontmaster />
        <remonthome />
        <fulltime />
        <feedback />
        <alloremont/>
        <bluecall />
        <faq />
        <howremont />
        <corporative />
    </div>
</template>

<script>
import faceblock from "../components/face-block.vue";
import choosemodel from "../components/choose-model.vue";
import bluecall from "../components/blue-call.vue";
import reactivelist from "../components/reactive-list.vue";
import examples from "../components/examples.vue";
import remontmoscow from "../components/remont-moscow.vue";
import remontmaster from "../components/remont-master.vue";
import remonthome from "../components/remont-home.vue";
import fulltime from "../components/fulltime.vue";
import feedback from "../components/feedback.vue";
import alloremont from "../components/alloremont.vue"
import faq from "../components/faq.vue";
import howremont from "../components/how-remont.vue";
import corporative from "../components/corporative.vue";

// TODO 3 во всех элементах убрать пустые теги script
export default {
    components: {
        faceblock, 
        choosemodel,
        bluecall, 
        reactivelist, 
        examples, 
        remontmoscow,
        remontmaster,
        remonthome,
        fulltime,
        feedback,
        alloremont,
        faq, 
        howremont, 
        corporative
    }
}
</script>