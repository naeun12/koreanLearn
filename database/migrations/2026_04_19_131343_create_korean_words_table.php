<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
      Schema::create('korean_words', function (Blueprint $table) {
    $table->id();
    $table->string('kr');
    $table->string('romanization')->nullable();
    $table->string('en');
    $table->string('level')->nullable();
    $table->string('part_of_speech')->nullable();
    $table->string('category')->nullable();
    $table->string('image')->nullable();
    $table->string('audio')->nullable();
    $table->text('usage')->nullable();
    $table->text('example')->nullable();
    $table->text('example_en')->nullable();
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('korean_words');
    }
};
