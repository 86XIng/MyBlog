<template>
  <div>
    waiting
  </div>
</template>

<script>

export default {
    layout:'manage',
    // components:{
    //     MyArticle
    // }
    beforeCreate(){
      this.$router.push({ path: '/manage/manageArticles' })
    }
}
</script>

<style>

</style>