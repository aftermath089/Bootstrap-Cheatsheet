package main

import(
	"database/sql"
	_"github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	"net/http"
)

func main(){
	// open database
	db, err := sql.Open("mysql","golang:golang-sql@tcp(127.0.0.1:3306)/golang")
	defer db.Close()

	if err != nil{
		panic(err.Error())
	}

	// create router and serve in port 8000
	router := mux.NewRouter()
	http.ListenAndServe(":8000", router)

}