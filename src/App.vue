<template>
  <Navigations />
  <router-view />
</template>

<script>
import Navigations from '@/views/Navigations';

export default {
	name: "App",
	components: {
		Navigations,
	},
};
</script>

<style lang="scss">
// @import "@/assets/scss/bearlearn.scss";
</style>