import { NavLink } from "react-router-dom";

function Navigation() {
    return (
      <div className="navigation">
          <ul>
            <NavLink
              to="/"
              className={"nav-active"}
            >
                Home
            </NavLink>
            <NavLink
              to="/about"
              className={"nav-active"}
            >
                About
            </NavLink>
          </ul>
      </div>
    );
}

export default Navigation