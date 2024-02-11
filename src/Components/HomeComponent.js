import { useState,useEffect }  from "react";
import http from "./Https/http";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { CardBody, Col ,Button,Row, CardHeader, Container} from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import NavComponent from "./Layouts/NavComponent";

const HomeComponent = () => {


  const [dataTask,setTasks]=useState([]);
  useEffect(()=>{
    fetchAllTask();
   },[]);

   const fetchAllTask=()=>{
     http.get('/list').then(res=>{
      setTasks(res.data);
      console.log(res.data);

     })
   }

  return (
    <div>
   <NavComponent/>
   
    <div className='TaskContent'>
    
    <div className="container-fluid">
    <Row className="RowTask">
    {dataTask.length>0?

dataTask.map((task,index)=>
<Col md={4} className=" ColTask">
    <Card className="HomeTask shadow-lg p-3 mb-5 bg-white">
      <CardBody >
      <h5 className="card-title">{task.name}</h5>
      <p className="card-text"><span>Price</span> ${task.price} 

       {task.status==1?<span className="text-success">  <b>Completed</b></span>:
       <span className="text-danger"> <b>InCompleted</b></span>
        }
      
      </p>
      </CardBody>
     </Card>  
    </Col>
  ):<Row> <Col md={12}>
    <Card className="HomeTask">
      <CardBody >
      <h5 className="card-title text-danger">No Assigned Tasks</h5>
      </CardBody>
     </Card> 
    </Col></Row>}
              
 </Row>
   </div>
   </div>
   </div>
  )
}

export default HomeComponent