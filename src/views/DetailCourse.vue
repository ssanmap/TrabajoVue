<template>
    <div>

          <div class="loading " v-if="isLoading" >
      <bounce-loader :loading="isLoading" :color="'#FF0000'" :size="200"  />
      <p>loading ...</p>
    </div>

    <div class="detail" v-else>

    

        <Header :dato="variant" />
          

<!-- <p>{{}}</p> -- <p>{{list}}</p> -->
            <h2 class="mt-3">{{name}}</h2>
            <p>{{dificult}}</p>
        <img v-bind:src="img" width="200" />
        <div class="row py-2">
            <p v-html="desc">{{desc}}</p>
        </div>
          


<div>
  <!-- Via multiple directive modifiers -->
  <b-button v-b-toggle.collapse-a>Programa de Estudio</b-button>

 

  <!-- Elements to collapse -->
  <b-collapse id="collapse-a" class="mt-2">
    <b-card v-for="l in list" v-bind:key="l">{{l}}</b-card>
  </b-collapse>
  
</div>

        <Footer />
            </div>
    </div>
</template>

<script>

import api from '@/api'
import Header from '../components/Header.vue'
import Footer from '../components/Footer'

    export default {

        name:'DetailCourse',
  
  components: {
    Header,
    Footer
    
  },
        

  data() {
    return {
      asset: {},
       isLoading: true,
       name: '',
       desc: '',
       img:'',
       content:{},
       variant:'Estas en detalles de Curso',
       dificult:'',
       list:[]
    }
  },

  computed: {

       traerCursos() {
      const url = this.assets.included.filter((data) => data.type == "syllabus_item");
      return url;
    },
    
  },

  created() {
    this.getCourse()
  },

  methods: {
    getCourse() {
      const id = this.$route.params.id;
      
    //   const imagee = this.$route.params.img;
   

        Promise.all([api.getAsset(id) ])
        .then(
        ([asset]) => {
          this.asset = asset,
          this.name = asset.attributes.name,
          this.desc = asset.attributes.description,
          this.dificult = asset.attributes.difficulty,
          this.img = asset.attributes.cover,
          this.list = asset.attributes.tag_list,
          this.content = asset.included[1].id
          
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
</style>