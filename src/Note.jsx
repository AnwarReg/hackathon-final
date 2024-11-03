import React  from "react";
import './Note.css'; // Import the external CSS file
import MainNote from "./MainNote";
function Note(prop){
return(

    <div>
    <div className="note-header">
        <div className="folder-icon">📁</div>
        <div className="note-label">Course</div>
    </div>
<h2 className="note-title">{prop.title}</h2>
</div>
);
};

export default Note;