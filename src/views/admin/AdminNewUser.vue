<template>
  <div class="admin-new-user">
    <div class="styledContainer">
      <h1>Usuário</h1>
      <div>
        <div class="d-flex">
          <div class="input-group mr-5">
            <input v-model="name" type="text" class="form-control withBorder" placeholder="Nome" />
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
              <span class="input-group-text searchBtn" id="inputGroupPrepend">
                <button>
                  <img src="../../assets/icon/fingerprint.svg" />
                </button>
              </span>
            </div>
            <input v-model="cpf" type="text" class="form-control withBorder" placeholder="CPF" />
          </div>
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text searchBtn" id="inputGroupPrepend">
              <button>
                <img src="../../assets/icon/email.svg" />
              </button>
            </span>
          </div>
          <input v-model="email" type="text" class="form-control withBorder" placeholder="E-mail" />
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text searchBtn" id="inputGroupPrepend">
              <button>
                <img src="../../assets/icon/lock.svg" />
              </button>
            </span>
          </div>
          <input v-model="password" type="password" class="form-control withBorder" placeholder="Senha" />
        </div>
      </div>
      <div id="cadastrar">
        <button @click="createAdmin" class="cadastrar">Cadastrar</button>
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
      email: "",
      password: "",
      cpf: "",
    };
  },
  methods: {
    createAdmin(){
       const token = sessionStorage.getItem('user_token');
       const body = { name: this.name, email: this.email, password: this.password, cpf: this.cpf }
       if(!this.name || !this.password || !this.cpf || !this.email){
         return this.$swal('Algo deu errado.', 'Todos os campos precisam ser preenchidos', 'error');
       }
       axios.post('http://localhost:5000/admin/user', body, {
         headers: { Authorization: `bearer ${token}` }
       })
       .then(res => {
         if(res.status == 200) {
           this.$swal('Cadastrado com sucesso', 'Novo admin adicionado', 'success')
           return setTimeout(() => window.location.pathname = '/', 1000)
         }
       })
       .catch(e => {
         if(e.response.status == 401) return this.$swal('Algo deu errado', 'Você não tem permissão para fazer isso', 'warning')
         if(![200].includes(e.response.status)) return this.$swal('Algo deu errado', 'Tente novamente mais tarde :(', 'error')
         return this.$swal('Algo deu errado', 'Tente novamente mais tarde :(', 'error')
       })
    }
  },
};
</script>

<style>
.admin-new-user {
  display: flex;
  justify-content: center;
}
#cadastrar {
  display: flex;
  align-content: right;
}
.cadastrar {
  width: 100%;
  height: 50px;
  background-color: #ffa251;
  border-radius: 5px;
  color: #eff1f8;
  border: none;
}
</style>
