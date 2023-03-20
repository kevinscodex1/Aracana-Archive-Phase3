<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();

        // @var \App\models\User
        $user = User::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'user_name' => $data['user_name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function login(LoginRequest $request)
    {
        $input = $request->validated();
        $remember = $input['remember'] ?? false;
        unset($input['remember']);

        // Check if the input matches an email format
        if (filter_var($input['login'], FILTER_VALIDATE_EMAIL)) {
            $credentials = [
                'email' => $input['login'],
                'password' => $input['password'],
            ];
        } else {
            $credentials = [
                'user_name' => $input['login'],
                'password' => $input['password'],
            ];
        }

        if (!Auth::attempt($credentials, $remember)) {
            return response([
                'error' => 'The provided credentials are not correct'
            ], 422);
        }

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function me(Request $request)
    {

        return $request->user();
    }
    public function logout(Request $request)
    {
        // @var \App\models\User
        $user = Auth::user();

        $user->currentAccessToken()->delete();

        return response([
            'success' => true
        ]);
    }
}