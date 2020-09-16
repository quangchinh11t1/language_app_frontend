<template>
  <section class="container">
    <div>
      <h1 class="title">Nguyen Ngoc Hai {{ $t("welcome") }}</h1>
      <nuxt-link :to="localePath('/login')">Login</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.title {
  color: $green;
}
</style>
