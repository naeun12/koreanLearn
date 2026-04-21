<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('quiz_identifications', function (Blueprint $table) {
            $table->id();

            // Main quiz content
            $table->text('question');
            $table->string('answer');

            // Learning support
            $table->string('romanization')->nullable();
            $table->string('english')->nullable();

            // Categorization
            $table->string('level')->nullable();      // Formal, Polite, Casual
            $table->string('category')->nullable();   // Greeting, Apology, Food, etc.
            $table->string('difficulty')->nullable(); // Easy, Medium, Hard

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('quiz_identifications');
    }
};