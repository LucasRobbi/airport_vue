 new Vue({
    el: "#vue-app",
    data: {
      adultos: 0,
      criancas: 0,
    },
    methods:{
      add_adulto: function(adultos){
        this.adultos++;
      },
      remove_adulto:function(adultos){
        this.adultos--;
      },
      add_crianca:function(criancas){
        this.criancas++;
      },
      remove_crianca:function(criancas){
        this.criancas--;
      },
    },
    computed:{
        
    }
  });