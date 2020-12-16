<template>
    <div class="admin-new-company">
        <div>
            <h1>Companhia Aérea</h1>
            <p>Pesquise pelo nome da companhia</p>
            <div>
                <input type="text" placeholder="Nome companhia">
                <button id="addImage"><img src=".../assets/icon/iconLoadImage.svg">Escolha uma imagem</button>
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
#addImage{
    background-color: #EFF1F8;
}
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
  margin: 10px;
}
</style>