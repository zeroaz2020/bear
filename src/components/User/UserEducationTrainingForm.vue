<template>
  <div class="wrap recurit__area">
    <header class="recruit_proposal_title">
      <h1>
        교육/훈련
        <button
          type="button"
          class="btn__close"></button>
      </h1>
    </header>

    <div class="contents__area">
      <!-- 명칭 -->
      <div class="classification__area">
        <h2>명칭</h2>
        <UserInputTextComponent />
      </div>

      <!-- 역할 -->
      <div class="classification__area">
        <h2>역할</h2>
        <UserInputTextComponent />
      </div>

      <!-- 수강기간 -->
      <div class="classification__area">
        <h2>수강기간</h2>
        <UserEmploymentPeriod />
      </div>

      <!-- 상태 -->
      <div class="classification__area">
        <h2>상태</h2>
        <UserCareerRadioComponent />
      </div>

      <!-- 삭제 -->
      <UserCareerDeleteComponent />
    </div>
  </div>
</template>

<script>
import UserCareerDeleteComponent from '@/components/common/userCareer/UserCareerDeleteComponent';
import UserInputTextComponent from '@/components/common/userCareer/UserInputTextComponent';
import UserEmploymentPeriod from '@/components/common/userCareer/UserEmploymentPeriod';
import UserCareerRadioComponent from '@/components/common/userCareer/UserCareerRadioComponent';

export default {
	components: {
		UserCareerDeleteComponent,
		UserInputTextComponent,
		UserEmploymentPeriod,
    UserCareerRadioComponent
	},
	data() {
		return {
			careerSearch: false,
		};
	},
	methods: {
		showCareerSearchModal() {
			this.careerSearch = !this.careerSearch;
		},
	},
};
</script>
