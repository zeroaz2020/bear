<template>
  <div class="sub__topBg">
    <ul>
      <li>
        <img src="@/assets/images/icon_camera.png" alt="icon camera" />
      </li>
      <li>
        <img src="@/assets/images/icon_write2.png" alt="icon write" />
      </li>
    </ul>
    <h2>하루에 한 가지씩</h2>
    <div class="user__face">
      <img src="@/assets/images/img_userface.png" />
      <img src="@/assets/images/icon_camera_m.png" />
    </div>
    <button></button>
  </div>

  <div class="profile__area">
    <ul class="user__info">
      <li>
        <span>김연아</span>
        셀트리온헬스케어 재직
        <img
          class="icon__edit"
          src="@/assets/images/icon_edit.png"
          alt="edit"
        />
      </li>
      <li><span>run to</span> 피지컬트레이너 <span>learn</span> 건운사과정</li>
      <li>
        <div class="badge">
          <img src="@/assets/images/icon_b.png" />
          <img src="@/assets/images/icon_s.png" />
          <img src="@/assets/images/icon_i.png" />
          <img src="@/assets/images/icon_t.png" />
        </div>
        <div class="jobstate">
          <img src="@/assets/images/icon_userText.png" />
        </div>
        <div class="emoji__num">
          <img src="@/assets/images/icon_emoji.png" />
          <img src="@/assets/images/icon_emoji2.png" />
          <span>10</span>
        </div>
        <div class="friend__num">
          <img src="@/assets/images/icon_03.png" />
          <span>친구 153</span>
        </div>
      </li>
    </ul>
    <ul class="btn__group">
      <li>
        <img src="@/assets/images/icon_06.png" alt="" />
        메세지
      </li>
      <li>
        <img src="@/assets/images/icon_03.png" alt="" />
        친구요청
      </li>
      <li class="on">채용프로포즈</li>
    </ul>
  </div>

  <!-- tap menu -->
  <ul class="tap__area">
    <li>
      <router-link to="/userprofile"> 프로필 </router-link>
    </li>
    <li>
      <router-link to="/userfeed"> 개인피드 </router-link>
    </li>
    <li>
      <router-link to="/userpalbum"> 사진첩 </router-link>
    </li>
    <li class="on">
      <router-link to="/userfriend"> 친구 </router-link>
    </li>
  </ul>
  <!-- tap menu //-->

  <div class="friend__area">
    <div class="card friend_detail__area">
      <!-- <div class="friend__search">
        <input
          type="text"
          placeholder="친구를 검색해 보세요" 
          maxlength="30" />
        <div>
          <button
            type="button"
            class="icon__cancel"></button>
          <button
            type="button"
            class="icon__search"></button>
        </div>
      </div> -->
      <UserFriendSearch />

      <!-- 반복 -->
      <div class="friend__detail__area">
        <div class="friend__detail">
          <div class="friend__face face1"></div>
          <ul class="friend__info">
            <li>
              <span>김헤니</span>
              베어런 재직
            </li>
            <li>
              <span>run to</span> 피지컬트레이너 <span>learn</span> 건운사과정
            </li>
            <li>
              <img src="@/assets/images/icon_b.png" />
              <img src="@/assets/images/icon_s.png" />
              <img src="@/assets/images/icon_i.png" />
              <img src="@/assets/images/icon_t.png" />
              <img src="@/assets/images/icon_userText.png" />
            </li>
            <li>
              <ul class="btn__accept__request">
                <li>
                  <div class="button__left">
                    <button type="button">
                      <img src="@/assets/images/icon_03.png" alt="" />
                      친구요청 수락
                    </button>
                  </div>
                  <div class="button__right">
                    <button type="button" class="icon__talk"></button>
                    <button type="button" class="icon__trash"></button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="friend__detail">
          <div class="friend__face face2"></div>
          <ul class="friend__info">
            <li>
              <span>황예지</span>
              셀트리온헬스케어 재직
            </li>
            <li>
              <span>run to</span> 피지컬트레이너 <span>learn</span> 건운사과정
            </li>
            <li>
              <img src="@/assets/images/icon_b.png" />
              <img src="@/assets/images/icon_s.png" />
              <img src="@/assets/images/icon_i.png" />
              <img src="@/assets/images/icon_t.png" />
              <img src="@/assets/images/icon_userText.png" />
            </li>
            <li>
              <ul class="btn__accept__request">
                <li>
                  <div class="button__left">3년 4개월째 우정 지속 중</div>
                  <div class="button__right">
                    <button type="button" class="icon__talk"></button>
                    <button type="button" class="icon__trash"></button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="friend__detail">
          <div class="friend__face face3"></div>
          <ul class="friend__info">
            <li>
              <span>김진영</span>
              셀트리온헬스케어 재직
            </li>
            <li>
              <span>run to</span> 피지컬트레이너 <span>learn</span> 건운사과정
            </li>
            <li>
              <img src="@/assets/images/icon_b.png" />
              <img src="@/assets/images/icon_s.png" />
              <img src="@/assets/images/icon_i.png" />
              <img src="@/assets/images/icon_t.png" />
              <img src="@/assets/images/icon_userText.png" />
            </li>
            <li>
              <ul class="btn__accept__request">
                <li>
                  <div class="button__left">5년 2개월째 우정 지속 중</div>
                  <div class="button__right">
                    <button type="button" class="icon__talk"></button>
                    <button type="button" class="icon__trash"></button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <!-- 반복 //-->
    </div>
  </div>
</template>

<script>
import UserFriendSearch from "@/components/common/userFriend/UserFriendSearch";

export default {
  components: {
    UserFriendSearch,
  },
  methods: {
    clicked() {
      alert("click!!");
    },
  },
};
</script>
