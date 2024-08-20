<template>
    <div class="container">
        <div>
            <CabecalhoProjeto />
        </div>
        <div class="conteudo-principal">
            <ImagemPrincipal />
            <ConteudoPrincipal />
        </div>

    </div>
</template>

<script setup>
import CabecalhoProjeto from '../../components/CabecalhoProjeto.vue';
import ImagemPrincipal from './components/ImagemPrincipal.vue';
import ConteudoPrincipal from './components/ConteudoPrincipal.vue';

</script>

<style scoped>


.conteudo-principal{
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin: 0 auto;
}

@media (max-width: 768px) { /* Ajuste o valor conforme necessário */
    .conteudo-principal {
        flex-direction: column; /* Alinha os itens verticalmente quando a tela é pequena */
        gap: 20px; /* Ajusta o espaçamento entre os itens em telas menores */
        margin-top: 50px;
    }

    /* Esconde a imagem em telas pequenas */
    .conteudo-principal > :nth-child(1) {
        display: none;
    }
}
</style>