
import NavComponent from '../Layouts/NavComponent';
import { useState,useEffect }  from "react";
import  { Form ,CardBody, Col ,Button,Row, CardHeader, Card} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import http from "../Https/http";
const CreateTaskForm = () => {

  const [inputs,setInputs]=useState({});

  const vavigate=useNavigate();

  const handleChange=(event)=>{

    const name=event.target.name;
    const  value=event.target.value;

     setInputs(values=>({...values,[name]:value}))

     }

   const submitForm=()=>{
      http.post('/add',inputs).then((res)=>{

        const id=res.data.task_id;
 
          console.log(id);
          
          vavigate('/paypal/payment/method/' +id);


      })
    }

  return (

    <div>
         
         <NavComponent/>

      <div>  
      <Row>
    <Col md={3}>
         
    </Col>
        <Col md={6}>
          <Card className='TaskContent'>
            <CardHeader><h5>Task Form</h5></CardHeader>
            <CardBody>
            <Form>
          <Form.Group className="mb-3" >
        <Form.Label>Task Name</Form.Label>
        <Form.Control type="text"  name="name"  value={inputs.name || ''}  onChange={handleChange}/>
         </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" name="price"  value={inputs.price || ''}  onChange={handleChange}/>
        </Form.Group>
        <Button variant="primary" 
        onClick={submitForm}>
        Submit
        </Button>
            </Form>
            </CardBody>
          </Card>
        
         </Col>
         <Col md={3}>
         
         </Col>
    </Row>
     
 </div>

    </div>
  )
}

export default CreateTaskForm;