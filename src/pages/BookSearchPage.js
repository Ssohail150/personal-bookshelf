// src/pages/BookSearchPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import './BookSearchPage.css';

const BookSearchPage = ({ onAddToBookshelf, onRemoveFromBookshelf, bookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => {
          setResults(response.data.docs);
          setError(null); // Reset error state on successful fetch
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setError('Failed to fetch data from the Open Library API. Please try again later.');
        });
    }
  }, [query]);

  const removeFromBookshelf = (bookToRemove) => {
    const updatedBookshelf = bookshelf.filter(book => book.key !== bookToRemove.key);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    setResults(results.map(book => {
      if (book.key === bookToRemove.key) {
        return { ...book, isInBookshelf: false };
      }
      return book;
    }));
  };

  return (
    <div className="book-search-page">
      <SearchBar query={query} onQueryChange={setQuery} />
      {error && <div className="error-message">{error}</div>}
      <SearchResults
        results={results}
        onAddToBookshelf={onAddToBookshelf}
        onRemoveFromBookshelf={removeFromBookshelf}
        bookshelf={bookshelf}
      />
    </div>
  );
};

export default BookSearchPage;
