<template>
  <form
    @submit.prevent="submitForm"
    class="sub__form height100">
    <RecruitProposalForm />

    <!-- Footer -->
    <ul class="modal__footer">
      <li>
        <button
          type="button"
          class="modal__button">
          채용 프로포즈 하기
        </button>
      </li>
    </ul>
  </form>
</template>

<script>
import RecruitProposalForm from '@/components/User/RecruitProposalForm';

export default {
	components: {
		RecruitProposalForm
	},
};
</script>