import axios from "axios";


const token =localStorage.getItem('token');
export default axios.create({
     
 
    baseURL:"http://127.0.0.1:8000/api/task",
    headers:{
        "Content-type":"application/json",
        "Content-type" : "application/json",
       // "Authorization" : `BearereyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzA3NzQ5NjAzLCJleHAiOjE3MDc3NTMyMDQsIm5iZiI6MTcwNzc0OTYwNCwianRpIjoiTEF3a0JNR3RxZEczN1lmeCIsInN1YiI6IjMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.ve0EXmpsNNObsfC7mFHuqXLPj_z099QghFqe4GPp52w`,
          "Authorization" : `Bearer ${token}`

    }

})



