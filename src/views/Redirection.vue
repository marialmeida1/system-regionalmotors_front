<template>
    <div>
      <component :is="currentComponent" />
    </div>
  </template>
  
  <script>
  import InicioView from "@/views/InicioView.vue"; // Página principal
  import InicioRevendaView from "@/views/InicioRevendaView.vue"; // Página da revenda
  
  export default {
    data() {
      return {
        currentComponent: null,
      };
    },
    created() {
      this.determineComponent();
    },
    watch: {
      $route: "determineComponent",
    },
    methods: {
      determineComponent() {
        const pageType = this.$route.meta.pageType;
        if (pageType === "principal") {
          this.currentComponent = InicioView;
        } else if (pageType === "revenda") {
          this.currentComponent = InicioRevendaView; 
        } else {
          this.currentComponent = InicioView;
        }
      },
    },
  };
  </script>
  