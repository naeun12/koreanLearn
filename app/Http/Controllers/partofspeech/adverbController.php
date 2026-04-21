<?php

namespace App\Http\Controllers\partofspeech;

use App\Http\Controllers\Controller;
use App\Models\users\KoreanPartOfSpeechVocabulary;

use Illuminate\Http\Request;

class adverbController extends Controller
{
    public function index()
    {
        return view('users.adverb');
    }
     public function fetchAdverbs(Request $request)
{
    $query = KoreanPartOfSpeechVocabulary::where('part_of_speech', 'adverb');

    // Filter by category (if selected)
    if ($request->category) {
        $query->where('category', $request->category);
    }

    // Pagination
    $nouns = $query->paginate(20);

    return response()->json($nouns);
}
  public function getCategories()
{
    $categories = KoreanPartOfSpeechVocabulary::query()
        ->whereNotNull('category')
        ->distinct()
        ->where('part_of_speech', 'adverb')
        ->orderBy('category')
        ->pluck('category');
    return response()->json([
        'data' => $categories
    ]);
}
}
