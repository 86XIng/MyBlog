<template>
  <div>
    <el-container>
        <el-header>
            <My-Header/>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <My-Aside/>
            </el-aside>
            <el-main>
                <nuxt/>
            </el-main>
        
        </el-container>
        <el-footer>Footer</el-footer>
    </el-container>
        
  </div>
</template>

<script>
import MyHeader from '@/components/manage/header'
import MyAside from '@/components/manage/aside'
export default {
    components:{
        MyHeader,
        MyAside
    }
}
</script>

<style lang="scss" scoped>
.el-footer{
    position: absolute;
    width: 100%;
    bottom: 0;
    text-align: center;
}
</style>