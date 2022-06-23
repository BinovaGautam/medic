import React,{ useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import {IItem as IMenuItem} from "../../menu-items";

const SidebarMenuItem = ({ Icon, title, children, type }: IMenuItem) => {
  const isCollapse = type === "collapse";
  const isItem = type === "item";
  const hasChildren = children && children.length;
  const [toggle, setToggle] = useState<boolean>(
    (hasChildren && !isCollapse) || false
  );
  const [active, setActive] = useState<boolean>(false);

  const onClick = () => {
    if (isCollapse) {
      setToggle(!toggle);
      setActive(!toggle);
    }
  };

  return (
    <div className="sidebar__menu">
      <div
        onClick={onClick}
        className={`sidebar__menu-content ${
          type === "group"
            ? "group-menu"
            : type === "collapse"
            ? "menu-collapse"
            : "menu-item"
        } ${active && "active-menu"}`}
      >
        {Icon ? (
          <Icon className="sidebar__menu-icon" />
        ) : (
          <span className="sidebar__menu-padding"></span>
        )}
        <span className="sidebar__menu-text">{title}</span>
        {isCollapse && (
          <IoIosArrowDown
            className={`sidebar__menu-icon-2 ${toggle && "icon__up"}`}
          />
        )}
      </div>

      {toggle &&
        children?.map((item, index) => {
          if (item.url) {
            return (
              <Link to={item.url} className="sidebar__menu-link">
                <SidebarMenuItem key={index} {...item} />
              </Link>
            );
          } else {
            return <SidebarMenuItem key={index} {...item} />;
          }
        })}
    </div>
  );
};


export default SidebarMenuItem;