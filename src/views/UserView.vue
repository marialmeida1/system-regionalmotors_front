<template>
  <div>
    <TheNavTop />

    <div id="TheNavLateral" class="menu-lateral showHidden_menu-lateral">
      <TheAdminNavLateral2
        @show_menu_lateral="handle_showHidden_menu_lateral"
      />
    </div>

    <TheUser
      @show_menu_lateral="handle_showHidden_menu_lateral"
      @editarCategoria="editarCategoriaNow"
    />

    <TheAddUser />
  </div>
</template>

<script>
import TheNavTop from "../components/navBares/TheNavTop.vue";
import TheAdminNavLateral2 from "../components/navBares/TheAdminNavLateral2.vue";
import TheUser from "../components/admin/TheUser.vue";

export default {
  components: {
    TheNavTop,
    TheAdminNavLateral2,
    TheUser,
  },

  data() {
    return {
      TheNavLateral: "",
    };
  },

  methods: {
    handle_showHidden_menu_lateral() {

      this.TheNavLateral.classList.toggle("showHidden_menu-lateral");
    },

    editarCategoriaNow() {
      this.$refs.theEditarCategoria.showgetDados();
    },
  },

  mounted() {
    this.TheNavLateral = document.getElementById("TheNavLateral");
  },
};
</script>
