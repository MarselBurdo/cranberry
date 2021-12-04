import React from "react";
import { Menu } from "antd";
import { menu } from "../../constatns/menu";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Menu>
        {menu.map((el) => (
          <Menu.Item key={el.path}>
            <NavLink to={el.path}>{el.textLink}</NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
}
