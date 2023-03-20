<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArchiveResource;
use App\Models\Archive;
use App\Http\Requests\StoreArchiveRequest;
use App\Http\Requests\UpdateArchiveRequest;
use App\Models\BookChapter;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

use Illuminate\Validation\Rules\Enum;
use Symfony\Component\HttpFoundation\Request;

class ArchiveController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = $request->user();

        return ArchiveResource::collection(
            Archive::where('user_id', $user->id)->orderBy('created_at', 'desc')
                ->paginate(4)

        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArchiveRequest $request)
    {
        $data = $request->validated();

        if (isset($data['image'])) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;
        }

        $archive = Archive::create($data);

        foreach ($data['chapters'] as $chapter) {
            $chapter['archive_id'] = $archive->id;
            $this->createChapter($chapter);
        }

        return new ArchiveResource($archive);
    }

    /**
     * Display the specified resource.
     */
    public function show(Archive $archive, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $archive->user_id) {
            return abort(403, 'Unauthorized action');
        }

        return new ArchiveResource($archive);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Archive $archive)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArchiveRequest $request, Archive $archive)
    {
        $data = $request->validated();

        if (isset($data['image'])) {
            $relativePath = $this->saveImage($data['imagege']);
            $data['image'] = $relativePath;

            if ($archive->image) {
                $absolutePath = public_path($archive->image);
                File::delete($absolutePath);
            }
        }
        $archive->update($data);

        $existingIds = $archive->chapters()->pluck('id')->toArray();

        $newIds = Arr::pluck($data['chapters'], 'id');

        $toDelete = array_diff($existingIds, $newIds);

        $toAdd = array_diff($newIds, $existingIds);

        BookChapter::destroy($toDelete);

        foreach ($data['chapters'] as $chapter) {
            if (in_array($chapter['id'], $toAdd)) {
                $chapter['archive_id'] = $archive->id;
                $this->createChapter($chapter);
            }
        }

        $chapterMap = collect($data['chapters'])->keyBy('id');
        foreach ($archive->chapters as $chapter) {
            if (isset($chapterMap[$chapter->id])) {
                $this->updateChapter($chapter, $chapterMap[$chapter->id]);
            }
        }

        return new ArchiveResource($archive);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Archive $archive, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $archive->user_id) {
            return abort(403, 'Unauthorized action.');
        }

        $archive->delete();

        if ($archive->image) {
            $absolutePath = public_path($archive->image);
            File::delete($absolutePath);
        }

        return response('', 204);
    }

    private function saveImage($image)
    {
        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
            // Take out the base64 encoded text without mime type
            $image = substr($image, strpos($image, ',') + 1);
            // Get file extension
            $type = strtolower($type[1]); // jpg, png, gif

            // Check if file is an image
            if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
                throw new \Exception('invalid image type');
            }
            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);

            if ($image === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('did not match data URI with image data');
        }

        $dir = 'images/';
        $file = Str::random() . '.' . $type;
        $absolutePath = public_path($dir);
        $relativePath = $dir . $file;
        if (!File::exists($absolutePath)) {
            File::makeDirectory($absolutePath, 0755, true);
        }
        file_put_contents($relativePath, $image);

        return $relativePath;
    }

    private function createChapter($data)
    {
        if (is_array($data['data'])) {
            $data['data'] = json_encode($data['data']);
        }
        $validator = Validator::make($data, [
            'chapter' => 'required|string',
            'content' => 'nullable|string',
            'description' => 'nullable|string',
            'data' => 'present',
            'archive_id' => 'exists:App\Models\Archive,id'
        ]);

        return BookChapter::create($validator->validated());
    }

    private function updateChapter(BookChapter $chapter, $data)
    {
        if (is_array($data['data'])) {
            $data['data'] = json_encode($data['data']);
        }
        $validator = Validator::make($data, [
            'id' => 'exists:App\Models\BookChapter,id',
            'chapter' => 'required|string',
            'content' => 'nullable|string',
            'data' => 'present',
        ]);

        return $chapter->update($validator->validated());
    }

    public function getBySlug(Archive $archive)
    {
        if (!$archive->status) {
            return response("", 404);
        }

        return new ArchiveResource($archive);
    }

}