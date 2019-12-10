<template>
<div>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    
    <el-table-column
      fixed
      prop="title"
      label="标题">
    </el-table-column>
    <el-table-column
      prop="desc"
      label="描述">
    </el-table-column>
    <el-table-column
      label="是否原创">
      <template scope="scope">
        {{scope.row.isOriginal}}
      </template>
    </el-table-column>
    <el-table-column
      prop="tag"
      label="标签"
      :filters="tags"
      :filter-method="filterTag"
      >
    </el-table-column>
    <el-table-column
      prop="viewCount"
      label="查看次数">
    </el-table-column>
    <el-table-column
      prop="lastModified"
      label="修改时间">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="修改文章" :visible.sync="dialogFormVisible">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="封面">
        <el-upload
          class="avatar-uploader"
          :action="upload_qiniu_url"
          :data="qiniuData"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img :src="form.fontImg" class="avatar">
          <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
        </el-upload>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="form.tag" placeholder="请选择文章分类">
          <el-option v-for="(item,idx) in dynamicTags" :key="idx" :label="item.name" :value="item.name">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否原创">
        <el-switch v-model="form.isOriginal"></el-switch>
      </el-form-item>
      <el-form-item label="转载来源" v-if="!form.isOriginal">
        <el-input v-model="form.from"></el-input>
      </el-form-item>
       <div class="mavonEditor">
        <no-ssr>
          <mavon-editor :toolbars="markdownOption" v-model="form.content"/>
        </no-ssr>
      </div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </div>
  </el-dialog>
</div>

</template>

<script>
import axios from "axios";
  export default {
    layout:'manage',
    data() {
      return {
        tableData: [{
          commentCount: 0,
          content: "### 4444444444444444444444444",
          desc: "4444444444444444444444444",
          fontImg: "https://avatars0.githubusercontent.com/u/28418585?s=460&v=4",
          from: "",
          isIndex: false,
          isOriginal: true,
          lastModified: "2019-11-29T12:35:35.067Z",
          releaseTime: "2019-11-29T12:35:35.067Z",
          tag: "test4",
          title: "4444444444444444444444444",
          viewCount: 0,
          __v: 0,
          _id: "5de11097a04317435c7dfe0d",
        }],
        tags:[],
        form:{},
        qiniuData: {
          key: "",
          token: ""
        },
        upload_qiniu_url: "https://up-z0.qiniup.com",
        dynamicTags:[],
        dialogFormVisible:false,
        markdownOption: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          help: true, // 帮助
          /* 1.3.5 */
          undo: true, // 上一步
          redo: true, // 下一步
          trash: true, // 清空
          save: true, // 保存（触发events中的save事件）
          /* 1.4.2 */
          navigation: true, // 导航目录
          /* 2.1.8 */
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          /* 2.2.1 */
          subfield: true, // 单双栏模式
          preview: true, // 预览
        }
      }
    },
    async mounted(){
      let res =await axios.get('/article/getArticle?page=0')
      this.tableData = res.data.data
      let tagres = await axios.get('/tags/get')
      let tags = []
      tagres.data.data.forEach(element => {
        tags.push({text:element.name,value:element.name})
      });
      this.tags = tags
      var that = this
       axios.get('/tags/get').then(function(data){
          console.log(data.data.data)
            that.dynamicTags = data.data.data
        });
        this.getQiniuToken();
    },
    methods:{
      filterTag(value, row) {
        return row.tag === value;
      },
      handleClick(row) {
        this.dialogData = row
        this.dialogFormVisible = true
        this.form = row
        console.log(row);
      },
      async onSubmit() {
        let res = await axios.post('/article/updateArticle',this.form)
        
        if(res.status==200&&res.data.code==0){
          this.$message('更新成功');
        }
        this.dialogFormVisible = false
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(this.imageUrl)
        this.form.fontImg = "https://avatars0.githubusercontent.com/u/28418585?s=460&v=4"
      },
      beforeAvatarUpload(file) {
        this.qiniuData.key = file.name;
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      getQiniuToken: function() {
        const _this = this;
        axios
          .post("/upload/getToken")
          .then(function(res) {
            console.log(res);
            if (res.data.code==0) {
              _this.qiniuData.token = res.data.data;
            } else {
              _this.$message({
                message: res.data.info,
                duration: 2000,
                type: "warning"
              });
            }
          });
      },
    }
  }
</script>