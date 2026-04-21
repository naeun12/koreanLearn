<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\users\KoreanWordsModel;
use App\Models\users\VocabularyQuizIdentification;

use Illuminate\Http\Request;

class volcabularyController extends Controller
{
    public function volcabulary(){
        return view('users.volcabulary');
    }
 public function fetchVolcabulary(Request $request)
{
    $tone = strtolower($request->tone ?? 'all');
    $category = $request->category ?? 'all';

    $query = KoreanWordsModel::query();

    if ($tone !== 'all') {
        $query->where('level', ucfirst($tone));
    }

    if ($category !== 'all') {
        $query->where('category', $category);
    }

    $vocabulary = $query->latest()->paginate(12);

    return response()->json([
        'message' => 'Vocabulary loaded successfully',
        'data' => $vocabulary
    ]);
}
public function getCategories()
{
    return KoreanWordsModel::select('category')
        ->distinct()
        ->pluck('category');
}
   public function QuizVocabularyFetch()
{
    $quizzes = VocabularyQuizIdentification::inRandomOrder()
        ->limit(10)
        ->get();
    return response()->json([
        'status' => 200,
        'message' => 'Random quiz vocabulary fetched successfully',
        'data' => $quizzes
    ]);
}
    
    
}
