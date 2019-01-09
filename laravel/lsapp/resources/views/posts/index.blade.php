@extends('layouts.app')

@section('content')
    <div class="container">
        <h1> posts </h1>
        @if(count($posts)>0)
            
            @foreach($posts as $post)
            <div class="well">
                <div class="col-md-4 col-sm-4">
                <img src="/lsapp/public/storage/cover_images/{{$post->cover_image}}" style="width:100%">
                </div>
                <div class="col-md-8 col-sm-8">         
                    <h3><a href="/lsapp/public/posts/{{$post->id}}">{{$post->title}}</a></h3>
                <small>written by {{$post->user->name}}, {{$post->created_at}}</small>
                </div>
            </div>              
            @endforeach 
            
        @else
            <p>no post found!</p>
        @endif
    </div>
@endsection