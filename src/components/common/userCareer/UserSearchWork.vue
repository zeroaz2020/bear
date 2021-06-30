<template>
  <div class="search__work">
    <input
      type="text"
      maxlength="30" />
    <div>
      <button
        type="button"
        class="icon__cancel"></button>
      <button
        type="button"
        class="icon__search"
        @click="$emit('modal')"></button>
    </div>
  </div>
</template>

<script>
export default {
	emits: ['modal'],
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_userSearchWork';
</style>
