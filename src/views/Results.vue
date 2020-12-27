<template>
  <div class="Results">
    <h1>Resultados</h1>
    <div v-if="loading === true">
      <Loading/>
    </div>
    <div class="myTrips d-flex flex-column align-items-center w-100" v-else>
      <div v-if="hasNoResults === true">
        Infelizmente não temos resultados para essa busca
      </div>
      <div class="account-card mb-5" v-for="myTrip in result" :key="myTrip.id">
        <div class="destination">
          <span class="dest">{{ myTrip.shipment }}</span>
          <img src="../assets/icon/go_to.svg" alt="airline" />
          <span class="dest">{{ myTrip.destination }}</span>
        </div>
        <div class="airline">
          <img src="../assets/icon/latam.svg" alt="airline" class="airline-img" />
          <span class="latam">{{ myTrip.airline }}</span>
        </div>
        <div class="embarque">
          <span class="embarque-texto"
            >Embarque as: <span class="response">{{ myTrip.ship_time }}</span></span
          >
          <span class="embarque-texto"
            >Embarque no dia: <span class="response">{{ myTrip.ship_date }}</span></span
          >
        </div>
        <div class="tempo">
          <span class="embarque-texto"
            >Tempo estimado: <span class="response">{{ myTrip.estimated_time }}</span></span
          >
          <span class="preco">R$ {{ myTrip.ticket_price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Loading from "@/components/Loading.vue";

export default {
  name: "Results",
  components: {
    Loading
  },
  data() {
    return {
      result: Array,
      loading: true,
      hasNoResults: false,
    };
  },
  props: {
    ship: String,
    dest: String,
  },
  methods: {
    makeSearch() {
      const shipement = this.ship ?? "";
      const destination = this.dest ?? "";

      axios
        .get(`http://localhost:5000/flight?dest=${destination}&ship=${shipement}`)
        .then((res) => {
          this.result = res.data;
          if (res.data.length === 0) this.hasNoResults = true;
        })
        .catch((e) => console.error(e));
      this.loading = false;
    },
  },
  mounted() {
    this.makeSearch();
  },
};
</script>

<style>
h1 {
  margin: 50px 0;
}
</style>
