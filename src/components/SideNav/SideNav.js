import * as React from "react";
import { Navigation } from "baseui/side-navigation";
import {withRouter} from 'react-router';
import "./SideNav.css"
import auxinLogo from "../../media/Auxin.png";

const SideNav = ({history,location}) => {
  const [activeItemId, setActiveItemId] = React.useState(
    "/Home"
  );

  const handleActive = (pathname) => {
    if (pathname === '/') {
        return "/Home"
    }
    return pathname
  }
  return (
    <div>
        <img className='logo' src={auxinLogo}></img>
    <Navigation
      items={[
        {
          title: "Home",
          itemId: "/Home",
        },{
          title: "Snipping",
          itemId: "/Snipping",
        },{
          title: "Post",
          itemId: "/Post",
        }
      ]}
      activeItemId={handleActive(location.pathname)}
      onChange={({ event,item }) => {
        event.preventDefault();
        history.push(item.itemId);
        }
      }
    />
    </div>
  );
}

export default withRouter(SideNav);