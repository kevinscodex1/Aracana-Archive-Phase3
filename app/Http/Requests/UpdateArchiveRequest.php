<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateArchiveRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize()
    {
        $book = $this->route('archive');
        if ($this->user()->id !== $book->user_id) {
            return false;
        }
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules()
    {
        return [
            'title' => 'required|string|max:1000',
            'image' => 'nullable|string',
            'author' => 'nullable|string',
            'user_id' => 'exists:users,id',
            'status' => 'boolean',
            'summary' => 'nullable|string',
            'chapters' => 'array',
        ];
    }
}