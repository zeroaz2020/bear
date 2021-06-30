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
    <IdSearchPhoneForm />
  </div>
</template>

<script>
import IdSearchPhoneForm from '@/components/SignUp/IdSearchPhoneForm';
export default {
	name: 'IdSearchPhone',
	components: {
		IdSearchPhoneForm,
	},
};
</script>