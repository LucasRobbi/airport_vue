<template>
  <div class="trip-list">
    <h1>Voos</h1>
    <div class="new-flight-link" >
        <router-link to="/novo-voo">Cadastrar Novo Voo</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "trip-list",
};
</script>

<style>
.new-flight-link {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 30px;
}
.new-flight-link a {
  color: #ff5b2b;
  font-weight: bold;
  font-size: 22px;
  text-decoration-line: underline;
}
</style>
