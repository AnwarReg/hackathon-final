// MainNote.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axiosClient from './axiosClient';
import { supabase } from './supabaseClient';
import './mainNote.css';
import Header from './Header';

const MainNote = () => {
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  const handleUpvote = () => {
    setUpvoted(true);
    setDownvoted(false); // Reset downvote if upvote is selected
  };

  const handleDownvote = () => {
    setDownvoted(true);
    setUpvoted(false); // Reset upvote if downvote is selected
  };

  const { id } = useParams();
  const location = useLocation();
  const note = location.state?.note;

  if (note) {
    return (
      <div>
        <h1>{note.title}</h1>
        <p>{note.content}</p>
      </div>
    );
  }

  const [fetchedNote, setFetchedNote] = useState({});

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const { data: notes, error } = await supabase
          .from('notes')
          .select("*")
          .eq('id', id);

        if (error) {
          console.error('Error fetching note:', error);
        } else {
          setFetchedNote(notes[0]);
        }
      } catch (error) {
        console.error('Error fetching note:', error);
      }
    };

    fetchNote();
  }, [id]);

  return (
    <div className='note-page'>
    <Header />
    <div className='note-content'>
    <div className='note-text'>
      <h2>{fetchedNote.title}</h2>
      <p>{fetchedNote.content}</p>
    </div>
    <div className="note-feedback">
          <button
            className={`feedback-button ${upvoted ? 'upvoted' : ''}`}
            onClick={handleUpvote}
          >
            ⬆️ Upvote
          </button>
          <button
            className={`feedback-button ${downvoted ? 'downvoted' : ''}`}
            onClick={handleDownvote}
          >
            ⬇️ Downvote
          </button>
        </div>
    </div>
    </div>
  );
};

export default MainNote;