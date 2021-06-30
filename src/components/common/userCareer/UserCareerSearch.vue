<template>
  <div class="search__modal">
    <div class="modal__contents">
      <div class="search__work">
        <input
          type="text"
          maxlength="20"
          value="베어런" />
        <div>
          <button
            type="button"
            class="icon__cancel"></button>
          <button
            type="button"
            class="icon__search"></button>
        </div>
      </div>
      <div class="search__result">
        <ul>
          <li>베어런</li>
          <li>베어런 주식회사</li>
          <li>베어런 스포츠센터</li>
          <li>추가 1</li>
          <li>추가 2</li>
          <li>추가 3</li>
          <li>추가 4</li>
          <li>추가 5</li>
          <li>추가 6</li>
          <li>추가 7</li>
        </ul>
      </div>
      <p>찾으시는 기업이 없으시나요? 아래에 직접등록해주세요</p>

      <!-- 등록 -->
      <div class="add__company__name">
        <input
          type="text"
          maxlength="20"
          placeholder="기업명을 등록해주세요" />
        <button
          type="button"
          class="icon__cancel">
          등록
        </button>
      </div>

      <!-- Footer -->
      <ul class="modal__footer">
        <li>
          <button
            type="button"
            class="modal__button"
            @click="$emit('modal')">
            닫기
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
	emits: ['modal'],
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_userCareerSearch';
</style>
