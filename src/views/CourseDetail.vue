<template>
    <div>

        <div class="loading " v-if="isLoading" >
      <bounce-loader :loading="isLoading" :color="'#FF0000'" :size="200"  />
     
    </div>

    <div class="detalle" v-else>

      <Header :dato="variant" />
<h1>Detalles del curso</h1>

<!-- <p>{{asset}}</p> -->
<h2>{{name}}</h2>

  <img v-bind:src="img" width="200" />
  <br>

<div class="conte w-50  bg-light">


  <ul>
    <li v-bind:key="item.name" v-for="item in content">
            {{item.name}} -- {{item.status}} 
            <b-progress
              variant="warning"
              :max="item.videos.total"
              :value="item.videos.progress"
              height="10px"
              class="mr-5 text-center"
            ></b-progress>
    </li>
  </ul>
 <b-btn variant="danger" href="/">Volver</b-btn>

    </div>
    </div>
    <Footer></Footer>
    </div>
</template>

<script>

import api from '@/api'
import Header from '../components/Header.vue'
import Footer from '../components/Footer'
    export default {
  components: { Header }, Footer,
        name:'CourseDetail',

  data() {
    return {
      asset: {},
       isLoading: true,
       name: '',
       desc: '',
       img:'',
       content:'',
       variant:'Estas en detalles de Curso'
    }
  },

  computed: {
    
  },

  created() {
    this.getCourse()
  },

  methods: {
    getCourse() {
      const id = this.$route.params.id;
      
      const imagee = this.$route.params.img;
      this.content = imagee.learning;
      this.img =  imagee.cover;

        Promise.all([api.getAsset(id) ])
        .then(
        ([asset]) => {
          this.asset = asset,
          this.name = asset.attributes.name
          
        })
         .catch(error => console.log(error))
        .finally(() => (this.isLoading = false))
    }
  }
    }
</script>

<style scoped>
.loading{
  margin-top:250px;
  margin-left: 45% ;
  margin-right: 50%;
}
ul{
  list-style: none;
}
.conte{
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
}

</style>