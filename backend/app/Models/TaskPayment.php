<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskPayment extends Model
{
    use HasFactory;
    
   protected $fillable=['task_id'];

    public function task()
    {
        return $this->belongsTo(Task::class);
    }

}
