import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <header className="sidebare__header">
        <img src="/images/univ.png" alt="University"/>
        <img src="/images/qr.png" alt="QR code"/>
        <h1>California University</h1>
        <a href="#">ID: 1554898749848498798484654877</a>
        <button>Copy in buffer</button>
      </header>
      <address className="sidebare__address">
        <table>
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
        </table>
      </address>
      <footer className="sidebar__footer">
        <button>Edit Profile</button>
      </footer>
    </div>
  )
}

export default Sidebar;