import React from 'react';
import { Button,Card } from 'antd';
// import { RouteComponentProps } from "react-router-dom";
import {Link} from 'react-router-dom'; 
import { TodoDialog, TodoList } from "../../components";
import './index.less'


// hook 在class中不起作用 ,组件必须是纯函数，state hook的主要作用就是获取需要的 state 和 更新state的方法

export function Home(){
  const [open, setOpen] = React.useState(false); 

 //  关闭弹框
	const handleClose = () => {
		setOpen(false);
	};

  // 打开弹框
	const handleAddTodo = () => {
		setOpen(true);
  };
  
  return (
      <div>
        <div className="btn-header">
        <Button className="btn" type="primary" color="secondary">
          <a href='#/detail'> detail</a>
        </Button>
        <Button className="btn" type="primary" color="secondary">
          <Link to="/example"> example </Link>
        </Button>
        </div>
        <div className="site-card">
          <Card title="Add Todo" bordered={false} >
            <Button type="primary" color="secondary" onClick={handleAddTodo}>
                Add Todo
              </Button>
              <TodoList/>
              <TodoDialog open={open} onClose={handleClose} />
          </Card>
        </div>
        
      </div>
  )
    
}