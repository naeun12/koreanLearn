<?php

namespace App\Models\users;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PartOfSpeechGame extends Model
{
     use HasFactory;

    protected $table = 'partofspeechgame';

    protected $fillable = [
        'question',
        'choice_a',
        'choice_b',
        'choice_c',
        'choice_d',
        'correct_answer',
        'question_type',
        'points',
        'difficulty',
    ];
}
