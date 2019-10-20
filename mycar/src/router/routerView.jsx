import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
class RouterView extends React.Component{

    render(){
       let {routes}=this.props
       //筛选出route
       let routeArr=routes&&routes.filter((item)=>!item.to)
       //筛选出redirect
       let redirectArr=routes&&routes.filter(item=>item.to).map((item1,index)=><Redirect key={index} from={item1.form} to={item1.to}></Redirect>)
        return <Switch>
                 {
                     routeArr&&routeArr.map((item,index)=><Route key={index} path={item.path} render={(props)=>{
                          return <item.component {...props} routes={item.routes}></item.component>
                     }}></Route>).concat(redirectArr)
                 }

              </Switch>
}
}
export default RouterView