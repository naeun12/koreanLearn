<?php

namespace App\Http\Controllers\partofspeech;

use App\Http\Controllers\Controller;
use App\Models\users\KoreanPartOfSpeechVocabulary;

use Illuminate\Http\Request;

class adjectivesController extends Controller
{
    public function index()
    {
        return view('users.adjectives');
    }
       public function fetchAdjective(Request $request)
{
    $query = KoreanPartOfSpeechVocabulary::where('part_of_speech', 'adjective');

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
        ->where('part_of_speech', 'adjective')
        ->orderBy('category')
        ->pluck('category');
    return response()->json([
        'data' => $categories
    ]);
}
}
