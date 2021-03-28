<template>
  <div>
    <!-- As a link -->
    <div class="loading " v-if="isLoading">
      <bounce-loader :loading="isLoading" :color="'#FF0000'" :size="200" />
      <p>loading ...</p>
    </div>

    <div class="todo" v-else>
      <!-- nabvar -->
     <Header :dato="variable" />
      <!-- fin nav -->

      <div class="text-center">
        <img v-bind:src="avatar" width="200" class="border bg-black rounded mb-3 mt-2" />
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

          <div class="d-flex justify-content-center flex-column flex-wrap">
               <ul>
        <li class="listauno" v-bind:key="item.attributes.name" v-for="item in itemUrl">

           <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" v-if="item.attributes.url == 'https://github.com/yyx990803' " width="50" />
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAD29vb6+vrz8/PR0dHGxsbMzMzp6elBQUFeXl6Dg4OwsLDDw8Pa2trq6uqlpaVzc3Nubm4iIiJPT0+fn58RERHj4+NHR0dlZWWurq63t7ctLS2MjIxaWlo1NTV8fHyXl5cbGxuIiIgVFRU7OztKSkowMDAmSM3uAAAH60lEQVR4nO2d6XqqMBCGBUTcABfABVGwau//Dk9buwASMlkmCc/J+7Mq8JUkk5lMJqORxWKxWCwWi8VisVgsFovF8r8yDY/leX/ZXrenezKvcl/3A8nEjdKz80pW5rHuR5OBF6yzDnnf7Kud7gcUZPd2Ist7kuQsF5xgPSkf0YEm70nqAS8YZkfUB2YkmsP0gTUGe8eB/i8U4C7g+j7YUtvqV4PYqHh0GHnP8NLNfNx3Pf/Z4Ek2Rvl45QI7YBNiH/Py9+c3HqRvnAocIST8LY9Ax1l39rK4uv18ISTccOI4TCOyKCs+fR/cX6YAXlhrDjPSHS8OuQEjUHALfHnOsNnaSa8w/PpUWV9ciwh0nF+TPg7bV5qTbrn/+vi9d6iSB4MR7ObzRe3CRfL6CWkWG31/PlNiLDeiAh1nVd47/16R7vn28w1iP5UIm5lnYk+6p/c39T2jC6zwBJIHEr/2pQOywBBR4JJ410a7wZU4RhRYkm/b/CJqQ93jCSQaitFo2vrqGW9EFbL0/Tx6njpvfznBkrjDE3hv2/K6ZXz9x16QJD7wBLaeOEjqXkhH3zhNMQS+NBZpNFtdnG4bA6Z36/hJhjAN9zgdJjp1lyrOP6fi23qjjbp/Jd+ZOmIJXP3JO37PVRsvyCf8jjjH48R7x9GXBc/ru2H1e4fmswekn3a709wg9cLy4ynH03wxq/2tZdLJ86hXd1qEC4a+rAjSTdLq4NeW5ejrHiSPmQNCdxdV2PXHqHXrqu8K8uJTiE5Tixcz0H/rRJbfr0hel4dBmStmcszGRI28ThOQ0n6zkTGmqmqki457L6m/ugXiCmfUu0ih07uFtJ830dfY9tCQ6HbfiRa/zlVw2REzePHHuvvmpFlbi7mQ+X+j30Ccrj74SQy9wIpwAQgSYqRUyLabuoz+w4y/qSoYaHo8BYaFvKQ9IQLi4gn7oa+FMa10rbm8f3BP4KbXY2ecbrxxDDmIIagv9v3P5LFer2TWCByveSlp9+9YpaLA2lZxzSE9gYYngLJhClXhRdkc0No132LCfumCFdLnvgJAHqMrLRBABh50UFspxIPlj/M9YC8SdaSBKBx3BYWhbEK6SFRrAYpCiK0JbcsJxbvCXDaEKRR/gvOy70b6FY5KCXeaVQHpZnhLFg5UoSwfPFlMOicDwik0PQCjgRJd1Ms8DdtZEZiBKKBCD+wlApmVqzzyfkYgTJMPjegiGeXZoVxUq9AEhSyOsFHcwJNH1BEdEYakA2QnDgti2nMH/Im7OmFK4pJh95XDtvsAMSkLjZJJoadoAUUm1EVcN6+PRS57zEY35JzLb8bZtR7J8QYnkRqm8T4zptPavIAzpKENehj+ObrM/zZrIqZIYkAPbP42y8PSf3ZJZWvuMjjRpzQN121W5MFu5A7IahDz8//oMvOyXSlEAAZ/mHO1XwDrtoPqda8AVm1xEs6UAdmOdtX9kEIABA7OxDe4QxRS075MBpQ8OeiOCMsr1P2UIsAWo9Ult8oHJBCW2WYmPdu5GiDtE1AAdMvEcEdTaI4WfsoSEjdwRF9wg7w2oN1QWQqvdFKwwmHGgpkKXQxzWWYLFzjQ4bRkUahqu4BU2LZlDXFtjUngEGencFvxzeDaKfOOrMHNbNi31Q0s6sZTwQM1lVc6XBtch2QV27t9gQxo3Ym3euBw3iL3pki0ygeSOfEKHMyIKrKTbtpdKcww4FshuhiAtyhapTQwfolUuLqMZ7jZAKxtU5kanW8qpwwCSxljxQiYiia7BXOpXzWImIoW49DIxiq3NpAXFijFcwQQrCnzYkrd6GhYjxSz9qPisS7ywI+iyJ8s02JtXnBDtEaX8UG3TLgoEOYuLBmIl1kz3EXMBHvhyPiYmwxbaLRrcZMgEL3GgxByTiAx+CVKqgGsoNgKL5zlY16odAshUUoSOBoZGqrJ5E25DZ3YSKxUaWbwW26pcby6zfzIrd9sYHaGRM/+C+MyFuWXwzdtNRHhBBWz9pqgnGVU6VZVA+lUCnPeIjzPkhHUElYs4B1GZcjkhiHNkpmpCbE25uwnNvRP4LbioZl+eM+5k4Ysp5CMV2kVKNOjIDJVUSaXAOYoU2enSyOhwDMG00JHf0zUCRx9LrRtVC+ZXhSdWPiHGxRKYzjKBT7xl8X5dMsUbCDWfCQ3/qQV3xD2gh8Zl3AmgwA7/LQpvQIVeI4KT+99ZaogdUGrQBWrxDoHGSWJixoFxirmpxeU0wlBuErSGB6aZjKffqJIWWww+IcSE/WpkEc+LgabWJE+eg09HHxV/u9VyyDqpsoS26UdZMcib6IwfCHvMEIo01xldEb0YDBmopXaOpgHlS3UDVPlVT7pp8VIYRzv8rTUsGMmkR+vmBzWxXHifxBFvh+Ey1W1ODx0xe9RXqAKHw/IWeqxvDV8M6onXTHXJUxYxS6Qjqr/Zqy7uhDfSXVM7HRu+5mpmYVq07hXsjD4RaRD40PtHE35XsO9+nDvTmV9moOeYKh3VJNYci30RdJUuPLAs+jwiFPUVcFC84Lgk12FM5vLNnoXkxpE0peyT+uJtjBvN15UyMtlv1QR7uSTFy98E/cXszLH8o3kEIfrO2+GSXZf5xoNAwNxdCzPbDKzc3mMzH53L7hxXpUJ3ZS8b6pVEGu2eUJ4UbhMy/Xh/JhdTtvrdbs9Xe775LBYLfMgGrIyi8VisVgsFovFYrFYLBaLhYt/VheddVEC7bAAAAAASUVORK5CYII=" v-if="item.attributes.url == 'https://twitter.com/youyuxi' " width="50" />
       <a :href="item.attributes.url" >{{ item.attributes.url }}</a>   
        </li>
      </ul>
          </div>
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
         <Footer />
    </div>

 
  </div>
</template>

<script>
import api from "@/api";
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  name: "Home",
  props: {
    dats: {
      type: Array,
      default: () => [],
    },
  },

  components: {

    Header,
    Footer
  },
  data() {
    return {
      assets: [],
      variable: "Estas en Home",
      isLoading: true,
      avatar: "",
      nombreCompleto: "",
      email: "",
      link: "",
      git:'',
      twitter:''
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
   
  
  
}
.listauno{
  display:inline-block;
  margin-left:40px;
}
.lista{
 vertical-align:top;
 text-align: left;
 margin-left:220px;
}
</style>
