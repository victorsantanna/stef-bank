<template>
  <div class="container">
    <div class="formulario">
      <ImagemLogin />
      <div class="conteudo-formulario">
        <FormularioLogin />
      </div>
      
    </div>
    <div>
      <RodaPe />
    </div>
  </div>
</template>

<script setup>
import ImagemLogin from './components/ImagemLogin.vue';
import RodaPe from '@/components/RodaPe.vue';
import FormularioLogin from './components/FormularioLogin.vue';
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.formulario {
  flex: 1;
  display: flex;
  align-items: center;
  z-index: 1;
}

.conteudo-formulario{
  margin-left: 200px;
}


</style>