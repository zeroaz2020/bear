<template>
  <div class="agreement__wrap">
    <header>
      <h1>
        <router-link to="#">
          <img src="@/assets/images/icon_prev.png" />
        </router-link>
        이용동의
      </h1>
    </header>
    <AgreementForm />
  </div>
</template>

<script>
import AgreementForm from '@/components/SignUp/AgreementForm';
export default {
	name: 'IdSearchBirthDay',
	components: {
		AgreementForm,
	},
};
</script>