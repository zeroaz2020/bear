<template>
  <div class="wrap">
    <header>
      <h1>
        <router-link to="#">
          <img src="@/assets/images/icon_prev.png" />
        </router-link>
        회원가입
      </h1>
    </header>
    <SignUpForm />
  </div>
</template>

<script>
import SignUpForm from '@/components/SignUp/SignUpForm';
export default {
	name: 'SignUp',
	components: {
		SignUpForm,
	},
};
</script>