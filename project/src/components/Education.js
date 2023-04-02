import EducationList from "./EducationList";

function Education({edInfo, edHandleClick, handleEdItemChange}) {
    return (
      <div className="Education">
        <h2>Education</h2><br></br>
        <EducationList edInfo={edInfo} edHandleClick={edHandleClick} handleEdItemChange={handleEdItemChange} />
        <br></br>
        <div className="add-education" onClick={edHandleClick}>
          <span>+</span><span>Add Education</span>
        </div>
      </div>
    );
  }
  
  export default Education;
  