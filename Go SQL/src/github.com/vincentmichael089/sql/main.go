package main

import(
	//"fmt"
	"database/sql"
	//"github.com/go-sql-driver/mysql"
)

func main(){
	// create new database object 
	//"<user>:<password>@tcp(127.0.0.1:3306)/<database-name>"
	db, err := sql.Open("mysql","golang:golang-sql@tcp(127.0.0.1:3306)/golang")
	defer db.Close()

	if err != nil{
		panic(err.Error())
	}
}