<template>
    <div class="admin-new-trip">
        <div>
            <h1>Novo Voo</h1>
            <p>Pesquise pelo nome ou CPF</p>
            <div>
                <div>
                    <input type="text" placeholder="Embarque">
                    <input type="text" placeholder="Destino">   
                </div>
                <div>
                    <div>
                        <input type="text" placeholder="Data">
                        <input type="text" placeholder="Horário">   
                    </div>
                    <input type="text" placeholder="Tempo estimado de voo">   
                </div>
                <div>
                    <input type="text" placeholder="Limite de passageiros">
                    <input type="text" placeholder="Companhia aérea">   
                </div>
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
  margin: 10px;
}
</style>