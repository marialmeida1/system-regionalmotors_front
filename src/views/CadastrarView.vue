<template>
    <div>
        <div>
            <TheNavTop/>
            <!-- <TheFinalText/> -->
            <TheForm_Cadastrar/>
            <TheFooter/>
            
            <div class="loader d-none">
                <loader/>
            </div>
        </div>
    </div>
</template>

<script>
    import TheNavTop from "../components/navBares/TheNavTop.vue" 
    import TheForm_Cadastrar from "../components/modals/TheForm_Cadastrar.vue"
    import TheFooter from "../components/navBares/TheFooter.vue"
    import loader from "../components/loaders/loader.vue" 

    export default {
        components: {
            TheNavTop,
            TheFooter,
            loader,
            TheForm_Cadastrar

        },

        data() {
            return {
                loader: ''    
            }
        },

        methods: {
            showLoaderNow() {
                this.loader.classList.remove('d-none')
            }
        },

        mounted() {
            this.loader = document.querySelector('.loader')
            // this.hiddenLoader()
        },
    }
</script>