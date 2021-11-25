# Notes

This project is still unfinished due to some package errors related to versions of package and their compatibility with PHP 8.0.13 and Laravel 8.
This package are:  

-bacon/bacon-qr-code  
-simplesoftwareio/simple-qrcode  


## Installation

Clone this repo from [here](https://github.com/safwendr/laravel-code-generator-test) from my Github.

```bash
git clone https://github.com/safwendr/laravel-code-generator-test laravel-qr-code-generator
```

## Usage
Install

```bash
cd laravel-qr-code-generator
composer install
``` 
Make sure you have webpack and webpack-cli installed globally on your machine because this project use Vue.js

```bash
npm i -g webpack
npm i -g webpack-cli
``` 
Run the project:

```bash
php artisan serve
```
Navigate to "localhost:8000/" and you can see your application working.
Note: The application is unfinished, qr code feature still unfinished due to packages compatibility with the latest version of PHP and Laravel.

the "/qrcode" is the route that meant to deliver the fonctionality of QR Code Feature. With some more time, i can make this application works.
Thanks,
Safwen Derouiche.

