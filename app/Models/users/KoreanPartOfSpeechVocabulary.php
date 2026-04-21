<?php

namespace App\Models\users;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class KoreanPartOfSpeechVocabulary extends Model
{
     use HasFactory;

    protected $table = 'korean_partofspeech_volcabulary';

    protected $fillable = [
        'korean',
        'romanization',
        'english',
        'image',
        'audio',
        'category',
        'level',
        'difficulty',
    ];
}
