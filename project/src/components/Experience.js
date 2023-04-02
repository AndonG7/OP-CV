import ExperienceList from "./ExperienceList.js";

function Experience({exInfo, exHandleClick, handleExItemChange}) {
    return (
      <div className="Experience">
        <h2>Experience</h2><br></br>
        <ExperienceList exInfo={exInfo} exHandleClick={exHandleClick} handleExItemChange={handleExItemChange} />
        <br></br>
        <div className="add-experience" onClick={exHandleClick}>
          <span>+</span><span>Add Experience</span>
        </div>
      </div>
    );
  }
  
  export default Experience;
  