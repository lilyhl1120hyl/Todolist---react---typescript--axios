import React from 'react';
import {  Button,Row,Col, Card } from 'antd'; 
import './index.less';
// api接口
import { GetData ,PostData} from '../../api/api';
import { useActions } from '../../actions';
import * as DemoActions from '../../actions/demo'; // 具体的提交action的方法
import { RootState } from "../../reducers"; 
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'; 


export function Detail(){

const [newDemoText,setNewDemoText] = React.useState(""); // 初始化数据和方法，初始值为空
const demoActions = useActions(DemoActions);

 const getData = (param:any)=>{
      param="123";
    GetData(param).then(res=>{
    console.log(res,'demoRes')

      setNewDemoText(res.data); 

       demoActions.showDemo({
           key: Math.random(),
           name: res.data.name,
           color: res.data.color,
           data: newDemoText
          })
        })
    setNewDemoText('')
 }

 const demoList = useSelector((state:RootState)=>state.demoList);
 const demoListJson = JSON.stringify(demoList);
 const  demoResult = JSON.parse(demoListJson);// 转成JSON对象
 console.log(demoList,'detail-demoList')

 const postData = (param:any)=>{
    param= {
        "enterpriseId":"3771105",
        "departmentIds":["0","34","12"],
        "name":"test410",
        "mobile":"18925031122",
        "contactFlag":"1",
        "packageNo":"000111222",
		"packageName":"v网套餐",
		"effectiveDate":"2020-04-10 15:00:00",
		"expireDate":"2020-04-15 15:00:00",
		"relatedContacts":[{"contactId":"28315603","alias":"qita1"},{"contactId":"28315502","alias":"qita2"}]	
    };

    PostData(param).then(res=>{
        console.log(res)
    })
 }

 return(
    <div className="root">
         <Button className="btn" type="primary" color="secondary">
          <a href='#/'> 首页 </a>
        </Button>
        <Button className="btn" type="primary" color="secondary">
          <Link to="/example"> example </Link>
        </Button>
         <div className="site-card-wrapper">
        <Row gutter={16}>
            <Col span={8}>
                <Card title="Axios-Simple" bordered={false}>
                    <Button className="card-btn" onClick={getData}> axios-get点击 </Button>
                    <Button onClick={postData}> axios-post点击 </Button>
                </Card>
            </Col>
            <Col span={16}>
                <Card title="Axios-Data" bordered={false}>
                    <div className="card-data">
                        <span className="card-span">Json-Data: </span>{demoListJson} 
                    </div>
                    {/*  报错
                    <div>
                    Object: {demoList} 
                    </div> */}
                    <div className="card-data">
                      <span className="card-span">Object-Data: </span> {demoResult.name}
                    </div>
                </Card>
            </Col>
        </Row>
        
  </div>
                  
        </div> 
 )

}
