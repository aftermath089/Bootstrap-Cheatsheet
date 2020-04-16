package main

import(
	"database/sql"
	_"github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	"net/http"
)

// post model
type Post struct{
	ID int
	Title string
}

func main(){
	// open database
	db, err := sql.Open("mysql","golang:golang-sql@tcp(127.0.0.1:3306)/golang")
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