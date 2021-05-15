import { useState, useEffect } from "react";
import NavItem from "./NavItem";

export default function NavBar() {
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
      <div className="navBar collapse-mobile">
        <NavItem
          to="/cook"
          className="nav-item nav-item-first"
          activeClassName="nav-item--active"
        >
          咖雞煮什麼
        </NavItem>
        <NavItem
          to="/news"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          最新消息
        </NavItem>
        <NavItem
          to="/shoppingguide"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          購物說明
        </NavItem>
        <NavItem
          to="/packagesubmission"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          投稿食材包
        </NavItem>
        <NavItem
          to="/kagiinfo"
          className="nav-item"
          activeClassName="nav-item--active"
        >
          認識咖雞
        </NavItem>
      </div>
    </div>
  );
}
