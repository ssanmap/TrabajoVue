<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/cursos">Cursos Disponibles</b-nav-item>
       
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       

        <b-nav-item text="Lang" right>
          <b-item href="#">{{dato}}</b-item>
        
        </b-nav-item>

       
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
    export default {
        name:'Header',
        props:{
           dato: String
        }
    }
</script>

<style scoped>

</style>