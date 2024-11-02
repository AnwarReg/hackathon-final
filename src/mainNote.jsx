import React, { useEffect, useState } from 'react';
import Header from './Header';
import Note from './Note'; // Import the Note component
import { Link } from 'react-router-dom';

function MainNote({ filterName }) { // Add filterName prop
  const [notes, setNotes] = useState([]); // State to store fetched notes

  // Function to fetch notes from the server
  const fetchNotes = async () => {
    try {
      const response = await fetch('http://localhost:3000/notes'); // Adjust the URL if needed
      const data = await response.json();
      setNotes(data); // Set the fetched notes to state
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  // Fetch notes when the component mounts
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <Header />
      {/* Dropdown and other elements here */}

      <div className="app-container">
        <div className="notes-container">
          {notes.length > 0 ? (
            // Filter notes by the name passed as a prop
            notes.filter(note => note.name === filterName).map((note) => (
              <Note key={note._id} name={note.name} text={note.text} />
            ))
          ) : (
            <p>No notes available.</p>
          )}
        </div>

      </div>
    </div>
  );
}

export default MainNote;
