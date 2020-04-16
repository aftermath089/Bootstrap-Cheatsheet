package main

import(
	"database/sql"
	_"github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	"net/http"
	"encoding/json"
	"fmt"
	"io/ioutil"
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

func getPost(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	
	result, err := db.Query("SELECT id, title FROM `posts` WHERE id = ?", params["id"])
	defer result.Close()

	if err != nil{
		panic(err.Error())
	}

	var post Post
	for result.Next(){
		err := result.Scan(&post.ID, &post.Title)
		if err != nil{ // bisa di switch case jika id tidak ada(?)
			panic(err.Error())
		}
	}

	json.NewEncoder(w).Encode(post)
}

func createPost(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	
	query, err := db.Prepare("INSERT INTO `posts`(title) VALUES(?)") //prepare a statement that will execute when Exec() called.
	defer query.Close()
	if err != nil{
		panic(err.Error())
	}

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
	  panic(err.Error())
	}

	keyVal := make(map [string]string)
	json.Unmarshal(body, &keyVal)
	title :=keyVal["title"]

	_, err = query.Exec(title) // execute the query
	if err != nil {
		panic(err.Error())
	}

	fmt.Fprintf(w, "New post was created")
}

func deletePost(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type","application-json")
	params := mux.Vars(r)

	query, err := db.Prepare("DELETE FROM `posts` WHERE ID = ?")
	defer query.Close()
	if err != nil {
		panic(err.Error())
	}

	_, err = query.Exec(params["id"])
	if err != nil {
		panic(err.Error())
	}

	fmt.Fprintf(w, "Post with ID = %s was deleted", params["id"])
}

func updatePost(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)

	query, err := db.Prepare("UPDATE `posts` SET title = ? WHERE id = ?")
	defer query.Close()
	if err != nil {
		panic(err.Error())
	}

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err.Error())
	}

	keyVal := make(map [string]string)
	json.Unmarshal(body, &keyVal)
	newTitle := keyVal["title"]

	_, err = query.Exec(newTitle, params["id"])
	if err != nil {
		panic(err.Error())
	}

	fmt.Fprintf(w, "Post with ID = %s was updated", params["id"])
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
	router.HandleFunc("/posts", createPost).Methods("POST")
	router.HandleFunc("/posts/{id}", getPost).Methods("GET")
	router.HandleFunc("/posts/{id}", deletePost).Methods("DELETE")
	router.HandleFunc("/posts/{id}",updatePost).Methods("PUT")

	http.ListenAndServe(":8000", router)
}