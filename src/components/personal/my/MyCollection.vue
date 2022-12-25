<template>
  <div class="order container">
    <div class="top">
      <ul class="nav" v-for="(item, i) in order" :key="i">
        <li
          class="nav-item"
          :class="choose == item.id ? 'spanItem' : ''"
          @click="change(item)"
        >
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="mod">
      <div class="order">
        <div class="change">
          <div class="time">
            <div class="item">
              <div>时间</div>
            </div>
            <div class="item">
              <input type="date" v-model="time" @change="changeTime" />
            </div>
          </div>
        </div>
        <div id="show">
          <!-- 显示酒店消息 -->
          <div class="row">
            <div
              class="News col-md-12"
              @click="checkNews(item.id)"
              v-for="(item, i) in collectionList"
              :key="i"
              width="20%"
            >
              <div class="Img">
                <img :src="item.img" height="220px" width="230px" />
              </div>
              <div class="title">
                <span>{{ item.name }}</span>
              </div>
              <div class="news">
                <span class="point">{{ item.point }}分</span>
                <span class="commint">{{ item.commentNum }}条评论</span>
              </div>
              <div class="price">
                <span>￥{{ item.price }}</span>
              </div>
            </div>
          </div>

          <div class="pager">
            <el-pagination
              layout="prev, pager, next"
              :total="total"
              @current-change="handlePage"
            >
            </el-pagination>
          </div>
        </div>
        <div id="noItem" class="noItem">
          <span>对不起没有你要查找的内容</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      choose: 1,
      order: [
        {
          id: 1,
          name: "收藏酒店",
          type: "酒店",
        },
        {
          id: 2,
          name: "收藏景点",
          type: "景点",
        },
      ],
      type: "酒店",
      time: "",
      pageData: {
        page: 1,
        limit: 10,
      },
      collectionList: [],
      total: 0,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    change(item) {
      this.choose = item.id;
      this.getList();
    },
    getList() {
      if (this.choose === 1) {
        this.type = "酒店";
      } else {
        this.type = "景点";
      }
      const id = JSON.parse(localStorage.getItem("user")).id;
      this.$http
        .get(
          "/collection/checkAllCollection/" +
            id +
            "/" +
            this.pageData.page +
            "/" +
            this.pageData.limit,
          {
            params: {
              time: this.time,
              type: this.type,
            },
          }
        )
        .then((response) => {
          console.log(response, "list");
          const list = response.data.data;
          this.collectionList = list.records;
          if (this.collectionList.length === 0) {
            //查询结果为空
            document.getElementById("show").style.display = "none";
            document.getElementById("noItem").style.display = "";
          } else {
            document.getElementById("show").style.display = "";
            document.getElementById("noItem").style.display = "none";
          }
          this.total = list.total;
        });
    },
    changeTime() {
      this.getList();
    },
    //格式化时间
    formatDate(time) {
      let date = new Date(new Date(time).getTime() + 8 * 3600 * 1000);
      date = date.toJSON();
      date = date.substring(0, 19).replace("T", " ");
      return date;
    },
    //选择页面的回调函数
    handlePage(val) {
      //   console.log(val, "val");
      this.pageData.page = val;
      this.getList();
    },
  },
};
</script>
  <style lang="less" scoped>
.order {
  border: 2px solid RGB(231, 236, 239);
  padding: 30px;
  .top {
    display: flex;
    width: 950px;
    .nav {
      width: 100%;
      background: RGB(247, 249, 250);
      border-bottom: 2px solid RGB(1, 134, 160);
      .nav-item {
        margin-right: 30px;
        font-size: 18px;
      }
    }
  }
  .mod {
    .order {
      align-items: center;
      .change {
        display: flex;
        margin-bottom: 20px;
        .menu {
          display: flex;
        }
        .time {
          display: flex;
        }
      }
      .noItem {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: large;
      }
    }
    .item {
      display: flex;
      align-items: center;
      margin-right: 20px;
    }
    .News {
      width: 18%;
      padding-top: 20px;
      background-color: RGB(247, 247, 247);
      margin-right: 10px;
      white-space: normal;
      word-break: break-all;
      overflow: hidden;
      .title {
        overflow: hidden;
        text-overflow: ellipsis; //超出部分以省略号显示
        white-space: nowrap;
        font-size: 18px;
      }
      .news {
        display: flex;
        margin-left: 10px;
        .point {
          font-size: 17px;
          color: RGB(0, 208, 212);
        }
        .commint {
          font-size: 12px;
          color: RGB(153, 153, 153);
          display: flex;
          align-items: center;
          margin-left: 20px;
        }
      }
      .price {
        font-size: 20px;
        float: right;
        color: RGB(255, 116, 0);
      }
    }
  }
}
.spanItem {
  border-bottom: 6px solid RGB(1, 134, 160);
  color: RGB(1, 134, 160);
}
</style>