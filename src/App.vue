<template>
  <div class="page">
    <header>
      <div class="linearGradient"></div>
      <nav class="menu" v-if="isAdmin === true">
        <div class="logo">
          <router-link to="/admin"><img class="logo" src="./assets/logo.png"/></router-link>
        </div>
        <div class="links">
          <router-link to="/nova-companhia"
            ><img src="./assets/icon/iconViagens.svg" class="mr-1" /> Companhia</router-link
          >
          <router-link to="/voos"
            ><img src="./assets/icon/iconVoo.svg" class="mr-1" /> Voos
          </router-link>
          <router-link to="/novo-usuario"
            ><img src="./assets/icon/iconUser.svg" class="mr-1" /> Usuário
          </router-link>
        </div>
      </nav>
      <nav class="menu" v-else>
        <div class="logo">
          <router-link to="/"><img class="logo" src="./assets/logo.png"/></router-link>
        </div>
        <div class="links">
          <button class="logIn" v-on:click="handleOpenSignIn">
             <img src="./assets/icon/fingerprint.svg" class="mr-1" /> Logar
          </button>
          <router-link to="/minhas-viagens">
            <img src="./assets/icon/iconViagens.svg" class="mr-1" /> Minhas Viagens
          </router-link>
          <router-link to="/minha-conta">
            <img src="./assets/icon/iconUser.svg" class="ml-3 mr-1" /> Minha Conta
          </router-link>
        </div>
      </nav>
      <div v-if="openSignIn === true">
        <SignIn v-bind:goToLogin="goToLogin" v-bind:hideModal="hideModal"/>
      </div>
      <div v-if="openLogIn === true">
        <LogIn v-bind:goToSignIn="goToSignIn" v-bind:hideModal="hideModal"/>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
// import axios from 'axios';
import SignIn from "@/components/SignIn.vue";
import LogIn from "@/components/LogIn.vue";

export default {
  name: "page",
  data() {
    return {
      isAdmin: false,
      openSignIn: false,
      openLogIn: false
    };
  },
  components: {
    SignIn,
    LogIn,
  },
  methods: {
    handleOpenSignIn() {
      this.openSignIn = true;
    },
    goToLogin(){
      this.openSignIn = false;
      this.openLogIn = true;
    },
    goToSignIn(){
      this.openSignIn = true;
      this.openLogIn = false;
    },
    hideModal(){
      this.openSignIn = false;
      this.openLogIn = false;
    }
  },
};
</script>

<style>
* {
  color: #333333;
  font-family: Nunito;
  box-sizing: border-box;
}
body {
  background: rgb(243 243 243);
}
h1 {
  margin: 20px;
  text-align: center;
  color: #333333;
}
h3 {
  padding-left: 60px;
}
h4 {
  padding-left: 80px;
  font-size: 20px;
}
a {
  color: #333333;
}
.page {
  height: 100%;
}
#app {
  color: #333333;
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0 15px 0 15px;
}
.logIn {
  background: none;
  border: none;
  margin-right: 25px;
}
.linearGradient {
  background: linear-gradient(
    106.46deg,
    #accce9 23.73%,
    #99cceb 32.64%,
    #d1cbd9 44.26%,
    #ddcbd5 55.37%,
    #e4cbd3 55.81%,
    #ffa251 77.19%
  );
  width: 100%;
  height: 8px;
}
input {
  background-color: #eff1f8;
  margin: 0;
  padding: 10px;
  border-radius: 5px;
}
.custom-container {
  max-width: 1400px;
  margin: auto;
}
footer,
header {
  background-color: #ffffff;
}

header {
  position: sticky;
  top: 0;
}

.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
}
.logo {
  width: 60px;
}
.links,
.links a {
  display: flex;
  padding-right: 20px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  white-space: nowrap;
}
.links a:hover {
  color: #ff5929;
}

.links a img {
  padding-right: 10px;
}

@media (max-width: 1600px) {
  .custom-container {
    max-width: 1300px;
    margin: auto;
  }
}

.input-group {
  margin: 20px 0;
}

.input-group-text {
  background: #eff1f8;
}

.form-control {
  background: #eff1f8;
  border-left: none;
}

#inicio {
  text-align: Center;
}

.logo {
  width: 60px;
}

#minhas_viagens {
  text-align: center;
}
#minha_conta {
  text-align: center;
}
#busca_voo {
  display: flex;
  justify-content: space-between;
  padding: 0;

  background-color: #ffffff;
  border-radius: 25px;
  margin: 30px;
  min-width: 300px;
}

#ocupantes > div {
  background-color: #eff1f8;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-bottom: 15px;
}
#ocupantes > div p {
  margin: 0;
}

#aeroportos,
#ocupantes,
#data {
  min-width: 200px;
  display: block;
  justify-content: center;
  padding: 20px 0;
}
#data {
  padding-right: 30px;
}
#partida {
  display: flex;
  justify-content: space-around;
  margin: 10px;
  background-image: url("./assets/icon/iconVoo.svg");
  background-repeat: no-repeat;
  background-position: left;
  background-position-x: 5px;
  width: 100%;
  padding-left: 35px;
  border: none;
}
#destino {
  display: flex;
  justify-content: space-around;
  margin: 10px;
  background-image: url("./assets/icon/iconPouso.svg");
  background-repeat: no-repeat;
  background-position: left;
  background-position-x: 5px;
  width: 100%;
  padding-left: 35px;
  border: none;
}
form {
  display: flex;
  flex-direction: row;
  padding: 2px;
  align-items: center;
  background-color: #eff1f8;
  border: none;
  border-radius: 5px;
  margin: 10px;
}
.add_remove {
  display: flex;
  justify-content: flex-end;
}

#vue-app {
  margin: 0;
  min-width: 100%;
}
#imgbusca {
  max-width: 100%;
  width: auto;
  height: auto;
  padding-left: 0;
  border-radius: 8%;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
/*MINHAS VIAGENS*/
#painel_minhas_viagens {
  padding-top: 80px;
  justify-content: center;
  align-items: center;
}
#texto_painel {
  font-size: 30px;
}
#minhas_viagens_img {
  padding: 0 80px;
  max-height: 200px;
}
#sem_viagem {
  display: block;
  justify-content: center;
  text-align: center;
}
#iniciobtn {
  width: 300px;
  height: 40px;
  background-color: #ffa251;
  border-radius: 5px;
  color: #eff1f8;
  border: none;
}

.div-imgs {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* width: 100%; */
}

.arrow-right {
  float: right;
  right: 1000px;
}

.img-edit {
  max-width: 300px;
  border-radius: 10px;
}

.slick-slide {
  outline: none;
}

.slick-prev::before,
.slick-next::before {
  color: #000 !important;
  font-size: 25px;
}

.trips {
  display: flex;
  justify-content: center;
}

.account-card {
  background-color: rgb(255, 253, 253);
  width: 900px;
  height: 300px;
  padding: 30px;
  box-shadow: 5px 5px 5px rgba(110, 110, 110, 0.5);
  border-radius: 10px;
}

.destination {
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.airline-img {
  /* margin-left: 200px; */
  width: 40px;
  height: 40px;
}

.latam {
  font-weight: bold;
}

.dest {
  font-size: 20px;
  font-weight: bold;
}

.airline {
  display: flex;
  justify-content: flex-end;
}

.embarque {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 390px;
  margin-bottom: 30px;
}

.embarque-texto {
  font-size: 14px;
  color: black;
  font-weight: 300;
}

.tempo {
  /* background-color: black; */
  width: 350px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  align-items: center;
}

.response {
  color: #000;
  margin-left: 10px;
}

.preco {
  color: rgb(46, 46, 190);
  margin-left: 30px;
}

.cancelamento {
  display: flex;
  justify-content: flex-end;
}

.cancel {
  cursor: pointer;
  color: rgb(122, 16, 16);
}
.form-control.withBorder {
  border: 1px solid #ced4da;
}
.styledContainer {
  margin-top: 80px;
  background-color: rgb(255, 253, 253);
  max-width: 900px;
  height: auto;
  padding: 30px;
  box-shadow: 5px 5px 5px rgba(110, 110, 110, 0.5);
  border-radius: 10px;
}
</style>
