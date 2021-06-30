<template>
  <form
    @submit.prevent="submitForm"
    class="sub__form height100">
    <CurrentlyInterestedForm />

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
import CurrentlyInterestedForm from '@/components/User/CurrentlyInterestedForm';

export default {
	components: {
		CurrentlyInterestedForm
	},
};
</script>