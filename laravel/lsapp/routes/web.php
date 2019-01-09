<?php

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

//bisa get post delete

Route::get('/', function () {
    return view('welcome');
});

Route::get('/hello', function () {
    return 'hello laravel'; //bisa pass innerhtml juga disini
});

Route::get('/about',function(){
    return view ('pages.about');
});

//dynamic routing
Route::get('/users/{id}/{name}',function($id, $name){
    return 'user id is  '.$id.' and the name is '.$name;
}); //run di http://localhost/lsapp/public/users/id/name

/*basic idea:
route->controller->return the view.
buat controller dengan langkah mengetik pada terminal:
--
    php artisan make:controller PagesController
--
dan cek filenya pada app->Http->Controllers
*/

Route::get('/','PagesController@index');
Route::get('/about','PagesController@about');

//nanti si controller yang harus mengembalikan view, maka return viewnya disana.

//route untuk dbmodel controller
Route::resource('posts','PostController');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
