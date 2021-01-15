import React, { useState } from "react";


export default function Adder() {
  const [video, setVideo] = useState({})
  const handleChange = (e) => {
    //changes the value of video object to values entered in fields
    const { name, value } = e.target;
    console.log(e)
    setVideo({
      ...video,
      [name]: value,
    });
  }
  const handleSubmit = (e) => {
    //first prevents reload of page
    e.preventDefault();
    if (!video) return;
    saveToLocalStorage(video)
  }
  //function below saves to storage
  const saveToLocalStorage = (data) => {
    console.log(data)
    //creates empty array
    let listArray = [];
    //takes data from storage, parses out and places into empty array
    listArray = JSON.parse(localStorage.getItem("playlist")) || [];
    //pushes new data into playlist
    listArray.push(data);
    //re-adds back to local storage with addition of new data
    localStorage.setItem("playlist", JSON.stringify(listArray));
  }
  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" name="Name" onChange={handleChange}></input>
        <br></br>
        <label>URL</label>
        <input type="text" name="SRC" onChange={handleChange}></input>
        <button type="submit" onClick={handleSubmit}></button>
      </form>
    </div>
  );
}
  

      


    
  
    
    

      



    
  





