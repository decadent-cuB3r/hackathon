import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import { activeNavItemSet } from "../actions";

function Header() {
  const { dispatch } = useContext(StoreContext);
  const onClickHeader = () => {
    activeNavItemSet(dispatch, "/");
  };
  return (
    <>
      <header className="header">
        <div className="header__wrap">
          <div className="header-logo" onClick={onClickHeader}>
            <Link to="/"></Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
