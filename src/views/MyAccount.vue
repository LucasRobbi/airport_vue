<template>
  <div class="conta">
    <div id="painel_conta">
      <img id="minha_conta_img" src="../assets/icon/painelUser.svg" />
      <div id="dados">
        <div class="edit-area">
          <p class="my-account">Minha Conta</p>
          <div class="pensil-div">
            <img class="pencil-edit" src="../assets/pencil.png" />
          </div>
        </div>
        <p>Nome:</p>
        <p>Email:</p>
        <p>CPF:</p>
        <p>Senha:</p>

        <div class="logout-div">
          <img src="../assets/delete.png" class="delete" />
          <span class="logout">Sair</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Header from '@/components/Header.vue'

export default {
  name: "conta",
  components: {},
};
</script>
