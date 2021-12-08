import React from "react";
import { Menu } from "antd";
import { menu } from "../../constatns/menu";
import { NavLink } from "react-router-dom";
import { getUserName } from "../../redux/selectors";
import { useSelector } from "react-redux";

export default function Navigation() {
  const user = useSelector(getUserName);
  return (
    <>
      <Menu>
        {user &&
          menu.map((el) => (
            <Menu.Item key={el.path}>
              <NavLink to={el.path}>{el.textLink}</NavLink>
            </Menu.Item>
          ))}
        {!user &&
          menu
            .filter((el) => el.path !== "/login" || el.path !== "registration")
            .map((el) => (
              <Menu.Item key={el.path}>
                <NavLink to={el.path}>{el.textLink}</NavLink>
              </Menu.Item>
            ))}
      </Menu>
    </>
  );
}
