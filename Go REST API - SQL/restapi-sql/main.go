package main

import(
	"database/sql"
	_"github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	"net/http"
	"encoding/json"
	//"fmt"
	//"io/ioutil"
)

// post model
type Post struct{
	ID string `json:"id"`
	Title string `json:"title"`
}

var db *sql.DB
var err error

// functions
func getPosts(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var posts []Post
	result, err := db.Query("SELECT id, title from posts")
	defer result.Close()

	if err != nil {
	  panic(err.Error())
	}

	for result.Next() {
	  var post Post
	  err := result.Scan(&post.ID, &post.Title)
	  
	  if err != nil {
		panic(err.Error())
	  }
	  
	  posts = append(posts, post)
	}
	json.NewEncoder(w).Encode(posts)
  }

func main(){
	// open database
	db, err = sql.Open("mysql", "golang:golang-sql@tcp(127.0.0.1:3306)/golang")
	defer db.Close()

	if err != nil{
		panic(err.Error())
	}

	// create router and serve in port 8000
	router := mux.NewRouter()

	// create endpoints
	router.HandleFunc("/posts", getPosts).Methods("GET")
	//router.HandleFunc("/posts", createPost).Methods("POST")
	//router.HandleFunc("/posts/{id}", getPost).Methods("GET")
	//router.HandleFunc("/posts/{id}", deletePost).Methods("DELETE")
	//router.HandleFunc("/posts/{id}",updatePost).Methods("PUT")

	http.ListenAndServe(":8000", router)
}