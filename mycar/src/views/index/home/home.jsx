import React, { Component } from 'react';
import Header from '@/components/header'
import home from './home.module.css'
import Swiper from 'swiper'
import axios from 'axios'
import '../../../mock/index'
import 'swiper/css/swiper.min.css'
class Home extends Component {
    state={
        list:[]
    }
    render() {
        let {list}=this.state
        console.log(list)
        return (
            <div className={`${home['home']}`}>
               <Header title={'首页'}/>
               <div className={`${home['home_main']}`}>
               <div className={`swiper-container ${home['swiper']}`}>
                   <div className='swiper-wrapper'>
                       <div className='swiper-slide'>1</div>
                       <div className='swiper-slide'>2</div>
                       <div className='swiper-slide'>3</div>
                   </div>
               </div>
               <div className={`${home['content']}`}>
               {
                       list&&list.map((item,index)=><dl key={index} onClick={this.hanldclass.bind(this,item.type)}>
                           <dt>
                               <img src={require('@/images/'+item.url)} alt=""/>
                           </dt>
                           <dd>{item.name}</dd>
                       </dl>)
                   }
               </div>
                  
               </div>
            </div>
        );
    }
    hanldclass(type){
        //动态路由传参路径/+传的值   在路由表中要在对应的路径下/：起的名字  获取值的话要在this.props.math.params.
        this.props.history.push('/classify/'+type)
    }
   async componentDidMount(){
    let {list}=this.state
    try{
      
        let res=await axios.get('api/list')
      
        this.setState({list: res.data})
    }catch(e){
    
    }
    new Swiper('.swiper-container',{
        autoplay:true
    })
    }
}

export default Home;