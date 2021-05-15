import { Link } from "react-router-dom"

function Header() {
  const { dispatch } = useContext(StoreContext);
  const onClickHeader = () => {
    pageContentsSet(dispatch, getJSON("/"));
    activeNavItemSet(dispatch, "/");
  };
  return(
    <>
      <header className="header">
        <div className="header__wrap">
          <div className="header-logo" onClick={onClickHeader}>
            <Link to="/">
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;