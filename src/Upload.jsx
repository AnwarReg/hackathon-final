import React from 'react';
import Header from './Header';
import './upload.css';

const UploadPage = () => {
  return (
    <div className="upload-page">
      <Header />
      <div className="upload-form">
        <h2 className="upload-title">Upload Your Notes</h2>
        <form>
        <label className="label" htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          className="input-box small"
          placeholder="Enter course name"
        />
        
        {/* Notes Text Area */}
        <label className="label" htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          className="input-box large"
          placeholder="Enter your notes here"
        ></textarea>
        
        {/* Upload Button */}
        <button className="upload-button" type="submit">Submit</button>
   

        </form>
        </div>
    </div>
  );
};

export default UploadPage;