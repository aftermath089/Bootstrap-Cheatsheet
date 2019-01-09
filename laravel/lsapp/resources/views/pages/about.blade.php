@extends('layouts.app')

@section('content')
<div class="container">
<H1>{{$title}}</H1>
        @if (count($abouts)>0)
            <ul class="list-group">
            @foreach ($abouts as $about)
                <li class="list-group-item">{{$about}}</li>
            @endforeach
            </ul>
        @endif

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ut.</p>
</div>
@endsection
