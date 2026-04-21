<?php

namespace App\Models\users;

use Illuminate\Database\Eloquent\Model;

class KoreanWordsModel extends Model
{
    protected $table = 'korean_words';

    protected $fillable = [
        'kr',
        'romanization',
        'en',
        'level',
        'part_of_speech',
        'category',
        'image',
        'audio',
        'usage',
        'example',
        'example_en'
    ];
}