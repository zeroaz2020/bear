<template>
  <form
    @submit.prevent="submitForm"
    class="sub__form height100">
    <UserEducationTrainingForm />

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
import UserEducationTrainingForm from '@/components/User/UserEducationTrainingForm';

export default {
	components: {
		UserEducationTrainingForm
	},
};
</script>