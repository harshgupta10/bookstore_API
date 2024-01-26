const express = require('express')
const router =  express.Router()
const Book = require('../models/book')

// Endpoint to add book details
router.post('/addBook',async (req, res)=>{
    try {
        // Extract book details from the request body
        const { title, author, ISBN, price, quantity } = req.body;
    
        // Check if the ISBN already exists
        const existingBook = await Book.findOne({ ISBN });
        if (existingBook) {
          return res.status(400).json({ message: 'Book with this ISBN already exists' });
        }
    
        // Create a new book instance
        const newBook = new Book({
          title,
          author,
          ISBN,
          price,
          quantity,
        });
    
        // Save the new book to the database
        await newBook.save();
    
        // Respond with the newly added book
        res.status(201).send(newBook)
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    
})

router.get('/getAllBooks', async (req, res) => {
    try {
      const allBooks = await Book.find();
      res.status(200).json(allBooks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  // Endpoint to retrieve a specific book by ISBN
  router.get('/getBook/:isbn', async (req, res) => {
    try {
      const isbn = req.params.isbn;
      const book = await Book.findOne({ ISBN: isbn });
  
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      res.status(200).json(book);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  // Endpoint to update book details
  router.put('/updateBook/:isbn', async (req, res) => {
    try {
      const isbn = req.params.isbn;
      const { title, author, price, quantity } = req.body;
  
      const updatedBook = await Book.findOneAndUpdate(
        { ISBN: isbn },
        { title, author, price, quantity },
        { new: true } // Return the updated document
      );
  
      if (!updatedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      res.status(200).json(updatedBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  // Endpoint to delete a book
  router.delete('/deleteBook/:isbn', async (req, res) => {
    try {
      const isbn = req.params.isbn;
  
      const deletedBook = await Book.findOneAndDelete({ ISBN: isbn });
  
      if (!deletedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      res.status(200).json({ message: 'Book deleted successfully', book: deletedBook });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

module.exports = router