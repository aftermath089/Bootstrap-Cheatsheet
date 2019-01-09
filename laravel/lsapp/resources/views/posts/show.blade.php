@extends('layouts.app')

@section('content')
    <a href="/lsapp/public/posts" class="btn">back to posts</a>
    <div class="container">
    <h1>{{$post->title}}</h1>
    <p>{{$post->body}}</p>
    <hr>
    @if(!Auth::guest()) <!--//guest tidak bisa melihat button-->
    @if(!Auth::user()->id == $post->user_id) <!--user cuma bisa liat button di post miliknya-->
    <a href="/lsapp/public/posts/{{$post->id}}/edit" class="btn btn-primary">Edit Post</a>
    </div>

    <!--delete request dibawah ini-->
    {!!Form::open(['action' => ['PostController@destroy',$post->id], 'method'=>'POST'])!!}
        {{Form::hidden('_method','DELETE')}}
        {{Form::submit('Delete',['class'=>'btn btn-danger'])}}
    {!!Form::close()!!}
    @endif
    @endif
@endsection