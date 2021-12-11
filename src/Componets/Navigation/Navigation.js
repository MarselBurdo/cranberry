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
        {menu.map((el) => {
          if (user && el.roles.includes("collaborator")) {
            return (
              <Menu.Item key={el.path}>
                <NavLink to={el.path}>{el.textLink}</NavLink>
              </Menu.Item>
            );
          } else if (!user && el.roles.includes("all")) {
            return (
              <Menu.Item key={el.path}>
                <NavLink to={el.path}>{el.textLink}</NavLink>
              </Menu.Item>
            );
          }
          return null;
        })}

        {/**
         * Default simple menu
         */}

        {/* {menu.map((el) => (
          {user && ( <Menu.Item key={el.path}>
            <NavLink to={el.path}>{el.textLink}</NavLink>
          </Menu.Item>)}
        ))} */}
      </Menu>
    </>
  );
}
