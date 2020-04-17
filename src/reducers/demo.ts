import {DemoAction,DemoActions,DemoData} from "../types";
import createReducer from './createReducer';

export const demoList = createReducer<DemoData>(
 { name:"null", color:"null" },
 {
 [DemoActions.DATA_SHOW](state:DemoData,action:DemoAction){
  return Object.assign({}, state,action.payload)
 },
  //return {state, action.payload} ;
  // return [...state, action.payload ]; //会不断添加数据

 [DemoActions.DATA_CLEAR](state:DemoData,action:DemoAction){
  return {};
 },
});