<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use DB;
use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;
class TaskController extends Controller
{



    protected $user;
 
    public function __construct()
    {
        $this->user = JWTAuth::parseToken()->authenticate();
    }
    /**
     * Display a listing of the resource.
     * 
     * 
     * 
     */
    public function index()
    {
         
        $task_list = Task::with('user')
        ->where('user_id',$this->user->id)
        ->latest()->get();

       return response()->json($task_list);
       
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //Validate Data First
        $request->validate([
            'name'     => 'required',
            'price'     => 'required',
            
        ]);

        //Save Data
        $name=$request->name;
        $price=$request->price;
       
        $task=new Task();
        $task->name=$name;
        $task->price=$price;
        $task->user_id=$this->user->id;

        $task->save();
       
        //Return Json Values
        return response()->json(['message'=>"saved",'task_id'=>$task->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        //
        //return task according to id
      
          $data =DB::table('tasks')->find($id);

        //Return Json Values
          return response()->json($data); 
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //return task according to id
      
            $data =DB::table('tasks')->find($id);

          //Return Json Values
            return response()->json(['data' => $data]);   
         

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        //
        $request->validate([
            'name'     => 'required',
            'price'     => 'required',
            
        ]);
        
        $task=Task::where('id',$request->task_id)->first();

        $task->name=$request->name;
        $task->price=$request->price;

        $task->save();

        return response()->json(['message'=>"updated"]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {

        //Delete Task base on Id
        DB::table('tasks')->where('id',$id)->delete();
        
        
        return response()->json(['message'=>"deleted"]);
    }
    
}
