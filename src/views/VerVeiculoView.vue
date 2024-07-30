<template>
    <div>
        <div>
            <TheNavTop/>
            <TheVerVeiculo_Carousel @stopLoader="stoploaderNow"/>   
            <br> <br>
            <TheFooter/>
        </div> 
        <!-- div v-show="loaderStatus" hidden="">
            <loader/>
        </div -->
    </div>
</template>

<script>
    import TheNavTop from "../components/navBares/TheNavTop.vue" 
    import TheVerVeiculo_Carousel from "../components/ver_carro/TheVerVeiculo_Carousel.vue"
    import TheFooter from "../components/navBares/TheFooter.vue" 
    import loader from "../components/loaders/loader.vue"


    export default {
        components: {
            TheNavTop,
            TheVerVeiculo_Carousel,
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