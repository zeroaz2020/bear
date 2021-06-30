<template>
  <form
    @submit.prevent="submitForm"
    class="sub__form">
    <UserTop />
    <UserProfileForm />
    <ul class="footer__button">
      <li>
        <button type="button">
          Footer
        </button>
      </li>
    </ul>
  </form>
</template>

<script>
import UserTop from '@/components/common/UserTop';
import UserProfileForm from '@/components/User/UserProfileForm';
export default {
	components: {
		UserTop, UserProfileForm
	},
};
</script>