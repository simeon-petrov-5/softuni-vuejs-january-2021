<template>
  <section>
    <NaviHeader />
    <form class="user-form" @submit.prevent="onSubmit">
      <div class="form-group">
        <img src="https://img.icons8.com/material-sharp/42/000000/user.png" />
        <input
          v-model="loginData.email"
          type="text"
          name="email"
          placeholder="Email"
        />
      </div>

      <div class="form-group">
        <img src="https://img.icons8.com/material/42/000000/password--v1.png" />
        <input
          v-model="loginData.password"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>

      <button type="submit">Login</button>
    </form>
  </section>
</template>

<script>
import NaviHeader from "./components/NaviHeader";
import { loginUser } from "../../dataProviders/user";
export default {
  components: {
    NaviHeader,
  },
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      const hasPassed = await loginUser(this.loginData);
      if (hasPassed) {
        // Get cookie data
        this.$router.push("/user/profile");
      }
    },
  },
};
</script>

<style>
.user-form {
  margin: 0 auto;
}
</style>
