import React, { Component } from 'react';
import Header from '@/components/header'
import my from './my.module.css'
import {connect} from 'react-redux'
import Item from '@/components/item'
class My extends Component {
    state={
        mylist:['常吃','不吃','偶尔'],
        ind:0,
        newlist:[]
    }
    render() {
        console.log(this.props.commit)
        let {mylist,ind,newlist}=this.state
        return (
            <div className={`${my['my']}`}>
               <Header title={"我的"}/>
               <div className={`${my['my_main']}`}>
                    <ol className={`${my['ol']}`}>
                       
                       {
                           mylist&&mylist.map((item,index)=><li key={index} onClick={this.hanldclick.bind(this,index)} className={ind==index?`${my['active']}`:""}>{item}</li>)
                       }
                    </ol>
                    <div>
                        {
                          newlist&&newlist.map((item,index)=><Item key={index} val={item}></Item>)
                        }
                    </div>
               </div>
            </div>
        );
    }
    hanldclick(index){
        let {ind,newlist}=this.state
        ind=index
       
        //筛选出commit中的常吃 不吃 和偶尔
        newlist=this.props.commit&&this.props.commit.filter(item=>item.flag==ind)
        this.setState({ind,newlist})
        console.log(newlist)
       

    }
}
let mapStateToProps=(state)=>{
    let {commit}=state
    return{
        commit
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {

    }
}
My=connect(mapStateToProps,mapDispatchToProps)(My)
export default My;