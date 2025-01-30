<template>
    <div>
        <div>
            <TheNavTop />
            <TheVerVeiculoRegional @stopLoader="stoploaderNow" />
            <br> <br>
            <TheFooter />
        </div>
        <!-- div v-show="loaderStatus" hidden="">
            <loader/>
        </div -->
    </div>
</template>

<script>
import TheNavTop from "../components/navBares/TheNavTop.vue"
import TheFooter from "../components/navBares/TheFooter.vue"
import loader from "../components/loaders/loader.vue"
import TheVerVeiculoRegional from "../components/ver_carro/TheVerVeiculoRegional.vue";


export default {
    components: {
        TheNavTop,
        TheVerVeiculoRegional,
        TheFooter,
        loader

    },

    data() {
        return {
            loaderStatus: true
        }
    },

    methods: {
        stoploaderNow(status) {
            this.loaderStatus = status
        }
    },

    created() {
        window.scrollTo(0, 0);
    }
}
</script>