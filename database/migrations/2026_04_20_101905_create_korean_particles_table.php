<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('korean_particles', function (Blueprint $table) {
            $table->id();
            $table->string('particle'); // 이, 가, 은...
            $table->string('romanization'); // i, ga, eun...
            $table->string('type'); // Subject, Topic, Object
            $table->string('usage'); // with batchim / without batchim / both
            $table->text('example'); // Korean sentence
            $table->text('translation'); // English translation
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('korean_particles');
    }
};