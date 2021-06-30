<template>
  <div class="page__title">
    <h1>베어런을 이용하기 위해서는</h1>
    <p>회원가입이 필요합니다.</p>
  </div>

  <form
    @submit.prevent="submitForm"
    class="signup__form">
    <div class="input__area">
      <label for="email">이메일</label>
      <input
        id="email"
        type="text"
        placeholder="이메일 주소를 입력해주세요." />
    </div>
    <div class="input__area">
      <label for="password">비밀번호</label>
      <input
        id="password1"
        type="password"
        placeholder="비밀번호를 입력하세요" />
      <span
        :class="{ on: viewMode1 }"
        @click="pwViewMode1"></span>
    </div>
    <div class="password__confirm">
      <div class="input__area">
        <label for="password">비밀번호 확인</label>
        <input
          id="password2"
          type="password"
          placeholder="비밀번호를 다시 입력하세요" />
        <span
          :class="{ on: viewMode2 }"
          @click="pwViewMode2"></span>
      </div>
      <p>※ 영문, 숫자, 특수문자로 6 ~ 12자 이내로 사용해주세요.</p>
    </div>
    <div class="input__area">
      <label for="name">이름</label>
      <input
        id="name"
        type="text"
        placeholder="이름을 입력하세요" />
    </div>
    <div class="input__area">
      <label for="phone__number">휴대폰 번호</label>
      <input
        id="phone__number"
        type="text"
        placeholder="- 없이 휴대폰번호를 입력하세요" />
    </div>
    <div class="birthday__area">
      <div class="input__area">
        <label for="birthday">생년월일</label>
        <input
          id="birthday"
          type="text"
          placeholder="생년월일을 입력하세요." />
      </div>
      <p>※ 아이디 분실 시 찾기 위한 용도로도 사용됩니다.</p>
    </div>
    <!-- Button -->
    <ul class="footer__button">
      <li>
        <button type="button">
          회원가입
        </button>
      </li>
    </ul>
  </form>
</template>

<script>
export default {
	name: 'SignUp',
	data() {
		return {
			viewMode1: false,
			viewMode2: false,
		};
	},
	computed: {},
	methods: {
		pwViewMode1() {
			this.viewMode1 = !this.viewMode1;
		},
		pwViewMode2() {
			this.viewMode2 = !this.viewMode2;
		},
	},
};
</script>
