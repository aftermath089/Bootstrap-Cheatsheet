<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class modelPost extends Model
{
    //Table Name
    protected $table ='model_posts';

    //Primary Key
    public $primaryKey = 'id';

    //Timestamps
    public $timestamps = true;

    public function user(){
        return $this->belongsTo('App\User');
    }
}
