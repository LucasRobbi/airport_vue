<template>
  <div class="home">
    <div class="custom-container">
      <h1>Encontre Passagens Aéreas!</h1>
      <div class="row" id="busca_voo">
        <img class="col-3" id="imgbusca" src="../assets/icon/painelBuscaVoo.svg" />

        <div class="col-3" id="aeroportos">
          <p>Aeroportos</p>
          <input id="partida" placeholder="Partida" v-model="ship" />
          <input id="destino" placeholder="Destino" v-model="dest"/>
        </div>

        <div class="col-2" id="ocupantes">
          <p>Passagens</p>
          <div class="d-flex justify-content-between">
            <p>
              <img src="../assets/icon/iconPessoa.svg" alt="icon de uma Pessoa" />
              Adultos
            </p>
            <div class="qtd-stepper">
              <button class="botao_remove_adulto" v-on:click="remove_adulto">-</button>
              <span class="mr-2 ml-2">
                {{ adultos }}
              </span>
              <button class="botao_add_adulto" v-on:click="add_adulto">+</button>
            </div>
          </div>

          <div class="d-flex justify-content-between">
            <p>
              <img src="../assets/icon/iconCrianca.svg" alt="icon de uma Criança" />
              Crianças
            </p>
            <div class="qtd-stepper">
              <button class="botao_remove_crianca" v-on:click="remove_crianca">-</button>
              <span class="mr-2 ml-2">
                {{ criancas }}
              </span>
              <button class="botao_add_crianca" v-on:click="add_crianca">+</button>
            </div>
          </div>
        </div>

        <div class="col-3 col md-12" id="data" >
          <p>Ida</p>
          <input type="date" id="data_ida" name="data_ida" />
          <br />
          <router-link 
            :to="{ name: 'Results', params: { ship: ship, dest: dest } }"
            ><button @click="makeSearch" id="buscar">Buscar</button></router-link>
        </div>
      </div>

      <div>
        <div class="mt-5">
          <h3>Onde vamos agora?</h3>
          <h4>Descubra sua próxima aventura!</h4>

          <div class="m-5">
            <SuggestionsCards/>
            <!-- <suggestions-component></suggestions-component> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SuggestionsCards from '@/components/SuggestionsCards.vue'
import axios from 'axios';

export default {
  name: "Home",
  components: {
    SuggestionsCards
  },
  data() {
    return {
      adultos: 0,
      criancas: 0,
      ship: "",
      dest: "",
      result: []
    };
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
    makeSearch(){
      const shipement = this.ship ? this.ship : "";
      const destination = this.dest ?? "";

      axios.get(`http://localhost:5000/flight?dest=${destination}&ship=${shipement}`)
      .then(res => {
        // this.result = res.data
        console.log(res.data)
        this.result = ["oi", "tudo", "bem"]
      })
      .catch(e => console.error(e))
    }
  },
};
</script>

<style>
#data_ida,
#data_volta {
  margin-bottom: 10px;
  border: none;
  width: 100%;
}

#buscar {
  width: 100%;
  height: 30px;
  background-color: #ffa251;
  border-radius: 5px;
  color: #eff1f8;
  border: none;
}

.botao_add_crianca,
.botao_remove_crianca,
.botao_add_adulto,
.botao_remove_adulto {
  margin-right: 3px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: #ffa251;
  height: 30px;
  min-width: 30px;
  max-width: 30px;
}
</style>