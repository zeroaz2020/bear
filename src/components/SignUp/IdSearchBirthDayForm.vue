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

    <div class="input__area">
      <label for="name">이름</label>
      <input
        id="name"
        type="text"
        placeholder="이름을 입력하세요" />
    </div>

    <div class="input__area">
      <label for="birthday">생년월일</label>
      <input
        id="birthday"
        type="text"
        placeholder="생년월일을 입력하세요." />
    </div>

    <p>아래의 중복방지 문자를 입력해주세요.</p>
    <ul class="noDuplicate">
      <li>중복방지 코드</li>
      <li>
        <input type="text" />
      </li>
    </ul>
    <!-- Button -->
    <ul class="footer__button">
      <li>
        <button type="button">
          아이디 찾기
        </button>
      </li>
    </ul>
  </form>
</template>

<script>
export default {};
</script>
