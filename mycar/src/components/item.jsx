import React, { Component } from 'react';
import item from './item.module.css'
class Item extends Component {
    state={
        listc:['常吃',"不吃","偶尔"],
        txt:''
    }
    render() {
        let {val,hanldCheckFn}=this.props
      console.log(hanldCheckFn)
        let {listc,txt}=this.state
        return (
            <>
              <dl className={`${item['dl']}`}>
                  <dt>
                      <img src="" alt=""/>
                  </dt>
                  <dd>
                      <p>{val.name}</p>
                      <p className={`${item['p_l']}`}>
                          <span>重量:{val.weight}/kg</span>
                          <span>{txt}</span>
                          <img src={require('../images/xx.jpg')} alt="" onClick={this.hanldC.bind(this,val.id)}/>
                        
                      </p>
                  </dd>
                  {
                      val.check?  <ul className={`${item['ul']}`}>
                      {
                         listc&&listc.map((item1,index1)=><li key={index1} onClick={this.hanldOnclick.bind(this,index1,val.id,item1)}>{item1}</li>) 
                      }
                       </ul>:null
                       
                  }
                 
              </dl>  
        
            </>
        );
    }
    //点击星星时将该数库的id传回去 子传父用回调函数 
    hanldC(id){
       
        //容错处理
        this.props.hanldCheckFn&&this.props.hanldCheckFn(id)
    }
    //绑定点击添加常吃 偶尔函数 子传父
    hanldOnclick(cur,id,el){
        let {txt}=this.state
     txt=el
     this.setState({txt})
        this.props.hanldState(cur,id)
    }
}

export default Item;