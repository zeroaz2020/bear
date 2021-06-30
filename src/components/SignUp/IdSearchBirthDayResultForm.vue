<template>
  <div class="page__title">
    <h1>아이디를 찾기 위해</h1>
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

    <!-- 아이디 찾기 결과 -->
    <ul class="idsearch__result">
      <li><span>베어런</span>님</li>
      <li>회원님의 아이디는</li>
      <li><span>master@bearun.com</span>&nbsp;입니다.</li>
    </ul>

    <!-- Button -->
    <ul class="footer__button2">
      <li>
        <button
          type="button"
          @click="alert1">
          로그인
        </button>
      </li>
      <li>
        <button
          type="button"
          @click="alert2">
          비밀번호 찾기
        </button>
      </li>
    </ul>
  </form>
</template>

<script>
export default {
  methods: {
    alert1 () {
      alert('button1 click!')
    },
    alert2 () {
      alert('button2 click!')
    }
  }
};
</script>