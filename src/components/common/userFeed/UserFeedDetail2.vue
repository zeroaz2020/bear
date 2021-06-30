<template>
  <div class="card feed__detail2">
    <div class="feed__info__area2">
      <div class="feed__face">
        <img
          src="@/assets/images/img_yun-a-kim.png"
          alt="김연아" />
      </div>
      <ul class="feed__info">
        <li>
          <span>김연아</span>
          셀트리온헬스케어 재직
        </li>
        <li>
          <span>run to</span> 피지컬트레이너 · <span>lean</span> 건운사과정
        </li>
        <li>
          <img src="@/assets/images/icon_b.png" />
          <img src="@/assets/images/icon_s.png" />
          <img src="@/assets/images/icon_i.png" />
          <img src="@/assets/images/icon_t.png" />
          <img src="@/assets/images/icon_userText.png" />
        </li>
      </ul>
    </div>
    <button
      type="button"
      class="btn__more2"></button>

    <div class="feed__sub">
      <img
        class="feed__img"
        src="@/assets/images/img_photo.png"
        alt="img_dog" />
      <div class="feed__info__detail">
        <h3 class="feed__info__title">
          벚꽃이 피는 봄이네요
        </h3>
        <span>2021.03.20</span>
        <div class="tag">
          <span>#봄</span>
          <span>#날좋다</span>
          <span>#꽃내음</span>
          <span>#벚꽃</span>
          <span>#서울</span>
          <span>#축제</span>
        </div>
        <ul class="feed__info">
          <li>
            <div class="emoji">
              <img src="@/assets/images/icon_emoji.png" />
              <img src="@/assets/images/icon_emoji2.png" />
              10
            </div>
          </li>
          <li>
            <div class="talk">
              <span class="icon__talk"></span>코멘트 20
            </div>
          </li>
          <li>
            <div class="share">
              <span class="icon__share"></span>공유 10
            </div>
          </li>
          <li>
            <button
              type="button"
              class="btn__key"></button>
          </li>
        </ul>
        <UserFeedTalk />
      </div>
    </div>
  </div>
</template>

<script>
import UserFeedTalk from '@/components/common/userFeed/UserFeedTalk';

export default {
	components : {
		UserFeedTalk
	}

}
</script>





