import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { React, useState } from "react";

function App() {
  //General Info - Header Section
  const [genInfo, setGenInfo] = useState({
    name: "Andon Gjorgjiev",
    email: "andon4ee@gmail.com",
    number: "38970376516",
    url: "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
  });
  const [edInfo, setEdInfo] = useState([]);
  const boilerEdInfo = [{
    name: "Enter Name",
    start: "Start Date",
    end: "End Date",
    key: edInfo.length
  }];

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

  return (
    <div className="App">
      <div className="headline">CV Application</div>
      <Header genInfo={genInfo} handleChange={handleChange}/>
      <Education edInfo={edInfo} edHandleClick={edHandleClick} handleEdItemChange={handleEdItemChange} />
      <Experience />
    </div>
  );
}

export default App;
