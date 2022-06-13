<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <HelloWorld msg="Welcome to Your Vue.js App" />
          <h5>
            Делаем авторизацию 
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
