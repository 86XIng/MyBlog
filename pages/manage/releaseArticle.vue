<template>
  <div>
      <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否原创">
        <el-switch v-model="form.original"></el-switch>
      </el-form-item>
      <el-form-item label="转载来源" :v-if="form.original">
        <el-input v-model="form.from"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    layout:'manage',
    data() {
      return {
        form: {
          name: '',
          desc: '',
          from: '',
          date2: '',
          original: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style>

</style>