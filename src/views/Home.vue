<template>
  <div class="home">
    <div class="custom-container">
      <h1>Encontre Passagens Aéreas!</h1>
      <div class="row" id="busca_voo">
        <img class="col-3" id="imgbusca" src="../assets/icon/painelBuscaVoo.svg" />

        <div class="col-3" id="aeroportos">
          <p>Aeroportos</p>
          <input id="partida" placeholder="Partida" />
          <input id="destino" placeholder="Destino" />
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
          <a href="./resultados.html"><button id="buscar">Buscar</button></a>
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

export default {
  name: "Home",
  components: {
    SuggestionsCards
  },
  data() {
    return {
      adultos: 0,
      criancas: 0,
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
  },
};
</script>
