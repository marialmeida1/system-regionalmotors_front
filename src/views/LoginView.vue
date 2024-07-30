<template>

<div style="margin-top: 100px;">
    <div class="col-11 col-md-5 col-lg-5 mx-auto">
        <TheForm_Login/>
    </div>    
</div>

<footer style="opacity: 0.4; margin-top: 25px;">
    <div class="col-12 text-center">
        copyrighit 2023 por  <a href="http://www.devaholic.ao" target="_blank">DevAholic</a>
    </div>
</footer>
</template>

<script>
    import TheForm_Login from "../components/modals/TheForm_Login.vue"

    export default {
        components: {
            TheForm_Login
        }
    }

</script>

<style>
    .btn-entrar {
        background-color: rgb(77, 226, 122);
    }
</style>