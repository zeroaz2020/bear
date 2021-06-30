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
    <PasswordSearchBirthDayForm />
  </div>
</template>

<script>
import PasswordSearchBirthDayForm from '@/components/SignUp/PasswordSearchBirthDayForm';
export default {
	name: 'IdSearchBirthDay',
	components: {
		PasswordSearchBirthDayForm,
	},
};
</script>