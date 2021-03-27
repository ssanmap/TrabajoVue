<template>
  <div>
    <!-- As a link -->
    <div class="loading " v-if="isLoading" >
      <bounce-loader :loading="isLoading" :color="'#FF0000'" :size="200" :atr="car" />
      <p>loading ...</p>
    </div>

    <div class="todo" v-else>
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

      <div class="">
        <img v-bind:src="avatar" width="200" />
      </div>

      <h1>Información del Usuario</h1>
      <p>{{ nombreCompleto }}</p>
      <p>{{ email }}</p>

      <!-- <p>{{itemUrl}}</p> -->
      <ul>
        <li v-bind:key="item.attributes.name" v-for="item in itemUrl">
          {{ item.attributes.url }}
        </li>
      </ul>

      <h2>Cursos del usuario</h2>
      <!-- <p>{{traerCursos}}</p> -->
      <ul>
        <li v-bind:key="i.attributes.slug" v-for="i in traerCursos">
          {{ i.attributes.name }}

          <b-button
            variant="danger"
            href="/cursos"
            :to="{ name: 'course-detail', params: { id: i.attributes.slug } }"
            >ver mas</b-button
          >
        </li>
      </ul>

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
      default: () => []
    }
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
.loading{
  margin-top:250px;
  margin-left: 45% ;
  margin-right: 50%;
}
</style>
