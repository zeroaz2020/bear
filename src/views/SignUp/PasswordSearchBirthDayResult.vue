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
    <PasswordSearchBirthDayResultForm />
  </div>
</template>

<script>
import PasswordSearchBirthDayResultForm from '@/components/SignUp/PasswordSearchBirthDayResultForm';
export default {
	name: 'IdSearchBirthDayResult',
	components: {
		PasswordSearchBirthDayResultForm,
	},
};
</script>