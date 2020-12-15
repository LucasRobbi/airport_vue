
<template>
  <div class="suggestionsCards">
      <div class="card" style="width: 18rem;" v-for="suggestion in suggestions" :key="suggestion.title">
          <img class="card-img-top" :src="suggestion.img" :alt="suggestion.title" />
          <div class="card-body">
              <p class="card-text">{{suggestion.title}}</p>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'suggestionsCards',
  data () {
    return {
      suggestions: [
        {title: "Dublin – Irlanda", img: "https://cdn.pixabay.com/photo/2013/12/18/18/01/bridge-230311_1280.jpg"},
        {title: 'Tanzânia – África', img: "https://cdn.pixabay.com/photo/2014/03/02/18/05/tanzania-278367_960_720.jpg"},
        {title: 'Huaraz - Peru', img: "https://cdn.pixabay.com/photo/2017/08/14/05/49/landscape-2639472_960_720.jpg"},
        {title: 'Sardenha - Itália', img: "https://cdn.pixabay.com/photo/2018/07/09/21/05/sardinia-3527270_960_720.jpg"},
        {title: 'Alberta - Canadá', img: "https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg"},
        {title: 'Tokyo - Japão', img: "https://cdn.pixabay.com/photo/2015/06/29/04/41/tokyo-tower-825196_960_720.jpg"},
      ],
    };
  },
  methods: {
  }
}
</script>