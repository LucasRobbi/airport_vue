<template>
    <div class="admin-new-user">
        <div>
            <h1>Usuário</h1>
            <p>Pesquise pelo nome ou CPF</p>
            <div>
                <div>
                    <input type="text" placeholder="Nome">
                    <input type="text" placeholder="CPF">   
                </div>
                <input type="text" placeholder="Email">
                <input type="text" placeholder="Senha"> 
            </div>
            <div id=cadastrar>
                <button class="cadastrar">Cadastrar</button>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
#cadastrar{
    display: flex;
    align-content: right;
}
.cadastrar{
  width: 100%;
  height: 50px;
  background-color: #ffa251;
  border-radius: 5px;
  color: #eff1f8;
  border: none;
}
</style>