@extends('testmodule2::layouts.master')

@section('content')
    <h1>Hello World</h1>

    <p>Module: {!! config('testmodule2.name') !!}</p>
@endsection
