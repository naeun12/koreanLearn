<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('partofspeechgame', function (Blueprint $table) {
            $table->id();

            // Store vocabulary info directly (no foreign key)
            $table->string('korean');
            $table->string('romanization')->nullable();
            $table->string('english');

            // Question details
            $table->string('question_type')->default('multiple_choice');
            $table->text('question');

            // Choices
            $table->string('choice_a')->nullable();
            $table->string('choice_b')->nullable();
            $table->string('choice_c')->nullable();
            $table->string('choice_d')->nullable();

            // Correct answer
            $table->string('correct_answer');

            // Game settings
            $table->integer('points')->default(1);
            $table->string('difficulty')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('partofspeechgame');
    }
};