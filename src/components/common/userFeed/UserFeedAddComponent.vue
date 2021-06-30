<template>
  <div class="button__area">
    <button
      type="button"
      class="icon__lock"></button>
    <button
      type="button"
      class="icon__arrow"></button>
    <button
      type="button"
      class="delete_button">
      등록
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.button__area {
		button {
			&.icon__camera {
				background-image: url('~@/assets/images/icon_camera.png');
				background-repeat: no-repeat;
				background-position: center;
				background-size: 19px 16px;
				width: 29px;
				height: 26px;
				margin: 0 5px 0 0;
			}

			&.icon__search {
				background-image: url('~@/assets/images/icon_emoji3.png');
				background-repeat: no-repeat;
				// background-position: center;
				background-position: top 6px center;
				background-size: 17px 17px;
				width: 28px;
				height: 27px;
			}
		}
}
</style>
