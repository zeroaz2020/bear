<template>
  <!-- 코멘트 -->
  <UserFeedTalk_Comment />

  <!-- 댓글 -->
  <UserFeedTalk_Comment2 />

  <!-- 대댓글 -->
  <UserFeedTalk_Comment3 />

  <!-- 대댓글 코멘트 -->
  <UserFeedTalk_Comment class="comment__gap" />

  <!-- 댓글 -->
  <UserFeedTalk_Comment2 />

  <!-- 더보기 버튼 -->
  <UserFeedTalk_MoreButton />
</template>

<script>
import UserFeedTalk_Comment from '@/components/common/userFeed/UserFeedTalk_Comment';
import UserFeedTalk_Comment2 from '@/components/common/userFeed/UserFeedTalk_Comment2';
import UserFeedTalk_Comment3 from '@/components/common/userFeed/UserFeedTalk_Comment3';
import UserFeedTalk_MoreButton from '@/components/common/userFeed/UserFeedTalk_MoreButton';

export default {
	components: {
		UserFeedTalk_Comment,
		UserFeedTalk_Comment2,
		UserFeedTalk_Comment3,
		UserFeedTalk_MoreButton,
	},
};
</script>
