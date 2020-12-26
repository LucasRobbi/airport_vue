<template>
  <div class="myTrips">
    <div class="account-card mb-5" v-for="myTrip in myTrips" :key="myTrip.id">
      <div class="destination">
        <span class='dest'>{{myTrip.shipment}}</span>
        <img src="../assets/icon/go_to.svg" alt="airline" />
        <span class='dest'>{{myTrip.destination}}</span>
      </div>
      <div class="airline">
        <img src="../assets/icon/latam.svg" alt="airline" class="airline-img"/>
        <span class="latam">{{myTrip.airline}}</span>
      </div>
      <div class="embarque">
        <span class="embarque-texto">Embarque as: <span class='response'>{{myTrip.ship_time}}</span></span>
        <span class="embarque-texto">Embarque no dia: <span class='response'>{{myTrip.ship_date}}</span></span>
      </div>
      <div class="tempo">
        <span class="embarque-texto">Tempo estimado: <span class='response'>{{myTrip.estimated_time}}</span></span>
        <span class="preco">R$ {{myTrip.ticket_price}}</span>
      </div>
      <div v-if="admin == true" class="cancelamento">
        <span class="edit-btn">Editar voo</span>
      </div>
      <div v-if="admin == true" class="excluir">
        <span class="cancel">Excluir voo</span>
      </div>
      <div v-else class="cancelamento">
        <span class="cancel">Solicitar cancelamento</span>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'myTrips',
  data () {
    return {
       myTrips: [],
       admin: false
    };
  },
  mounted() {    
        const token = sessionStorage.getItem('user_token');
        const admin = sessionStorage.getItem('user_type');
        this.admin = admin && admin == true ? true : false;
        axios.get('http://localhost:5000/user/tickets', { headers: { Authorization: `bearer ${token}` } })
        .then(res => this.myTrips = res.data)
        .catch(e => console.error(e))

        console.log('aaa', this.myTrips)
    }
}
</script>

<style>
.excluir{
  display: flex;
  justify-content: "flex-start"
}
.edit-btn{
  color: #e1ff00;
  cursor: pointer;
}
</style>