<template>
  <div class="container">
    <div class="row">
      <div class="leftShow col-md-4">
        <div class="tipLeft">客服</div>
        <hr />
        <!-- 显示在线的对象 -->
        <div
          style="padding: 10px 0"
          v-for="user in users"
          :key="user.user.username"
          @click="chooseChat(user.user)"
        >
          <span>{{ user.user.username }}</span>
        </div>
      </div>
      <div class="rightShow col-md-7">
        <div class="tipRight">聊天{{ chatUser }}</div>
        <div class="mod">
          <div
            style="height: 350px; overflow: auto; border-top: 1px solid #ccc"
            v-html="content"
          ></div>
        </div>
        <div class="chat">
          <textarea
            v-model="text"
            style="
              height: 160px;
              width: 100%;
              padding: 20px;
              border: none;
              border-top: 1px solid #ccc;
              border-bottom: 1px solid #ccc;
              outline: none;
            "
          ></textarea>
          <div style="text-align: right; padding-right: 10px">
            <button
              type="button"
              class="btn btn-primary"
              size="mini"
              @click="send"
            >
              发送
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let socket;
export default {
  name: "Im",
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      user: {},
      isCollapse: false,
      users: [],
      chatUser: "",
      text: "",
      messages: [],
      content: "",
      chatPeople: {
        id: "",
        username: "",
        status: 2,
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    send() {
      if (!this.chatUser) {
        this.$message({ type: "warning", message: "请选择聊天对象" });
        return;
      }
      if (!this.text) {
        this.$message({ type: "warning", message: "请输入内容" });
      } else {
        if (typeof WebSocket == "undefined") {
          console.log("您的浏览器不支持WebSocket");
        } else {
          console.log("您的浏览器支持WebSocket");
          // 组装待发送的消息 json
          // {"from": "zhang", "to": "admin", "text": "聊天文本"}
          let message = {
            from: this.user.username,
            to: this.chatUser,
            text: this.text,
          };
          socket.send(JSON.stringify(message)); // 将组装好的json发送给服务端，由服务端进行转发
          this.messages.push({ user: this.user.username, text: this.text });
          // 构建消息内容，本人消息
          this.createContent(null, this.user.username, this.text);
          this.text = "";
        }
      }
    },
    createContent(remoteUser, nowUser, text) {
      // 这个方法是用来将 json的聊天消息数据转换成 html的。
      let html;
      // 当前用户消息
      if (nowUser) {
        // nowUser 表示是否显示当前用户发送的聊天消息，绿色气泡
        html =
          '<div class="el-row" style="padding: 5px 0">\n' +
          '  <div class="el-col el-col-22" style="text-align: right; padding-right: 10px">\n' +
          '    <div class="tip left">' +
          text +
          "</div>\n" +
          "  </div>\n" +
          '  <div class="el-col el-col-2">\n' +
          '  <span class="el-avatar el-avatar--circle" style="height: 40px; width: 40px; line-height: 40px;">\n' +
          '    <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" style="object-fit: cover;">\n' +
          "  </span>\n" +
          "  </div>\n" +
          "</div>";
      } else if (remoteUser) {
        // remoteUser表示远程用户聊天消息，蓝色的气泡
        html =
          '<div class="el-row" style="padding: 5px 0">\n' +
          '  <div class="el-col el-col-2" style="text-align: right">\n' +
          '  <span class="el-avatar el-avatar--circle" style="height: 40px; width: 40px; line-height: 40px;">\n' +
          '    <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" style="object-fit: cover;">\n' +
          "  </span>\n" +
          "  </div>\n" +
          '  <div class="el-col el-col-22" style="text-align: left; padding-left: 10px">\n' +
          '    <div class="tip right">' +
          text +
          "</div>\n" +
          "  </div>\n" +
          "</div>";
      }
      this.content += html;
    },
    init() {
      this.user = JSON.parse(localStorage.getItem("user"));
      let username = this.user.username;
      let id = this.user.id;
      let _this = this;
      if (typeof WebSocket == "undefined") {
        console.log("您的浏览器不支持WebSocket");
      } else {
        console.log("您的浏览器支持WebSocket");
        let socketUrl =
          "ws://localhost:8088/imserver/" + username + "/" + id + "/" + 2;
        if (socket != null) {
          socket.close();
          socket = null;
        }
        // 开启一个websocket服务
        socket = new WebSocket(socketUrl);
        //打开事件
        socket.onopen = function () {
          console.log("websocket已打开");
        };
        //  浏览器端收消息，获得从服务端发送过来的文本消息
        socket.onmessage = function (msg) {
          console.log("收到数据====" + msg.data);
          const data = JSON.parse(msg.data); // 对收到的json数据进行解析， 类似这样的： {"users":[{"user":{"id":11,"username":"6","status":"2"}}]}
          console.log(data.users, "users");
          if (data.users) {
            // 获取在线人员信息
            _this.users = data.users.filter(
              (user) =>
                user.user.username !== username &&
                user.user.id !== id &&
                user.user.status !== "2"
            ); // 获取当前连接的所有用户信息，并且排除自身，自己不会出现在自己的聊天列表里
            // _this.users.forEach((element) => {
            //   console.log(element.user);
            // });
          } else {
            // 如果服务器端发送过来的json数据 不包含 users 这个key，那么发送过来的就是聊天文本json数据
            // {"from": "zhang", "text": "hello"}
            if (data.from === _this.chatUser) {
              _this.messages.push(data);
              // 构建消息内容
              _this.createContent(data.from, null, data.text);
            }
          }
        };
        //关闭事件
        socket.onclose = function () {
          console.log("websocket已关闭");
        };
        //发生了错误事件
        socket.onerror = function () {
          console.log("websocket发生了错误");
        };
      }
    },
    //选择聊天对象
    chooseChat(item) {
      this.content = "";
      this.chatUser = item.username;
      this.user = JSON.parse(localStorage.getItem("user"));
      let id = this.user.id;
      // console.log(item.id, "userId");
      // console.log(id, "managerId");
      //获得所有的聊天记录
      this.$http
        .get("/chat/allChat", {
          params: {
            userId: id,
            managerId: item.id,
          },
        })
        .then((response) => {
          const list = response.data.data;
          list.forEach((item) => {
            console.log(item);
            if (item.status === "1") {
              //是客服发的消息
              this.createContent(null, this.user.username, item.content);
            } else {
              //是用户发的消息
              this.createContent(this.user.username, null, item.content);
            }
          });
        });
    },
  },
};
</script>
<style scoped>
.container {
  padding: 50px;
}
.leftShow {
  border: 3px solid RGB(152, 191, 33);
  border-radius: 5px;
  margin-right: 50px;
  height: 500px;
}
.tipLeft {
  font-size: 20px;
}
.rightShow {
  border: 1px solid black;
  padding: 5px;
}
.tipRight {
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
}
.tip {
  color: white;
  text-align: left;
  border-radius: 10px;
  font-family: sans-serif;
  padding: 10px;
  max-width: 400px;
  word-break: break-all;
  display: inline-block !important;
  display: inline;
}
.right {
  background-color: deepskyblue;
}
.left {
  background-color: forestgreen;
}
</style>