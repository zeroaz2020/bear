<template>
  <UserFeedTop />
  <UserFeedProfile />
  <UserFeedTapMenu />
  <UserFeedInterests />
  <div class="feed__detail__area">
    <!-- 반복 -->
    <UserFeedDetail />
    <UserFeedDetail2 />
    <!-- 반복 //-->
  </div>
</template>

<script>
import UserFeedProfile from '@/components/common/userFeed/UserFeedProfile';
import UserFeedTop from '@/components/common/userFeed/UserFeedTop';
import UserFeedTapMenu from '@/components/common/userFeed/UserFeedTapMenu';
import UserFeedInterests from '@/components/common/userFeed/UserFeedInterests';
import UserFeedDetail from '@/components/common/userFeed/UserFeedDetail';
import UserFeedDetail2 from '@/components/common/userFeed/UserFeedDetail2';

export default {
	components: {
		UserFeedProfile,
		UserFeedTop,
		UserFeedTapMenu,
		UserFeedInterests,
		UserFeedDetail,
		UserFeedDetail2,
	},
};
</script>
