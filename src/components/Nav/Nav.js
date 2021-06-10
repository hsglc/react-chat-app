import { useHistory } from "react-router-dom";
import React from "react";

import { auth } from "../../firebase";

function Nav() {
  const history = useHistory();

  async function LogoutHandler() {
    await auth.signOut();
    history.push("/");
  }

  return (
    <nav className="nav-bar">
      <div className="logo-tab">React Chat</div>

      <button onClick={LogoutHandler} className="logout-tab">
        Logout
      </button>
    </nav>
  );
}

export default Nav;
