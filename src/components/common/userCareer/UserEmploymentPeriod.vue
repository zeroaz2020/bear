<template>
  <div class="classification">
    <input
      class="calendar"
      type="text"
      value="2018.09" />
    <span>~</span>
    <input
      class="calendar"
      type="text"
      value="2019.09" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.classification {
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	margin: 10px 0;

	.calendar {
		background-image: url('~@/assets/images/icon_calendar.png');
		background-repeat: no-repeat;
		background-size: auto 15px;
		background-position: right 15px center;
		width: 48%;
		height: 45px;
		border-radius: 7px;
		border: solid 1px #ddd;
		padding: 10px;
		outline: none;
		font-size: 1.4rem;
		color: #2e2e2e;
	}

	span {
		display: inline-block;
		text-align: center;
		position: inherit;
		background: none;
		top: inherit;
		bottom: 3px;
		right: inherit;
		padding: 5px 0 0;
		cursor: default;
	}
}
</style>
