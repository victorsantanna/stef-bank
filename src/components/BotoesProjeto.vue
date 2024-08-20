<template>
    <div>
        <router-link to="login">
            <button class="container">
                <h4>Acesse sua conta</h4>
                <img src="../assets/img/Frame.svg" alt="botão entrar">
            </button>

        </router-link>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {
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
    align-items: center;
}

h4 {
    font-size: 15px;
}

router-link, a{
    text-decoration: none;
    color: inherit;
}

</style>