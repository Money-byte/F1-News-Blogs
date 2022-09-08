import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHi7E8H6wHyyw/profile-displayphoto-shrink_800_800/0/1660469292937?e=1667433600&v=beta&t=gN44sgaWDNUpwLJU-yd7_lF4Tx2Mm0EzzSW-KQDKx1w"
          alt="My personal Photo From LinkedIn"
          width="236"
          height="236"
        />
        <p>
          Hi there I am Aprajit. I am a BSc. Cs 3rd year student and a F1 fan
          and also the winner in REACT js coding contest Tarrang 2022, therefore
          integrated my passion and work to make this project.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i>
            <a
              href="https://www.linkedin.com/in/aprajit-utkarsh-sharma-4271031b8/"
              className="sidebarIcon fab fa-linkedin"
            ></a>
          </i>
          <i>
            <a
              href="https://github.com/Money-byte"
              className="sidebarIcon fab fa-github-square"
            ></a>
          </i>
          <i>
            <a
              href="https://twitter.com/MoNeYisnoob007"
              className="sidebarIcon fab fa-twitter-square"
            ></a>
          </i>
          <i>
            <a
              href="https://www.instagram.com/aprajit._.sharma/"
              className="sidebarIcon fab fa-instagram-square"
            ></a>
          </i>
        </div>
      </div>
    </div>
  );
}
