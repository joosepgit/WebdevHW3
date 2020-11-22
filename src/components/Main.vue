<template>
  <body>
    <Header/>
    <PostsList/>
  </body>
</template>

<script>
import Header from './Header.vue'
import PostsList from './PostsList';
export default {
  name: "Main",
  components: {
    Header,
    PostsList
  },
  methods: {
  }
}
</script>

<style scoped>

</style>