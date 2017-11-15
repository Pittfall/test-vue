<template>
  <div>
    <h1>Users Page</h1>
    <p>The team id is: {{ $route.params.teamId }}</p>
    <button @click="goHome">Go Home</button>
  </div>
</template>

<script>
export default {
    watch: {
      '$route' (to, from) {

      }
    },
    methods: {
      goHome() {
        this.$router.push('/');
      }
    }
}
</script>
