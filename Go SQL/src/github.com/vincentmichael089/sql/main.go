package main

import(
	//"fmt"
	"database/sql"
	_"github.com/go-sql-driver/mysql"
)

func main(){
	// create new database object 
	//"<user>:<password>@tcp(127.0.0.1:3306)/<database-name>"
	db, err := sql.Open("mysql","golang:golang-sql@tcp(127.0.0.1:3306)/golang")
	defer db.Close()

	if err != nil{
		panic(err.Error())
	}

	// inserting row into database
	insert, err := db.Query("INSERT INTO `posts` (id, title) VALUES('1','My post')")

	if err != nil{
		panic(err.Error())
	}

	defer insert.Close()

}