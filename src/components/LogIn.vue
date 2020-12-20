<template>
  <b-modal
    no-close-on-backdrop
    centered
    no-close-on-esc
    ref="logInModal"
    title="Entre"
    @close="signInClose"
    @cancel="signInClose"
  >
    <div class="modal-body">
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
          type="text"
          class="form-control"
          id="validationSenha"
          placeholder="Insira sua senha"
          aria-describedby="inputGroupPrepend"
          required
        />
        <div class="invalid-feedback">
          Selecione sua senha.
        </div>
      </div>
    </div>
    <div>
      <button class="border-0 change-modal m-auto w-100 p-2" v-on:click="goToSignIn">
        Não tenho cadastro. Cadastre-se
      </button>
    </div>
  </b-modal>
</template>

<script>

export default {
  name: "logInModal",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  created() {
  },
  methods: {
    showModal() {
      this.$refs["signInModal"].show();
    },
    hideModal() {
      this.$refs["signInModal"].hide();
    },
    signInClose() {
      window.location.pathname = "/";
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["signInModal"].toggle("#toggle-btn");
    },
    goToSignIn() {
      this.$refs["logInModal"].hide();
      this.$refs["signInModal"].show();
    },
    goToLogIn() {
      this.$refs["signInModal"].hide();
      this.$refs["logInModal"].show();
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
