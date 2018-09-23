import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <header className="sidebar__header">
        <div>
          <img src="/images/univ.png" alt="University"/>
          <div>
            <img src="/images/qr.png" alt="QR code"/>
          </div>
          <button title="hide desription"><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
        <h1>California University</h1>
        <a href="#">ID: 1554898749848498798484654877</a>
        <button title="Copy info in buffer">Copy in buffer</button>
      </header>
      <address className="sidebar__address">
        <table>
          <tbody>
            <tr>
              <td>Geo Type:</td>
              <td>Goverment</td>
            </tr>
            <tr>
              <td>Short Geo:</td>
              <td>CA_University</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>United States, California LA, Sarigza Avenue 234, 44A</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td><a href="mailto:ca@university@gmail.com">ca@university@gmail.com</a></td>
            </tr>
            <tr>
              <td>Expire:</td>
              <td><time dateTime="2016-10-31">31 Oct 2016</time></td>
            </tr>
            <tr>
              <td>Privacy:</td>
              <td>Enable</td>
            </tr>
          </tbody>
        </table>
      </address>
      <footer className="sidebar__footer">
        <button title="Edit profile">Edit Profile</button>
      </footer>
    </div>
  )
}

export default Sidebar;