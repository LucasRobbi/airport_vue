<template>
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
                <span class="adulto-text">1 Adulto</span>
            </div>
            <div class="adulto-qtd">
                <img src="../assets/icon/iconCrianca.svg" alt="" class="adult-icon">
                <span class="adulto-text">1 Criança</span>
            </div>
        </div>
        <div class="embarque-compra">
            <span class="embarque-texto">Embarque no dia:</span>
            <span class="preco">{{ship_date}}</span>
        </div>
        <div class="value-info">
            <div class="embarque-compra">
                <span class="embarque-texto">valor da passagem:</span>
                <span class="preco">R$ {{ticket_price}}</span>
            </div>
            <div class="embarque-compra">
                <span class="embarque-texto">valor da passagem com desconto:</span>
                <span class="preco">R$ 100,00</span>
            </div>
            <div class="embarque-compra">
                <span class="total-value">Total:</span>
                <span class="preco">R$ 100,00</span>
            </div>           
        </div>
         <div class="tipo-pagamento">
            <img src="../assets/icon/mercado.svg" alt="" class="pagamento">
            <img src="../assets/icon/pick.svg" alt="" class="pagamento">
        </div>
    </div>
</template>

<script>
export default {
  name: "Purchase",
  components: {},
  data() {
    return {
     
    };
  },
  props: {
    ticket_price: Number,
    ship: String,
    dest: String,
    ship_date: String
  },
  mounted(){
      console.log('aaaa', this.ticket_price)
  }
};
</script>

<style>
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
}
.tipo-pagamento{
    margin-top: 60px;
}
.pagamento{
    cursor: pointer;
}
</style>