import React, { Component } from 'react';
import {withRouter}from 'react-router-dom'
import header from './header.module.css'
class Header extends Component {
    static defaultProps={
        title:'',
        back:false,
        right:''
    }
    render() {
        let {title,back,right}=this.props
        return (
            <div className={`${header['header']}`}>
               {back?<span onClick={this.hanldBack.bind(this)}>&lt;</span>:<span></span>}
                <h4>{title}</h4>
                <span>{right}</span>
            </div>
        );
    }
    hanldBack(){
        this.props.history.go(-1)
    }
}

export default withRouter(Header);