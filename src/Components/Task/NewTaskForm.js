import React,{ useState}  from "react";
import  { Form ,CardBody, Col ,Button,Row, CardHeader, Card} from 'react-bootstrap';
import http from "../Https/http";
import {useNavigate} from "react-router-dom";

const NewTaskForm = () => {



    const [inputs,setInputs]=useState({});
    const [validated, setValidated] = useState(false);

     const vavigate=useNavigate();
  
    const handleChange=(event)=>{
  
        const name=event.target.name;
        const  value=event.target.value;
         setInputs(values=>({...values,[name]:value}))
  
        }
  
    //  const submitForm=(e)=>{
    //     e.persist();
    //     http.post('/add',inputs).then((res)=>{
    //         const id=res.data.task_id;
    //          vavigate('/paypal/payment/method/'+id);
    //     })
    //   }
      const submitForm = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
           event.stopPropagation();
           }
        
            setValidated(true);
            
            if(validated==true){
                http.post('/add',inputs).then((res)=>{
                const id=res.data.task_id;
                 vavigate('/paypal/payment/method/'+id);
            })
            }
                
      };


    return (

        <div>
             
             {/* <NavComponent/> */}
    
          <div>  
          <Row>
        <Col md={3}>
             
        </Col>
            <Col md={6}>
              <Card className='TaskContent'>
                <CardHeader><h5>Task Form</h5></CardHeader>
                <CardBody>
                <Form  noValidate validated={validated} >
              <Form.Group className="mb-3" >
            <Form.Label>Task Name</Form.Label>
            <Form.Control type="text"  name="name"  equired value={inputs.name || ''}  onChange={handleChange} required/>
            <Form.Control.Feedback type="invalid">
            Please provide a valid name
          </Form.Control.Feedback>
             </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" name="price"  min="0" required value={inputs.price || ''}  onChange={handleChange} />
            <Form.Control.Feedback type="invalid">
            Please provide a valid price.
          </Form.Control.Feedback>
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

export default NewTaskForm