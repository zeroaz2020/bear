<template>
  <div class="feed__talk__area">
    <div class="feed__talk__input__area">
      <div class="feed__face">
        <img
          src="@/assets/images/img_yun-a-kim.png"
          alt="김연아" />
      </div>
      <input
        type="text"
        placeholder="코멘트를 남겨주세요"
        maxlength="30" />
      <div class="button__area">
        <button
          type="button"
          class="icon__camera"></button>
        <button
          type="button"
          class="icon__search"></button>
      </div>
    </div>
    <div class="feed__talk__button__area">
      <button
        type="button"
        class="feed__talk__button">
        코멘트
        <img
          src="@/assets/images/icon_btn_send.png"
          alt="icon_btn_send" />
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
