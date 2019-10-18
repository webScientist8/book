<template>
  <div class="main">
    页面，此时登录的用户是{{userName}}
  </div>
</template>

<script>
  // import Header from '../components/Header'
export default {
  name: 'Home',
  components: {
    // Header
  },
  data() {
    return {
    }
  },
  computed: {
    userName() {
      return this.$store.state.name
    }
  },
  methods: {
    onChangeFragment: function (componentName) {
      console.log(componentName);
    }
  }
}
</script>


<style>
  .main{
    width: 100%;
    height: 100%;
  }
</style>
