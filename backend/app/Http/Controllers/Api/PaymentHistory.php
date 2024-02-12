<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use App\Models\TaskPayment;
use Illuminate\Http\Request;
use DB;
class PaymentHistory extends Controller
{
   
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

        $task_list = Task::with('user')
        ->latest()->get();

        return response()->json($task_list);
        
    }

    
}
