<template>
    <div>
        <faceblock />
        <bluecall />
        <reactivelist />
        <howremont />
        <faq />
        <bluecall />
        <feedback />
        <examples />
        <remontmoscow />
        <remontmaster />
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

export default {
    components: {
        faceblock, 
        bluecall, 
        reactivelist, 
        howremont, 
        faq, 
        feedback, 
        examples, 
        remontmoscow,
        remontmaster
    }
}
</script>