<template>
    <div >
        <button class="container">
            <h3>Acesse sua conta</h3>
            <img src="../assets/img/Frame.svg" alt="botão entrar">
        </button>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container{
    width: 200px;
    padding: 6px 6px;

    border: 1px solid var(--color-text);
    border-radius: 4px;
    background-color: var(--primary-color);
    color: var(--color-text);

    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    

    display: flex;
    justify-content: space-around;
}

h3{
    font-size: 16px;
}

</style>