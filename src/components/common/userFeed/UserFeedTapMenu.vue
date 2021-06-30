<template>
  <ul class="tap__area">
    <li>
      <router-link to="/userprofile">
        프로필
      </router-link>
    </li>
    <li class="on">
      <router-link to="/userfeed">
        개인피드
      </router-link>
    </li>
    <li>
      <router-link to="/userpalbum">
        사진첩
      </router-link>
    </li>
    <li>
      <router-link to="/userfriend">
        친구
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>