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
    <li class="on">
      <router-link to="/userpalbum"> 사진첩 </router-link>
    </li>
    <li>
      <router-link to="/userfriend"> 친구 </router-link>
    </li>
  </ul>
  <!-- tap menu //-->

  <ul class="card album__area">
    <li>
      <h3>메인 이미지</h3>
      <div class="img__area">
        <img src="@/assets/images/img_yoga.png" alt="yoga" />
        <button type="button" @click="clicked">
          <img src="@/assets/images/icon_delete.png" class="icon_delete" />
        </button>
      </div>
    </li>
    <li>
      <span>2021.03.20</span>
      <button type="button" @click="clicked">
        <img src="@/assets/images/icon_key_open.png" alt="open" />
      </button>
    </li>
  </ul>
  <ul class="card album">
    <li>
      <div class="img__area">
        <img src="@/assets/images/img_dog.png" alt="img_dog" />
        <button type="button" @click="clicked">
          <img src="@/assets/images/icon_delete.png" class="icon_delete" />
        </button>
      </div>
      <span>2021.03.20</span>
    </li>
    <li>
      <div class="img__area">
        <img src="@/assets/images/img_sample.png" alt="img_sample" />
        <button type="button" @click="clicked">
          <img src="@/assets/images/icon_delete.png" class="icon_delete" />
        </button>
      </div>
      <span>2021.03.20</span>
    </li>
    <li>
      <div class="img__area">
        <img src="@/assets/images/img_best.png" alt="img_best" />
        <button type="button" @click="clicked">
          <img src="@/assets/images/icon_delete.png" class="icon_delete" />
        </button>
      </div>
      <span>2021.03.20</span>
    </li>
    <li>
      <div class="img__area">
        <img src="@/assets/images/img_yoga2.png" alt="img_yoga2" />
        <button type="button" @click="clicked">
          <img src="@/assets/images/icon_delete.png" class="icon_delete" />
        </button>
      </div>
      <span>2021.03.20</span>
    </li>
    <li>
      <div class="img__area">
        <img src="@/assets/images/img_action.png" alt="img_action" />
        <button type="button" @click="clicked">
          <img src="@/assets/images/icon_delete.png" class="icon_delete" />
        </button>
      </div>
      <span>2021.03.20</span>
    </li>
    <li>
      <div class="img__area">
        <img src="@/assets/images/img_woman.png" alt="img_woman" />
        <button type="button" @click="clicked">
          <img src="@/assets/images/icon_delete.png" class="icon_delete" />
        </button>
      </div>
      <span>2021.03.20</span>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    clicked() {
      alert("click!!");
    },
  },
};
</script>
