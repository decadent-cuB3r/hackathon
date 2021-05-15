import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import { activeNavItemSet } from "../actions";
import NavBar from "../components/NavBar";
import { BagIcon, UserIcon } from "./icons";
import LOGO from "../images/KagiLogo.png"
import TITLE from "../images/KagiTitle.png"

function Header() {
  const { dispatch } = useContext(StoreContext);
  const onClickHeader = () => {
    activeNavItemSet(dispatch, "/");
  };
  return (
    <>
      <header className="header">
        <div className="header-wrap">
          <div className="header-logo-wrap" onClick={onClickHeader}>
            <Link to="/" className="header-logo">
              <img src= { LOGO } alt="logo" className="header-logoImg"/>
              <img src= { TITLE } alt="title" className="header-titleImg"/>
            </Link>
          </div>
          <NavBar />
          <div className="header-icons-wrap">
            <div>
              <Link to="/">
                <UserIcon className="header-userIcon" />
              </Link>              
            </div>

            <div>
              <Link to="/">
                <BagIcon className="header-bagIcon" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
