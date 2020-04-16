package main

import(
	"fmt"
	"database/sql"
	_"github.com/go-sql-driver/mysql"
)

// data model
type Post struct{
	ID int
	Title string
}

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
	defer insert.Close()

	if err != nil{
		panic(err.Error())
	}

	// fetch data
	posts, err := db.Query("SELECT * FROM `posts`")
	defer posts.Close()

	if err != nil{
		panic(err.Error())
	}

	for posts.Next(){
		var post Post

		err := posts.Scan(&post.ID, &post.Title)
		if err !=nil{
			panic(err.Error())
		}
		
		fmt.Println(post)
	}
}