// 引入类型
import { DemoAction, DemoActions, DemoData } from "../types";

// 展示获取的数据
export function showDemo(demo:DemoData):DemoAction{
 return {
  type:DemoActions.DATA_SHOW,
  payload:demo,
 }
}

export function deleteDemo(){
 return {
  type:DemoActions.DATA_CLEAR,
  // payload:'',
 }
}

