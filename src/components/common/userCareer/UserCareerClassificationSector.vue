<template>
  <div class="classification">
    <select
      name=""
      id="">
      <option value="">
        스포츠업
      </option>
    </select>
    <select
      name=""
      id="">
      <option value="">
        서비스
      </option>
    </select>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
	.classification {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		margin: 10px 0;

		select {
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
			width: 15px;
			text-align: center;
			position: inherit;
			background: none;
			top: inherit;
			bottom: 3px;
			right: inherit;
			padding: 0;
			cursor: default;
		}
	}
</style>
