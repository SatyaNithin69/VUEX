<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/cats">Cats</router-link>
    <router-link to="/dogs">Dogs</router-link>
    <router-link to="/pet">Pet</router-link>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
