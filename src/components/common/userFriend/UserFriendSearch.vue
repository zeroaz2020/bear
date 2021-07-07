<template>
  <div class="friend__search">
    <input type="text" placeholder="친구를 검색해 보세요" maxlength="30" />
    <div>
      <button type="button" class="icon__cancel"></button>
      <button type="button" class="icon__search"></button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.friend__search {
  input {
    width: 100%;
    background: #fff;
    box-shadow: inset 0 0 0 1px #f00;
    border: 1px solid #000;
    border-radius: 7px;
    font-size: 1.4rem;
    height: 43px;
    padding: 18px;
    outline: none;
  }
}
</style>
