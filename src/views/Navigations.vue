<template>
  <div class="center-div">
    <div
      class="nav-item"
      :class="{ hide: menuToggle }">
      <RouterLink
        v-for="nav in navigations"
        :key="nav.name"
        :to="nav.href"
        active-class="active"
        class="nav_link"
        @click="navNone">
        {{ nav.name }}
      </RouterLink>
    </div>

    <div
      @click="navNone"
      class="menu"
      :class="{ hide: menuToggle }">
      <i class="fas fa-bars"></i>
    </div>
  </div>
</template>

<script>
export default {
	name: 'Navigations',
	data() {
		return {
			navigations: [
				{
					name: 'Home',
					href: '/',
				},
				{
					name: '휴대폰으로 아이디 찾기',
					href: '/idsearchphone',
				},
				{
					name: '생년월일로 아이디 찾기',
					href: '/idsearchbirthday',
				},
				{
					name: '아이디 찾기 결과',
					href: '/idsearchbirthdayresult',
				},
				{
					name: '휴대폰으로 비밀번호 찾기',
					href: '/passwordsearchphone',
				},
				{
					name: '생년월일로 비밀번호 찾기',
					href: '/passwordsearchbirthday',
				},
				{
					name: '비밀번호 찾기 결과',
					href: '/passwordsearchbirthdayresult',
				},
				{
					name: '회원가입',
					href: '/signup',
				},
				{
					name: '이용동의',
					href: '/agreement',
				},
				// {
				// 	name: '서비스 이용약관',
				// 	href: '/termsservice',
				// },
				{
					name: '회원가입 완료',
					href: '/signupsuccess',
				},
				{
					name: 'Feed',
					href: '/feed',
				},
				{
					name: '개인 > 프로필',
					href: '/userprofile',
				},
				{
					name: '개인 > 개인피드',
					href: '/userfeed',
				},
				{
					name: '개인 > 채용 프로포즈',
					href: '/recruitproposal',
				},
				{
					name: '개인 > 현재 관심 분야',
					href: '/currentlyinterested',
				},
				{
					name: '개인 > 경력',
					href: '/usercareer',
				},
				{
					name: '개인 > 교육/훈련',
					href: '/usereducationtraining',
				},
				{
					name: '개인 > 사진첩',
					href: '/userpalbum',
				},
				{
					name: '개인 > 친구',
					href: '/userfriend',
				},
				{
					name: '피드 > 글쓰기',
					href: '/feedwrite',
				},
			],
			menuToggle: false,
		};
	},
	methods: {
		navNone() {
			this.menuToggle = !this.menuToggle;
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_navigations';
</style>
