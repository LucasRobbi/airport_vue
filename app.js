const HeaderComponent = Vue.extend({
  data: () => {},
  template: "#custom-header"
});

Vue.component('header-component', {
  template:`
    <header>
      <nav id="menu">
          <div class="logo">
              <a href="/pages/index.html" id="inicio"><img class="logo" src="../src/img/inicio.ico"></a>
          </div>
          <div class="links">
              <a href="/pages/minhas_viagens.html" id="minhas_viagens"><img
                      src="../src/img/icon/iconViagens.svg">Minhas
                  Viagens</a>
              <a href="/pages/minha_conta.html" id="minha_conta" class="w3-rigth"><img
                      src="../src/img/icon/iconUser.svg">Minha Conta</a>
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
