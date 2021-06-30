<template>
  <form
    @submit.prevent="submitForm"
    class="sub__form">
    <UserTop />
    <UserFeedForm />
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
import UserFeedForm from '@/components/User/UserFeedForm';
export default {
	components: {
		UserTop, UserFeedForm
	},
};
</script>