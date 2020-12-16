<template>
  <div>
    <b-button id="show-btn" @click="showModal">Open Modal</b-button>

    <b-modal ref="signInModal" title="Cadastre-se">
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
              placeholder="Insira um Email"
              aria-describedby="inputGroupPrepend"
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
              required
            />
            <div class="invalid-feedback">
              Selecione uma Senha.
            </div>
          </div>
        </div>
      <div>
          <button
            class="border-0 change-modal m-auto w-100 p-2"
          >
            Já tenho cadastro. Entre
          </button>
        </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "signInModal",
  components: {},
  methods: {
    showModal() {
      this.$refs["signInModal"].show();
    },
    hideModal() {
      this.$refs["signInModal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["signInModal"].toggle("#toggle-btn");
    },
  },
  data() {
    return {
      modalShow: false,
    };
  },
};
</script>

<style>
.modal-backdrop{
  background-color: #3333338c;
}
.change-modal {
  color: #ffa251;
  font-weight: bold;
}
</style>
