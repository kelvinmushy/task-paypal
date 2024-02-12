import { useState,useEffect }  from "react";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { CardBody, Col ,Row, CardHeader} from 'react-bootstrap';
import http from "../Https/http";

const PayHistory = () => {
  const [dataHistory,setHistory]=useState([]);
  useEffect(()=>{
    paymentHistory();
   },[]);

   const paymentHistory=()=>{
     http.get('/payment/history').then(res=>{
      setHistory(res.data);
      console.log(res.data);

     })
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
                     <h3 className="text-info">Payment History</h3>
                     </CardHeader>
              <CardBody>
         <Table responsive>
         <thead>
          <tr>
         <th>#</th>
        
           <th >Task Name</th>
           <th >Amount Paid</th>
           <th >Created On</th>
       </tr>
        </thead>
         <tbody>
      {dataHistory.length>0?
    
      dataHistory.map((task,index)=>
      <tr key={task.id}>
       <td>{index+1}</td>
      <td>{task.name}</td>
      <td>{task.price}</td>
     
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

export default PayHistory