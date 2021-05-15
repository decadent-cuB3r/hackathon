import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import { activeNavItemSet } from "../actions";
import NavBar from "../components/NavBar";

function Header() {
  const { dispatch } = useContext(StoreContext);
  const onClickHeader = () => {
    activeNavItemSet(dispatch, "/");
  };
  return (
    <>
      <header className="header">
        <div className="header-wrap">
          <div className="header-logo" onClick={onClickHeader}>
            <Link to="/"></Link>
          </div>
					<NavBar />
        </div>
      </header>
    </>
  );
}

export default Header;
