<?php

namespace App\Http\Controllers\partofspeech;

use App\Http\Controllers\Controller;
use App\Models\users\KoreanPartOfSpeechVocabulary;

use Illuminate\Http\Request;

class verbController extends Controller
{
    public function index()
    {
        return view('users.verb');
    }
     public function fetchVerb(Request $request)
{
    $query = KoreanPartOfSpeechVocabulary::where('part_of_speech', 'verb');
    
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
        ->where('part_of_speech', 'verb')
        ->orderBy('category')
        ->pluck('category');
    return response()->json([
        'data' => $categories
    ]);
}
}
