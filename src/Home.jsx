
import React, { useState } from 'react';
import Header  from "./Header";
import Note from "./Note";
import { Link } from 'react-router-dom'; 
import MainNote from './mainNote';
import "./navbar.css"
import "./style.css"

// Components for each option
const Option1Component = () => <div>This is Option 1 component.</div>;
const Option2Component = () => <div>This is Option 2 component.</div>;
const Option3Component = () => <div>This is Option 3 component.</div>;

function Home() {
  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState("");

  // Handle change event for dropdown
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
  <div className='nav'>
   <Header />
    <div className="navbar">
    {/* Dropdown */}
    <div className="navbar-left">


      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="dropdown"
      >
        <option value="" disabled>Select Option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <button className="search-button">Search</button>
      
    </div>

     {/* Add button on the right */}
     <Link to="/upload">
        <button className="add-button">Add Note</button>
      </Link>
    </div>

    <MainNote/>

  </div>
   
  );
}

export default Home;