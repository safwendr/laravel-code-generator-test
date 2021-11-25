<?php

use App\Http\Controllers\QRController;
use Illuminate\Support\Facades\Route;
use SimpleSoftwareIO\QrCode\BaconQrCodeGenerator;
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

// Route::get('qrcode', function()
// {
//     \QrCode::size(500)
//             ->format('png')
//             ->generate('somestring here.com', public_path('images/qrcode.png'));

//     return view('qr-code');
// });

// Route::get('qrcode', function () {
//     \QrCode::size(500)
//             ->format('png')
//             ->generate('www.google.com', public_path('images/qrcode.png'));
// return view('qrCode');
// });

Route::get('qrcode', [QRController::class, 'generateQrCode']);

Route::get('/{any?}', [
    function () {
        return view('welcome');
    }
])->where('any', '.*');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
