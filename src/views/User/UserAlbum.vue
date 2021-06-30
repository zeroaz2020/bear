<template>
  <form
    @submit.prevent="submitForm"
    class="sub__form">
    <UserTop />
    <UserAlbum />
    <ul class="footer__button">
      <li>
        <button type="button">
          Footer
        </button>
      </li>
    </ul>
  </form>
</template>

<script>
import UserTop from '@/components/common/UserTop';
import UserAlbum from '@/components/User/UserAlbumForm';
export default {
	components: {
		UserTop, UserAlbum
	},
};
</script>