<template>
  <div class="admin-new-trip">
    <div class="d-flex justify-content-center">
      <div class="styledContainer">
        <h1>Novo Voo</h1>
        <div  class="d-flex">
          <div class="form-group mr-3">
            <input
              type="text"
              class="form-control withBorder"
              placeholder="Embarque"
              v-model="shipment"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control withBorder"
              placeholder="Destino"
              v-model="destination"
              required
            />
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
      destination: "",
      shipment: "",
      ship_date: "",
      ship_time: "",
      estimated_time: 0,
      limit: 0,
      airline_id: 0,
      status: "ativo",
      ticket_price: 150.00,
      image: "",
      company_name: ""
    };
  },

  methods: {
    async createFlight() {
      try{
         const token = sessionStorage.getItem('user_token');
         const { data } = await axios.get(`http://localhost:5000/airline/name/?name=${ this.company_name }`);
         const flight_body = { destination: this.destination, shipment: this.shipment, ship_date: this.ship_date, ship_time: this.ship_time, estimated_time: Number(this.estimated_time), limit: this.limit, airline_id: data.id, status: this.status, ticket_price: this.ticket_price, image: this.image }
         const res = await axios.post('http://localhost:5000/flight', flight_body, { headers: { Authorization: `bearer ${token}` } })

          if(res.status == 200) {
            this.$swal('Cadastrado com sucesso', 'Nova viagem adicionada', 'success')
            return setTimeout(() => window.location.pathname = '/', 1000)
          }

      } catch(e){
        if(e.response.status == 401) return this.$swal('Algo deu errado', 'Você não tem permissão para fazer isso', 'warning')
        if(![200].includes(e.response.status)) return this.$swal('Algo deu errado', 'Tente novamente mais tarde :(', 'error')
        return this.$swal('Algo deu errado', 'Tente novamente mais tarde :(', 'error')
      }
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
