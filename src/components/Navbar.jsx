import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import HMLogo from "../images/HandMLogo.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  return (
    <div>
      <div className="login">
        <div className="loginSet">
          <FontAwesomeIcon className="loginButtonIcon" icon={faUser} />
          <div className="loginButtonText">Log in</div>
        </div>
      </div>
      <div className="HMLogoLocation">
        <img className="HMLogo" alt="HMLogo" src={HMLogo} />
      </div>
      <div className="menuArea">
        <ul className="menuList">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="searchSet">
          <FontAwesomeIcon className="searchIcon" icon={faSearch} />
          <input className="searchText" type="text" defaultValue="검색" />
        </div>
      </div>
    </div>
  );
}
