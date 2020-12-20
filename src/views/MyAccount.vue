<template>
  <div class="conta">
    <div v-if="openSignIn === true">
      <SignIn v-bind:goToLogin="goToLogin" v-bind:hideModal="hideModal"/>
    </div>
    <div v-if="openLogIn === true">
      <LogIn v-bind:goToSignIn="goToSignIn" v-bind:hideModal="hideModal"/>
    </div>
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
import SignIn from '@/components/SignIn.vue'
import LogIn from '@/components/LogIn.vue'

export default {
  name: "conta",
  components: {
    SignIn,
    LogIn
  },
  data() {
    return {
      openSignIn: true,
      openLogIn: false,
    }
  },
  methods: {
    goToLogin(){
      this.openSignIn = false;
      this.openLogIn = true;
    },
    goToSignIn(){
      this.openSignIn = true;
      this.openLogIn = false;
    },
    hideModal(){
      this.openSignIn = false;
      this.openLogIn = false;
      this.$refs["logInModal"].hide();
      this.$refs["signInModal"].hide();
    }
  }
};
</script>

<style>
#minha_conta_img {
  padding-left: 80px;
  max-height: 200px;
}
#painel_conta {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
}
#painel_conta img {
  margin-right: 30px;
}
.edit-area {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-right: 3px; */
}
.pencil-edit {
  width: 15px;
  height: 15px;
  cursor: pointer;
}
.my-account {
  text-align: center;
  font-size: 20px;
  margin-bottom: 25px;
  margin-right: 20px;
}
.logout-div {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.delete {
  width: 25px;
  height: 25px;
  cursor: pointer;
}
.pensil-div {
  position: absolute;
  right: 0;
  top: 20px;
}
.logout {
  color: rgb(78, 2, 2);
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
#dados {
  margin-right: 60px;
  padding: 30px;
  padding-left: 50px;
  display: block;
  justify-content: space-around;
  background-color: #e7ebeb;
  border-radius: 15px;
  width: 600px;
  box-shadow: 2px 3px 3px rgb(82, 81, 81);
  position: relative;
}
</style>