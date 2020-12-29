<template>
  <div class="admin-new-company">
    <div class="styledContainer">
      <h1>Companhia Aérea</h1>
      <p>Pesquise pelo nome da companhia</p>
      <div class="newCompanyForm">
        <div class="input-group">
          <input
            type="text"
            class="form-control withBorder"
            placeholder="Nome companhia"
            v-model="name"
            required
          />
          <div class="input-group-prepend">
            <span class="input-group-text searchBtn" id="inputGroupPrepend">
              <button>
                <img src="../../assets/icon/search.svg" />
              </button>
            </span>
          </div>
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupPrepend">
              <img src="../../assets/icon/iconLoadImage.svg" />
            </span>
          </div>
          <input type="text" class="form-control" placeholder="Escolha uma imagem" required v-model="image"/>
        </div>
      </div>
      <div id="cadastrar">
        <button @click="createAirline" class="cadastrar">Cadastrar</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  components: {},
  data() {
    return {
      name: "",
      image: ""
    };
  },
  methods: {
    createAirline() {
      const token = sessionStorage.getItem('user_token');
      const airline_data = { name: this.name, logo: this.image };
      axios.post('http://localhost:5000/airline',  airline_data, {
        headers: { Authorization: `bearer ${token}` }
      })
      .then(res => {
        if(res.status == 200){
          this.$swal('Linha Aérea cadastrada com sucesso', 'Tudo pronto.', 'success')
          return setTimeout(() => window.location.pathname == '/admin', 1000)
        }
      })
      .catch(e => {
        if(e.response.status == 401) return this.$swal('Algo deu errado', 'Você não tem permissão para fazer isso', 'warning')
        if(![200].includes(e.response.status)) return this.$swal('Algo deu errado', 'Tente novamente mais tarde :(', 'error')
        return this.$swal('Algo deu errado', 'Tente novamente mais tarde :(', 'error')
      })
    },
  },
};
</script>

<style>
#addImage {
  background-color: #eff1f8;
}
#cadastrar {
  display: flex;
  align-content: right;
}
.admin-new-company {
  display: flex;
  justify-content: center;
  align-items: self-start;
  height: 100%;
}
.cadastrar {
  width: 100%;
  height: 50px;
  background-color: #ffa251;
  border-radius: 5px;
  color: #eff1f8;
  border: none;
}
#inputGroupPrepend.searchBtn {
  padding: 0;
}
#inputGroupPrepend.searchBtn button {
  border: none;
  margin: 0;
  padding: 0 10px;
  height: 100%;
}
</style>
