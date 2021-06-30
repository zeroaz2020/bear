<template>
  <form
    @submit.prevent="submitForm"
    class="sub__form height100">
    <UserCareerForm />

    <!-- Footer -->
    <ul class="modal__footer">
      <li>
        <button
          type="button"
          class="modal__button">
          저장
        </button>
      </li>
    </ul>
  </form>
</template>

<script>
import UserCareerForm from '@/components/User/UserCareerForm';

export default {
	components: {
		UserCareerForm
	},
};
</script>