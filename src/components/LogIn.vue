<template>
  <div>
    <b-modal
      no-close-on-backdrop
      centered
      no-close-on-esc
      ref="logInModal"
      title="Entre"
      @close="signInClose"
      @cancel="signInClose"
      @ok="signIn"
    >
      <div class="modal-body">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupPrepend">
              <img src="../assets/icon/email.svg" />
            </span>
          </div>
          <input
            type="email"
            class="form-control"
            id="validationCustomEmail"
            placeholder="Insira seu Email"
            aria-describedby="inputGroupPrepend"
            v-model="email"
            required
          />
          <div class="invalid-feedback">
            Selecione um Email.
          </div>
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupPrepend">
              <img src="../assets/icon/lock.svg" />
            </span>
          </div>
          <input
            type="password"
            class="form-control"
            id="validationSenha"
            placeholder="Insira sua senha"
            aria-describedby="inputGroupPrepend"
            v-model="password"
            required
          />
          <div class="invalid-feedback">
            Selecione sua senha.
          </div>
        </div>
      </div>
      <div>
        <button class="border-0 change-modal m-auto w-100 p-2" v-on:click="handleGoToSignIn">
          Não tenho cadastro. Cadastre-se
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "logInModal",
  data() {
    return {
      email: "",
      password: "",
      openSignIn: false,
      token: null,
      type: ""
    };
  },
  props: {
    goToSignIn: Function,
    hideModal: Function,
  },
  methods: {
      signIn(){
        const login_data = { email: this.email, password: this.password }
        axios.post('http://localhost:5000/signIn', login_data)
        .then(res => {
          this.token = res.data.token;
          this.type = res.data.type;
          sessionStorage.setItem('user_token', this.token)
          sessionStorage.setItem('user_type', this.type)

          if(this.type === 'admin') window.location.pathname = '/admin';
        })
        .catch(e => {
          if(e.response.status == 500){
            this.$swal('Usuário não encontrado', 'Tente novamente', 'error')
            return setTimeout(() => window.location.pathname='/', 1000);
          }
        })
    },
    showModal() {
      this.$refs["logInModal"].show();
    },
    signInClose() {
      if(window.location.pathname !== "/") window.location.pathname = "/"
      else this.hideModal();
    },
    handleGoToSignIn() {
      this.goToSignIn();
    },
  },
  mounted() {
    const token = sessionStorage.getItem('user_token');
    if(!token){      
      this.showModal();
    }
  },
};
</script>

<style>
.modal-backdrop {
  background-color: #3333338c;
}
.change-modal {
  color: #ffa251;
  font-weight: bold;
}
</style>
