import React/*, {useState}*/ from "react";
import "./Searchbar.css";

export default function Searchbar() {
  //const [inputValue, setInputValue] = useState('hallo')

 

  return (
    <form>
      <input placeholder="Search here ..." onChange={() => console.log("searchbar")} />
      <i className="fa fa-search"></i>
    </form>    
  );
}
