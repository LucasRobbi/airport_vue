<template>
  <div class="Results d-flex">
   <h1>Resultados</h1>
    <div class="myTrips">
      <div class="account-card mb-5" v-for="res in result" :key="res.id">
        <div class="destination">
          <span class='dest'>aa</span>
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
        <div class="cancelamento">
          <span class="cancel">Solicitar cancelamento</span>
        </div>
    </div>

  </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Results',
  components: {
  },
  props: ['result'],
}
</script>

<style >
</style>