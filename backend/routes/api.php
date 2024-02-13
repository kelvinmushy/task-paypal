<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

use App\Http\Controllers\Api\TaskController;
use App\Http\Controllers\Api\PaymentHistory;




Route::post('login', [ApiController::class, 'authenticate']);
Route::post('register', [ApiController::class, 'register']);



Route::group(['middleware' => ['jwt.verify']], function() {

    Route::get('logout', [ApiController::class, 'logout']);
    Route::get('get_user', [ApiController::class, 'get_user']);


    //LogoutAuth
    Route::post('logout', [AuthController::class,'logout']);
  
    //get task list api
    
   Route::get('/task/list', [TaskController::class,'index']);

   //add new task api
   Route::post('/task/add', [TaskController::class,'store']);

   //edit task api
   Route::get('/task/edit/{id}', [TaskController::class,'edit']);
   //edit task api
   Route::get('/task/show/{id}', [TaskController::class,'edit']);

   //update task api
   Route::post('/task/update', [TaskController::class,'update']);

   //delete task api
   Route::post('/task/delete/{id}', [TaskController::class,'destroy']);

   //Update Payment Status
   Route::get('task/update/status',[PaymentHistory::class,'updatePaymentStatus']);

   //retrive Paymenthistory
   Route::get('task/payment/history',[PaymentHistory::class,'paymentHistory']);

   //Retrive Latest Order
   Route::get('task/order',[TaskController::class,'latestOrder']);
   

});