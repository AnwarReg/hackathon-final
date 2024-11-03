import React, { useState } from 'react';
import Header from './Header';
import './upload.css';
import axiosClient from './axiosClient';
import { title } from 'process';
import {supabase} from '../src/supabaseClient'


const UploadPage = () => {
  const[note,setNote] = useState({title:"" , content : ""});

  const handleChange = (event) => {
    const {name, value} = event.target;
    setNote( (prev) => {
        return {
            ...prev,
            [name]:value,
        }
    })
}

const createNote = async (event) => {
    event.preventDefault();
  
    await supabase
      .from('notes')
      .insert({title: note.title, content: note.content})
      .select();
  
    window.location = "/";
  }




  return (
    <div className="upload-page">
      <Header />
      <div className="upload-form">
        <h2 className="upload-title">Upload Your Notes</h2>
        <form>
        <label className="label" htmlFor="courseName">Course Name:</label>
        <input
        onChange={handleChange}
          name='title'
          type="text"
          id="courseName"
          className="input-box small"
          placeholder="Enter course name"
        />
        
        {/* Notes Text Area */}
        <label className="label" htmlFor="notes">Notes:</label>
        <textarea
        onChange={handleChange}
          name='content'
          id="notes"
          className="input-box large"
          placeholder="Enter your notes here"
        ></textarea>
        
        {/* Upload Button */}
        <button className="upload-button" type="submit" onClick={createNote}>Submit</button>
   

        </form>
        </div>
    </div>
  );
};

export default UploadPage;