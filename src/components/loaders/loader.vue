<template>
    <div class="fundo">
        <div class="equalizer-container">
            <div class="equalizer-bar"></div>
            <div class="equalizer-bar"></div>
            <div class="equalizer-bar"></div>
            <div class="equalizer-bar"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'loader'
    }
</script>

<style>
    .fundo {
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
        top: 0;
    }
</style>