<template>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link aria-current="page" class="nav-link" to="/"
            >Домашняя страница</router-link
          >
        </li>
        <li class="nav-item">
          <router-link aria-current="page" class="nav-link" to="/chat"
            >Чат</router-link
          >
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Выпадашка
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="/admin">Панель управления</a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <button class="dropdown-item" @click="Logout()">Выйти</button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store  from "../store/index"
import router from "../router/index"

export default {
  data() {
    return {};
  },
  methods: {
    Logout: function () {
      this.axios
        .post("http://localhost:8081/api/users/delete/session/", {
        })
        .then(() => {
          store.commit("logoutUserState");
          router.push("/login");
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