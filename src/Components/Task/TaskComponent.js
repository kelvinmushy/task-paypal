import { useState,useEffect }  from "react";
import http from "../Https/http";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { CardBody, Col ,Button,Row, CardHeader} from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import NavComponent from "../Layouts/NavComponent";

const TaskComponent = () => {


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
    
    <Row>
    <Col md={2}>
         
    </Col>
    <Col md={8}>
    <Card>
     <CardHeader>

                 <Row> 
                 <Col md={6}>
                 <h5 >Task List</h5>

                </Col>
                <Col md={6}>
                 <Button className='BtnNewTask'>
                      <Link to="/new/task" className='NewTask'>New Task</Link>
                 

                  </Button>

                 </Col>
                  </Row>
                 </CardHeader>
          <CardBody>
     <Table responsive>
     <thead>
      <tr>
     <th>#</th>
    
       <th >Task Name</th>
       <th >Price</th>
       <th >Status</th>
       <th >Created On</th>
   </tr>
    </thead>
     <tbody>
  {dataTask.length>0?

  dataTask.map((task,index)=>
  <tr key={task.id}>
   <td>{index+1}</td>
  <td>{task.name}</td>
  <td>{task.price}</td>
  {task.status==1?<td className="text-success"><b>Completed</b></td>:
   <td className="text-danger"><b>InComplete</b></td>
  }
 
  <td>June,2024</td>

</tr>
)
  : <tr><center><span className="text-danger"> No Data</span></center></tr>
     
 }
 </tbody>
</Table>
</CardBody>
</Card> 
     </Col>

   <Col md={2}>
         
    </Col>
                
           
 </Row>
   </div>
   </div>
  )
}

export default TaskComponent