import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import { activeNavItemSet } from "../actions";

export default function NavItem(props) {
  const { children, to, className, activeClassName } = props;
  const { state, dispatch } = useContext(StoreContext);

  const onClick = () => {
    activeNavItemSet(dispatch, to);
  };

  return (
    <Link to={to} style={{textDecoration: 'none'}}>
      <div
        onClick={onClick}
        className={`
        	${className} 
        	${state.navBar.activeItem === to ? activeClassName : ""}`}
      >
        {children}
      </div>
    </Link>
  );
}
