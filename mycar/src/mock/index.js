import Mock from 'mockjs'
import list from './list.json'
import classify from './classify.json'

Mock.mock('api/list', list)
Mock.mock('api/classify', classify)