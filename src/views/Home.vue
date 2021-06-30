<template>
  <div class="home__wrap">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/SignUp/LoginForm";

export default {
  name: "Home",
  components: {
    LoginForm,
  },
};
</script>