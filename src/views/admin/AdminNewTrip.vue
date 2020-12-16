<template>
  <div class="admin-new-trip">
    <div class="d-flex justify-content-center">
      <div class="styledContainer">
        <h1>Novo Voo</h1>
        <div>
          <div class="form-group">
            <select class="form-control withBorder" id="embarque">
              <option selected disabled>Embarque</option>
              <option>São Paulo</option>
              <option>Rio de Janeiro</option>
            </select>
          </div>
          <div class="form-group">
            <select class="form-control withBorder" id="Destino">
              <option selected disabled>Destino</option>
              <option>São Paulo</option>
              <option>Rio de Janeiro</option>
            </select>
          </div>
        </div>
        <div>
          <div class="d-flex">
            <input class="form-control withBorder mr-4" type="date" placeholder="Data" />
            <input class="form-control withBorder" type="time" placeholder="Horário" />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">
                <img src="../../assets/icon/time.svg" />
              </span>
            </div>
            <input type="text" class="form-control" placeholder="Tempo estimado de voo" required />
          </div>
        </div>
        <div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">
                <img src="../../assets/icon/users.svg" />
              </span>
            </div>
            <input
              type="number"
              class="form-control"
              placeholder="Limite de passageiros"
              required
            />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">
                <img src="../../assets/icon/Plane.svg" />
              </span>
            </div>
            <input type="text" class="form-control" placeholder="Companhia aérea" required />
          </div>
        </div>
        <div id="cadastrar">
          <button class="cadastrar">Cadastrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
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
