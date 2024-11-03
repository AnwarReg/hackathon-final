import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Note from "./Note";
import { Link } from 'react-router-dom'; 
import "./style.css";
import axiosClient from './axiosClient';
import Footer from './footer';


function Home() {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchQuery, setSearchQuery] = useState(''); // Search input value
  const [notes, setNotes] = useState([]); // All notes fetched from the database
  const [filteredNotes, setFilteredNotes] = useState([]); // Notes to display based on search/filter

  // Handle dropdown change
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to fetch notes from the database
  const fetchNotes = () => {
    return axiosClient.get('/notes')
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching notes:', error);
        return [];
      });
  };

  // Fetch notes when the component mounts
  useEffect(() => {
    fetchNotes().then(data => {
      setNotes(data);
      setFilteredNotes(data); // Initialize filtered notes with all notes
    });
  }, []);

  // Apply search filter whenever searchQuery changes
  useEffect(() => {
    if (searchQuery) {
      const filtered = notes.filter(note => 
        note.title && note.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredNotes(filtered);
    } else {
      setFilteredNotes(notes); // Reset to all notes when searchQuery is empty
    }
  }, [searchQuery, notes]);

  return (
    <div className="home-container">
      <Header />
      <div className="navbar">
        <div className="navbar-left">
          <input
            type="text"
            placeholder="Search notes"
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="dropdown"
          />
        </div>
        <Link to="/upload">
          <button className="add-button">Add Note</button>
        </Link>
      </div>
      <div className="parent-container">
      <div className="notes-container">
        {filteredNotes.map(note => (
          <Link className='note-card' key={note.id} to={`/note/${note.id}`}>
            <Note key={note.id} title={note.title} content={note.content} />
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Home;
