// src/pages/BookshelfPage.js
import React from 'react';
import BookCard from '../components/BookCard';
import './BookshelfPage.css';

const BookshelfPage = ({ bookshelf, onRemoveFromBookshelf }) => {
  return (
    <div className="bookshelf-page">
      <h2>My Bookshelf</h2>
      <div className="bookshelf">
        {bookshelf.map((book) => (
          <BookCard
            key={book.key}
            book={book}
            onRemoveFromBookshelf={onRemoveFromBookshelf}
            isInBookshelf={true}
          />
        ))}
      </div>
    </div>
  );
};

export default BookshelfPage;
