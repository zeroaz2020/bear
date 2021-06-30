<template>
  <div class="classification">
    <input
      class="calendar"
      type="text"
      :value="placeholderProps" />
  </div>
</template>

<script>
export default {
	props: {
		placeholderProps: {
			type: String,
			default: '',
		},
	},
};
</script>

<style scoped lang="scss">
.classification {
	margin: 10px 0;
	input[type='text'].calendar {
		width: 100%;
		height: 44px;
		border-radius: 7px;
		border: solid 1px #ddd;
		padding: 10px;
		outline: none;
		font-size: 1.4rem;
		color: #2e2e2e;
		background-image: none;
	}
}
</style>
