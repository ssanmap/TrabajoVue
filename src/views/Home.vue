<template>
  <div>
    <!-- As a link -->
    <div class="loading " v-if="isLoading">
      <bounce-loader :loading="isLoading" :color="'#FF0000'" :size="200" />
      <p>loading ...</p>
    </div>

    <div class="todo" v-else>
      <!-- nabvar -->
      <div>
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>

            <b-nav-item href="/cursos">
              <router-link to="/cursos" />Cursos Disponibles</b-nav-item
            >
          </b-navbar-nav>
        </b-navbar>
      </div>
      <!-- fin nav -->

      <div class="text-center">
        <img v-bind:src="avatar" width="200" />
        <div class=" bg-light  text-dark  justify-content-center " id="content">
                  <h1 >Información de Usuario </h1>
                   <b-skeleton-icon
          icon="person-fill"
          :icon-props="{ fontScale: 2, variant: 'dark' }"
        ></b-skeleton-icon>
           <hr class="my-4" />

          <h2 >
            {{nombreCompleto}}   -  {{email}}
          </h2>

          <p>

 

               <ul>
        <li v-bind:key="item.attributes.name" v-for="item in itemUrl">
       <a href="">{{ item.attributes.url }}</a>   
        </li>
      </ul>
          </p>
        </div>
      </div>
      <!-- fin de info usuario -->

      <div class="cursoUs  bg-light text-dark" id="content">

 <h2>Cursos del usuario</h2>
    <hr class="my-4" />
      <ul>
        <li  class="lista mt-2" v-bind:key="i.attributes.slug" v-for="i in traerCursos">
          {{ i.attributes.name }}

          <b-button
          class="btnd"
            variant="danger"
            href="#"
            :to="{
              name: 'course-detail',
              params: { id: i.attributes.slug, img: i.attributes },
            }"
            >ver mas</b-button
          >
        </li>
      </ul>

      </div>
     

      <!-- <p  v-bind="nombreCompleto" v-for="l in link">{{l}}</p> -->
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "Home",
  props: {
    dats: {
      type: Array,
      default: () => [],
    },
  },

  components: {
    // PxTable
  },
  data() {
    return {
      assets: [],
      variable: "seba",
      isLoading: true,
      avatar: "",
      nombreCompleto: "",
      email: "",
      link: "",
    };
  },
  created() {
    api
      .getAssets()
      .then(
        (assets) => (
          (this.assets = assets),
          (this.avatar = assets.included[0].attributes.avatar),
          (this.nombreCompleto =
            assets.included[0].attributes.firstname +
            " " +
            assets.included[0].attributes.lastname),
          (this.email = assets.data.attributes.email),
          (this.link = assets.included)
        )
      )
      .finally(() => (this.isLoading = false));
  },

  methods: {
    getData() {
      api.getAssets().then((assets) => {
        this.assets = assets;
      });
    },
  },
  computed: {
    itemUrl() {
      const url = this.assets.included.filter(
        (data) => data.type == "social_network"
      );
      return url;
    },
    traerCursos() {
      const url = this.assets.included.filter((data) => data.type == "course");
      return url;
    },
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
ul{
  list-style: none;
}

#content{
  border-radius: 10px;
  border: 1px solid black;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  /* padding-left: 50%; */
  width: 60%;
}

.btnd{
   
  justify-content: right;
  margin-left: 60px;
  text-align: right;
}

.lista{
  justify-content: flex-end;
  text-align: justify center;
  margin: 10px;
  padding-right: 20px;
}
</style>
