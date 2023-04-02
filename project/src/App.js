import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { React, useState } from "react";

function App() {

  //---------------State-----------\\
  //General Info - Header Section
  const [genInfo, setGenInfo] = useState({
    name: "Andon Gjorgjiev",
    email: "andon4ee@gmail.com",
    number: "38970376516",
    url: "https://cdn-icons-png.flaticon.com/512/6588/6588143.png"
  });
  const [edInfo, setEdInfo] = useState([]);
  const [exInfo, setExInfo] = useState([]);
  //----------------------------------\\

  //--------------Boilerplates---------\\
  const boilerEdInfo = [{
    name: "Enter Name",
    start: "Start Date",
    end: "End Date",
    key: edInfo.length
  }];

  const boilerExInfo = [{
    name: "Enter Name",
    position: "Enter Position",
    start: "Start Date",
    end: "End Date",
    key: exInfo.length
  }];
//-----------------------------------\\

//-------------Event Handlers---------\\
  function handleChange(e) {
    if (e.target.className === "name"){
      setGenInfo({
        name: e.target.value,
        email: genInfo.email,
        number: genInfo.number,
        url: genInfo.url
      });
    }

    if (e.target.className === "email"){
      setGenInfo({
        name: genInfo.name,
        email: e.target.value,
        number: genInfo.number,
        url: genInfo.url
      });
    }

    if (e.target.className === "number"){
      setGenInfo({
        name: genInfo.name,
        email: genInfo.email,
        number: e.target.value,
        url: genInfo.url
      });
    }

  }

  function edHandleClick(e) {
    console.log(edInfo);
    setEdInfo(edInfo.concat(boilerEdInfo));
    console.log("click");
    console.log(edInfo);
  }

  function exHandleClick(e) {
    console.log(exInfo);
    setExInfo(exInfo.concat(boilerExInfo));
    console.log("click");
    console.log(exInfo);
  }

  function handleEdItemChange(e, index) {
    const updatedEdInfo = [...edInfo]; // create a copy of the array
    
    if(e.target.className === "name") { 
      updatedEdInfo[index].name = e.target.value; // update the name of the item at the given index
    }

    if(e.target.className === "start-date") { 
      updatedEdInfo[index].start = e.target.value; // update the name of the item at the given index
    }

    if(e.target.className === "end-date") { 
      updatedEdInfo[index].end = e.target.value; // update the name of the item at the given index
    }
    setEdInfo(updatedEdInfo); // update the state with the new array
  }

  function handleExItemChange(e, index) {
    const updatedExInfo = [...exInfo]; // create a copy of the array
    
    if(e.target.className === "ex-name") { 
      updatedExInfo[index].name = e.target.value; // update the name of the item at the given index
    }

    if(e.target.className === "ex-position") { 
      updatedExInfo[index].position = e.target.value; // update the position of the item at the given index
    }

    if(e.target.className === "start-date") { 
      updatedExInfo[index].start = e.target.value; // update the name of the item at the given index
    }

    if(e.target.className === "end-date") { 
      updatedExInfo[index].end = e.target.value; // update the name of the item at the given index
    }
    setExInfo(updatedExInfo); // update the state with the new array
  }
//-------------------------------------\\

//----------------Render---------------\\
  return (
    <div className="App">
      <div className="headline">CV Application</div>
      <Header genInfo={genInfo} handleChange={handleChange}/>
      <Education edInfo={edInfo} edHandleClick={edHandleClick} handleEdItemChange={handleEdItemChange} />
      <Experience exInfo={exInfo} exHandleClick={exHandleClick} handleExItemChange={handleExItemChange} />
    </div>
  );
}

export default App;