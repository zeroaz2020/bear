<template>
  <div class="radio__area">
    <label>
      <input
        type="radio"
        name="completion"
        id="" />
      <span>수료</span>
    </label>

    <label>
      <input
        type="radio"
        name="completion"
        id="" />
      <span>수강중</span>
    </label>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.radio__area {
	display: flex;
	align-content: center;
	margin: 10px 0 10px 5px;

	label {
		display: flex;
		align-content: center;
		user-select: none;

		input[type='radio'] {
			transform: scale(1);
			-webkit-appearance: none;
			width: 23px;
			height: 23px;
			border: 1px solid #ddd;
			border-radius: 50%;
			outline: none;
			cursor: pointer;
			& + span {
				margin: 0 0 0 7px;
				position: static;
				background: none;
				word-break: keep-all;
				font-size: 1.4rem;
				padding: 1px 0 0;
			}
		}
		input[type='radio']:before {
			content: '';
			display: block;
			width: 60%;
			height: 60%;
			margin: 20% auto;
			border-radius: 50%;
		}
		input[type='radio']:checked {
			border: 1px solid #ff5100;
		}
		input[type='radio']:checked:before {
			background: #ff5100;
		}
		& + label {
			margin: 0 0 0 50px;
		}
	}
}
</style>
