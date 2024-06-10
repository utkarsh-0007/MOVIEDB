import React, { useEffect, useState } from "react";
import NameCardList from "./Components/RenderList";
  //     `https://api.themoviedb.org/3/search/movie?api_key=26ba5e77849587dbd7df199727859189&query=${x}`

function Search() {
  function handle(e) {
    debounce(e.target.value);
  }

  const [input, setInput] = useState("");
  






  let d;
  function debounce(e) {
    clearTimeout(d);
    d = setTimeout(() => {
      setInput(e);
      console.log(e);
    }, 1000);
  }

 
  // const [url,setUrl]=useState()
  return (
    <>
      <div className="searchb">
        <input
          onChange={handle}
          className="search"
          type="text"
          placeholder="SEARCH"
        />
        <div className="searchh"> <NameCardList url={`https://api.themoviedb.org/3/search/movie?api_key=26ba5e77849587dbd7df199727859189&query=${input}`} rerender={input}/></div>
      </div>
    </>
  );
}

export default Search;
