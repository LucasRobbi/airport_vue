<template>
  <div class="admin-new-trip">
    <div class="d-flex justify-content-center">
      <div class="styledContainer">
        <h1>Novo Voo</h1>
        <div  class="d-flex">
          <div class="form-group mr-4">
            <select class="form-control withBorder" id="embarque">
              <option selected disabled>Embarque</option>
              <option>São Paulo</option>
              <option>Rio de Janeiro</option>
            </select>
          </div>
          <div class="form-group">
            <select class="form-control withBorder" id="Destino">
              <option selected disabled>Destino</option>
              <option>São Paulo</option>
              <option>Rio de Janeiro</option>
            </select>
          </div>
        </div>
        <div>
          <div class="d-flex">
            <input v-model="ship_date" class="form-control withBorder mr-4" type="date" placeholder="Data" />
            <input v-model="ship_time" class="form-control withBorder" type="time" placeholder="Horário" />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">
                <img src="../../assets/icon/time.svg" />
              </span>
            </div>
            <input v-model="estimated_time" type="text" class="form-control" placeholder="Tempo estimado de voo" required />
          </div>
        </div>
        <div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">
                <img src="../../assets/icon/users.svg" />
              </span>
            </div>
            <input
              v-model="limit"
              type="number"
              class="form-control"
              placeholder="Limite de passageiros"
              required
            />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">
                <img src="../../assets/icon/Plane.svg" />
              </span>
            </div>
            <input v-model="company_name" type="text" class="form-control" placeholder="Companhia aérea" required />
          </div>
        </div>
        <div id="cadastrar">
          <button @click='createFlight' class="cadastrar">Cadastrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  components: {},
  data() {
    return {
      destination: "Nova Iorc",
      shipment: "Rio de Janeiro",
      ship_date: "",
      ship_time: "",
      estimated_time: 0,
      limit: 0,
      airline_id: 0,
      status: "",
      ticket_price: 150.00,
      image: "",
      company_name: ""
    };
  },

  methods: {
    createFlight() {
      const token = sessionStorage.getItem('user_token');
      axios.get(`http://localhost:5000/airline/name/?name=${ this.company_name }`).then(res => this.airline_id = res.data.id).catch(e => console.error(e))
      const flight_body = { destination: this.destination, shipment: this.shipment, ship_date: this.ship_date, ship_time: this.ship_time, estimated_time: Number(this.estimated_time), limit: this.limit, airline_id: this.airline_id, status: this.status, ticket_price: this.ticket_price, image: this.image }
      axios.post('http://localhost:5000/flight', flight_body, { headers: { Authorization: `bearer ${token}` } })
      .then(res => console.log(res))
      .catch(e => {
        if(e.response.status == 401) return this.$swal('Algo deu errado', 'Você não tem permissão para fazer isso', 'warning')
        if(![200].includes(e.response.status)) return this.$swal('Algo deu errado', 'Tente novamente mais tarde :(', 'error')
        return this.$swal('Algo deu errado', 'Tente novamente mais tarde :(', 'error')
      })
    }
  },
}
</script>

<style>
#cadastrar {
  display: flex;
  align-content: right;
}
.cadastrar {
  width: 100%;
  height: 50px;
  background-color: #ffa251;
  border-radius: 5px;
  color: #eff1f8;
  border: none;
}
</style>
