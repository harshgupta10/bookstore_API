# RESTful API for a Bookstore Management System - Documentation

## Table of Contents
1. Adding a new book
2. Retrieving all books
3. Retrieving a specific book by ISBN
4. Updating book details
5. Deleting a book

## Adding a new book
**Endpoint:** /books/addBook

**Method:** POST

**Request:** Body should contain JSON data with book details
```.json
{
  "title": "Harry Potter and the Philosopher's Stone",
  "author": "JK Rowling",
  "ISBN": "123-4567890123",
  "price": 5000,
  "quantity": 7
}
```


**Response:** Unsuccessful response (HTTP status code 400)
```.json
{ 
    message: 'Book with this ISBN already exists' 
}
```
*or*

Successful response (HTTP status code 201)
```{
  "title": "Harry Potter and the Philosopher's Stone",
  "author": "JK Rowling",
  "ISBN": "123-4567890123",
  "price": 5000,
  "quantity": 7
}
```

Error response(HTTP status code 500)
```.json
{ 
    message: 'Internal Server Error' 
}
```

## Retrieving all books
**Endpoint:** /books/getAllBooks

**Method:** GET

**Response:** Successful response (HTTP status code 200)
```.json
{
  "books": [
  {
    "title": "Harry Potter and the Philosopher's Stone",
    "author": "JK Rowling",
    "ISBN": "123-4567890123",
    "price": 5000,
    "quantity": 7
  },
  // ... other books
  ]
}
```

Error response(HTTP status code 500)
```.json
{ 
    message: 'Internal Server Error' 
}
```

## Retrieving a specific book by ISBN
**Endpoint:** /books/getBook/{isbn}

**Method:** GET

**Path Parameters:**
- *isbn:* ISBN number of the book.

**Response:** Unsuccessful response (HTTP status code 404)
```.json
{ 
    message: 'Book not found' 
}
```

*or*

Successful response (HTTP status code 200)
```.json
{
  "title": "Harry Potter and the Philosopher's Stone",
  "author": "JK Rowling",
  "ISBN": "123-4567890123",
  "price": 5000,
  "quantity": 7
}
```
Error response(HTTP status code 500)
```.json
{ 
    message: 'Internal Server Error' 
}
```

## Updating book details
**Endpoint:** /books/updateBook{isbn}

**Method:** PUT

**Path Parameters:**
- *isbn:* ISBN number of the book.

**Request:** Body should contain JSON data with updated book details.
```.json
{
  "title": "Harry Potter and the Philospher's Stone",
  "author": "JK Rowling",
  "ISBN": "123-4567890123",
  "price": 5000,
  "quantity": 7
}
```

**Response:** Unsuccessful response (HTTP status code 404)
```.json
{ 
    message: 'Book not found' 
}
```

*or*

Successful Response(HTTP response 200)
```.json
{
  "title": "Harry Potter and the Sorcerer's Stone",
  "author": "JK Rowling",
  "ISBN": "123-4567890123",
  "price": 5000,
  "quantity": 7
}
```

Error response(HTTP status code 500)
```.json
{ 
    message: 'Internal Server Error' 
}
```

## Deleting a book
**Endpoint:** /books/deleteBook/{isbn}

**Method:** DELETE

**Path Parameters:**
- *isbn:* ISBN number of the book.


**Response:** Unsuccessful response (HTTP status code 404)
```.json
{ 
    message: 'Book not found' 
}
```
*or*

Successful response (HTTP status code 200)
```.json
{
  "message": "Book deleted successfully"
}
```

Error response(HTTP status code 500)
```.json
{ 
    message: 'Internal Server Error' 
}
```