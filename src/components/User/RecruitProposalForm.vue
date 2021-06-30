<template>
  <div class="wrap recurit__area">
    <header class="recruit_proposal_title">
      <h1>
        채용 프로포즈하기
        <button
          type="button"
          class="btn__close"></button>
      </h1>
    </header>

    <div class="contents__area">
      <!-- 프로포즈 대상 -->
      <div class="proposal__face__area">
        <h2>프로포즈 대상</h2>
        <div class="proposal__face">
          <div class="feed__face">
            <img
              src="@/assets/images/face_1.png"
              alt="김헤니" />
          </div>
          <ul class="feed__info">
            <li>
              <span>김헤니</span>
              베어런 재직
            </li>
            <li>
              <span>run to</span> 피지컬트레이너 · <span>learn</span> 건운사과정
            </li>
          </ul>
        </div>
      </div>

      <!-- 채용건을 선택해 주세요 -->
      <div class="select__recruitment">
        <h2>채용건을 선택해 주세요.</h2>
        <select
          name=""
          id="">
          <option value="">
            베어런에서 행정직 직원을 모십니다.
          </option>
          <option value="">
            베어런에서 행정직 직원을 모십니다.
          </option>
          <option value="">
            베어런에서 행정직 직원을 모십니다.
          </option>
        </select>
      </div>

      <!-- 프로포즈할 내용을 적어주세요 -->
      <div class="proposal__contents__area">
        <h2>프로포즈할 내용을 적어주세요.</h2>
        <div class="proposal__contents">
          <textarea
            name=""
            id="">안녕하세요, 김헤니님
프로필 보고 연락드립니다.

베어런에서 현재 행정직 직원을 모시고 있습니다.

공고를 한번 검토해 보시고, 저희쪽에 지원해 주시면 감사하겠습니다.</textarea>
        </div>
      </div>

      <!-- 채용성공보상, 스톡옵션 -->
      <div class="select__recruitment">
        <h2>채용성공보상, 스톡옵션, 복지 등을 추가로 어필해보세요.</h2>
        <div class="stock__option__text">
          #운동하기, #피지컬트레이너, #트레이너, <br />
          #건강운동관리사
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	components: {
	},
};
</script>
