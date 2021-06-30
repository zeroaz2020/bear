<template>
  <div class="wrap recurit__area">
    <header class="recruit_proposal_title">
      <h1>
        경력
        <button
          type="button"
          class="btn__close"></button>
      </h1>
    </header>

    <div class="contents__area">
      <!-- 근무처 -->
      <div class="career__form__area">
        <h2>근무처</h2>
        <UserSearchWork
          class="mt10"
          @modal="showCareerSearchModal" />
      </div>

      <!-- 경력 검색 -->
      <UserCareerSearch
        v-show="careerSearch"
        @modal="showCareerSearchModal" />

      <!-- 분류/업종 -->
      <div class="classification__area">
        <h2>분류/업종</h2>
        <UserCareerClassificationSector />
      </div>

      <!-- 근무기간 -->
      <div class="classification__area">
        <h2>근무기간</h2>
        <UserEmploymentPeriod />
      </div>

      <!-- 근무개요 -->
      <div class="classification__area">
        <h2>근무개요</h2>
        <UserInputTextComponent placeholder-props="UI/UX 디자이너" />
      </div>

      <!-- 삭제 -->
      <UserCareerDeleteComponent />
    </div>
  </div>
</template>

<script>
import UserSearchWork from '@/components/common/userCareer/UserSearchWork';
import UserCareerSearch from '@/components/common/userCareer/UserCareerSearch';
import UserCareerClassificationSector from '@/components/common/userCareer/UserCareerClassificationSector';
import UserCareerDeleteComponent from '@/components/common/userCareer/UserCareerDeleteComponent';
import UserEmploymentPeriod from '@/components/common/userCareer/UserEmploymentPeriod';
import UserInputTextComponent from '@/components/common/userCareer/UserInputTextComponent';

export default {
	components: {
		UserSearchWork,
		UserCareerSearch,
    UserCareerClassificationSector,
    UserCareerDeleteComponent,
    UserEmploymentPeriod,
    UserInputTextComponent
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
