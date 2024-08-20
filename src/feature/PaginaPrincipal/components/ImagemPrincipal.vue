<template>
  <div>
    <img :src="ImagemPrincipal" alt="imagem" loading="lazy">
  </div>
</template>

<script setup>

import ImagemPrincipal from '@/assets/img/PaginaPrincipal/imagem-principal.png'

</script>

<style scoped>

img{
  width: 300px;
  height: auto;
}

</style>