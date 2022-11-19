<template>
  <div>
    <div>
      <!-- 图片展示 -->
      <img :src="avatar"/>
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
</template>

<script>
// 使用头像上传组件
import myUpload from "vue-image-crop-upload";
import { mapGetters } from "vuex";
import i from "@/assets/picture/personal.png";

export default {
  components: {
    "my-upload": myUpload,
  },
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      avatar: i
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
