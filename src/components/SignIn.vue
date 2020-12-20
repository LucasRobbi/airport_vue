<template>
  <div>
    <b-modal
      no-close-on-backdrop
      centered
      no-close-on-esc
      ref="signInModal"
      title="Cadastre-se"
      @close="signInClose"
      @cancel="signInClose"
      @ok="createUser"
    >
      <div class="modal-body">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupPrepend">
              <img src="../assets/icon/iconPessoa.svg" />
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            id="validationNome"
            placeholder="Insira seu Nome"
            aria-describedby="inputGroupPrepend"
            v-model="name"
            required
          />
          <div class="invalid-feedback">
            Selecione seu nome.
          </div>
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupPrepend">
              <img src="../assets/icon/email.svg" />
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            id="validationCustomEmail"
            placeholder="Insira um Email"
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
              <img src="../assets/icon/fingerprint.svg" />
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            id="validationCustoCPF"
            placeholder="Insira seu CPF"
            aria-describedby="inputGroupPrepend"
            v-model="cpf"
            required
          />
          <div class="invalid-feedback">
            Selecione um CPF.
          </div>
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupPrepend">
              <img src="../assets/icon/lock.svg" />
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            id="validationCustomSenha"
            placeholder="Insira uma Senha"
            aria-describedby="inputGroupPrepend"
            v-model="password"
            required
          />
          <div class="invalid-feedback">
            Selecione uma Senha.
          </div>
        </div>
      </div>
      <div>
        <button class="border-0 change-modal m-auto w-100 p-2" v-on:click="handleGoToLogIn">
          Já tenho cadastro. Entre
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "signInModal",
  props: {
    goToLogin: Function,
    hideModal: Function
  },
  data() {
    return {
      name: "",
      email: "",
      cpf: "",
      password: "",
      openLogIn: false,
    };
  },
  methods: {
    createUser() {
      const user_data = { name: this.name, email: this.email, cpf: this.cpf, password: this.password }
      axios.post(`http://localhost:5000/user`, user_data)
      .then(response => console.log('res', response))
      .catch(e => this.errors.push(e));
    },   
    showModal() {
      this.$refs["signInModal"].show();
    },
    signInClose() {
      if(window.location.pathname !== "/") window.location.pathname = "/"
      else this.hideModal();
    },
    handleGoToLogIn() {
      this.goToLogin()
    },
  },
  mounted() {
    this.showModal();
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
