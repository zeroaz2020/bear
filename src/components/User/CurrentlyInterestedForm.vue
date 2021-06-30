<template>
  <div class="wrap recurit__area">
    <header class="recruit_proposal_title">
      <h1>
        현재 관심 분야
        <button
          type="button"
          class="btn__close"></button>
      </h1>
    </header>

    <div class="contents__area">
      <!-- 해시태그를 이용하여~ -->
      <div class="select__recruitment2">
        <h2>
          해시태그를 이용하여<br />
          관심분야 키워드를 입력해주세요.
        </h2>
        <div class="stock__option__text">
          #운동하기, #피지컬트레이너, #트레이너, <br />
          #건강운동관리사
        </div>
      </div>
      
      <!-- 삭제 -->
      <UserCareerDeleteComponent />
    </div>
  </div>
</template>

<script>
import UserCareerDeleteComponent from '@/components/common/userCareer/UserCareerDeleteComponent';


export default {
	components: {
		UserCareerDeleteComponent
	},
};
</script>
