import { Row, Col } from 'antd';
import { Layout } from "antd";
import AppHeader from "../components/Header";
import LoginForm from "../components/LoginForm";
import AppFooter from "../components/Footer";
import cookPot from "../images/HomeIntro/cookPot.png"

const { Header, Content, Footer } = Layout;

function Login() {
  return (
    <>
      <Layout className="layout-main">
        <Header className="layout-header">
          <AppHeader />
        </Header>
        <div className="layout-content">
          <Row className="container">
            <Col span={8} offset={3}>
              <img src={cookPot} alt="cookPot" class="login-img"/>
            </Col>
            <Col lg={13}>
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
