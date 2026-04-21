<?php

namespace App\Http\Controllers\partofspeech;

use App\Http\Controllers\Controller;
use App\Models\users\KoreanPartOfSpeechVocabulary;
use Illuminate\Http\Request;

class pronounController extends Controller
{
    public function index()
    {
        return view('users.pronoun');
    }
     public function fetchPronouns(Request $request)
{
    $query = KoreanPartOfSpeechVocabulary::where('part_of_speech', 'pronoun');

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
        ->where('part_of_speech', 'pronoun')
        ->orderBy('category')
        ->pluck('category');
    return response()->json([
        'data' => $categories
    ]);
}
}
