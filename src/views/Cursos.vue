<template>
  <div>

        <div class="loading " v-if="isLoading" >
      <bounce-loader :loading="isLoading" :color="'#FF0000'" :size="200"  />
      <p>loading ...</p>
    </div>

    <div class="cursosd" v-else>

   <Header :dato="variant"/>
    <h1>Cursos Disponibles</h1>

    <br>
    
    <div class="d-flex justify-content-center flex-column flex-md-row  justify-content-md-around ">
      <b-card
        :title="asset.attributes.name"
        :img-src="asset.attributes.cover"
        :img-alt="asset.attributes.name"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-3"
         v-for="asset in assets"
                  :key="asset.id"
      >
        <b-card-text v-html="asset.attributes.description">
      {{asset.attributes.description}}
        </b-card-text>

        <b-button href="#" variant="primary"
        :to="{
              name: 'detail-course',
              params: { id: asset.attributes.slug },
            }"
        >Ver detalles</b-button>
      </b-card>
    </div>

  <b-button variant="danger" class="mt-4" href="/">Volver</b-button>
    
 <Footer></Footer>
 </div>

  </div>
</template>

<script>
import api from "@/api";
import Header from '../components/Header.vue';
import Footer from '../components/Footer';

export default {
  Name: "Cursos",
  
  components: {
    Header,
    Footer
    
  },
  data() {
    return {
      assets: [],
      variant: "Estas en cursos disponibles",
      isLoading: true,
     img:'',
     nombre:'',
     desc: '',
     cc:[]
    };
  },
  created() {
    api.getCursos()
      .then( (assets) => (
          (this.assets = assets.data  ),
          (this.nombre = assets.data[0].attributes.name)

       
        //   (this.nombreCompleto =
        //     assets.included[0].attributes.firstname +
        //     " " +
        //     assets.included[0].attributes.lastname),
        //   (this.email = assets.data.attributes.email),
        //   (this.link = assets.included)
        )
      )
      .finally(() => (this.isLoading = false));
  },

  methods: {
    getData() {
      api.getCursos().then((assets) => {
        this.assets = assets.data;
      
      });
    },

  },
  computed: {
    // itemUrl() {
    //   const url = this.assets.data.map(
    //     (data) => data.id
    //   );
    //   return url;
    // },
  

  },
  mounted() {
    setInterval(() => {
      this.getData();

     
    }, 4000);
  },
};
</script>

<style scoped>
.loading {
  margin-top: 250px;
  margin-left: 45%;
  margin-right: 50%;
}
</style>
