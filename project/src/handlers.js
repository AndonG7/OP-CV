export function handleNameChange(e, genInfo, setGenInfo) {
    setGenInfo({
      name: e.target.value,
      email: genInfo.email,
      number: genInfo.number,
      url: genInfo.url,
    });
  }
  
  export function handleEmailChange(e, genInfo, setGenInfo) {
    setGenInfo({
      name: genInfo.name,
      email: e.target.value,
      number: genInfo.number,
      url: genInfo.url,
    });
  }
  
  export function handleNumberChange(e, genInfo, setGenInfo) {
    setGenInfo({
      name: genInfo.name,
      email: genInfo.email,
      number: e.target.value,
      url: genInfo.url,
    });
  }
  
  export function handleEdItemClick(edInfo, setEdInfo) {
    const boilerEdInfo = [
      {
        name: "Enter Name",
        start: "Start Date",
        end: "End Date",
        key: edInfo.length,
      },
    ];
    setEdInfo(edInfo.concat(boilerEdInfo));
  }
  
  export function handleEdItemChange(e, index, edInfo, setEdInfo) {
    const updatedEdInfo = [...edInfo]; // create a copy of the array
  
    if (e.target.className === "name") {
      updatedEdInfo[index].name = e.target.value; // update the name of the item at the given index
    }
  
    if (e.target.className === "start-date") {
      updatedEdInfo[index].start = e.target.value; // update the name of the item at the given index
    }
  
    if (e.target.className === "end-date") {
      updatedEdInfo[index].end = e.target.value; // update the name of the item at the given index
    }
  
    setEdInfo(updatedEdInfo); // update the state with the new array
  }
  