//Tutorial by TraversyMedia https://www.youtube.com/watch?v=SonwZ6MF5BE
package main

import (
	"encoding/json"
	//"log"
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

//init books var as a slice of book struct
var books []Book

//functions
func getBooks(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type","application/json")
	json.NewEncoder(w).Encode(books)
}

func getBook(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type","application/json")
	params := mux.Vars(r) //get params
	
	for _, item := range books{
		if item.ID == params["id"]{ //if the item's id the same as in the url
			json.NewEncoder(w).Encode(item)
			return
		}
	}

	json.NewEncoder(w).Encode(&Book{})
}

func createBook(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type","application/json")
	var book Book
	_ = json.NewDecoder(r.Body).Decode(&book)
	book.ID = strconv.Itoa(rand.Intn(10000000))
	books = append(books, book)

	json.NewEncoder(w).Encode(book)
}

func updateBook(w http.ResponseWriter, r *http.Request){
	
}

func deleteBook(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type","application/json")
	params := mux.Vars(r)
	for index, item := range books{
		if item.ID == params["id"]{
			books = append(books[:index], books[index+1:]...)
			break
		}
	}

	json.NewEncoder(w).Encode(books)
}


func main() {
	//initialize router
	router := mux.NewRouter()

	//mock data
	books = append(books, Book{
		ID : "1",
		Isbn : "123123123",
		Title : "Booky McBookface",
		Author : &Author{
			FirstName : "Boo",
			LastName : "Baa"}})

	books = append(books, Book{
		ID : "2",
		Isbn : "2331223",
		Title : "Golang 101",
		Author : &Author{
			FirstName : "Go",
			LastName : "Lang"}})

	//route handlers / endpoints
	router.HandleFunc("/api/books", getBooks).Methods("GET")
	router.HandleFunc("/api/books/{id}", getBook).Methods("GET")
	router.HandleFunc("/api/books", createBook).Methods("POST")
	router.HandleFunc("/api/books/{id}", updateBook).Methods("PUT")
	router.HandleFunc("/api/books/{id}", deleteBook).Methods("DELETE")

	//run server
	http.ListenAndServe(":8000", router) 
}
