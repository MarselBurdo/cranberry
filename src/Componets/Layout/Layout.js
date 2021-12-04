import React from "react";
import { Layout as AntLayout } from "antd";
import Navigation from "../Navigation/Navigation";
import { Route, Routes } from "react-router";
import Home from "../Home/Home";
import Goods from "../Goods/Goods";
import "./Layout.scss";
import Login from "../Login/Login";
import AddForm from "../Goods/AddForm/AddForm";

const { Header, Footer, Sider, Content } = AntLayout;

export default function Layout({ children }) {
  return (
    <AntLayout>
      <Header>Crabbery Shop</Header>
      <AntLayout>
        <Sider>
          <Navigation />
        </Sider>
        <Content>
          <>
            <Routes>
              <Route path="/" exact element={<Home />} />

              <Route path="/goods" element={<Goods />} />
              <Route path="/goods/add" element={<AddForm />} />

              <Route path="/login" element={<Login />} />
              <Route path="/logout">logout</Route>
            </Routes>
          </>
        </Content>
      </AntLayout>
      <Footer>Footer</Footer>
    </AntLayout>
  );
}
