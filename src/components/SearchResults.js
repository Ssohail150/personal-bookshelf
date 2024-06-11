// src/components/SearchResults.js
import React from 'react';
import BookCard from './BookCard';
import './SearchResults.css';

const SearchResults = ({ results, onAddToBookshelf, onRemoveFromBookshelf, bookshelf }) => {
  return (
    <div className="search-results">
      {results.map((book) => (
        <BookCard
          key={book.key}
          book={book}
          onAddToBookshelf={onAddToBookshelf}
          onRemoveFromBookshelf={onRemoveFromBookshelf}
          isInBookshelf={bookshelf.some(b => b.key === book.key)}
        />
      ))}
    </div>
  );
};

export default SearchResults;
