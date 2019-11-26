<template>
  <div>
    <no-ssr>
      <el-tag
      :key="tag._id"
      v-for="tag in dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)">
      {{tag.name}}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
  </no-ssr>
  </div>
</template>

<script>
import axios from 'axios'
export default {
layout:'manage',
    data() {
      return {
        dynamicTags: [],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      async handleClose(tag) {
        let id = tag._id
        let res =await axios.get('/tags/delete?id='+id)
        if(res.data.code==0){
          for(let i=0;i<this.dynamicTags.length;i++){
            if(this.dynamicTags[i]._id==id){
              this.dynamicTags.splice(i, 1);
            }
          }
        }
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      async handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          let res = await axios.get('/tags/add?name='+inputValue)
          this.dynamicTags.push({name:inputValue,_id:res.data.data._id});
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    },
    mounted(){
      var that = this
       axios.get('/tags/get').then(function(data){
         console.log(data.data.data)
          that.dynamicTags = data.data.data
      })
    }
}
</script>

<style>
.el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>