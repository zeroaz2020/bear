<template>
  <form @submit.prevent="submitForm" class="form">
    <div class="character"></div>
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="logo" />
    </div>
    <div class="input__area">
      <label for="email">이메일</label>
      <input
        id="email"
        type="text"
        placeholder="가입시 등록한 이메일 주소를 입력해주세요."
      />
    </div>

    <div class="input__area">
      <label for="password">비밀번호</label>
      <input
        id="password"
        type="password"
        placeholder="비밀번호를 입력하세요"
      />
      <span :class="{ on: viewMode }" @click="pwViewMode"></span>
    </div>

    <div class="checkBox_area">
      <input type="checkbox" id="check1" checked />
      <label for="check1">
        <span>자동로그인</span>
      </label>
      <input type="checkbox" id="check2" />
      <label for="check2">
        <span>알림수신</span>
      </label>
      <i></i>
    </div>
    <p class="membershipGuide">
      아직 베어런 회원이 아닌가요?
      <router-link to="#"> 회원가입 </router-link>
    </p>
    <ul class="memberJoinLink">
      <li>
        <router-link to="#">
          <img src="@/assets/images/icon_n.png" alt="네이버" />
        </router-link>
      </li>
      <li>
        <router-link to="#">
          <img src="@/assets/images/icon_f.png" alt="페이스북" />
        </router-link>
      </li>
      <li>
        <router-link to="#">
          <img src="@/assets/images/icon_g.png" alt="구글" />
        </router-link>
      </li>
      <li>
        <router-link to="#">
          <img src="@/assets/images/icon_k.png" alt="카카오" />
        </router-link>
      </li>
    </ul>
    <ul class="membershipText">
      <li>아이디 찾기</li>
      <li>|</li>
      <li>비밀번호 찾기</li>
    </ul>
    <!-- Button -->
    <ul class="footer__button">
      <li>
        <button type="button">로그인</button>
      </li>
    </ul>
  </form>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      viewMode: false,
    };
  },
  computed: {},
  methods: {
    submitForm() {
      // alert('login');
    },
    pwViewMode() {
      this.viewMode = !this.viewMode;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_loginForm";
</style>
