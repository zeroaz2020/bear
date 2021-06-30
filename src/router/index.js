import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		// 아이디 찾기 > 휴대폰으로 찾기
		path: '/idsearchphone',
		name: 'IdSearchPhone',
		component: () => import('@/views/SignUp/IdSearchPhone'),
	},
	{
		// 아이디 찾기 > 생년월일로 찾기
		path: '/idsearchbirthday',
		name: 'IdSearchBirthDay',
		component: () => import('@/views/SignUp/IdSearchBirthDay'),
	},
	{
		// 아이디 찾기 > 생년월일로 찾기 > 아이디 찾기 결과
		path: '/idsearchbirthdayresult',
		name: 'IdSearchBirthDayResult',
		component: () => import('@/views/SignUp/IdSearchBirthDayResult'),
	},

	{
		// 비밀번호 찾기 > 휴대폰으로 찾기
		path: '/passwordsearchphone',
		name: 'PasswordSearchPhone',
		component: () => import('@/views/SignUp/PasswordSearchPhone'),
	},
	{
		// 비밀번호 찾기 > 생년월일로 찾기
		path: '/passwordsearchbirthday',
		name: 'PasswordSearchBirthDay',
		component: () => import('@/views/SignUp/PasswordSearchBirthDay'),
	},
	{
		// 비밀번호 찾기 > 생년월일로 찾기 > 아이디 찾기 결과
		path: '/passwordsearchbirthdayresult',
		name: 'PasswordSearchBirthDayResult',
		component: () => import('@/views/SignUp/PasswordSearchBirthDayResult'),
	},
	{
		// 회원가입
		path: '/signup',
		name: 'Signup',
		component: () => import('@/views/SignUp/SignUp'),
	},
	{
		// 이용동의
		path: '/agreement',
		name: 'Agreement',
		component: () => import('@/views/SignUp/Agreement'),
	},
	{
		// 서비스 이용약관
		path: '/termsservice',
		name: 'TermsService',
		component: () => import('@/views/SignUp/TermsService'),
	},
	{
		// 회원가입 완료
		path: '/signupsuccess',
		name: 'SignUpSuccessForm',
		component: () => import('@/components/SignUp/SignUpSuccessForm'),
	},
	{
		// Feed
		path: '/feed',
		name: 'Feed',
		component: () => import('@/components/FeedForm'),
	},
	{
		// 개인 > 프로필
		path: '/userprofile',
		name: 'UserProfile',
		component: () => import('@/views/User/UserProfile'),
	},
	{
		// 개인 > 개인피드
		path: '/userfeed',
		name: 'UserFeed',
		component: () => import('@/views/User/UserFeed'),
	},
	{
		// 개인 > 채용 프로포즈
		path: '/recruitproposal',
		name: 'RecruitProposal',
		component: () => import('@/views/User/RecruitProposal'),
	},
	{
		// 개인 > 현재 관심 분야
		path: '/currentlyinterested',
		name: 'CurrentlyInterested',
		component: () => import('@/views/User/CurrentlyInterested'),
	},
	{
		// 개인 > 경력
		path: '/usercareer',
		name: 'UserCareer',
		component: () => import('@/views/User/UserCareer'),
	},
	{
		// 개인 > 교육/훈련
		path: '/usereducationtraining',
		name: 'UserEducationTraining',
		component: () => import('@/views/User/UserEducationTraining'),
	},
	{
		// 개인 > 사진첩
		path: '/userpalbum',
		name: 'UserAlbum',
		component: () => import('@/views/User/UserAlbum'),
	},
	{
		// 개인 > 친구
		path: '/userfriend',
		name: 'UserFriend',
		component: () => import('@/views/User/UserFriend'),
	},
	{
		// 피드 > 글쓰기
		path: '/feedwrite',
		name: 'FeedWrite',
		component: () => import('@/views/Feed/FeedWrite'),
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '@/views/About'),
	},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
