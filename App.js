/* eslint-disable react/jsx-no-target-blank */
import "./App.css";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";


function App() {
  return (
    <div>
      <div className="user-profile-container">
        <div className="user-profile">
          <h3 className="q7">RICARDO QUARESMA</h3>
          <p>FOOTBALL PLAYER - BEŞİKTAŞ</p>
        </div>
        <ul className="user-info">
          <li>
            <h3>10+</h3>
            <small>Teams</small>
          </li>
          <li>
            <h3>2.3M</h3>
            <small>Followers</small>
          </li>
          <li>
            <h3>38</h3>
            <small>Age</small>
          </li>
        </ul>
        <div className="follow-insta">
        <AiOutlineInstagram></AiOutlineInstagram>
        <a
          href="https://www.instagram.com/burakfevzikar/"
          target="_blank"
          className="follow-btn"
        >
          Follow
        </a>
        </div>
      </div>
    </div>
  );
}

export default App;
