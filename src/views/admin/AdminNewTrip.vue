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
            <input v-model="ship_date" class="form-control withBorder mr-4" type="text" placeholder="Data" />
            <input v-model="ship_time" class="form-control withBorder" type="time" placeholder="Horário" />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">
                <img src="../../assets/icon/time.svg" />
              </span>
            </div>
            <input v-model="estimated_time" type="number" min="0" class="form-control" placeholder="Tempo estimado de voo" required />
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">
                min
              </span>
            </div>
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend">
                <img src="../../assets/icon/dollar.svg" />
              </span>
            </div>
            <input v-model="ticket_price" type="number" min="0" class="form-control" placeholder="Preço por passagem" required />
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
      ticket_price: 0.0,
      image: "",
      company_name: "",
      trip_id: 0
    };
  },
  props: {
    myTrip: Object
  },
  mounted(){
    this.ticket_price = this.myTrip.ticket_price
    this.destination = this.myTrip.destination
    this.shipment = this.myTrip.shipment
    this.limit = this.myTrip.limit
    this.ship_date = this.myTrip.ship_date
    this.ship_time = this.myTrip.ship_time
    this.estimated_time = this.myTrip.estimated_time
    this.company_name = this.myTrip.company_name
    this.trip_id = this.myTrip.id
  },
  methods: {
    async createFlight() {
      try{
         const token = sessionStorage.getItem('user_token');
         const { data } = await axios.get(`http://localhost:5000/airline/name/?name=${ this.company_name }`);
         const flight_body = { destination: this.destination, shipment: this.shipment, ship_date: this.ship_date, ship_time: this.ship_time, estimated_time: Number(this.estimated_time), limit: this.limit, airline_id: data.id, status: this.status, ticket_price: this.ticket_price, image: this.image }
         
         if(this.myTrip) {
           console.log('aqui')
           const res = await axios.put(`http://localhost:5000/flight/${this.trip_id}`, flight_body, { headers: { Authorization: `bearer ${token}` } })

            if(res.status == 200) {
              this.$swal('Cadastrado com sucesso', 'Nova viagem adicionada', 'success')
              return setTimeout(() => window.location.pathname = '/', 1000)
            }
         }else{
            const res = await axios.post('http://localhost:5000/flight', flight_body, { headers: { Authorization: `bearer ${token}` } })

            if(res.status == 200) {
              this.$swal('Cadastrado com sucesso', 'Nova viagem adicionada', 'success')
              return setTimeout(() => window.location.pathname = '/', 1000)
            }
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
.dollar {
  width: 15;
  height: 15;
}
</style>
