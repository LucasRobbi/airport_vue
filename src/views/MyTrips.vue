<template>
  <div class="MyTrips d-flex">
   <h1>Minhas viagens</h1>
   <Purchase/>
  </div>
</template>

<script>
// @ is an alias to /src
// import MyTrip from '@/components/MyTrip.vue'
import Purchase from '@/components/Purchase.vue'

export default {
  name: 'MyTrips',
  components: {
    Purchase
  }
}
</script>

<style >
.MyTrips {
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>