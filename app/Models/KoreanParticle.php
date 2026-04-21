<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KoreanParticle extends Model
{
    use HasFactory;

    protected $table = 'korean_particles';

    protected $fillable = [
        'particle',
        'romanization',
        'type',
        'usage',
        'example',
        'translation'
    ];
}