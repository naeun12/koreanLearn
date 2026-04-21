<?php

namespace App\Http\Controllers\lesson;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class lessonController extends Controller
{
    public function index()
    {
        return view('users.lesson');
    }
}
