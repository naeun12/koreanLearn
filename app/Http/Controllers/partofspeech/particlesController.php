<?php

namespace App\Http\Controllers\partofspeech;

use App\Http\Controllers\Controller;
use App\Models\KoreanParticle;
use Illuminate\Http\Request;

class ParticlesController extends Controller
{
    public function index()
    {
        return view('users.particle');
    }

public function fetchParticles(Request $request)
{
    $query = KoreanParticle::query();

    if ($request->type && $request->type !== 'All') {
        $query->where('type', $request->type);
    }

    $particles = $query->latest()->paginate(20);

    return response()->json($particles);
}

    public function getTypes()
    {
        $types = KoreanParticle::query()
            ->whereNotNull('type')
            ->distinct()
            ->orderBy('type')
            ->pluck('type');

        return response()->json($types); // ✅ simpler response
    }
}