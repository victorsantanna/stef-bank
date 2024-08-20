<template>
    <div class="container">
        <div class="imagem-logo">
            <img src="../assets/img/Group.svg" alt="logo StefBank">
        </div>
        <div class="botoes">
            <BotoesProjeto />
        </div>
    </div>
</template>

<script setup>
import BotoesProjeto from './BotoesProjeto.vue';

</script>

<style scoped>
.container{
    height: 80px;
    background-color:var(--primary-color) ;

    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    
}

.imagem-logo, .botoes{
    margin: 20px;
}

img{
    width: 130px;
    height: 22px;
}
</style>