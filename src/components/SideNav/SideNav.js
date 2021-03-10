import * as React from "react";
import { Navigation } from "baseui/side-navigation";
import { withRouter } from "react-router";
import "./SideNav.css";
import auxinLogo from "../../media/AuxinLogoGrey.png";
import { Link } from "react-router-dom";

const SideNav = ({ history, location }) => {
  const handleActive = pathname => {
    if (pathname === "/") {
      return "/Home";
    }
    return pathname;
  };
  return (
    <div className="nav-container">
      <Link to="/">
        <img className="logo" src={auxinLogo}></img>
      </Link>

      <Navigation
        items={[
          {
            title: "Home",
            itemId: "/Home"
          },
          {
            title: "Creator Studio",
            itemId: "/Snipping"
          },
          {
            title: "Post",
            itemId: "/Post"
          }
        ]}
        activeItemId={handleActive(location.pathname)}
        onChange={({ event, item }) => {
          event.preventDefault();
          history.push(item.itemId);
        }}
        overrides={{
          NavItem: {
            style: ({ $active, $theme }) => {
              if (!$active)
                return {
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "rgba(255,255,255,0.60)",

                  ":hover": {
                    backgroundColor: $theme.colors.mono800,
                    color: "rgba(255,255,255,0.87)",
                    boxShadow: $theme.lighting.shadow400
                  }
                };
              return {
                color: "rgba(255,255,255,0.87)",
                fontSize: "18px",
                fontWeight: "500",
                backgroundColor: $theme.colors.mono700,
                borderLeftColor: "#85d6af",
                backgroundImage: "",
                boxShadow: $theme.lighting.shadow600
              };
            }
          }
        }}
      />
    </div>
  );
};

export default withRouter(SideNav);
