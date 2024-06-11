// src/components/BookCard.js
import React from 'react';
import './BookCard.css';

const BookCard = ({ book, onAddToBookshelf, onRemoveFromBookshelf, isInBookshelf }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author_name?.join(', ')}</p>
      {isInBookshelf ? (
        <button onClick={() => onRemoveFromBookshelf(book)}>Remove from Bookshelf</button>
      ) : (
        <button onClick={() => onAddToBookshelf(book)}>Add to Bookshelf</button>
      )}
    </div>
  );
};

export default BookCard;
