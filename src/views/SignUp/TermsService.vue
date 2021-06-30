<template>
  <div class="wrap">
    <header>
      <h1 class="service__area">
        서비스 이용약관
        <router-link
          to="#"
          @click="$emit('close')">
          <img src="@/assets/images/btn_close.png" />
        </router-link>
      </h1>
    </header>
    <TermsServiceForm />
  </div>
</template>

<script>
import TermsServiceForm from '@/components/SignUp/TermsServiceForm';
export default {
  emits: ['close'],
	components: {
		TermsServiceForm,
	},
};
</script>

<style scoped>
.wrap {
  background: #fff;
  height: 100vh;
  position: absolute;
  top: 0;
}
</style>