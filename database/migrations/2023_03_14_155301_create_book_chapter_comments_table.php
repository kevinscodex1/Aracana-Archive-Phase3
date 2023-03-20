<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('book_chapter_comments', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\BookChapter::class, 'book_chapter_id');
            $table->foreignIdFor(\App\Models\ChapterComments::class, 'chapter_comments_id');
            $table->text('comments');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('book_chapter_comments');
    }
};