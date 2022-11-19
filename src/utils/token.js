import Axios from 'axios'
import router from '../router'

//设置axios请求头加入token
Axios.interceptors.request.use(config => {
    if (config.push === '/') {
    } else {
        if (localStorage.getItem('token')) {
            //在请求头加入token，名字要和后端接收请求头的token名字一样    
            config.headers.token = localStorage.getItem('token');
        }
    }
    return config;
})
//响应回来token是否过期
// Axios.interceptors.response.use(response => {
//     console.log('响应回来：' + response.data.code)
//     //和后端token失效返回码约定0    
//     // if ( response.data.code == 0 ) {
//         // 引用elementui message提示框       
//         // ElementUI.Message({
//         //     message: '身份已失效',
//         //     type: 'err'
//         // });
//         alert("错误")
//         //清除token  
//         localStorage.removeItem('token');
//         //跳转      
//         router.push({ name: 'login' });
//     } else {
//         return response
//     }
// })