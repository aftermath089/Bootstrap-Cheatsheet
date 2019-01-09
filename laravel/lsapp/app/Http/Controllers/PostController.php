<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\modelPost;
use DB;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    //access controling;  
    public function __construct(){
        $this->middleware('auth',['except' => ['index','show']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //moodelPost::orderBy('titl e','asc')->paginate(jumlahperpage); kalo mau paginate
        //modelPost::orderBy('title','asc')->get(); data terurut 
        //modelPost::where('title','Title via Tinker')->get(); data spesifik
        $posts = modelPost::all(); //ini fungsi transfer seluruh data dari model modelPost dalam json
        return view('posts.index')->with('posts',$posts); //load view
      
        /*dengan SQL queries:
            $posts = DB::select('SELECT * FROM posts');
        */
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('posts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //validasi.
        $this->validate($request, [
            'title' => 'required', //misal tidak diisi nanti errornya dihandle include layout messages.
            'body' => 'required',
            'cover_image' => 'image|nullable|max:1999'
        ]);

        //handle file upload
        if($request->hasFile('cover_image')){
            //get filename with extension
            $fileNameWithExtension = $request->file('cover_image')->getClientOriginalName();
            //get just filename
            $fileName = pathinfo($fileNameWithExtension, PATHINFO_FILENAME);
            //get just extension
            $extension = $request->file('cover_image')->getClientOriginalExtension();
            //filename to store
            $FileNameToStore = $fileName.'_'.time().'.'.$extension;
            //upload image
            $path = $request->file('cover_image')->storeAs('public/cover_images',$FileNameToStore);
        }else{
            $FileNameToStore = 'noimage.jpg';
        }

        //create post dengan eloquent
        $post = new modelPost;
        $post->cover_image = $FileNameToStore;
        $post->title = $request->input('title');
        $post->body = $request->input('body');
        $post->user_id = auth()->user()->id; //ambil user_id dari user yg sedang aktif
        $post->save();

        //redirect ketika data tervalidasi dan telah dipost ke database
        return redirect('/posts')->with('success','post created!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
       // return modelPost::find($id); //cek data ke id
       $post = modelPost::find($id);
       return view('posts.show')->with('post',$post);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $post = modelPost::find($id);
        //check if user is permitted to edit
        if(auth()->user()->id !== $post->user_id){
            return redirect('posts')->with('error','not authorized');
        }

        return view('posts.edit')->with('post',$post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
         //validasi.
         $this->validate($request, [
            'title' => 'required', //misal tidak diisi nanti errornya dihandle include layout messages.
            'body' => 'required'
        ]);

           //handle file upload
           if($request->hasFile('cover_image')){
            //get filename with extension
            $fileNameWithExtension = $request->file('cover_image')->getClientOriginalName();
            //get just filename
            $fileName = pathinfo($fileNameWithExtension, PATHINFO_FILENAME);
            //get just extension
            $extension = $request->file('cover_image')->getClientOriginalExtension();
            //filename to store
            $FileNameToStore = $fileName.'_'.time().'.'.$extension;
            //upload image
            $path = $request->file('cover_image')->storeAs('public/cover_images',$FileNameToStore);
        }

        //create post dengan eloquent
        $post =  modelPost::find($id);
        $post->title = $request->input('title');
        $post->body = $request->input('body');
        if($request->hasFile('cover_image')){
            $post->cover_image = $FileNameToStore;
        }
        $post->save();

        //redirect ketika data tervalidasi dan telah dipost ke database
        return redirect('/posts')->with('success','post updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $post = modelPost::find($id);

        if(auth()->user()->id !== $post->user_id){
            return redirect('posts')->with('error','not authorized');
        }

        if($post->cover_image != 'no_image.jpg'){
            Storage::delete('public/cover_images/'.$post->cover_image);
        }
        
        $post->delete();
        return redirect('/posts')->with('success','post removed');
    }

}
