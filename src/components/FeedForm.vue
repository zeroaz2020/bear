<template>
  <form
    @submit.prevent="submitForm"
    class="sub__form">
    <!-- Top -->
    <div class="sub__top">
      <div class="inner">
        <ul class="title__area">
          <li>
            <img
              class="logo"
              src="@/assets/images/sub_logo.png"
              alt="Logo" />
          </li>
          <li>
            <ul class="search__area">
              <li>
                <img
                  class="icon_search"
                  src="@/assets/images/icon_search.png"
                  alt="Search" />
              </li>
              <li>
                <img
                  class="icon_alrarm"
                  src="@/assets/images/icon_alrarm.png"
                  alt="Alrarm" />
              </li>
              <li>
                <img
                  class="img_thumbnail"
                  src="@/assets/images/img_thumbnail.png"
                  alt="Thumbnail" />
              </li>
            </ul>
          </li>
        </ul>

        <div class="input__area">
          <label for="name">이야기</label>
          <input
            class="input__story"
            type="text"
            placeholder="친구들에게 하고 싶은 이야기를 적어 볼까요?" />
          <span> </span>
        </div>
      </div>
    </div>

    <div class="careerengine__area">
      <img
        class="img__text"
        src="@/assets/images/img_rectangle-1.png"
        alt="" />
      <div class="careerengine__top">
        <img
          class="img_thumbnail"
          src="@/assets/images/img_thumbnail.png"
          alt="Thumbnail" />
        <ul>
          <li><span>임현철</span> 님은</li>
          <li>현재 <span>진로설계 중</span>입니다.</li>
        </ul>
      </div>
    </div>
  </form>
</template>
