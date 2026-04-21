<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class koreanlettersController extends Controller
{
    public function koreanLetters(){
        return view('users.koreanletters');
    }
}
