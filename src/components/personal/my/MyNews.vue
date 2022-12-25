<template>
  <div class="myNews">
    <div class="img">
      <div class="news">
        <!-- 图片展示 -->
        <img :src="avatar" width="150px" height="150px" />
      </div>
      <div class="news">
        <button class="btn btn-default" @click="imagecropperShow = true">
          修改头像
        </button>
      </div>
      <div>
        <my-upload
          :modelValue.sync="imagecropperShow"
          :key="imagecropperKey"
          lang-type="zh"
          img-format="png"
          @crop-success="cropSuccess"
          @crop-upload-success="cropUploadSuccess"
          @crop-upload-fail="cropUploadFail"
          url="http://localhost:8088/upload"
        ></my-upload>
      </div>
    </div>
    <div class="news">
      <div class="item">
        <span>昵称：</span>
        <span class="show">{{ user.name }}</span>
      </div>
      <div class="item">
        <span>生日：</span>
        <span class="show">{{ user.birthday }}</span>
      </div>
      <div class="item">
        <span>性别：</span>
        <span class="show">{{ user.sex }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.myNews {
  display: flex;
  border: 1px solid RGB(154, 154, 154);
  background-color: RGB(249,252,254);
  width: 50%;
  margin-left: 350px;
  .img {
    .news {
      display: flex;
      justify-content: center;
    }
  }
  .news {
    margin-left: 50px;
    .item{
        margin-top: 15px;
        font-size: 15px;
        .show{
            font-size: 18px;
            font-weight: bold;
            color: RGB(85,85,85);
        }
    }
  }
}
</style>
<script>
// 使用头像上传组件
import myUpload from "vue-image-crop-upload";
import i from "@/assets/picture/personal.png";

export default {
  components: {
    "my-upload": myUpload,
  },
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      avatar: i,
      user: {
        name: "去哪儿",
        birthday: "2022-10-10",
        sex: "男",
      },
    };
  },
  methods: {
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------");
      // console.log(imgDataUrl);
      this.avatar = imgDataUrl;
      console.log(field);
    },
    //上传成功回调
    cropUploadSuccess(res, originPicName) {
      //res是后端返回的结果，originPicName是后端接收到图片的名字
      console.log("-------- upload success --------");
      console.log(res);
      this.imagecropperShow = false;
      this.imagecropperKey = this.imagecropperKey + 1;
    },
    //上传失败回调
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log("上传失败状态" + status);
      console.log("field: " + field);
    },
  },
};
</script>
  