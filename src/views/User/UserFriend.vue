<template>
  <form
    @submit.prevent="submitForm"
    class="sub__form">
    <UserTop />
    <UserFriendForm />
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
import UserFriendForm from '@/components/User/UserFriendForm';
export default {
	components: {
		UserTop, UserFriendForm
	},
};
</script>