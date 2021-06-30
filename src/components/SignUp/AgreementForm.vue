<template>
  <div class="page__title">
    <h1>차원이 다른 체육인 구인구직 서비스</h1>
    <p>베어런 이용을 위해 약관에 동의해 주세요.</p>
  </div>

  <form
    @submit.prevent="submitForm"
    class="agreement__form">
    <div class="agreement__area">
      <div class="checkBox_area">
        <input
          type="checkbox"
          id="check1" />
        <label for="check1">
          <span>모두 확인, 동의합니다.</span>
        </label>
      </div>
      <div class="agreement__info">
        <p>
          <span>ㆍ</span>
          전체 동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며, 개별적으로
          동의를 선택하실 수 있습니다.
        </p>
        <p>
          <span>ㆍ</span>
          선택항목에 대한 동의를 거부하시는 경우에도 서비스 이용이 가능합니다.
        </p>
      </div>
    </div>
    <div class="agreement__checkbox">
      <div class="checkBox_area">
        <input
          type="checkbox"
          id="check2"
          checked />
        <label for="check2">
          <span>서비스 이용약관 동의(필수)</span>
        </label>
      </div>
      <router-link
        to="#"
        @click="showModalOn">
        보기
      </router-link>
    </div>
    <div class="agreement__checkbox">
      <div class="checkBox_area">
        <input
          type="checkbox"
          id="check3" />
        <label for="check3">
          <span>개인정보 수집 및 이용 동의(필수)</span>
        </label>
      </div>
    </div>
    <div class="agreement__checkbox">
      <div class="checkBox_area">
        <input
          type="checkbox"
          id="check4" />
        <label for="check4">
          <span>정보 이메일 수신 동의</span>
        </label>
      </div>
    </div>
    <div class="agreement__info__area">
      <div class="checkBox_area">
        <input
          type="checkbox"
          id="check5" />
        <label for="check5">
          <span>정보 SNS 수신 동의</span>
        </label>
      </div>
      <div class="agreement__info">
        <p>
          <span>ㆍ</span>
          진로가이드 뉴스레터, 쿠폰, 이벤트 등 다양한 정보를 받아 보실 수
          있습니다.
        </p>
        <p>
          <span>ㆍ</span>
          경력개발 구독, 진단검사 등의 유료결제내역은 동의여부와 상관없이
          발송됩니다.
        </p>
      </div>
    </div>

    <!-- Button -->
    <ul class="footer__button">
      <li>
        <button type="button">
          동의하고 계속 진행합니다.
        </button>
      </li>
    </ul>
  </form>

  <TermsService
    v-if="showModal"
    @close="showModalOn" />
</template>

<script>
import TermsService from '@/views/SignUp/TermsService';

export default {
	components: {
		TermsService,
	},
	data() {
		return {
			showModal: false,
		};
	},
  methods: {
    showModalOn() {
      this.showModal = !this.showModal
      
    }
  },
};
</script>
