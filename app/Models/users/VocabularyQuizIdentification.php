<?php

namespace App\Models\users;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VocabularyQuizIdentification extends Model
{
        use HasFactory;
    protected $table = 'quiz_identifications';
    protected $fillable = [
        'question',
        'answer',
        'romanization',
        'english',
        'level',
        'category',
        'difficulty',
    ];
}
