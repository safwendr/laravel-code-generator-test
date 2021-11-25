<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
// use SimpleSoftwareIO\QrCode\Facades\QrCode;
// use SimpleSoftwareIO\QrCode\BaconQrCodeGenerator;
// use BaconQrCode\Encoder\QrCode;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
// use SimpleSoftwareIO\QrCode\Facades\QrCode;
// use SimpleSoftwareIO\QrCode\Facade as QrCode;
// use QrCode;



class QRController extends Controller
{
    public function generateQrCode()
    {
        \QrCode::size(500)
            ->format('png')
            ->generate('some-string-here', public_path('images/qrcode.png'));

        return view('qr-code');
    }
}
