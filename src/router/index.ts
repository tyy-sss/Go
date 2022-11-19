import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { component } from 'vue/types/umd'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    // 重定向首页
    path: '/',
    redirect: '/homePage'
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: () => import('../views/HomePage.vue'),
    // children: [
    //   {
    //     path: 'home',
    //     name: 'home',
    //     component: () => import('../components/Home.vue'),
    //     children: [
    //       {
    //         path: 'hometicket',
    //         name: 'hometicket',
    //         component: () => import("../components/HomeTicket.vue"),
    //         children: [
    //           {
    //             path: ":id",
    //             name: 'product',
    //             component: () => import("../components/Product.vue"),
    //             props: true
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     path: 'ticket',
    //     name: 'ticket',
    //     component: () => import('../components/Ticket.vue')
    //   }
    // ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/common/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import("../views/common/RegisterView.vue")
  },
  {
    path: '/forgetpassword',
    name: 'forgetpasword',
    component: () => import("../views/common/ForgetPasswordView.vue")
  },
  {
    path: '/test',
    name: 'test',
    component: () => import("../views/Navigation.vue")
  },
  {
    //个人信息
    path: '/showPersonal',
    name: 'showPersonal',
    component: () => import("../views/personal/showPersonal/ShowPersonalView.vue"),
    children: [
      {
        path: "/showPersonalChoose",
        name: 'showPersonalChoose',
        component: () => import("../components/LeftChoose.vue"),
        children: [
          {
            path: "/myOrders",
            name: 'myOrders',
            component: () => import("../components/my/MyOrders.vue"),
          },
          {
            path: "/myTicket",
            name: 'myTicket',
            component: () => import("../components/my/MyTicket.vue"),
          },
          {
            path: "/myHotel",
            name: 'myHotel',
            component: () => import("../components/my/MyHotel.vue"),
          },
          {
            path: "/myHoliday",
            name: 'myHoliday',
            component: () => import("../components/my/MyHoliday.vue"),
          },
          {
            path: "/strategy",
            name: 'strategy',
            component: () => import("../components/my/Strategy.vue"),
          }
        ]
      }
    ]
  },
  {
    path: '/news',
    name: 'news',
    component: () => import("../views/personal/news/News.vue")
  },
  {
    path: '/changeNews',
    name: 'changeNews',
    component: () => import("../views/personal/changeNews/ChangeNews.vue")
  },
  {
    path: '/account',
    name: 'account',
    component: () => import("../views/personal/account/Account.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//设置全局守卫来判断是否存在token，不存在就返回登录页
router.beforeEach((to, from, next) => {
  //to到哪儿  from从哪儿离开  next跳转 为空就是放行  
  if (to.path === '/login' || to.path == '/homePage' || to.path == '/register') {
    //如果跳转为登录，就放行 
    next();
  } else {
    //取出localStorage判断
    let token = localStorage.getItem('token');
    console.log(token);
    if (token == null || token === '') {
      alert('请先登录')
      next({ name: 'login' });
    } else {
      next();
    }
  }
});

export default router
