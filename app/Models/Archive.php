<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Archive extends Model
{
    use HasFactory;
    use HasSlug;

    protected $fillable = ['title', 'author', 'summary', 'image', 'user_id', 'status', 'created_at', 'updated_at'];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }

    public function chapters()
    {
        return $this->hasMany(BookChapter::class);
    }
}