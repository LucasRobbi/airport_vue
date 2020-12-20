<template>
  <div
    class="modal fade logInModal"
    id="logInModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="logInModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="d-flex justify-content-end">
          <button
            type="button"
            class="close mr-3 mt-2"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-header p-1">
          <h5 class="modal-title m-auto">Entre</h5>
        </div>
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
          <button
            class="border-0 change-modal m-auto w-100 p-2"
            onclick="my_account._signInModal._logInModal('#signInModal')"
          >
            Não tenho cadastro. Cadastre-se
          </button>
        </div>
        <div class="modal-footer d-flex justify-content-between">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            onclick="my_account._signInModal._onCancel()"
          >
            Cancelar
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onclick="my_account._signInModal._onLogin()"
          >
            Cadastre-se
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "logInModal",
  components: {},
  data() {
    return {
      modalShow: true,
    };
  },
};
</script>

<style></style>
