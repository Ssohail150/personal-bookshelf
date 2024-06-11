// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import BookshelfPage from './pages/BookshelfPage';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = localStorage.getItem('bookshelf');
    if (storedBookshelf) {
      setBookshelf(JSON.parse(storedBookshelf));
    }
  }, []);

  const addToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
  };

  const removeFromBookshelf = (bookToRemove) => {
    const updatedBookshelf = bookshelf.filter(book => book.key !== bookToRemove.key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Search Books</Link>
          <Link to="/bookshelf">My Bookshelf</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<BookSearchPage
              onAddToBookshelf={addToBookshelf}
              onRemoveFromBookshelf={removeFromBookshelf}
              bookshelf={bookshelf}
            />}
          />
          <Route
            path="/bookshelf"
            element={<BookshelfPage bookshelf={bookshelf} onRemoveFromBookshelf={removeFromBookshelf} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
