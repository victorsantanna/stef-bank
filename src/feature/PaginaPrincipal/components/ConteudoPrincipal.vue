<template>
  <div class="container">
    <h1>Sua tranquilidade financeira, nossa prioridade.</h1>
    <p>Com nossa tecnologia avançada, suas finanças estão sempre seguras. Concentre-se no crescimento do seu negócio com
      total confiança.</p>
    <router-link to="cadastro">
      <button>Crie sua conta agora!</button>

    </router-link>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container {
  width: 100%;
  height: auto;
}

h1,
p {
  color: var(--primary-color);
  font-family: 'Montserrat', sans-serif;

}

p {
  font-weight: 400;
  line-height: 1.6;

}

button {
  background-color: var(--primary-color);
  color: var(--color-text);
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  cursor: pointer;

  border: none;
  border-radius: 4px;

  width: 400px;
  height: 48px;
  margin: 20px auto 0;
  display: block;

}

router-link{
  text-decoration: none;
}
</style>