import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
        <div className="nav"><div className="logo">NEWFLIX</div>
            <div className="nelement">
             
             
             
             
             
             
             
             
             
                <ul>
                   <Link to='/'> <li>HOME</li></Link>
                    <Link to='/movie'><li>MOVIES</li></Link>
                    <Link to='/tv'><li>TV SHOW</li></Link>
                    <Link to='/about'><li>ABOUT</li></Link>
                    <Link to='/search'><li>SEARCH</li></Link>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Navbar;