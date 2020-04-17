import * as React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../actions";
import * as TodoActions from "../actions/todo";
import { Todo } from "../types";
import { RootState } from "../reducers"; // 

import { Table } from 'antd';
const { Column } = Table;

// useSelector: 从redux的store对象中提取数据(state)。
// 选择器函数应该是纯函数，因为它可能在任意时间点多次执行

export function TodoList(){
 const todoList = useSelector((state:RootState)=>state.todoList);
 const demoList = useSelector((state:RootState)=>state.demoList); 
 const demoListJson = JSON.stringify(demoList); // 转化为json字符串才能渲染
 const todoActions = useActions(TodoActions);
 console.log(demoList,typeof(demoList),"demoList")
 
 const onRowClick = (todo: Todo)=>{
   console.log(todo,'todo')
  if(todo.completed){
    todoActions.uncompleteTodo(todo.id);
  }else{
    todoActions.completeTodo(todo.id);
  }
 }

 return(
  <div >
   <Table dataSource={todoList}>
    <Column title="Id" dataIndex="id" key="id" />
    <Column title="Text" dataIndex="text" key="text" />
    <Column
      title="Action"
      key="action"
      render={(text, record:any) => (
        <span>
           {/* eslint-disable-next-line  */}
          <a href="" style={{ marginRight: 16 }}>Invite {record.id}</a>
           {/* eslint-disable-next-line  */}
          <a href="" onClick={() =>todoActions.deleteTodo(record.id)} style={{ marginRight: 16 }}>Delete</a> 
           {/* eslint-disable-next-line  */}
          <a href="" onClick={event => onRowClick(record)} >Edit</a> 
        </span>
      )}
    />
  </Table>
  <div>
      获取数据：<span style={{color:"red"}}> {demoListJson}  </span>
  </div>
  
  {/* 数组写法 */}
   {
    demoList.length>0 ? (<div>
      数据：<span style={{color:"red"}}> {demoList[0].name} -- {demoList[0].color} </span>
      </div>)  : ""
    }

  </div>
  
 )

}