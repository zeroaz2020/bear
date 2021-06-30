<template>
  <div class="feed__write__area">
    <div class="feed__wirte__face">
      <div class="feed__face">
        <img
          src="@/assets/images/img_userface.png"
          alt="김연아" />
      </div>
      <ul class="feed__info">
        <li>
          <span>김연아</span>
        </li>
      </ul>
    </div>

    <div class="feed__write__contents__area">
      <div class="feed__wirte__contents">
        <textarea
          name=""
          id=""
          placeholder="오늘의 이야기를 적오볼까요?"></textarea>
      </div>
      <!-- 등록 -->
      <UserFeedAddComponent />
    </div>
    <div class="add__select">
      <ul>
        <li>
          <img
            src="@/assets/images/feedWrite_icon_01.png" />
        </li>
        <li>뉴스</li>
      </ul>
      <ul>
        <li>
          <img
            src="@/assets/images/feedWrite_icon_02.png" />
        </li>
        <li>사진 추가</li>
      </ul>
      <ul>
        <li>
          <img
            src="@/assets/images/feedWrite_icon_03.png" />
        </li>
        <li>동영상 링크 추가</li>
      </ul>
      <ul>
        <li>
          <img
            src="@/assets/images/feedWrite_icon_04.png" />
        </li>
        <li>교육 (베어런 인증 후 마크 부여)</li>
      </ul>
      <ul>
        <li>
          <img
            src="@/assets/images/feedWrite_icon_05.png" />
        </li>
        <li>구직을 위해 어필할 수 있는 한마디</li>
      </ul>
      <ul>
        <li>
          <img
            src="@/assets/images/feedWrite_icon_06.png" />
        </li>
        <li>채용정보 올리기</li>
      </ul>
    </div>
  </div>
</template>

<script>
import UserFeedAddComponent from '@/components/common/userFeed/UserFeedAddComponent';

export default {
	components: {
		UserFeedAddComponent,
	},
};
</script>

<style lang="scss" scoped>
.feed__write__area {
	margin: 25px 15px;

	.feed__wirte__face {
		display: flex;
		align-items: center;

		.feed__face {
			img {
				width: 60px;
				height: 60px;
				border-radius: 50%;
			}
		}

		.feed__info {
			font-size: 1.8rem;
			color: #2e2e2e;
			font-weight: bold;
			margin: 0 0 0 15px;
		}
	}

	.feed__wirte__contents {
		padding: 15px;
		margin: 15px 0 0;
		border-radius: 7px;
		border: solid 1px #ddd;
		textarea {
			min-width: 100%;
			max-width: 100%;
			min-height: 110px;
			border: none;
			outline: none;
			color: #2e2e2e;
			&::placeholder {
				font-size: 1.4rem;
				line-height: 1.64;
				color: #aaa;
			}
		}
	}

  .add__select {
    ul {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      font-weight: 500;
      color: #2d2d2d;
      padding: 10px 0;
      border-bottom: 1px solid #f2f2f2;
      &:first-of-type {
        margin: 0;
      }
      &:last-of-type {
        margin: 0;
        border-bottom: none;
      }
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        &:first-of-type {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #d7dbe5;
          margin: 0 15px 0 0;
        }
        img {
          width: 16px;
        }
      }
    }
  }
}
</style>
