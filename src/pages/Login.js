import { Row, Col } from 'antd';
import { Layout } from "antd";
import AppHeader from "../components/Header";
import LoginForm from "../components/LoginForm";
import AppFooter from "../components/Footer";
import React from 'react';
import Lottie from 'react-lottie';
import cookMealJson from "../lottie/

const cookMeal = {
  loop: true,
  autoplay: true,
  animationData: cookMealJson,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const { Header } = Layout;

function Login() {
  return (
    <>
      <Layout className="layout-main">
        <Header className="layout-header">
          <AppHeader />
        </Header>
        <div className="layout-content">
          <Row className="container">
            <Col md={8} offset={2}>
              <Lottie
                options={cookMeal}
                width={380}
                height={320}
              />            
            </Col>
            <Col md={13} offset={1}>
              <LoginForm/>
            </Col>
          </Row>
        </div>
      </Layout>
      <AppFooter />
    </>
  );
}

export default Login;
