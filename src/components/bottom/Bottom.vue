<template>
  <div class="bottom">
    <div class="cr">
      <div class="links">
        <div
          class="fh-about"
          onmouseover="this.className+=' hover'"
          onmouseout="this.className=this.className.replace(/\shover/g,'')"
        >
          <a
            href="http://www.qunar.com/site/zh/Qunar.in.China_1.2.shtml"
            target="_blank"
            rel="nofollow"
            class="about-link"
            >关于Qunar.com</a
          >
        </div>
      </div>
      <span>|</span
      ><a
        href="http://www.qunar.com/site/zh/Cooperate_4.shtml"
        target="_blank"
        rel="nofollow"
        >业务合作</a
      ><span>|</span
      ><a
        href="//app.mokahr.com/apply/qunar/4206"
        target="_blank"
        rel="nofollow"
        >加入我们</a
      ><span>|</span
      ><a
        href="http://help.qunar.com/complaint.html"
        class=""
        target="_blank"
        rel="nofollow"
        >"严重违规失信"专项整治举报</a
      ><span>|</span
      ><a href="http://security.qunar.com" target="_blank" rel="nofollow"
        >安全中心</a
      ><span>|</span
      ><a
        href="http://www.qunar.com/commonweal/index.html"
        rel="nofollow"
        target="_blank"
        >星骆驼公益</a
      ><span>|</span
      ><a
        href="http://www.qunar.com/site/en/Qunar.in.China_1.1.shtml"
        target="_blank"
        rel="nofollow"
        >About Us</a
      ><span>|</span
      ><a href="https://group.trip.com/" target="_blank" rel="nofollow"
        >Trip.com Group</a
      >
    </div>
    <p class="copyright">
      <span>Copyright ©2021 Qunar.com</span>
      <span class="s24">去哪儿网投诉、咨询热线电话95117</span>
      <span>举报、投诉邮箱: tousu@qunar.com</span>
      <span>全国旅游投诉热线: 12345</span>
    </p>
    <p class="copyright">
      <span>未成年人/违法和不良信息/算法推荐举报电话：010-59606977</span
      ><span>未成年人/违法和不良信息/算法推荐举报邮箱：tousu@qunar.com</span>
    </p>
  </div>
</template>
<style lang="less" scoped>
.bottom {
    font-size: 15px;
    color: #848484;
    padding-bottom: 11px;
    text-align: center;
    .cr {
      display: flex;
      justify-content: center;
      margin: 10px;
      a{
        color: #848484;
        text-decoration: none;
      }
    }
    .copyright {
      span {
        margin: 10px;
      }
    }
  }
</style>