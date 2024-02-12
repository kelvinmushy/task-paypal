import { useState,useEffect }  from "react";
import http from "../Https/http";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import {Form,InputGroup, CardBody, Col ,Button,Row, CardHeader} from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

// import NavComponent from "../Layouts/NavComponent";


const TaskComponent = () => {


  const [dataTask,setTasks]=useState([]);
  const [search, setSearch] = useState('');
  useEffect(()=>{
    fetchAllTask();
   },[]);

   const fetchAllTask=()=>{
     http.get('/list').then(res=>{
      setTasks(res.data);
      console.log(res.data);
     }).catch((error) => console.log(error));
   }

  return (
    <div>
        {/* <NavComponent/> */}
   
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
          <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search Task'
            />
          </InputGroup>
        </Form>
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
            {dataTask
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                 <td>{index+1}</td>
                 <td>{item.name}</td>
                <td>{item.price}</td>
                 {item.status==1?<td className="text-success"><b>Completed</b></td>:
                 <td className="text-danger"><b>InComplete</b></td>
                   }
 
                  <td>Feb,2024</td>
                </tr>
              ))}
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