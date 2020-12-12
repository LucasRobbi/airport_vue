const HeaderComponent = Vue.extend({
  data: () => {},
  template: "#custom-header"
});

Vue.component('my-account-component', {
  template: `
    <div class="account-card">
      <div class="destination">
        <span class='dest'>São Paulo</span>
        <img src="../src/img/icon/go_to.svg" alt="airline" />
        <span class='dest'>São Paulo</span>
      </div>
      <div class="airline">
        <img src="../src/img/icon/latam.svg" alt="airline" class="airline-img"/>
        <span class="latam">Latam</span>
      </div>
      <div class="embarque">
        <span class="embarque-texto">Embarque as: <span class='response'>01h30m</span></span>
        <span class="embarque-texto">Embarque no dia: <span class='response'>21/08/2021</span></span>
      </div>
      <div class="chegada">
        <span class="embarque-texto">Previsão de chegada: <span class='response'>22/08/2021</span></span>
      </div>
      <div class="tempo">
        <span class="embarque-texto">Tempo estimado: <span class='response'>24h</span></span>
        <span class="preco">R$ 2000.00</span>
      </div>
      <div class="cancelamento">
        <span class="cancel">Solicitar cancelamento</span>
      </div>
    </div>
  `
})

Vue.component('header-component', {
  template:`
    <header>
      <nav id="menu">
          <div class="logo">
              <a href="/pages/index.html" id="inicio"><img class="logo" src="../src/img/inicio.ico"></a>
          </div>
          <div class="links">
              <a href="/pages/minhas_viagens.html" id="minhas_viagens">
                <img src="../src/img/icon/iconViagens.svg">Minhas Viagens
              </a>
              <a href="/pages/minha_conta.html" id="minha_conta" class="w3-rigth">
                <img src="../src/img/icon/iconUser.svg">Minha Conta
              </a>
          </div>
      </nav>
    </header>
  `,
})

new Vue({
  el: "#vue-app",
  data: {
    adultos: 0,
    criancas: 0,
  },
  methods: {
    add_adulto() {
      this.adultos++;
    },
    remove_adulto() {
      if (this.adultos >= 1) this.adultos--;
    },
    add_crianca() {
      this.criancas++;
    },
    remove_crianca() {
      if (this.criancas >= 1) this.criancas--;
    },
  }

});



Vue.config.devtools = true;
