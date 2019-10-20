import React, { Component } from 'react';
import RouterView from '@/router/routerView'
import Foot from '@/components/foot'
import './index.css'
class Index extends Component {
    render() {
        console.log(this.props)
        return (
            <>
             <div className='main'>
             <RouterView routes={this.props.routes}/>
             </div>
               
             <Foot/>
            </>
        );
    }
}

export default Index;