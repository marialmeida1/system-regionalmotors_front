<template>
    <div>
        <TheNavTop/>
        <TheConta/>
    </div>
</template>

<script>
   import TheConta from "../components/admin/TheConta.vue"
   import TheNavTop from "../components/navBares/TheNavTop.vue"

    export default {
        components: {
            TheConta,
            TheNavTop
        }
    }
</script>