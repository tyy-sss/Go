<template>
  <!-- 低价机票消息展示 -->
  <div class="container">
    <!-- 导航栏 -->
    <div class="row">
      <ul class="nav">
        <li class="nav-item" v-for="(item, i) in form" :key="i">
          <div :class="item.id == choose ? 'spanItem' : ''">
            {{ item.title }}
          </div>
        </li>
      </ul>
    </div>
    <div class="commentNews">
      <div class="send">
        <img
          :src="nowUser.avatar"
          width="50px"
          height="50px"
          style="border-radius: 50px"
        />
        <div class="input-group">
          <input v-model="content" type="text" class="form-control" />
          <div class="input-group-text">
            <span @click="sendComment">发送</span>
          </div>
        </div>
      </div>
      <hr />
      <div class="commentItem" v-for="(item, i) in comment" :key="i">
        <div class="self">
          <div class="img">
            <img
              :src="item.commenterImg"
              width="70px"
              height="70px"
              style="border-radius: 50px"
            />
          </div>
          <div class="news">
            <div class="name">
              <span>{{ item.commenterName }}</span>
            </div>
            <div class="comment">
              <span>{{ item.content }}</span>
            </div>
            <div class="time">
              <span>{{ formatDate(item.time) }}</span>
            </div>
          </div>
          <div class="operate">
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteComment(item)"
            >
              删除
            </button>
            <button type="button" class="btn btn-default" @click="resp(item)">
              回复
            </button>
          </div>
        </div>
        <div
          class="children self"
          v-for="(children, j) in item.children"
          :key="j"
        >
          <div class="img">
            <img
              :src="children.commenterImg"
              width="70px"
              height="70px"
              style="border-radius: 50px"
            />
          </div>
          <div class="news">
            <div class="name">
              <span>{{ children.commenterName }}</span>
              <span style="font-size: 10px; margin: 10px">回复</span>
              <span>{{ children.commentedName }}</span>
            </div>
            <div class="comment">
              <span>{{ children.content }}</span>
            </div>
            <div class="time">
              <span>{{ formatDate(children.time) }}</span>
            </div>
          </div>
          <div class="operate">
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteComment(children)"
            >
              删除
            </button>
            <button
              type="button"
              class="btn btn-default"
              @click="resp(children)"
            >
              回复
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<style lang="less" scoped>
.container {
  border: 1px solid RGB(0, 208, 212);
  border-radius: 10px;
}
.nav {
  display: flex;
  padding: 20px;
  border-bottom: 1px solid RGB(0, 208, 212);
  .nav-item {
    margin-right: 20px;
    font-size: 20px;
  }
}
.commentNews {
  .send {
    display: flex;
    width: 50%;
    img {
      margin-top: 10px;
    }
    .input-group {
      margin: 5px 5px 10px 10px;
      margin-left: 50px;
      span {
        cursor: pointer;
      }
    }
  }
  .commentItem {
    border-bottom: 1px solid RGB(219, 219, 219);
    .self {
      display: flex;
      border: 1px solid RGB(219, 219, 219);
      border-radius: 10px;
      .img {
        width: 100px;
        padding: 10px;
      }
      .news {
        width: 80%;
        .name {
          overflow: hidden;
          text-overflow: ellipsis; //超出部分以省略号显示
          white-space: nowrap;
          justify-content: center;
          align-items: center;
        }
        .comment {
          width: 90%;
          font-size: 15px;
          margin: 5px;
          overflow: hidden;
          text-overflow: ellipsis; //超出部分以省略号显示
          white-space: nowrap;
          word-break: break-all;
        }
        .time {
          font-size: 10px;
          padding: 5px;
        }
        .point {
          color: RGB(0, 208, 212);
          margin: 5px;
        }
      }
      .operate {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .children {
      margin-left: 50px;
    }
  }
}
</style>
<script>
import Bottom from "@/components/bottom/Bottom.vue";

export default {
  components: { Bottom },
  data() {
    return {
      choose: 1,
      form: [
        {
          id: 1,
          title: "评论",
        },
      ],
      nowUser: {},
      user: [],
      content: "",
      comment: [],
      replay: {
        id: "",
        name: "",
      },
      type: "酒店",
    };
  },
  created() {
    this.getNowUser();
    this.getComment();
  },
  methods: {
    //得到当前用户的消息
    getNowUser() {
      this.nowUser = JSON.parse(localStorage.getItem("user"));
      console.log(this.nowUser);
    },
    //得到这个商品的评论
    getComment() {
      this.content = "";
      //当前商品的id
      const id = this.$route.query.id;
      this.$http
        .get("/comment/getAllComment/" + id + "/" + "酒店")
        .then((response) => {
          console.log(response.data.data, "allcomment");
          this.comment = response.data.data;
        });
    },
    //发送评论
    sendComment() {
      if (this.content === "") {
        alert("评论不能为空");
      } else {
        //当前商品的id
        const id = this.$route.query.id;
        if (this.replay.id === "") {
          //发送一级评论
          this.$http
            .post("/comment/oneComment", {
              commenterId: this.nowUser.id,
              goodsId: id,
              goodsType: "酒店",
              content: this.content,
            })
            .then((response) => {
              console.log(response, "comment");
              // this.getComment();
              location.reload();
            });
        } else {
          //发布二级评论
          const index1 = this.content.indexOf(")");
          const content = this.content.substring(index1 + 1);
          if (content === null || content === "") {
            alert("评论不能为空");
          } else {
            this.$http
              .post("/comment/twoComment", {
                commenterId: this.nowUser.id,
                goodsId: id,
                goodsType: "酒店",
                content: content,
                parentId: this.replay.id,
              })
              .then((response) => {
                // this.getComment();
                location.reload();
              });
          }
        }
      }
    },
    //格式化时间
    formatDate(time) {
      let date = new Date(new Date(time).getTime() + 8 * 3600 * 1000);
      date = date.toJSON();
      date = date.substring(0, 19).replace("T", " ");
      return date;
    },
    //删除评论
    deleteComment(item) {
      console.log("删除" + item.id);
      this.$http
        .post("/comment/deleteComment", {
          id: item.id,
        })
        .then((response) => {
          //this.getComment();
          location.reload();
        });
    },
    //回复评论
    resp(item) {
      this.replay.id = item.id;
      this.replay.name = item.commenterName;
      this.content = "(回复：" + this.replay.name + ")";
    },
  },
};
</script>