import { useState } from "react";
import NameCardList from "./RenderList";
function Movies(){
    const [urlmod,setUrlmod]=useState(1)
const APIKEY = `?api_key=26ba5e77849587dbd7df199727859189&page=${urlmod}`;
const BASEURL = "https://api.themoviedb.org/3/";
const API_URL = BASEURL + "trending/movie/day" + APIKEY;













    






    return(<div className="movies">
<div className="tr">
             <h1>TRENDING MOVIES</h1>
             </div>
             <NameCardList url={API_URL} rerender={urlmod}/>
             <div className="buttoncontainer">
    <button onClick={()=>{urlmod>1?setUrlmod(urlmod-1):setUrlmod(urlmod)}}>PREV</button>
        <h4>PAGE {urlmod}</h4>
                 <button onClick={()=>{setUrlmod(urlmod+1);}}>NEXT</button></div>
    
    </div>
    )
}
export default Movies;