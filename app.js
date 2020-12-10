new Vue({
  el: "#vue-app",
  data: {
    adultos: 0,
    criancas: 0,
  },
  methods: {
    add_adulto() {
      this.adultos++;
    },
    remove_adulto() {
      if (this.adultos >= 1) this.adultos--;
    },
    add_crianca() {
      this.criancas++;
    },
    remove_crianca() {
      if (this.criancas >= 1) this.criancas--;
    },
  },
  computed: {},
});
