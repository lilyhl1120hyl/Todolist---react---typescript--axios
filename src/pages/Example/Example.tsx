import React from 'react';
import {  Button } from 'antd'; 
import './index.less';
import {Link} from 'react-router-dom'; 

// 这是库类封装的axios接口
import { getDemoList, getList } from '../../api'

const getData = ()=> {
   const params='123';
   getList(params).then(res=>{
    console.log(res.data,"reaData")
  })
};


const postData = ()=> {
  const params={name:'1223' };
  getDemoList(params).then(res=>{
   console.log(res.data,"reaData")
  })  
};

export default class Example extends React.Component {
    render() {
        return (
            <div className="root">
                <div>
                  <Button type="primary"> 
                     <Link to="/detail"> detail </Link>
                  </Button>
                </div>
                 <Button onClick={getData}> axios-get点击 </Button>
                 <Button onClick={postData}> axios-post点击 </Button> 
         </div>  
        )
    }
}