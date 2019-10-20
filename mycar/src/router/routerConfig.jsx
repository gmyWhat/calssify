import React from 'react'
import Loadable from 'react-loadable'




function loading(){
    return <div>
        loading.....
    </div>
}
//异步加载路由
const Index=Loadable({
     loader:()=>import("@/views/index"),
     loading:loading
})
const Classify=Loadable({
    loader:()=>import("@/views/classify/classify"),
    loading:loading
})
const Collect=Loadable({
    loader:()=>import("@/views/collect/collect"),
    loading:loading
})
const Home=Loadable({
    loader:()=>import("@/views/index/home/home"),
    loading:loading
})
const Rank=Loadable({
    loader:()=>import("@/views/index/rank/rank"),
    loading:loading
})
const My=Loadable({
    loader:()=>import("@/views/index/my/my"),
    loading:loading
})


const routes=[
    {
        path:'/index',
        component:Index,
        routes:[
            {
                path:'/index/home',
                component:Home
            },
            {
                path:'/index/rank',
                component:Rank
            },
            {
                path:'/index/my',
                component:My
            },
            {
                from:'/index',
                to:'/index/home'
            }
        ]
    },
    {
        path:'/classify/:type',
        component:Classify
    },
    {
        path:'/collect',
        component:Collect
    },
    {
        from:'/',
        to:"/index"
    }
]
export default routes