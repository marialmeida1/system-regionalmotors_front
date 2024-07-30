    <template>
    <div>
        <div>
            <TheRedirecting @showLoader="showLoaderNow"/>
            <div class="loader d-none0">
                <loader/>
            </div>
        </div>
    </div>
</template>

<script> 
    import TheRedirecting from "../components/inicio/TheRedirecting.vue"
    import loader from "../components/loaders/loader.vue" 


    export default {
        components: {
            TheRedirecting,
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