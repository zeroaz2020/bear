w<template>
  <form
    @submit.prevent="submitForm"
    class="feed__form">
    <UserTop />

    <UserFeedWriteForm />

    <UserFooter />
  </form>
</template>

<script>
import UserTop from '@/components/common/UserTop';
import UserFeedWriteForm from '@/components/Feed/UserFeedWriteForm';
import UserFooter from '@/components/common/UserFooter';
export default {
	components: {
		UserTop, UserFeedWriteForm, UserFooter
	},
};
</script>