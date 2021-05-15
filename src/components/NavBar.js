import { useState, useEffect} from "react";
import { Drawer } from "antd";
import NavItem from "./NavItem";
import HamMenu from "./HamMenu";

export default function NavBar() {
  const [isOnTouch, setIsOnTouch] = useState(false);
  const handleCloseDrawer = () => setIsOnTouch(false);

  useEffect(() => {
    const myNav = document.getElementById("myNav");
    const sticky = myNav.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
         myNav.classList.add("sticky");
      } else {
        myNav.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <div className="navBar-wrap" id="myNav">
      <div className="navBar-hr--line" />
      	<HamMenu
          onClick={() => setIsOnTouch(!isOnTouch)}
          isOnTouch={isOnTouch}
        />
        <div className="navBar collapse-mobile">
          <NavItem to="/cook" className="nav-item" activeClassName="nav-item--active">
            咖雞煮什麼
          </NavItem>
          <NavItem to="/news" className="nav-item" activeClassName="nav-item--active">
            最新消息
          </NavItem>
          <NavItem to="/shoppingguide" className="nav-item" activeClassName="nav-item--active">
            購物說明
          </NavItem>
          <NavItem to="/packagesubmission" className="nav-item" activeClassName="nav-item--active">
            投稿食材包
          </NavItem>
          <NavItem to="/kagiinfo" className="nav-item" activeClassName="nav-item--active">
            認識咖雞
          </NavItem>
        </div>
            {/* <Drawer
                title=" "
                placement={"top"}
                closable={false}
                onClose={handleCloseDrawer}
                visible={isOnTouch}
                key={"top"}
                width={400}
                zIndex={99}
                bodyStyle={{ backgroundColor: "#FCFAF2" }}
                headerStyle={{ backgroundColor: "#FCFAF2", color: "#000" }}
            >
                <NavItem onClose={handleCloseDrawer} to="/cook" className="nav-item" activeClassName="nav-item--active">
                    咖雞煮什麼
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/news" className="nav-item" activeClassName="nav-item--active">
                    最新消息
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/shoppingguide" className="nav-item" activeClassName="nav-item--active">
                    購物說明
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/packagesubmission" className="nav-item" activeClassName="nav-item--active">
                    投稿食材包
                </NavItem>
                <NavItem onClose={handleCloseDrawer} to="/kagiinfo" className="nav-item" activeClassName="nav-item--active">
                    認識咖雞
                </NavItem>
            </Drawer> */}
    </div>
  );
}