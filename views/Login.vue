<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h6 class="mb-3">Авторизация</h6>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="email"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            v-model="password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div class="form-floating">
            <button class="btn btn-outline-info my-4" @click="Login()">Залогиниться</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store  from "../store/index"
import router from "../router/index"

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    Login: function () {
      this.axios
        .post("http://localhost:8081/api/users/login/", {
          login: this.email,
          password: this.password,
        })
        .then((response) => {
          store.commit('setUser', response.data);
          router.push('/');
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>