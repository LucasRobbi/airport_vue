<template>
  <div class="MyTrips d-flex">
    <h1>Minhas viagens</h1>
    <MyTrip />
    <div v-if="openSignIn === true">
      <SignIn v-bind:goToLogin="goToLogin" v-bind:hideModal="hideModal" />
    </div>
    <div v-if="openLogIn === true">
      <LogIn v-bind:goToSignIn="goToSignIn" v-bind:hideModal="hideModal" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SignIn from "@/components/SignIn.vue";
import LogIn from "@/components/LogIn.vue";
import MyTrip from "@/components/MyTrip.vue";

export default {
  name: "MyTrips",
  components: {
    MyTrip,
    SignIn,
    LogIn,
  },
  data() {
    return {
      openSignIn: true,
      openLogIn: false,
    };
  },
  methods: {
    goToLogin() {
      this.openSignIn = false;
      this.openLogIn = true;
    },
    goToSignIn() {
      this.openSignIn = true;
      this.openLogIn = false;
    },
    hideModal() {
      this.openSignIn = false;
      this.openLogIn = false;
      this.$refs["logInModal"].hide();
      this.$refs["signInModal"].hide();
    },
  },
};
</script>

<style>
.MyTrips {
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
