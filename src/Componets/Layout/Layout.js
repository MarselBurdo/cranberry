import React from "react";
import { Layout as AntLayout } from "antd";
import Navigation from "../Navigation/Navigation";
import { Route, Routes } from "react-router";
import Home from "../Home/Home";
import Goods from "../Goods/Goods";
import "./Layout.scss";
import Login from "../Login/Login";
import AddForm from "../Goods/AddForm/AddForm";
import Registration from "../Registration/Registration";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../../redux/selectors";
import { logout } from "../../redux/actions";

const { Header, Footer, Sider, Content } = AntLayout;

export default function Layout({ children }) {
  const user = useSelector(getUserName);
  const dispatch = useDispatch();
  return (
    <AntLayout>
      <Header>Crabbery Shop</Header>
      <AntLayout>
        <Sider>
          {user && (
            <>
              <h3>{user}</h3>
              <button onClick={() => dispatch(logout())}>logout</button>
            </>
          )}
          <Navigation />
        </Sider>
        <Content>
          <>
            <Routes>
              <Route path="/" exact element={<Home />} />

              <Route path="/goods" element={<Goods />} />
              <Route path="/goods/add" element={<AddForm />} />
              {!user && (
                <>
                  <Route path="/login" element={<Login />} />
                  <Route path="/registration" element={<Registration />} />
                </>
              )}

              <Route path="/logout">logout</Route>
            </Routes>
          </>
        </Content>
      </AntLayout>
      <Footer>Footer</Footer>
    </AntLayout>
  );
}
