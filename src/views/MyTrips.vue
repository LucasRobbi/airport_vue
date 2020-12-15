<template>
  <div class="MyTrips d-flex">
   <h1>Minhas viagens</h1>
   <MyTrip/>
  </div>
</template>

<script>
// @ is an alias to /src
import MyTrip from '@/components/MyTrip.vue'

export default {
  name: 'MyTrips',
  components: {
    MyTrip
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