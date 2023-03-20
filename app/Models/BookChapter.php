<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookChapter extends Model
{
    use HasFactory;
    protected $fillable = ['id', 'chapter', 'content', 'data', 'archive_id'];
}