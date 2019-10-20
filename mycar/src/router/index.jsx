import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import RouterView from './routerView'
import routes from './routerConfig'
class BigRouter extends React.Component{
    render(){
        return <BrowserRouter>
        
                 <RouterView routes={routes}/>
               </BrowserRouter>
    }
}
export default BigRouter