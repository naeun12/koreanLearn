<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Users\HomepageController;
use App\Http\Controllers\Users\koreanlettersController;
use App\Http\Controllers\Users\vocabularyController;
use App\Http\Controllers\partofspeech\nounController;
use App\Http\Controllers\partofspeech\verbController;
use App\Http\Controllers\partofspeech\adjectivesController;
use App\Http\Controllers\partofspeech\adverbController;
use App\Http\Controllers\partofspeech\pronounController;
use App\Http\Controllers\partofspeech\particlesController;
use App\Http\Controllers\partofspeech\quizController;
use App\Http\Controllers\lesson\lessonController;
Route::get('/', [HomepageController::class, 'homepage'])->name('homepage');
Route::get('/korean-letters', [KoreanLettersController::class, 'koreanLetters'])
    ->name('koreanletters');
Route::get('/vocabulary', [VocabularyController::class, 'vocabulary'])
    ->name('vocabulary');
Route::get('/fetch-vocabulary', [VocabularyController::class, 'fetchVocabulary'])
    ->name('fetchVocabulary');
Route::get('/categories', [VocabularyController::class, 'getCategories']);
Route::get('/QuizVocabularyFetch', [VocabularyController::class,'QuizVocabularyFetch']);
Route::get('/nouns', [nounController::class, 'index'])->name('nouns');
Route::get('/fetch-nouns', [nounController::class, 'fetchNouns'])->name('fetchNouns');
Route::get('/noun-categories', [nounController::class, 'getCategories'])->name('nounCategories');
Route::get('/verbs', [verbController::class, 'index'])->name('verbs');
Route::get('/fetch-verbs', [verbController::class, 'fetchVerb'])->name('fetchVerbs');
Route::get('/verb-categories', [verbController::class, 'getCategories'])->name('verbCategories');
Route::get('/adjectives', [adjectivesController::class, 'index'])->name('adjectives');
Route::get('/fetch-adjectives', [adjectivesController::class, 'fetchAdjective'])->name('fetchAdjectives');
Route::get('/adjective-categories', [adjectivesController::class, 'getCategories'])->name('adjectiveCategories');
Route::get('/adverbs', [adverbController::class, 'index'])->name('adverbs');
Route::get('/fetch-adverbs', [adverbController::class, 'fetchAdverbs'])->name('fetchAdverbs');
Route::get('/adverb-categories', [adverbController::class, 'getCategories'])->name('adverbCategories');
Route::get('/pronouns', [pronounController::class, 'index'])->name('pronouns');
Route::get('/fetch-pronouns', [pronounController::class, 'fetchPronouns'])->name('fetchPronouns');
Route::get('/pronoun-categories', [pronounController::class, 'getCategories'])->name('pronounCategories');
Route::get('/particles', [particlesController::class, 'index'])->name('particles');
Route::get('/fetch-particles', [particlesController::class, 'fetchParticles'])->name('fetchParticles');
Route::get('/particle-type', [particlesController::class, 'getTypes'])->name('gettype');
Route::get('/quiz', [quizController::class, 'index'])->name('quiz');
Route::get('/fetch-quiz-question', [quizController::class, 'getRandomQuestion'])->name('fetchQuizQuestion');
Route::get('/lesson', [lessonController::class, 'index'])->name('lesson');