Vue.component("my-trips-component", {
  template: `
  <div>
    <div class="account-card mb-5" v-for="myTrip in myTrips">
      <div class="destination">
        <span class='dest'>{{myTrip.shipment}}</span>
        <img src="../src/img/icon/go_to.svg" alt="airline" />
        <span class='dest'>{{myTrip.destination}}</span>
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
        <span class="preco">R$ {{myTrip.ticket_price}}</span>
      </div>
      <div class="cancelamento">
        <span class="cancel">Solicitar cancelamento</span>
      </div>
    </div>
  </div>
  `,
  data: function () {
    return {
      myTrips: [
        {
          shipment: "São Paulo",
          destination: "Rio de Janeiro",
          ticket_price: 150.0,
          ship_date: "2020-07-02T03:00:00.000Z",
          ship_time: "18:00:00",
          estimated_time: "03:00:00",
          limit: 46,
          airline_id: 1,
          status: "ativo",
          image: "https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_1280.jpg",
        },
        {
          shipment: "São Paulo",
          destination: "Rio de Janeiro",
          ticket_price: 150.0,
          ship_date: "2020-07-02T03:00:00.000Z",
          ship_time: "18:00:00",
          estimated_time: "03:00:00",
          limit: 46,
          airline_id: 1,
          status: "ativo",
          image: "https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_1280.jpg",
        },
      ],
    };
  },
});

Vue.component("header-component", {
  template: `
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
});

Vue.component("suggestions-component", {
  template: `
  <div class="div-imgs">
    <div class="card" style="width: 18rem;" v-for="suggestion in suggestions">
        <img class="card-img-top" :src="suggestion.img" :alt="suggestion.title" />
        <div class="card-body">
            <p class="card-text">{{suggestion.title}}</p>
        </div>
    </div>
  </div>
  `,
  data: function () {
    return {
      suggestions: [
        {title: "Dublin – Irlanda", img: "https://cdn.pixabay.com/photo/2013/12/18/18/01/bridge-230311_1280.jpg"},
        {title: 'Tanzânia – África', img: "https://cdn.pixabay.com/photo/2014/03/02/18/05/tanzania-278367_960_720.jpg"},
        {title: 'Huaraz - Peru', img: "https://cdn.pixabay.com/photo/2017/08/14/05/49/landscape-2639472_960_720.jpg"},
        {title: 'Sardenha - Itália', img: "https://cdn.pixabay.com/photo/2018/07/09/21/05/sardinia-3527270_960_720.jpg"},
        {title: 'Alberta - Canadá', img: "https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg"},
        {title: 'Tokyo - Japão', img: "https://cdn.pixabay.com/photo/2015/06/29/04/41/tokyo-tower-825196_960_720.jpg"},
      ],
    };
  },
});

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
  },
});

Vue.config.devtools = true;
