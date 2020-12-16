<template>
    <div class="admin-home">
        <div>
            <p>Bem vindo, {{user_name}}</p>
            <div class="painel">
                <div>
                    <img src="../../assets/icon/painelAdmin.svg" alt="A aventura chama" id="imgPainel">
                </div>
                <div class="links">
                    <router-link to="/voo"><button class="acess">Lista de Voos</button></router-link>
                    <router-link to="/nova-companhia"><button class="acess">Cadastre uma Companhia</button></router-link>
                    <router-link to="/novo-usuario"><button class="acess">Cadastre um Admin</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "admin-home",
  data() {
    return {
      user_name: "Lucas Robbi",
    };
  },
};
</script>


<style>
.painel{
    display: flex;
    align-content: space-around;
}
#imgPainel{
    height: 200px;
    width: auto;
}
.acess {
  width: 100%;
  height: 50px;
  background-color: #ffa251;
  border-radius: 5px;
  color: #eff1f8;
  border: none;
  margin: 10px;
}
</style>