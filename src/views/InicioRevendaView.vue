<template>
    <div>
        <div>
            <TheNavTop @showLoader="showLoaderNow"/>
            <TheBanner/>
            
            <ThecardComprar @showLoader="showLoaderNow"/> 
            <TheDestaque @showLoader="showLoaderNow"/>
            <TheCategorias/>
            
            <TheFooter @showLoader="showLoaderNow"/>
            
            <div class="loader d-none">
                <loader/>
            </div>
        </div>
    </div>
</template>

<script>
    import TheNavTop from "../components/inicioRevenda/TheNavTop.vue" 
    import TheBanner from "../components/inicioRevenda/TheBanner.vue"
    import ThecardComprar from "../components/inicio/ThecardComprar.vue"
    import TheCategorias from "../components/inicio/TheCategorias.vue"
    import TheDestaque from "../components/inicio/TheDestaque.vue"
    import TheCardes from "../components/inicio/TheCardes.vue"
    import TheFooter from "../components/navBares/TheFooter.vue"
    import loader from "../components/loaders/loader.vue" 


    export default {
        components: {
            TheNavTop,
            TheBanner,
            ThecardComprar,
            TheCategorias,
            TheDestaque,
            TheCardes,
            TheFooter,
            loader,
        },

        data() {
            return {
                loader: ''    
            }
        },

        methods: {
            showLoaderNow() {
                this.loader = document.querySelector('.loader')
                this.loader.classList.remove('d-none')
            },

            goVerVeiculosNow(veiculo) {
                return veiculo
            }
        },

        mounted() {

            // this.hiddenLoader()
        },
    }
</script>