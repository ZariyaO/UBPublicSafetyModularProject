<?php

use Illuminate\Support\Facades\Route;
use Modules\TestModule2\Http\Controllers\TestModule2Controller;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group([], function () {
    Route::resource('testmodule2', TestModule2Controller::class)->names('testmodule2');
});

Route::prefix('TestApi2')->group(function () {
    Route::get('/test', function () {
        return view("testmodule2::testview");
    });
});
