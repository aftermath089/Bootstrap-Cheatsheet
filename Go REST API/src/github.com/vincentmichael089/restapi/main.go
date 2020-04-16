//Tutorial by TraversyMedia https://www.youtube.com/watch?v=SonwZ6MF5BE
package main

import (
	"encoding/json"
	"log"
	"net/http"
	"math/rand"
	"strconv"
	"github.com/gorilla/mux"
)

//book model
type Book struct{
	ID string `json:"id"`
	Isbn string `json:"isbn"`
	Title string `json:"title"`
	Author *Author `json:"author"`
}

//author model
type Author struct{
	FirstName string `json:"firstName"`
	LastName string `json:"lastName"`
}

func main() {
	//initialize router
	router := mux.NewRouter()

	//route handlers / endpoints
	router.HandleFunc("/api/books", getBooks).Methods("GET")
	router.HandleFunc("/api/books/{id}", getBook).Methods("GET")
	router.HandleFunc("/api/books", createBook).Methods("POST")
	router.HandleFunc("/api/books/{id}", updateBook).Methods("PUT")
	router.HandleFunc("/api/books/{id}", deleteBooks).Methods("DELETE")

	//run server
	http.ListenAndServe(":8000", router) 
}
