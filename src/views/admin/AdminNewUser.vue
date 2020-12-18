<template>
  <div class="admin-new-user">
    <div class="styledContainer">
      <h1>Usuário</h1>
      <div>
        <div class="d-flex">
          <div class="input-group mr-5">
            <input type="text" class="form-control withBorder" placeholder="Nome" />
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
            <input type="text" class="form-control withBorder" placeholder="CPF" />
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
          <input type="text" class="form-control withBorder" placeholder="E-mail" />
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text searchBtn" id="inputGroupPrepend">
              <button>
                <img src="../../assets/icon/lock.svg" />
              </button>
            </span>
          </div>
          <input type="text" class="form-control withBorder" placeholder="Senha" />
        </div>
      </div>
      <div id="cadastrar">
        <button class="cadastrar">Cadastrar</button>
      </div>
    </div>
  </div>
</template>

<script></script>

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
