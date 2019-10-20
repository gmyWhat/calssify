import React, { Component } from 'react';
import {withRouter,NavLink}from 'react-router-dom'
import foot from './foot.module.css'

class Foot extends Component {
    state={
        foots:[
            {
                path:'/index/home',
                txt:'首页',
                classname:'iconfont icon_boss'
            },
            {
                path:'/index/rank',
                txt:'排行',
                classname:'iconfont icon_index_line'
            },
            {
                path:'/index/my',
                txt:'我的',
                classname:'iconfont icon-bookmark-f'
            },
        ],
        ind:0
    }
    render() {
        let {foots}=this.state
        return (
            <div className={`${foot['foot']}`}>
                {
                   foots&&foots.map((item,index)=><p key={index}>
                         <i className={item.classname}></i>
                       <NavLink to={item.path}>
                     
                       {item.txt}</NavLink></p>)
                }
            </div>
        );
    }
}

export default withRouter(Foot);