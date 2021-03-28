<template>
  <div>
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
        <b-card-text>
      aa
        </b-card-text>

        <b-button href="#" variant="primary">Ver detalles</b-button>
      </b-card>
    </div>

    <router-link
      to="/"
     
    >Volver </router-link>

  </div>
</template>

<script>
import api from "@/api";

export default {
  Name: "Cursos",
  
  components: {
    
  },
  data() {
    return {
      assets: [],
      variable: "seba",
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
</style>
