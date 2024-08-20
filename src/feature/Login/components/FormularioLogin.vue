<template>
    <div class="container">
        <h3>Acesse sua conta</h3>
        <div class="input-formulario">
            <label for="">CPF/CNPJ</label>
            <input type="text" placeholder="Insira seu CPF ou CNPJ">
        </div>
        <div class="input-formulario">
            <label for="">Senha</label>
            <input type="password" placeholder="Insira sua senha">
        </div>
        <div class="input-checkbox">
            <input type="checkbox">
            <p>Lembrar de mim</p>
        </div>
        <button class="botao-entrar">
            Entrar
        </button>
        <router-link to="cadastro">
            <button class="botao-nao-cliente">
                Ainda não sou Cliente
            </button>
        </router-link>
        <div class="link-esqueci-senha">
            <a href="">
                <p>Esqueci minha senha</p>
            </a>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 10px;

    font-family: 'Montserrat', sans-serif;
}

.input-formulario {
    display: flex;
    flex-direction: column;
}

.input-formulario label {
    color: #6B6B6B;
    font-weight: 700;
    margin-bottom: 10px;
}

.input-formulario input {
    border: none;
    border-bottom: 2px solid #8E8E8F;
    padding-bottom: 4px;
}

.input-formulario input:focus {
    outline: none;
    border-bottom: 2.5px solid var(--primary-color);
}

.input-formulario input::placeholder {
    color: #8E8E8F;

}

.input-checkbox {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
}

.input-checkbox input[type="checkbox"] {
    background-color: #8E8E8F;
    cursor: pointer;
}

.input-checkbox input[type="checkbox"]:checked {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
}

.input-checkbox p {
    color: #06004F;
    font-weight: 600;
    font-size: 14px;
}

h3 {
    font-size: 36px;
    color: var(--primary-color);
    font-weight: 600;
    margin-bottom: 20px;
}

.botao-entrar {
    width: 320px;
    border: var(--primary-color);
    border-radius: 4px;
    background-color: var(--primary-color);
    height: 45px;
    color: var(--color-text);
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
}

.botao-nao-cliente {
    width: 320px;
    height: 45px;
    border-radius: 4px;
    border: 1.5px solid var(--primary-color);
    color: var(--primary-color);
    background-color: #ffffff;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;

}

.link-esqueci-senha a,
p {
    text-decoration: none;
    color: #358EF7;
    font-weight: 600;
    font-size: 14px;
}

.link-esqueci-senha a,
p:hover {
    color: var(--primary-color);
}

router-link{
    text-decoration: none;
}
</style>