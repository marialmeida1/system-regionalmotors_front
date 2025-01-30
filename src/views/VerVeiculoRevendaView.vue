<template>
    <div>
        <div>
            <TheNavTop />
            <TheVerVeiculoRevenda @stopLoader="stoploaderNow" />
            <br> <br>
            <TheFooter />
        </div>
        <!-- div v-show="loaderStatus" hidden="">
            <loader/>
        </div -->
    </div>
</template>

<script>
import TheNavTop from "../components/inicioRevenda/TheNavTop.vue"
import TheFooter from "../components/inicioRevenda/TheFooter.vue"
import loader from "../components/loaders/loader.vue"
import TheVerVeiculoRevenda from "../components/ver_carro/TheVerVeiculoRevenda.vue";


export default {
    components: {
        TheNavTop,
        TheVerVeiculoRevenda,
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