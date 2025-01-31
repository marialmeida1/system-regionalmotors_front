<template>
    <a :href="whatsappLink" target="_blank" :class="['btn', variant, size]">
        <font-awesome-icon v-if="icon" :icon="iconSet" class="btn-icon" />
        <slot />
    </a>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    props: {
        variant: { type: String, default: 'primary' },
        size: { type: String, default: 'md' },
        icon: { type: String, default: '' },
        iconType: { type: String, default: 'fas' },
        veiculo: { type: Object, required: true },
        namePage: { type: String, required: true },
        linkPage: { type: String, required: true }
    },

    computed: {
        iconSet() {
            return [this.iconType, this.icon]; // Define o prefixo dinamicamente
        },

        whatsappLink() {
            let nome_carro = `${this.veiculo.marca} ${this.veiculo.modelo}`.toLowerCase();
            return `https://api.whatsapp.com/send?phone=${this.veiculo.whatsapp}&text=Olá! Gostaria de obter mais informações sobre o anúncio da ${this.namePage} para o veículo ${nome_carro}. Vi no link do anúncio: ${this.linkPage}.`;
        }
    }
};
</script>

<style scoped>
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    gap: 8px;
    font-weight: bold;
}

.btn-icon {
    font-size: 1.2em;
}

/* Variantes */
.primary {
    background-color: crimson;
    color: white;
}

.secondary {
    background-color: #5fcb71;
    color: white;
}

.md {
    padding: 10px 16px;
    font-size: 16px;
}

.lg {
    width: 100%;
}
</style>