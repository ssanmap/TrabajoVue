<template>
    <div>

        <div class="loading " v-if="isLoading" >
      <bounce-loader :loading="isLoading" :color="'#FF0000'" :size="200"  />
      <p>loading ...</p>
    </div>

    <div class="detalle" v-else>
<h1>Detalles del curso</h1>

<!-- <p>{{asset}}</p> -->
<h2>{{name}}</h2>
<p>{{img}}</p>
  <img v-bind:src="img" width="200" />
  <br>

  <ul>
    <li v-bind:key="item.name" v-for="item in content">
            {{item.name}} -- {{item.status}} 
            <b-progress
              variant="warning"
              :max="dismissSecs"
              :value="dismissCountDown"
              height="4px"
            ></b-progress>
    </li>
  </ul>
 <router-link
      to="/"
     
    >Volver </router-link>
    </div>
    </div>
</template>

<script>

import api from '@/api'
    export default {
        name:'CourseDetail',

  data() {
    return {
      asset: {},
       isLoading: true,
       name: '',
       desc: '',
       img:'',
       content:''
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