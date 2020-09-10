<template>
    <div>
        <faceblock :modelChosen="model" :serviceChosen="service" />
        <bluecall />
        <reactivelist :modelChosen="model" :serviceChosen="service" />
        <howremont />
        <faq />
        <bluecall />
        <feedback />
        <examples />
        <remontmoscow :modelChosen="model" :serviceChosen="service" />
        <remontmaster :modelChosen="model" :serviceChosen="service" />
        <remonthome :modelChosen="model" :serviceChosen="service" />
        <bluecall />
        <fulltime :modelChosen="model" :serviceChosen="service" />
        <corporative />
    </div>
</template>

<script>
import faceblock from "../components/face-block.vue";
import bluecall from "../components/blue-call.vue";
import reactivelist from "../components/reactive-list.vue";
import howremont from "../components/how-remont.vue";
import faq from "../components/faq.vue";
import feedback from "../components/feedback.vue";
import examples from "../components/examples.vue";
import remontmoscow from "../components/remont-moscow.vue";
import remontmaster from "../components/remont-master.vue";
import remonthome from "../components/remont-home.vue";
import fulltime from "../components/fulltime.vue";
import corporative from "../components/corporative.vue";

export default {
    props: ['model', 'service' ],
    components: {
        faceblock, 
        bluecall, 
        reactivelist, 
        howremont, 
        faq, 
        feedback, 
        examples, 
        remontmoscow,
        remontmaster,
        remonthome,
        fulltime,
        corporative
    }
}
</script>