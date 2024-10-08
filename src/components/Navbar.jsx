import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import HMLogo from "../images/HandMLogo.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Navbar({ authenticate, setAuthenticate }) {
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

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const logOut = () => {
    setAuthenticate(false);
    navigate("/");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div className="login" onClick={authenticate ? logOut : goToLogin}>
        <div className="loginSet">
          <FontAwesomeIcon className="loginButtonIcon" icon={faUser} />
          <div className="loginButtonText">
            {authenticate ? "Log out" : "Log in"}
          </div>
        </div>
      </div>
      <div className="HMLogoLocation">
        <img className="HMLogo" alt="HMLogo" src={HMLogo} onClick={goToHome} />
      </div>
      <div className="menuArea">
        <ul className="menuList">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="searchSet">
          <FontAwesomeIcon className="searchIcon" icon={faSearch} />
          <input
            className="searchText"
            type="text"
            placeholder="검색"
            onKeyPress={(event) => {
              search(event);
            }}
          />
        </div>
      </div>
    </div>
  );
}
