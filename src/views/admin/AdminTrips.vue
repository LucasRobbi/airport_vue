<template>
  <div class="trip-list">
    <h1>Voos</h1>
    <div class="new-flight-link" >
        <router-link to="/novo-voo">Cadastrar Novo Voo</router-link>
    </div>
    <div class="ad">
        <div class="myTrips">
          <div class="account-card mb-5" v-for="myTrip in myTrips" :key="myTrip.id">
            <div class="destination">
              <span class='dest'>{{myTrip.shipment}}</span>
              <img src="../../assets/icon/go_to.svg" alt="airline" />
              <span class='dest'>{{myTrip.destination}}</span>
            </div>
            <div class="airline">
              <img src="../../assets/icon/latam.svg" alt="airline" class="airline-img"/>
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
              <router-link :to="{ name: 'AdminNewTrip', params: { myTrip } }">
                <span class="edit-btn">Editar voo</span>
              </router-link>
            </div>
            <div v-if="admin == true" class="excluir">
              <span @click="deleteFlight(myTrip.id)" class="cancel">Excluir voo</span>
            </div>
            <div v-else class="cancelamento">
              <span class="cancel">Solicitar cancelamento</span>
            </div>
          </div>

        </div>
    </div>
  </div>
</template>

<script>

// import MyTrip from '@/components/MyTrip.vue';
import axios from 'axios';

export default {
  name: "trip-list",
  // components: { MyTrip }
  data () {
    return {
       myTrips: [],
       admin: true,
       id: 0
    };
  },
  methods: {
    deleteFlight(id){
      const token = sessionStorage.getItem('user_token');
      axios.delete(`http://localhost:5000/flight/${id}`, { headers: { Authorization: `bearer ${token}` } })
      .then(res => {
        console.log(res)
        window.location.pathname = '/voos'
      })
      .catch(e => console.error(e))
    }
  },
  mounted(){
    axios.get('http://localhost:5000/flight').then(res => this.myTrips = res.data).catch(e => console.error(e))
  }
};
</script>

<style>
.new-flight-link {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 30px;
    margin-bottom: 50px;
}
.new-flight-link a {
  color: #ff5b2b;
  font-weight: bold;
  font-size: 22px;
  text-decoration-line: underline;
}
.ad{
  display: flex;
  justify-content: center
}
</style>
