<template>
  <div class="page-index">
    <el-row :gutter="10">
      <el-col :span="5">
        <my-aside/>
      </el-col>
      <el-col :span="13">
        <articles/>
      </el-col>
      <el-col :span="6">
        <my-menu/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Articles from '@/components/index/articles.vue'
import MyAside from '@/components/index/aside.vue'
import MyMenu from '@/components/index/menu.vue'
export default {
  components: {
    Articles,
    MyAside,
    MyMenu
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
