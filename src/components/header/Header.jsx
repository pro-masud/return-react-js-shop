import { useContext } from "react";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import MesContext from "../../context/MsgContext";

const Header = () => {
  const {count, setCount} = useContext(MesContext);
  return (
    <>
    <header>
        <div className="container header-container">
            <div className="header-left">
                <div className="logo">
                <Link to="/"><img src={logo} alt="" /></Link>
                </div>
            </div>
            <div className="counter">
              <h3>{count}</h3>
            </div>
            <div className="header-right">
                <ul className='menu'>
                <li><Link className="" to="/">Home</Link></li>
                <li><Link className="" to="/admin">Admin</Link></li>
                <li><Link className="" to="/about">About</Link></li>
                <li><Link className="" to="/blog">Blog</Link></li>
                <li><Link className="" to="/team">Team</Link></li>
                <li><Link className="" to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header
