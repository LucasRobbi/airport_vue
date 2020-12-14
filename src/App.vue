<template>
  <div class="page">
    <header>
      <nav class="menu">
        <div class="logo">
          <router-link to="/"><img class="logo" src="./assets/logo.png"/></router-link> 
        </div>
        <div class="links">
          <router-link to="/minhas-viagens"><img src="./assets/icon/iconViagens.svg" class="mr-1" /> Minhas Viagens</router-link>
          <router-link to="/minha-conta"><img src="./assets/icon/iconUser.svg" class="ml-3 mr-1" />Minha Conta</router-link>
        </div>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style>
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
#app {
  color: #333333;
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0 15px 0 15px;
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
  margin-left: -15px;
  margin-right: -15px;
  background-color: #ffffff;
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
</style>
