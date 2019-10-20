import React from 'react'
import BigRouter from '@/router/index'
import './App.css'
import {Provider} from 'react-redux'
import store from './store/index'
function App(){
    return <Provider store={store}  className='App'>
            <BigRouter/>
            </Provider>
}
export default App