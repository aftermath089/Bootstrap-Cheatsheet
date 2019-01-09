@extends('layouts.app')

@section('content')
    <h1>Edit Post</h1>  <!--ini berubah-->
    {!! Form::open(['action' => ['PostController@update', $post->id],'method' => 'POST', 'enctype' =>'multipart/form-data']) !!} <!--ini berubah-->
        <div class="form-group">
            {{Form::label('title','Title')}}
            {{Form::text('title',$post->title,['class' => 'form-control', 'placeholder' => 'Title'])}}
        </div>
        <div class="form-group">
                {{Form::label('body','Body')}}
                {{Form::textarea('body',$post->body,['id' => 'article-ckeditor','class' => 'form-control', 'placeholder' => 'Body'])}}
        </div>
        {{form::hidden('_method','PUT')}} <!--ini line tambahan. seharusnya harus lewat PUT namun dengan cara ini bisa dengan method POST-->
        {{Form::submit('Submit',['class' => 'btn btn-primary' ])}}
        <div class="form-group">
                {{Form::file('cover_image')}}
        </div>
        {{Form::submit('Submit',['class' => 'btn btn-primary' ])}}
    {!! Form::close() !!}

    <script src="/vendor/unisharp/laravel-ckeditor/ckeditor.js"></script>
    <script>
        CKEDITOR.replace( 'article-ckeditor' );
    </script>
@endsection