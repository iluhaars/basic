<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="isLoggedIn">
      <Header />
    </nav>
    <div class="container my-4">
      <div class="row">
        <div class="col-12">
          
        </div>
      </div>
    </div>
  </div>

  <router-view />
</template>

<script>
// import store  from "./store/index"
import { mapGetters } from 'vuex';
import Header from './components/header.vue'
// import store from './store/index'

export default {
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  components: {
    Header
  },
  // mounted() {
  //   store.dispatch('sesionCheck')
  // }
}
</script>
