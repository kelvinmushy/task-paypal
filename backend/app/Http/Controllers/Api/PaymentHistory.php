<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use App\Models\TaskPayment;
use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use DB;
class PaymentHistory extends Controller
{

    protected $user;
 
    public function __construct()
    {
        $this->user = JWTAuth::parseToken()->authenticate();
    }
   
    public function updatePaymentStatus(){

        
        $latest= DB::table('tasks')->where('status',0)->latest()->first();
        $update= DB::table('tasks')->where('id',$latest->id)->update(['status'=>1]);

       
     //Update Payment table history
       
         DB::table('task_payments')->insert(['task_id'=>$latest->id]);

        if($update){
            return response()->json(['message'=>"updated"]);
          }

    }

    public function paymentHistory(){

        $task_list =Task::with('payment')
        ->where('user_id',$this->user->id)
        ->latest()->get();

        return response()->json($task_list);
        
    }

    
}
