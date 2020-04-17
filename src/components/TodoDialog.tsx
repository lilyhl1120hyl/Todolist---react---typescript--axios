import * as React from 'react';
import { useActions } from '../actions';  // dispatch提交 action的封装
import * as TodoActions from '../actions/todo'; // 具体的提交action的方法
import {Modal, Input } from "antd";

const { TextArea } = Input;

// 定义一个接口类型,接收父组件的参数和方法
interface Props {
 open:boolean;
 onClose:() => void;
}

export function TodoDialog(props:Props){
 const {open,onClose} = props; // 获取父组件调用时传递的值和方法
 const [newTodoText,setNewTodoText] = React.useState(""); // 初始化数据和方法，初始值为空
 const todoActions = useActions(TodoActions); // 返回的数据类型作为action参数传入，方法的集合

 const handleClose = ()=>{
  todoActions.addTodo({
   key:Math.random()*100,
   id:Math.random(),
   completed:false,
   text:newTodoText
  });
  onClose(); 
  setNewTodoText(""); 
 };
 const handleChange=(e:any)=>{
  console.log(e.target.value,"change");
  setNewTodoText(e.target.value);
 };
 return (
  <div>
  <Modal
    title="Add a new TODO"
    visible={open}
    onOk={handleClose}
    onCancel={handleClose}
  >
    <TextArea rows={2} value={newTodoText} onChange={handleChange}/>
  </Modal>
</div>
 
 )

}







