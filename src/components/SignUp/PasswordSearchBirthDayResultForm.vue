<template>
  <div class="page__title">
    <h1>비밀번호를 찾기 위해</h1>
    <p>다음의 두가지 방법 중 하나를 선택해 주세요.</p>
  </div>

  <form
    @submit.prevent="submitForm"
    class="form">
    <!-- Tap -->
    <ul class="idsearch__tap">
      <li>
        <button type="button">
          휴대폰으로 찾기
        </button>
      </li>
      <li class="on">
        <button type="button">
          생년월일로 찾기
        </button>
      </li>
    </ul>

    <!-- 비밀번호 찾기 결과 -->
    <ul class="passwordsearch__result">
      <li><span>베어런</span>님</li>
      <li><span>master@bearun.com</span></li>
      <li>회원님의 비밀번호를 변경해 주세요.</li>
    </ul>

    <div class="input__area">
      <label for="name">새로운 비밀번호</label>
      <input
        id="new_password1"
        type="text"
        placeholder="새로운 비밀번호를 입력해 주세요" />
    </div>
    <div class="input__area">
      <label for="name">새로운 비밀번호 확인</label>
      <input
        id="new_password2"
        type="text"
        placeholder="다시 한번 입력해 주세요" />
      <span
        :class="{ on: viewMode }"
        @click="pwViewMode"></span>
    </div>

    <!-- Button -->
    <ul class="footer__button2">
      <li>
        <button
          type="button"
          @click="alert1">
          취소
        </button>
      </li>
      <li>
        <button
          type="button"
          @click="alert2">
          비밀번호 변경
        </button>
      </li>
    </ul>
  </form>
</template>

<script>
export default {
	data() {
		return {
			viewMode: false,
		};
	},
	methods: {
		alert1() {
			alert('button1 click!');
		},
		alert2() {
			alert('button2 click!');
		},
		pwViewMode() {
			this.viewMode = !this.viewMode;
		},
	},
};
</script>