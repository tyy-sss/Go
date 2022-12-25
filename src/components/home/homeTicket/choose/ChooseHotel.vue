<template>
  <div>
    <div class="chooseTicket">
      <div class="ch_search_tab container-fluid" tabindex="0">
        <ul class="ul_search_tab col-md-6" tabindex="0">
          <li class="cur" id="js_domestic_tab" tabindex="0">
            <a href="#" rel="nofollow" onclick="return false;" tabindex="0"
              >酒店搜索</a
            >
          </li>
        </ul>
        <div class="rt_link col-md-6" tabindex="0">
          <a
            href="https://order.qunar.com/flight"
            rel="nofollow"
            target="_blank"
            class="icon-status"
            tabindex="0"
            >出票状态查询</a
          ><a
            href="https://order.qunar.com/flight"
            rel="nofollow"
            target="_blank"
            class="icon-edit"
            tabindex="0"
            >退票改签</a
          >
        </div>
      </div>
      <div class="form">
        <form class="form-horizontal" role="form">
          <div class="form-inline">
            <label>目的地:</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="firstname"
                placeholder="请输入目的地"
              />
            </div>
          </div>
          <div class="form-inline">
            <label>入住时间:</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="lastname"
                placeholder="请输入出发时间"
              />
            </div>
          </div>
          <div class="form-inline">
            <label>离店时间:</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="lastname"
                placeholder="请输入结束时间"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <span class="showNews">实时搜索 730000 家酒店报价信息</span>
              <button type="submit" class="btn btn-danger" style="float: right">
                立即搜索
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.form-inline {
  display: flex;
  margin: 10px;
  label {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }
}
.showNews {
  color: RGB(153, 153, 153);
}
.ch_search_tab {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid RGB(0, 208, 212);
  .rt_link {
    a {
      margin: 10px;
      font-size: 15px;
    }
  }
}
a {
  text-decoration: none;
  font-size: 20px;
  color: RGB(153, 153, 153);
}
li {
  list-style: none;
  margin-right: 15px;
}
</style>