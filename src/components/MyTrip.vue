<template>
  <div class="myTrips">
    <div class="account-card mb-5" v-for="myTrip in myTrips" :key="myTrip.ship_date">
      <div class="destination">
        <span class='dest'>{{myTrip.shipment}}</span>
        <img src="../assets/icon/go_to.svg" alt="airline" />
        <span class='dest'>{{myTrip.destination}}</span>
      </div>
      <div class="airline">
        <img src="../assets/icon/latam.svg" alt="airline" class="airline-img"/>
        <span class="latam">Latam</span>
      </div>
      <div class="embarque">
        <span class="embarque-texto">Embarque as: <span class='response'>01h30m</span></span>
        <span class="embarque-texto">Embarque no dia: <span class='response'>21/08/2021</span></span>
      </div>
      <div class="chegada">
        <span class="embarque-texto">Previsão de chegada: <span class='response'>22/08/2021</span></span>
      </div>
      <div class="tempo">
        <span class="embarque-texto">Tempo estimado: <span class='response'>24h</span></span>
        <span class="preco">R$ {{myTrip.ticket_price}}</span>
      </div>
      <div class="cancelamento">
        <span class="cancel">Solicitar cancelamento</span>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: 'myTrips',
  data () {
    return {
       myTrips: [
        {
          shipment: "São Paulo",
          destination: "Rio de Janeiro",
          ticket_price: 150.0,
          ship_date: "2020-08-02T03:00:00.000Z",
          ship_time: "18:00:00",
          estimated_time: "03:00:00",
          limit: 46,
          airline_id: 1,
          status: "ativo",
          image: "https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_1280.jpg",
        },
        {
          shipment: "São Paulo",
          destination: "Rio de Janeiro",
          ticket_price: 150.0,
          ship_date: "2020-07-02T03:00:00.000Z",
          ship_time: "18:00:00",
          estimated_time: "03:00:00",
          limit: 46,
          airline_id: 1,
          status: "ativo",
          image: "https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_1280.jpg",
        },
      ],
    };
  },
  methods: {
  }
}
</script>