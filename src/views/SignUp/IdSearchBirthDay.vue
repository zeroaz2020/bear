<template>
  <div class="wrap">
    <header>
      <h1>
        <router-link to="#">
          <img src="@/assets/images/icon_prev.png" />
        </router-link>
        아이디 찾기
      </h1>
    </header>
    <IdSearchBirthDayForm />
  </div>
</template>

<script>
import IdSearchBirthDayForm from '@/components/SignUp/IdSearchBirthDayForm';
export default {
	name: 'IdSearchBirthDay',
	components: {
		IdSearchBirthDayForm,
	},
};
</script>