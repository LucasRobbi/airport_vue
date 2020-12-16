<template>
  <div class="admin-home custom-container">
    <h2>Bem vindo, {{ user_name }}</h2>
    <div class="d-flex justify-content-center painel">
      <div class="mr-5">
        <img src="../../assets/icon/painelAdmin.svg" alt="A aventura chama" id="imgPainel" />
      </div>
      <div class="links d-flex flex-column">
        <router-link to="/voo"><button class="acess">Lista de Voos</button></router-link>
        <router-link to="/nova-companhia"
          ><button class="acess">Cadastre uma Companhia</button></router-link
        >
        <router-link to="/novo-usuario"
          ><button class="acess">Cadastre um Admin</button></router-link
        >
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
h2 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 40px;
}
.admin-home {
  padding: 30px;
}
.painel {
  margin-top: 40px;
  display: flex;
  align-content: space-around;
}
#imgPainel {
  height: 200px;
  width: auto;
}
.links > a {
  width: 100%;
}
.acess {
  width: 100%;
  height: 50px;
  background-color: #ffa251;
  color: #eff1f8;
  border: none;
  margin: 10px;
  padding: 0 30px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.24);
  border-radius: 16px;
}
</style>
