import React, { Component } from 'react';
import Header from '@/components/header'
import '@/mock/index'
import axios from 'axios'
import Item from '../../components/item'
import {connect} from 'react-redux'
import {ADD_LIST} from '../../store/type'
class Classify extends Component {
    state={
        list:[],
        newlist:[]
    }
    render() {
 console.log(this.props.commit)
        let {list,newlist}=this.state
      
        return (
            <div>
               <Header back={true} title={'分类查询'}/>
              <div>
                 {
                     newlist&&newlist.map((item,index)=>
                     <Item key={index} val={item} hanldCheckFn={this.hanldCheckFn.bind(this)} 
                      hanldState={this.hanldState.bind(this)} />
                     )
                 }
              </div>
            </div>
        );
    }
    hanldCheckFn(id){
     let {list}=this.state
     //查找出点击项
     let ind=list.findIndex(item=>item.id==id)
    list[ind].check=!list[ind].check
    //更新list
     this.setState({list})

    }
    //添加常吃
    hanldState(cur,id){
        let {list,newlist}=this.state
         console.log(cur,id)
              let ind=list.findIndex(item=>item.id==id)
              //更改数组中的flag值变成点击传来的下标
              list[ind].flag=cur
              list[ind].check=false
              this.setState({list})
              //调用redux函数方法
              this.props.adddata(list[ind])
    }
  async  componentDidMount(){
      let {list,newlist}=this.state
        //接收路由动态传参时要在this.props.match.params.起的名
      let type=this.props.match.params.type
        let res=await axios.get('api/classify')//请求列表数据
        list=res.data
       //通过filter筛选出店里哪类的商品列表并进行赋值  
        newlist=list.filter(item=>item.type==type)
        this.setState({list,newlist})
    }
}
let mapStateToProps=(state)=>{
    let {commit}=state
    return {
        commit
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
       adddata(obj){
          dispatch({type:ADD_LIST,obj})
       }
    }
}
Classify=connect(mapStateToProps,mapDispatchToProps)(Classify)
export default Classify;