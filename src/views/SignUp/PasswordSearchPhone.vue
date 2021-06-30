<template>
  <div class="wrap">
    <header>
      <h1>
        <router-link to="#">
          <img src="@/assets/images/icon_prev.png" />
        </router-link>
        비밀번호 찾기
      </h1>
    </header>
    <PasswordSearchPhoneForm />
  </div>
</template>

<script>
import PasswordSearchPhoneForm from '@/components/SignUp/PasswordSearchPhoneForm';
export default {
	name: 'PasswordSearchPhone',
	components: {
		PasswordSearchPhoneForm,
	},
};
</script>