<template>
    <div class="pr">
        <div class='purchase'>
            <div class='x-div'>
                <img src='../assets/icon/x.svg' class='x'/>
            </div>
            <div class='destination'>
                <span class='dest-text'>{{ship}}</span>
                <img src='../assets/icon/go_to.svg' alt='dest'/>
                <span class='dest-text'>{{dest}}</span>
            </div>
            <div class="passagens-compra">
                <span class="passagem">Passagens: </span>
            </div>
            <div class="qtd-passagens">
                <div class="adulto-qtd">
                    <img src="../assets/icon/iconPessoa.svg" alt="" class="adult-icon">
                    <span class="adulto-text">{{adult}} Adulto</span>
                </div>
                <div class="adulto-qtd">
                    <img src="../assets/icon/iconCrianca.svg" alt="" class="adult-icon">
                    <span class="adulto-text">{{kids}} Criança</span>
                </div>
            </div>
            <div class="embarque-compra">
                <span class="embarque-texto">Embarque no dia:</span>
                <span class="preco">{{ship_date}}</span>
            </div>
            <div class="value-info">
                <div class="embarque-compra">
                    <span class="embarque-texto">Valor da passagem:</span>
                    <span class="preco">R$ {{ticket_price}}</span>
                </div>
                <div class="embarque-compra">
                    <span class="embarque-texto">Sub-total: </span>
                    <span class="preco">R$ {{sub_total}}</span>
                </div>
                <div class="embarque-compra">
                    <span class="total-value">Total com desconto:</span>
                    <span class="preco">R$ {{total_price}}</span>
                </div>           
            </div>
            <div class="tipo-pagamento">
                <img @click="purchaseTickets" src="../assets/icon/mercado.svg" alt="" class="pagamento">
                <img @click="purchaseTickets" src="../assets/icon/pick.svg" alt="" class="pagamento">
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Purchase",
  components: {},
  data() {
    return {
     total_price: 0,
     sub_total: 0
    };
  },
  props: {
    ticket_price: Number,
    ship: String,
    dest: String,
    ship_date: String,
    adult: Number,
    kids: Number,
    flight_id: Number
  },
  methods: {
      purchaseTickets() {
          const token = sessionStorage.getItem('user_token');
          const body = { flight_id: this.flight_id, amount: this.kids + this.adult, child_amount: this.kids, status: 'ativo' };

          axios.post('http://localhost:5000/ticket', body, { headers: { Authorization: `bearer ${token}` } })
          .then(res => {
              if(res.status == 200) {
                  this.$swal('Compra realizada com sucesso', 'Boa Viagem!', 'success');
                  return setTimeout(() => window.location.pathname = '/', 2000)
              }
          })
          .catch(e => console.error(e))
          
      }
  },
  mounted(){
     const total_tickets = this.kids + this.adult;
     const calc_sub_total = this.ticket_price * total_tickets;
     this.sub_total = calc_sub_total;

     if(this.kids > 0) {
         const descount = (calc_sub_total * 0.3) * this.kids;
         const calc = calc_sub_total - descount;
         this.total_price = calc;
     }else{
         this.total_price = calc_sub_total;
     }
  }
};
</script>

<style>
.pr{
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
.purchase{
    background-color: white;
    padding: 50px;
    width: 800px;
    height: 500px;
    border-radius: 30px;
}
.x-div{
    display:flex;
    justify-content: flex-end;
}
.x{
    width:15px;
    height:15px;
    cursor: pointer;
}
.destination{
    display:flex;
    justify-content: space-between;
    margin-left: 90px;
    margin-bottom: 50px;
}
.dest-text{
    font-weight: bold
}
.passagens-compra{
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
}
.qtd-passagens{
    display: flex;
    align-content: flex-start;
    background-color:  #EFF1F8;
    width: 150px;
    height: 60px;
    flex-direction: column
}
.adulto-qtd{
    display: flex;
    align-items: center;
    margin-bottom:5px;
  
}
.adult-icon{
    margin-right: 10px;
}
.embarque-compra{
    margin-top: 20px;
}
.value-info{
    float: right;
    margin-top: 10px;
    margin-right: 20px;
}
.tipo-pagamento{
    margin-top: 60px;
}
.pagamento{
    cursor: pointer;
}
</style>