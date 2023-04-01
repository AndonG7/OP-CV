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

  return (
    <div className="App">
      <div className="headline">CV Application</div>
      <Header genInfo={genInfo} handleChange={handleChange}/>
      <Education />
      <Experience />
    </div>
  );
}

export default App;
