import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { component } from 'vue/types/umd'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    // 重定向首页
    path: '/',
    redirect: '/home'
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
    path: '/chat',
    name: 'chat',
    component: () => import('../views/Chat.vue')
  },
  //查看商品的消息
  {
    path: '/check',
    name: 'check',
    component: () => import('../views/Check.vue'),
    children:[
      {
        path: 'hotel',
        name: 'hotel',
        component: () => import('../views/check/Hotel.vue'),
      },
      {
        path: 'attraction',
        name: 'attraction',
        component: () => import('../views/check/Attraction.vue'),
      },
    ]
  },
  //订单
  {
    path:"/order",
    name:"order",
    component: () => import('../views/Order.vue'),
    children:[
      {
        path: 'hotel',
        name: 'hotel',
        component: () => import('../views/order/Hotel.vue'),
      }, 
      {
        path: 'orderOver',
        name: 'orderOver',
        component: () => import('../views/order/OrderOver.vue'),
      },
      {
        path: 'ticket',
        name: 'ticket',
        component: () => import('../views/order/Ticket.vue'),
      },
    ]
  },
  //首页
  {
    path: '/',
    name: 'homePage',
    component: () => import('../views/HomePage.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/pages/Home.vue'),
      },
      {
        path: 'ticket',
        name: 'ticket',
        component: () => import('../views/pages/Ticket.vue')
      },
      {
        path: 'hotel',
        name: 'hotel',
        component: () => import('../views/pages/Hotel.vue'),
      },
      {
        path: 'train',
        name: 'train',
        component: () => import('../views/pages/Train.vue'),
      },
      {
        path: 'railway',
        name: 'railway',
        component: () => import('../views/pages/Railway.vue'),
      },
      {
        path: 'attraction',
        name: 'attraction',
        component: () => import('../views/pages/Attraction.vue'),
      },
    ]
  },
  //个人信息
  {
    path: '/showPersonal',
    name: 'showPersonal',
    redirect: '/showPersonal/personalNews',
    component: () => import("../views/ShowPersonal.vue"),
    children: [
      {
        path: 'personalNews',
        name: 'personNews',
        component: () => import('../views/personal/PersonalNews.vue')
      },
      {
        path: 'accountSeting',
        name: 'accountSeting',
        component: () => import('../views/personal/AccountSeting.vue')
      },
      {
        path: 'account',
        name: 'account',
        component: () => import('../views/personal/Account.vue')
      },
      {
        path: 'personalMessage',
        name: 'personMessage',
        component: () => import('../views/personal/PersonalMessage.vue')
      },
    ]
  },
  //测试
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/Test.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//设置全局守卫来判断是否存在token，不存在就返回登录页
router.beforeEach((to, from, next) => {
  //to到哪儿  from从哪儿离开  next跳转 为空就是放行  
  if (to.path === '/login' || to.path == '/home' || to.path == '/register') {
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
