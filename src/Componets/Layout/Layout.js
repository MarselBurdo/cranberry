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
import Dialog from "../Dialog/Dialog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";
import FunPage from "../FunPage/FunPage";

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
              <Route
                path="/goods"
                element={
                  <PrivateRoute>
                    <Goods />
                  </PrivateRoute>
                }
              />
              <Route
                path="/dialog"
                element={
                  <PrivateRoute>
                    <Dialog />
                  </PrivateRoute>
                }
              />
              <Route
                path="/goods/add"
                element={
                  <PrivateRoute>
                    <AddForm />
                  </PrivateRoute>
                }
              />
              <Route
                path="/fun"
                element={
                  <PrivateRoute>
                    <FunPage />
                  </PrivateRoute>
                }
              />

              {/* <PrivateRoute path="/goods">
                <Goods />
              </PrivateRoute> */}
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="/registration"
                element={
                  <PublicRoute>
                    <Registration />
                  </PublicRoute>
                }
              />

              <Route path="/logout">logout</Route>
              <Route path="*" element={<>No page 404 error</>} />
            </Routes>
          </>
        </Content>
      </AntLayout>
      <Footer>Footer</Footer>
    </AntLayout>
  );
}
