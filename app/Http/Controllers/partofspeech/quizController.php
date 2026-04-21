<?php

namespace App\Http\Controllers\partofspeech;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\users\PartOfSpeechGame;

class quizController extends Controller
{
    public function index()
    {
        return view('users.quiz');
    }
    // app/Http/Controllers/PartOfSpeechController.php
public function getRandomQuestion()
{
    $question = PartOfSpeechGame::inRandomOrder()->first();

    if ($question) {
        return response()->json([
            'success' => true,
            'question' => $question
        ]);
    }

    return response()->json([
        'success' => false,
        'message' => 'No questions available'
    ], 404);
}
}
