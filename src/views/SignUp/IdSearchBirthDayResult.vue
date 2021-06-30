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
    <IdSearchBirthDayResultForm />
  </div>
</template>

<script>
import IdSearchBirthDayResultForm from '@/components/SignUp/IdSearchBirthDayResultForm';
export default {
	name: 'IdSearchBirthDayResult',
	components: {
		IdSearchBirthDayResultForm,
	},
};
</script>