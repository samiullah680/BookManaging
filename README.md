# BookManaging
A book Managing Api, often referred to as a library management system, is a software application or platform designed to help individuals or organizations efficiently manage, catalog, and organize their collection of books and related information to perform Add a new book (title, author, summary) ,View a list of all books,View details of a specific book by its ID,Update a book's details,Delete a book. 

1. Initialize a Node.js Project:
      To create a CRUD book management API in Node.js, you'll need to start by setting up a new Node.js project. You can do this by creating a project directory and generating a package.json file:
        mkdir book-management-api
        cd book-management-api
        npm init -y

2. 2. Install Dependencies:
    To build the API, you'll need certain dependencies. You can install these dependencies using npm:

    Here's a brief description of each dependency:
      express: This is a widely used web framework for Node.js, designed to simplify handling HTTP requests and routing.
      mongoose: It's an Object Data Modeling (ODM) library for MongoDB, which enables structured interactions with MongoDB Atls databases.
      body-parser: This library helps parse incoming request data, particularly when working with JSON data.

3 Authentication Api
   
  1. Registration Api:
    http://localhost:3009/register
      the registration Api to used to admin register information databased after perform Book Management Api.
        {
          "fname":"abcd",
           "lname":"bfjf",
           "number":7372890117,
           "email":"sami@gmail.com",
           "password":"sami@1234"
         }


  3. Login Api
    http://localhost:3009/login
      The Login API is used authenticate a user in FusionAuth. The issuer of the One Time Password will dictate if a JWT or a Refresh Token may be issued in the API response.
    input:
            {
        "credential":"sami@gmail.com",
        "password":"sami@1234"
        }
      Output:
           {
          "user_id": "653fe1ebbe3845e024ca91ea",
          "username": "samialam",
          "email": "sami@gmail.com",
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2ZlMWViYmUzODQ1ZTAyNGNhOTFlYSIsInVzZXJuYW1lIjoic2FtaWFsYW0iLCJ1c2VyVHlwZSI6ImFkbWluIiwiZW1haWwiOiJzYW1pQGdtYWlsLmNvbSIsImZpcnN0bmFtZSI6InNhbWkiLCJsYXN0bmFtZSI6ImFsYW0iLCJudW1iZXIiOjczNzI4OTAxOSwiaWF0IjoxNjk4NzM0OTU3LCJleHAiOjE2OTg5OTQxNTd9.k5DyxK_eqoxwkjMB2LADLPHfHX6SV84b4NWG_6owY_Y",
          "success": true
      }

4.AddNewBook:
  Api: http://localhost:3009/AddNewBook
    input:
         authorization header: login token 
          Body:    {
            "title":"Computer Operator Book",
            "author":"sami Alam",
            "summary":" dsfkjkjds dsfbhjsbf dsfbdsjhfhb fdsfb  dfhfdh gfjfg gfjfg ",
            "price":800
        
        }
  
  output:
      {
          "success": true,
          "status": 200,
          "data": {
              "user_id": "653fe1ebbe3845e024ca91ea",
              "title": "Computer Operator Book",
              "author": "sami Alam",
              "summary": " dsfkjkjds dsfbhjsbf dsfbdsjhfhb fdsfb  dfhfdh gfjfg gfjfg ",
              "price": 800,
              "_id": "6540a3c389a1362c1f99c8e5",
              "createdAt": "2023-10-31T06:50:43.636Z",
              "updatedAt": "2023-10-31T06:50:43.636Z",
              "__v": 0
          },
          "message": "New Book Added Successfull"
      }

5.Delete Book Api 
http://localhost:3009/DeleteBook

   input:
         authorization header: login token 
          Body:    {
          "id":"6540a38e89a1362c1f99c8e3"
          }

    OutPut:
      {
    "success": true,
    "status": 200,
    "message": "Book  deleted successfully"
}

6. UpdateBookDetails 
http://localhost:3009/UpdateBookDetails
input:
  {
    "id":"6540a38e89a1362c1f99c8e3",
    "title":"software engineer",
    "author":" alam",
    "summary":" dsfkjkjd xcgfs dsfbhjsbf dsfbdsjhfhb fdsfb ",
    "price":1303

    }
Output:
{
    "success": true,
    "status": 200,
    "message": " Successfull updated"
}

7.ViewAllBook
http://localhost:3009/ViewAllBook 
input:
    authorization header: login token 
          Body:{
              "count":100,
              "activePage":1
          }

Output:
{
    "success": true,
    "status": 200,
    "data": [
        {
            "_id": "6540a3c389a1362c1f99c8e5",
            "user_id": "653fe1ebbe3845e024ca91ea",
            "title": "Computer Operator Book",
            "author": "sami Alam",
            "summary": " dsfkjkjds dsfbhjsbf dsfbdsjhfhb fdsfb  dfhfdh gfjfg gfjfg ",
            "price": 800,
            "createdAt": "2023-10-31T06:50:43.636Z",
            "updatedAt": "2023-10-31T06:50:43.636Z",
            "__v": 0
        }
    {
            "_id": "6540a3c389a16362c1f99c875",
            "user_id": "653fe1ebbe3845e0524ca91ea",
            "title": " Book1",
            "author": "sami Alam",
            "summary": " dsfkjkjds dsfbhjsbf dsfbdsjhfhb fdsfb  dfhfdh gfjfg gfjfg ",
            "price": 808,
            "createdAt": "2023-10-31T06:50:43.636Z",
            "updatedAt": "2023-10-31T06:50:43.636Z",
            "__v": 0
        }
    ],
    "TotleCount": 2,
    "message": "all Book View"
}    

7.ViewBookById
http://localhost:3009/ViewBookById
input:
    authorization header: login token 
          Body:
            {
                "id":"6540a38e89a1362c1f99c8e3"
            }
OutPut:
{
    "success": true,
    "status": 200,
    "data": {
        "_id": "6540a38e89a1362c1f99c8e3",
        "user_id": "653fe1ebbe3845e024ca91ea",
        "title": "software engineer",
        "author": " alam",
        "summary": " dsfkjkjd xcgfs dsfbhjsbf dsfbdsjhfhb fdsfb ",
        "price": 1303,
        "createdAt": "2023-10-31T06:49:50.433Z",
        "updatedAt": "2023-10-31T06:52:50.585Z",
        "__v": 0
    },
    "message": "  successfully view book by id"
}


      

